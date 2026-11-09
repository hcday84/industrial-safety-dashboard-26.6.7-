// 자격증별 베스트 5 · 추천 5 주간 갱신 (매주 목요일 실행용)
//
//   node scripts/refresh-rankings.js            → books_data.js 갱신 + reports/rankings-YYYY-MM-DD.md
//   node scripts/refresh-rankings.js --dry-run  → 리포트만 작성(books_data.js는 그대로)
//
// 1) REAL_BOOKS의 모든 도서를 교보문고 검색(ISBN)으로 조회해 rating(10점 만점 → 5점 만점)·reviews(리뷰 수)를 실제 값으로 바꾼다.
//    교보에 리뷰가 없으면 rating·reviews를 지운다. 조회에 실패한 책은 기존 값을 그대로 둔다.
// 2) 자격증명을 교보 검색 '판매량순'(ra=qntt, 상위 80권)으로 조회해 등록 도서의 판매 순위를 구한다.
// 3) 자격증마다 다시 순위를 매긴다(품절·절판 도서는 맨 뒤).
//      베스트 5 = 교보 판매량 순위(리뷰가 없어도 반영, 순위 밖이면 리뷰 수로) · 추천 5 = 나머지 중 평점 → 리뷰 수 내림차순 · 그 외는 태그 없음
//    동점이면 기존 줄 순서를 유지한다. 줄도 이 순서로 다시 놓아 '// 베스트셀러 5' · '// 추천수험서 5' 주석과 맞춘다.
//    등록된 도서끼리 순서만 바꾸며, 판매 상위라도 미등록 도서는 추가하지 않는다.
// 가격·판매상태·후속판은 scripts/check-books.js(월 1회)가 담당한다.
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const BOOKS_FILE = path.join(ROOT, 'books_data.js');
const DRY_RUN = process.argv.includes('--dry-run');
const CONCURRENCY = 6;

// 교보 검색결과 HTML → ISBN별 { rating, reviews } (종이책만)
function parseReviews(html) {
  const out = new Map();
  for (const raw of html.split('<li class="prod_item"').slice(1)) {
    const p = raw.replace(/<!--[\s\S]*?-->/g, '');
    if ((p.match(/data-code="(\w+)"/) || [])[1] !== 'KOR') continue;
    const isbn = (p.match(/data-bid="(\d+)"/) || [])[1];
    const score = (p.match(/class="review_klover_text[^"]*">([\d.]+)</) || [])[1];
    const count = (p.match(/class="review_desc">\((\d[\d,]*)\)/) || [])[1];
    if (isbn) out.set(isbn, score && count ? { rating: Math.round(+score * 5) / 10, reviews: +count.replace(/,/g, '') } : null);
  }
  return out;
}

async function lookup(isbn) {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const r = await fetch('https://search.kyobobook.co.kr/search?keyword=' + isbn, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (r.ok) {
        const m = parseReviews(await r.text());
        return m.has(isbn) ? { found: true, review: m.get(isbn) } : { found: false };
      }
    } catch (e) { /* 재시도 */ }
    await new Promise(res => setTimeout(res, 1500 * (attempt + 1)));
  }
  return null; // 네트워크 실패 — 기존 값 유지
}

// 자격증명 판매량순 검색 → ISBN별 판매 순위(0부터). 실패하면 null
async function salesRank(keyword) {
  const rank = new Map();
  for (const page of [1, 2]) {
    let html = null;
    for (let attempt = 0; attempt < 3 && html === null; attempt++) {
      try {
        const r = await fetch('https://search.kyobobook.co.kr/search?keyword=' + encodeURIComponent(keyword) + '&ra=qntt&len=40&page=' + page, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        if (r.ok) html = await r.text();
      } catch (e) { /* 재시도 */ }
      if (html === null) await new Promise(res => setTimeout(res, 1500 * (attempt + 1)));
    }
    if (html === null) return page === 1 ? null : rank;
    for (const isbn of parseReviews(html).keys()) if (!rank.has(isbn)) rank.set(isbn, rank.size);
  }
  return rank;
}

async function pool(items, fn) {
  const q = items.slice();
  await Promise.all(Array.from({ length: CONCURRENCY }, async () => { while (q.length) await fn(q.shift()); }));
}

const lineIsbn = line => (line.match(/isbn: '(\d{13})'/) || line.match(/pdt\/(97[89]\d{10})\.jpg/) || [])[1];
const num = (line, key) => +((line.match(new RegExp(` ${key}: ([\\d.]+),`)) || [])[1] || 0);
const titleOf = line => (line.match(/title: '((?:[^'\\]|\\.)*)'/) || [])[1] || '';

