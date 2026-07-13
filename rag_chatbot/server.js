require('dotenv').config();
const path = require('path');
const crypto = require('crypto');
const express = require('express');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const OpenAI = require('openai');

const MODEL_NAME = 'gpt-4o-mini';
const EMBEDDING_MODEL = 'text-embedding-3-small';
const EMBEDDING_BATCH_SIZE = 96;

const app = express();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 25 * 1024 * 1024 } });

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// 세션별 벡터 저장소 (서버 재시작 시 초기화됨)
const sessions = new Map();

function getSession(req) {
  const headerId = req.headers['x-session-id'];
  if (headerId && sessions.has(headerId)) {
    return { sessionId: headerId, session: sessions.get(headerId) };
  }
  const sessionId = crypto.randomUUID();
  const session = { chunks: [], files: [] };
  sessions.set(sessionId, session);
  return { sessionId, session };
}

function resolveApiKey(req) {
  return req.headers['x-api-key'] || process.env.OPENAI_API_KEY || '';
}

function splitText(text, chunkSize, chunkOverlap) {
  const cleaned = text.replace(/\s+/g, ' ').trim();
  if (!cleaned) return [];
  const chunks = [];
  let start = 0;
  while (start < cleaned.length) {
    const end = Math.min(start + chunkSize, cleaned.length);
    chunks.push(cleaned.slice(start, end));
    if (end === cleaned.length) break;
    start = end - chunkOverlap;
    if (start < 0) start = 0;
  }
  return chunks;
}

async function extractPageTexts(buffer) {
  const pages = [];
  await pdfParse(buffer, {
    pagerender: (pageData) =>
      pageData.getTextContent().then((textContent) => {
        const text = textContent.items.map((item) => item.str).join(' ');
        pages.push(text);
        return text;
      }),
  });
  return pages;
}

async function embedTexts(openai, texts) {
  const embeddings = [];
  for (let i = 0; i < texts.length; i += EMBEDDING_BATCH_SIZE) {
    const batch = texts.slice(i, i + EMBEDDING_BATCH_SIZE);
    const response = await openai.embeddings.create({ model: EMBEDDING_MODEL, input: batch });
    embeddings.push(...response.data.map((d) => d.embedding));
  }
  return embeddings;
}

function cosineSimilarity(a, b) {
  let dot = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB) || 1);
}

app.post('/api/upload', upload.array('files'), async (req, res) => {
  try {
    const { sessionId, session } = getSession(req);
    const apiKey = resolveApiKey(req);
    const chunkSize = Math.max(100, parseInt(req.body.chunkSize, 10) || 1000);
    const chunkOverlap = Math.max(0, parseInt(req.body.chunkOverlap, 10) || 150);

    if (!apiKey) return res.status(400).json({ error: 'OpenAI API Key가 필요합니다.' });
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'PDF 파일을 하나 이상 업로드해주세요.' });
    }

    const openai = new OpenAI({ apiKey });
    const newChunks = [];

    for (const file of req.files) {
      const pages = await extractPageTexts(file.buffer);
      pages.forEach((pageText, idx) => {
        const pieces = splitText(pageText, chunkSize, chunkOverlap);
        pieces.forEach((text) => {
          newChunks.push({ text, source: file.originalname, page: idx + 1 });
        });
      });
    }

    if (newChunks.length === 0) {
      return res.status(400).json({ error: 'PDF에서 텍스트를 추출하지 못했습니다.' });
    }

    const embeddings = await embedTexts(openai, newChunks.map((c) => c.text));
    newChunks.forEach((chunk, i) => {
      chunk.embedding = embeddings[i];
    });

    session.chunks = newChunks;
    session.files = req.files.map((f) => f.originalname);

    res.setHeader('X-Session-Id', sessionId);
    res.json({ sessionId, files: session.files, chunkCount: newChunks.length });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || '문서 처리 중 오류가 발생했습니다.' });
  }
});

app.post('/api/chat', async (req, res) => {
  try {
    const { sessionId, session } = getSession(req);
    const apiKey = resolveApiKey(req);
    const { message, topK } = req.body;

    if (!apiKey) return res.status(400).json({ error: 'OpenAI API Key가 필요합니다.' });
    if (!message) return res.status(400).json({ error: '질문을 입력해주세요.' });
    if (!session.chunks || session.chunks.length === 0) {
      return res.status(400).json({ error: '먼저 PDF를 업로드하고 문서 처리를 진행해주세요.' });
    }

    const openai = new OpenAI({ apiKey });
    const k = Math.min(10, Math.max(1, parseInt(topK, 10) || 4));

    const [queryEmbedding] = await embedTexts(openai, [message]);
    const scored = session.chunks
      .map((c) => ({ ...c, score: cosineSimilarity(c.embedding, queryEmbedding) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, k);

    const context = scored
      .map((c, i) => `[문서 ${i + 1} | ${c.source} p.${c.page}]\n${c.text}`)
      .join('\n\n');

    const systemPrompt =
      '당신은 업로드된 PDF 문서를 기반으로 답변하는 어시스턴트입니다. ' +
      '아래 제공된 문서 내용을 참고하여 질문에 답변하세요. ' +
      '문서에서 답을 찾을 수 없으면 모른다고 솔직히 답변하세요.\n\n' +
      `참고 문서:\n${context}`;

    const sourcesPayload = scored.map((c) => ({
      source: c.source,
      page: c.page,
      text: c.text.slice(0, 500),
    }));

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('X-Session-Id', sessionId);
    res.setHeader('Access-Control-Expose-Headers', 'X-Session-Id');
    res.write(`__SOURCES__${JSON.stringify(sourcesPayload)}__END__`);

    const stream = await openai.chat.completions.create({
      model: MODEL_NAME,
      stream: true,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message },
      ],
    });

    for await (const part of stream) {
      const token = part.choices?.[0]?.delta?.content || '';
      if (token) res.write(token);
    }
    res.end();
  } catch (err) {
    console.error(err);
    if (!res.headersSent) {
      res.status(500).json({ error: err.message || '답변 생성 중 오류가 발생했습니다.' });
    } else {
      res.end();
    }
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`PDF RAG 챗봇 서버 실행 중: http://localhost:${PORT}`);
});
