const state = {
  sessionId: null,
};

const el = {
  apiKey: document.getElementById('apiKey'),
  tavilyKey: document.getElementById('tavilyKey'),
  useWebSearch: document.getElementById('useWebSearch'),
  chunkSize: document.getElementById('chunkSize'),
  chunkSizeValue: document.getElementById('chunkSizeValue'),
  chunkOverlap: document.getElementById('chunkOverlap'),
  chunkOverlapValue: document.getElementById('chunkOverlapValue'),
  topK: document.getElementById('topK'),
  topKValue: document.getElementById('topKValue'),
  pdfFiles: document.getElementById('pdfFiles'),
  processBtn: document.getElementById('processBtn'),
  processStatus: document.getElementById('processStatus'),
  fileList: document.getElementById('fileList'),
  resetBtn: document.getElementById('resetBtn'),
  emptyState: document.getElementById('emptyState'),
  messages: document.getElementById('messages'),
  chatForm: document.getElementById('chatForm'),
  chatInput: document.getElementById('chatInput'),
  sendBtn: document.getElementById('sendBtn'),
};

el.chunkSize.addEventListener('input', () => {
  el.chunkSizeValue.textContent = el.chunkSize.value;
});
el.chunkOverlap.addEventListener('input', () => {
  el.chunkOverlapValue.textContent = el.chunkOverlap.value;
});
el.topK.addEventListener('input', () => {
  el.topKValue.textContent = el.topK.value;
});

function setStatus(message, type) {
  el.processStatus.textContent = message;
  el.processStatus.className = `status ${type || ''}`;
}

function authHeaders(extra) {
  const headers = { ...extra };
  if (el.apiKey.value) headers['X-Api-Key'] = el.apiKey.value;
  if (el.tavilyKey.value) headers['X-Tavily-Key'] = el.tavilyKey.value;
  if (state.sessionId) headers['X-Session-Id'] = state.sessionId;
  return headers;
}

el.processBtn.addEventListener('click', async () => {
  const files = el.pdfFiles.files;
  if (!el.apiKey.value) {
    setStatus('OpenAI API Key를 입력해주세요.', 'error');
    return;
  }
  if (!files || files.length === 0) {
    setStatus('PDF 파일을 하나 이상 업로드해주세요.', 'error');
    return;
  }

  const formData = new FormData();
  for (const file of files) formData.append('files', file);
  formData.append('chunkSize', el.chunkSize.value);
  formData.append('chunkOverlap', el.chunkOverlap.value);

  el.processBtn.disabled = true;
  setStatus('PDF를 읽고 임베딩을 생성하는 중...', '');

  try {
    const res = await fetch('/api/upload', {
      method: 'POST',
      headers: authHeaders(),
      body: formData,
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || '문서 처리에 실패했습니다.');

    state.sessionId = data.sessionId;
    el.fileList.innerHTML = '';
    data.files.forEach((name) => {
      const li = document.createElement('li');
      li.textContent = `- ${name}`;
      el.fileList.appendChild(li);
    });

    setStatus(`${data.files.length}개 파일 처리 완료 (조각 ${data.chunkCount}개)`, 'success');
    el.emptyState.style.display = 'none';
    el.messages.innerHTML = '';
  } catch (err) {
    setStatus(err.message, 'error');
  } finally {
    el.processBtn.disabled = false;
  }
});

el.resetBtn.addEventListener('click', () => {
  el.messages.innerHTML = '';
});

function addMessage(role, content) {
  const bubble = document.createElement('div');
  bubble.className = `message ${role}`;
  bubble.textContent = content;
  el.messages.appendChild(bubble);
  el.messages.scrollTop = el.messages.scrollHeight;
  return bubble;
}

function addSourcesBox(bubble, sources) {
  const toggle = document.createElement('button');
  toggle.className = 'sources-toggle';
  toggle.type = 'button';
  toggle.textContent = '🔍 검색된 문서 보기';

  const box = document.createElement('div');
  box.className = 'sources-box';

  sources.forEach((s, i) => {
    const item = document.createElement('div');
    item.className = 'source-item';
    const meta = document.createElement('div');
    meta.className = 'source-meta';
    meta.textContent = `문서 ${i + 1} — ${s.source} (p.${s.page})`;
    const text = document.createElement('div');
    text.className = 'source-text';
    text.textContent = s.text;
    item.appendChild(meta);
    item.appendChild(text);
    box.appendChild(item);
  });

  toggle.addEventListener('click', () => {
    box.classList.toggle('open');
  });

  bubble.appendChild(toggle);
  bubble.appendChild(box);
}

el.chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const message = el.chatInput.value.trim();
  if (!message) return;

  if (!el.apiKey.value) {
    alert('OpenAI API Key를 입력해주세요.');
    return;
  }
  if (!state.sessionId) {
    alert('먼저 PDF를 업로드하고 문서 처리를 진행해주세요.');
    return;
  }

  el.chatInput.value = '';
  el.sendBtn.disabled = true;
  addMessage('user', message);

  const answerBubble = addMessage('assistant', '');
  const textNode = document.createElement('span');
  answerBubble.appendChild(textNode);

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: authHeaders({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({ message, topK: el.topK.value }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.error || '답변 생성에 실패했습니다.');
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    let sourcesParsed = false;
    let answerText = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });

      if (!sourcesParsed) {
        const endIdx = buffer.indexOf('__END__');
        if (endIdx === -1) continue;
        const header = buffer.slice('__SOURCES__'.length, endIdx);
        let sources = [];
        try {
          sources = JSON.parse(header);
        } catch {
          sources = [];
        }
        if (sources.length > 0) addSourcesBox(answerBubble, sources);
        buffer = buffer.slice(endIdx + '__END__'.length);
        sourcesParsed = true;
      }

      answerText += buffer;
      textNode.textContent = answerText;
      buffer = '';
      el.messages.scrollTop = el.messages.scrollHeight;
    }
  } catch (err) {
    textNode.textContent = `오류: ${err.message}`;
  } finally {
    el.sendBtn.disabled = false;
  }
});

el.chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    el.chatForm.requestSubmit();
  }
});