(async () => {
  const src = fs.readFileSync(BOOKS_FILE, 'utf8');
  const lines = src.split('\n');

  // 자격증 블록과 도서 줄 위치 수집
  const certs = [];
  for (let i = 0; i < lines.length; i++) {
    const head = lines[i].match(/^  '([^']+)': \[/);
    if (head) certs.push({ name: head[1], rows: [] });
    else if (certs.length && /^\s*\{ title: '/.test(lines[i])) certs[certs.length - 1].rows.push(i);
  }

  // 1) 평점·리뷰 수 조회
  const isbns = [...new Set(certs.flatMap(c => c.rows.map(i => lineIsbn(lines[i]))).filter(Boolean))];
  const reviews = new Map();
  let failed = 0, done = 0;
  await pool(isbns, async isbn => {
    const res = await lookup(isbn);
    if (res === null) failed++;
    else if (res.found) reviews.set(isbn, res.review);
    if (++done % 300 === 0) console.log(`${done}/${isbns.length}`);
  });

  let reviewUpdated = 0;
  for (const c of certs) for (const i of c.rows) {
    const isbn = lineIsbn(lines[i]);
    if (!reviews.has(isbn)) continue;
    const r = reviews.get(isbn);
    let l = lines[i].replace(/ rating: [\d.]+,/, '').replace(/ reviews: \d+,/, '');
    if (r) l = l.replace(/ tags: \[/, ` rating: ${r.rating}, reviews: ${r.reviews}, tags: [`);
    if (l !== lines[i]) { lines[i] = l; reviewUpdated++; }
  }

  // 2) 자격증별 교보 판매량 순위
  const ranks = new Map();
  let rankFailed = 0;
  await pool(certs.filter(c => c.rows.length), async c => {
    const r = await salesRank(c.name);
    if (r) ranks.set(c.name, r); else rankFailed++;
  });

  // 3) 자격증별 재순위 · 태그 · 줄 순서
  const changes = [];
  let ranked = 0;
  for (const c of certs) {
    const rank = ranks.get(c.name) || new Map();
    const books = c.rows.map((i, order) => {
      const line = lines[i];
      const sales = rank.has(lineIsbn(line)) ? rank.get(lineIsbn(line)) : Infinity;
      if (sales !== Infinity) ranked++;
      return { line, order, sales, soldOut: / saleStatus: '/.test(line), rating: num(line, 'rating'), reviews: num(line, 'reviews'),
        before: (line.match(/tags: \[([^\]]*)\]/) || [])[1] || '' };
    });
    const avail = b => (b.soldOut ? 1 : 0);
    const bySales = (a, b) => (a.sales === b.sales ? 0 : a.sales < b.sales ? -1 : 1);
    const best = [...books].sort((a, b) => avail(a) - avail(b) || bySales(a, b) || b.reviews - a.reviews || a.order - b.order).slice(0, 5);
    const rest = books.filter(b => !best.includes(b))
      .sort((a, b) => avail(a) - avail(b) || b.rating - a.rating || b.reviews - a.reviews || a.order - b.order);
    const rec = rest.slice(0, 5);
    const ordered = [...best, ...rest];

    ordered.forEach((b, k) => {
      const tag = best.includes(b) ? `'베스트'` : rec.includes(b) ? `'추천'` : '';
      lines[c.rows[k]] = b.line.replace(/tags: \[[^\]]*\]/, `tags: [${tag}]`);
      if (b.before !== tag) changes.push({ cert: c.name, title: titleOf(b.line), from: b.before.replace(/'/g, '') || '-', to: tag.replace(/'/g, '') || '-' });
    });
  }

  const out = lines.join('\n');
  if (out !== src && !DRY_RUN) {
    new Function(out + ';return REAL_BOOKS')(); // 문법 확인
    fs.writeFileSync(BOOKS_FILE, out);
  }

  const today = new Date().toISOString().slice(0, 10);
  const touched = new Set(changes.map(c => c.cert));
  const md = [
    `# 베스트·추천 주간 갱신 (${today})${DRY_RUN ? ' — dry-run' : ''}`, '',
    `- 자격증 ${certs.length}개 · 조회 도서 ${isbns.length}권(ISBN 기준) · 평점·리뷰 갱신 ${reviewUpdated}줄 · 태그 변경 ${changes.length}줄(자격증 ${touched.size}개) · 판매순위 확인 ${ranked}줄 · 조회 실패 ${failed} · 판매순위 조회 실패 ${rankFailed}개 자격증`, '',
    `## 태그 변경 (${changes.length})`, '', '| 자격증 | 도서 | 변경 |', '|---|---|---|',
    ...changes.map(c => `| ${c.cert} | ${c.title} | ${c.from} → ${c.to} |`), '',
  ].join('\n');
  const reportDir = path.join(ROOT, 'reports');
  fs.mkdirSync(reportDir, { recursive: true });
  const reportPath = path.join(reportDir, `rankings-${today}.md`);
  fs.writeFileSync(reportPath, md);
  console.log(md.split('\n')[2]);
  console.log('리포트:', reportPath);
})();
