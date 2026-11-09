// 판매 상위 미등록 신간 주간 등록 (매주 화요일 실행용 — 목요일 refresh-rankings.js 전에)
//
//   node scripts/add-new-books.js            → books_data.js에 추가 + reports/new-books-YYYY-MM-DD.md
//   node scripts/add-new-books.js --dry-run  → 리포트만 작성(books_data.js는 그대로)
//
// 자격증명을 교보 검색 '판매량순'(ra=qntt)으로 조회해 종이책 상위 20위 안에서 아래 조건을 모두 만족하는 책을
// 그 자격증 목록 끝에 tags: []로 추가한다(베스트·추천 태그는 목요일 refresh-rankings.js가 판매량·평점으로 붙인다).
//   - 판매중(001)·예약판매(008)
//   - 제목에 자격증명이 들어 있음(공백·가운뎃점 무시) — 다른 자격증 교재가 섞이지 않게(사용자 규칙)
//     바로 앞에 한글이 붙어 있으면 다른 자격증으로 본다('실내건축기사' ≠ 건축기사, '건설기계정비산업기사' ≠ 기계정비산업기사)
//   - 제목에 수험서 단어(필기·실기·기출·문제·합격…)가 있음 — '서양 건축사' 같은 일반 도서 제외
//   - 제목 연도가 있으면 올해 이후 판만(2022·2023년판 등 지난 판 제외)
//   - 그 자격증에 같은 ISBN이 없음
//   - 이미 등록된 책의 다른 연도판이 아님(같은 출판사 + 연도 뺀 제목 동일) → 추가하지 않고 리포트에만
//     남긴다. 후속판 교체는 scripts/check-books.js(매달 1일)가 담당.
//   - 자격증당 주 최대 2권(판매 순위 높은 순)
// 표지가 교보 플레이스홀더(34,150바이트)면 imageUrl은 null. hasEbook은 확인 전이라 넣지 않는다.
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const BOOKS_FILE = path.join(ROOT, 'books_data.js');
const DRY_RUN = process.argv.includes('--dry-run');
const CONCURRENCY = 6;
const TOP_N = 20;
const MAX_PER_CERT = 2;
const PLACEHOLDER_BYTES = 34150;

const dec = s => s.replace(/&amp;/g, '&').replace(/&#40;/g, '(').replace(/&#41;/g, ')').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ');
const norm = s => s.replace(/20\d\d년?(판)?/g, '').replace(/[\s·・ㆍ,.\-()[\]&+/!:~'"]/g, '');
const compact = s => s.replace(/[\s·・ㆍ]/g, '');
const EXAM_WORDS = /필기|실기|기출|문제|시험|합격|완성|요약|모의|핵심|이론|과년도|국시|국가고시|[12]차|단기|CBT|면접|대비|한권|총정리|끝장|수험|마스터|적중|예상|기본서|특강|Win-Q|공략|노트|강의|작업형|필답형/i;
// 3글자 이하 자격증명은 뒤도 막는다('의사' ≠ '의사소통능력')
const certPattern = name => new RegExp('(^|[^가-힣])' + compact(name).split('').map(ch => ch.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('[\\s·・ㆍ]*') + (compact(name).length <= 3 ? '(?![가-힣])' : ''));
const esc = s =>s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");

// 교보 검색결과 HTML → 종이책(KOR) 상품 목록(검색 순서대로)
function parseSearch(html) {
  const out = [];
  for (const raw of html.split('<li class="prod_item"').slice(1)) {
    const p = raw.replace(/<!--[\s\S]*?-->/g, '');
    const g = re => (p.match(re) || [])[1] || null;
    if (g(/data-code="(\w+)"/) !== 'KOR') continue;
    const num = s => s ? +s.replace(/[^\d]/g, '') : null;
    const pub = p.match(/class="prod_publish">\s*<a[^>]*>([^<]+)<\/a>/);
    const authorBox = (p.split('prod_author_group')[1] || '').split('auto_overflow_footer')[0];
    const score = g(/class="review_klover_text[^"]*">([\d.]+)</);
    const count = g(/class="review_desc">\((\d[\d,]*)\)/);
    out.push({
      pid: g(/data-pid="(S\d+)"/),
      isbn: g(/data-bid="(\d+)"/),
      status: g(/data-cdtn-code="(\d+)"/),
      title: dec(g(/data-name="([^"]*)"/) || '').trim(),
      author: [...authorBox.matchAll(/class="author[^"]*">([^<]+)<\/a>/g)].map(m => dec(m[1].trim())).join(', '),
      publisher: pub ? dec(pub[1].trim()) : '',
      price: num(g(/<span class="price">\s*<span class="val">([\d,]+)<\/span>/)),
      orig: num(g(/<span class="price_normal">[\s\S]*?<s class="val">([\d,]+)/)),
      pct: g(/<span class="percent">([^<]+)<\/span>/),
      rating: score && count ? Math.round(+score * 5) / 10 : null,
      reviews: score && count ? +count.replace(/,/g, '') : null,
    });
  }
  return out;
}

async function salesTop(keyword) {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const r = await fetch('https://search.kyobobook.co.kr/search?keyword=' + encodeURIComponent(keyword) + '&ra=qntt&len=40', { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (r.ok) return parseSearch(await r.text()).slice(0, TOP_N);
    } catch (e) { /* 재시도 */ }
    await new Promise(res => setTimeout(res, 1500 * (attempt + 1)));
  }
  return null; // 네트워크 실패 — 리포트에 "조회 실패"로 남김
}

async function isPlaceholder(isbn) {
  try {
    const r = await fetch(`https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/${isbn}.jpg`);
    return !r.ok || (await r.arrayBuffer()).byteLength === PLACEHOLDER_BYTES;
  } catch (e) { return true; }
}

async function pool(items, fn) {
  const q = items.slice();
  await Promise.all(Array.from({ length: CONCURRENCY }, async () => { while (q.length) await fn(q.shift()); }));
}

const lineIsbn = line => (line.match(/isbn: '(\d{13})'/) || line.match(/pdt\/(97[89]\d{10})\.jpg/) || [])[1];
const unq = s => s.replace(/\\(.)/g, '$1');
const field = (line, key) => unq((line.match(new RegExp(`${key}: '((?:[^'\\\\]|\\\\.)*)'`)) || [])[1] || '');

(async () => {
  const src = fs.readFileSync(BOOKS_FILE, 'utf8');
  const lines = src.split('\n');
  const thisYear = new Date().getFullYear();

  // 자격증 블록: 이름, 도서 줄, 닫는 줄 위치
  const certs = [];
  for (let i = 0; i < lines.length; i++) {
    const head = lines[i].match(/^  '([^']+)': \[/);
    if (head) certs.push({ name: head[1], rows: [], close: -1 });
    else if (certs.length && certs[certs.length - 1].close < 0) {
      if (/^\s*\{ title: '/.test(lines[i])) certs[certs.length - 1].rows.push(i);
      else if (/^  \],?\s*$/.test(lines[i])) certs[certs.length - 1].close = i;
    }
  }

  const added = [], editions = [];
  let failed = 0;
  await pool(certs.filter(c => c.close >= 0), async c => {
    const top = await salesTop(c.name);
    if (!top) { failed++; return; }
    const have = c.rows.map(i => ({ isbn: lineIsbn(lines[i]), title: field(lines[i], 'title'), publisher: field(lines[i], 'publisher') }));
    const picks = [];
    const certRe = certPattern(c.name);
    top.forEach((b, rank) => {
      if (picks.length >= MAX_PER_CERT || !/^97[89]\d{10}$/.test(b.isbn || '') || !b.pid || !b.price) return;
      if (!['001', '008'].includes(b.status) || !certRe.test(b.title) || !EXAM_WORDS.test(b.title)) return;
      const years = (b.title.match(/20\d\d/g) || []).map(Number);
      if (years.length && Math.max(...years) < thisYear) return;
      if (have.some(h => h.isbn === b.isbn)) return;
      const same = have.find(h => h.publisher === b.publisher && norm(h.title) === norm(b.title));
      if (same) { editions.push({ cert: c.name, rank: rank + 1, book: b, existing: same.title }); return; }
      picks.push({ cert: c, rank: rank + 1, book: b });
    });
    for (const p of picks) p.placeholder = await isPlaceholder(p.book.isbn);
    added.push(...picks);
  });

  // 자격증 블록 끝(닫는 줄 앞)에 추가 — 뒤쪽 블록부터 넣어 줄 번호가 밀리지 않게
  const byCert = new Map();
  for (const a of added) byCert.set(a.cert, [...(byCert.get(a.cert) || []), a]);
  for (const [c, list] of [...byCert].sort((x, y) => y[0].close - x[0].close)) {
    const newLines = list.sort((x, y) => x.rank - y.rank).map(({ book: b, placeholder }) => {
      const parts = [
        `title: '${esc(b.title)}'`, `author: '${esc(b.author)}'`, `publisher: '${esc(b.publisher)}'`,
        `price: ${b.price}`, `originalPrice: ${b.orig || b.price}`, `discount: '${(b.pct || '0%').trim()}'`,
        ...(b.rating ? [`rating: ${b.rating}`, `reviews: ${b.reviews}`] : []),
        `tags: []`, `isbn: '${b.isbn}'`, `imageUrl: ${placeholder ? 'null' : `KB('${b.isbn}')`}`,
        `pageUrl: 'https://product.kyobobook.co.kr/detail/${b.pid}'`,
      ];
      return `    { ${parts.join(', ')} },`;
    });
    lines.splice(c.close, 0, ...newLines);
  }

  const out = lines.join('\n');
  if (out !== src && !DRY_RUN) {
    new Function(out + ';return REAL_BOOKS')(); // 문법 확인
    fs.writeFileSync(BOOKS_FILE, out);
  }

  const today = new Date().toISOString().slice(0, 10);
  const sorted = added.sort((x, y) => x.cert.name.localeCompare(y.cert.name) || x.rank - y.rank);
  const md = [
    `# 신간 주간 등록 (${today})${DRY_RUN ? ' — dry-run' : ''}`, '',
    `- 자격증 ${certs.length}개 조회(판매량순 상위 ${TOP_N}) · 추가 ${added.length}권(자격증 ${byCert.size}개) · 다른 연도판(추가 안 함) ${editions.length} · 조회 실패 ${failed}`, '',
    `## 추가 (${added.length})`, '', '| 자격증 | 판매순위 | 도서 | 출판사 | 가격 | 표지 |', '|---|---|---|---|---|---|',
    ...sorted.map(a => `| ${a.cert.name} | ${a.rank} | ${a.book.title} (${a.book.isbn}) | ${a.book.publisher} | ${a.book.price} | ${a.placeholder ? '없음' : '있음'} |`), '',
    `## 다른 연도판 — 월간 점검의 후속판 교체 대상 (${editions.length})`, '', '| 자격증 | 판매순위 | 판매 상위 도서 | 등록된 도서 |', '|---|---|---|---|',
    ...editions.map(e => `| ${e.cert} | ${e.rank} | ${e.book.title} (${e.book.isbn}) | ${e.existing} |`), '',
  ].join('\n');
  const reportDir = path.join(ROOT, 'reports');
  fs.mkdirSync(reportDir, { recursive: true });
  const reportPath = path.join(reportDir, `new-books-${today}.md`);
  fs.writeFileSync(reportPath, md);
  console.log(md.split('\n')[2]);
  console.log('리포트:', reportPath);
})();
