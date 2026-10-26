// 수험서 판매상태·가격·후속판 점검 (월 1회 실행용)
//
//   node scripts/check-books.js                 → reports/book-check-YYYY-MM-DD.md 리포트만 작성
//   node scripts/check-books.js --apply-prices  → 판매중 도서의 가격 변경분을 books_data.js에 반영
//   node scripts/check-books.js --apply-status  → 품절·절판 도서에 saleStatus 표시(재판매되면 해제)
//
// REAL_BOOKS의 모든 도서를 교보문고 검색(ISBN)으로 조회해 다음을 골라낸다.
//   1) 품절·절판·검색 안 됨  2) 가격 변경  3) 제목 연도의 다음 해 판(같은 출판사·시리즈) 출간
// 품절·절판 도서는 삭제하지 않고 saleStatus로 표시만 한다(2026-10-26 사용자 결정).
// 후속판 교체는 사람이 리포트를 보고 결정한다(자동 교체하지 않음).
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const BOOKS_FILE = path.join(ROOT, 'books_data.js');
const APPLY_PRICES = process.argv.includes('--apply-prices');
const APPLY_STATUS = process.argv.includes('--apply-status');
const CONCURRENCY = 6;
// 검색결과 data-cdtn-code는 상품상태 코드라 010(일시품절)도 나온다
const STATUS = { '001': '판매중', '002': '품절', '003': '절판', '008': '예약판매', '010': '품절' };
const ON_SALE = ['001', '008'];

const dec = s => s.replace(/&amp;/g, '&').replace(/&#40;/g, '(').replace(/&#41;/g, ')').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ');
const norm = s => s.replace(/20\d\d년?(판)?/g, '').replace(/[\s·・ㆍ,.\-()[\]&+/!:~'"]/g, '');

// 교보 검색결과 HTML → 종이책(KOR) 상품 목록
function parseSearch(html) {
  const out = [];
  for (const raw of html.split('<li class="prod_item"').slice(1)) {
    const p = raw.replace(/<!--[\s\S]*?-->/g, '');
    const g = re => (p.match(re) || [])[1] || null;
    if (g(/data-code="(\w+)"/) !== 'KOR') continue;
    const num = s => s ? +s.replace(/[^\d]/g, '') : null;
    const pub = p.match(/class="prod_publish">\s*<a[^>]*>([^<]+)<\/a>/);
    out.push({
      pid: g(/data-pid="(S\d+)"/),
      isbn: g(/data-bid="(\d+)"/),
      status: g(/data-cdtn-code="(\d+)"/),
      title: dec(g(/data-name="([^"]*)"/) || '').trim(),
      publisher: pub ? dec(pub[1].trim()) : '',
      price: num(g(/<span class="price">\s*<span class="val">([\d,]+)<\/span>/)),
      orig: num(g(/<span class="price_normal">[\s\S]*?<s class="val">([\d,]+)/)),
      pct: g(/<span class="percent">([^<]+)<\/span>/),
    });
  }
  return out;
}

async function search(keyword) {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const r = await fetch('https://search.kyobobook.co.kr/search?keyword=' + encodeURIComponent(keyword) + '&len=40', { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (r.ok) return parseSearch(await r.text());
    } catch (e) { /* 재시도 */ }
    await new Promise(res => setTimeout(res, 1500 * (attempt + 1)));
  }
  return null; // 네트워크 실패 — 리포트에 "조회 실패"로 남김
}

// 검색에 안 잡히는 책(POD 등)이나 상태 코드가 애매한 책은 상품 상세페이지의 판매상태로 확인한다
async function detailStatus(pageUrl) {
  if (!pageUrl || !pageUrl.includes('/detail/S')) return null;
  try {
    const r = await fetch(pageUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!r.ok) return null;
    const m = (await r.text()).match(/salePrice\\?":(\d+),\\?"cmdtCdtnCode\\?":\\?"(\d+)\\?",\\?"saleCdtnCode\\?":\\?"(\d+)/);
    if (!m) return null;
    return { price: +m[1], status: m[3] === '001' && m[2] === '010' ? '010' : m[3] };
  } catch (e) { return null; }
}

async function pool(items, fn) {
  const q = items.slice();
  await Promise.all(Array.from({ length: CONCURRENCY }, async () => { while (q.length) await fn(q.shift()); }));
}

(async () => {
  const src = fs.readFileSync(BOOKS_FILE, 'utf8');
  const REAL_BOOKS = new Function(src + ';return REAL_BOOKS')();
  const thisYear = new Date().getFullYear();

  // ISBN 단위로 묶기 (같은 책이 여러 자격증에 등록돼 있음)
  const byIsbn = new Map();
  for (const [cert, list] of Object.entries(REAL_BOOKS)) {
    for (const b of list) {
      const isbn = b.isbn || ((b.imageUrl || '').match(/pdt\/(97[89]\d{10})/) || [])[1];
      if (!isbn) continue;
      if (!byIsbn.has(isbn)) byIsbn.set(isbn, { isbn, book: b, certs: [] });
      byIsbn.get(isbn).certs.push(cert);
    }
  }

  const unavailable = [], priceChanged = [], successors = [], failed = [];
  const onSale = new Set();
  let done = 0;
  await pool([...byIsbn.values()], async entry => {
    const { isbn, book, certs } = entry;
    const res = await search(isbn);
    if (!res) { failed.push(entry); return; }
    let hit = res.find(x => x.isbn === isbn);
    if (!hit || !STATUS[hit.status]) {
      const d = await detailStatus(book.pageUrl);
      if (d) hit = { ...(hit || {}), ...d };
    }
    const status = hit ? (STATUS[hit.status] || `코드 ${hit.status}`) : '검색 안 됨';
    if (!hit || !ON_SALE.includes(hit.status)) unavailable.push({ ...entry, status });
    else {
      onSale.add(isbn);
      if (hit.price && book.price && hit.price !== book.price) priceChanged.push({ ...entry, hit });
    }

    // 후속판: 제목 연도가 올해 이하이면 다음 해 판을 찾는다
    const y = +((book.title.match(/(20\d\d)/) || [])[1] || 0);
    if (y && y <= thisYear) {
      const cands = await search(book.title.replace(String(y), String(y + 1)));
      const key = norm(book.title);
      const succ = (cands || []).find(c => c.isbn !== isbn && ['001', '008'].includes(c.status) &&
        c.title.includes(String(y + 1)) && c.publisher === book.publisher && norm(c.title) === key);
      if (succ) successors.push({ ...entry, succ });
    }
    if (++done % 200 === 0) console.log(`${done}/${byIsbn.size}`);
  });

  const lineIsbn = line => (line.match(/isbn: '(\d{13})'/) || line.match(/pdt\/(97[89]\d{10})\.jpg/) || [])[1];
  let out = src;

  // 가격 반영: 같은 ISBN·pageUrl 줄의 price/originalPrice/discount만 바꾼다
  let applied = 0;
  if (APPLY_PRICES && priceChanged.length) {
    for (const { isbn, book, hit } of priceChanged) {
      out = out.split('\n').map(line => {
        if (!line.includes(`'${isbn}'`) && !line.includes(`/${isbn}.jpg`)) return line;
        let l = line.replace(/price: \d+/, `price: ${hit.price}`);
        if (hit.orig) l = l.replace(/originalPrice: \d+/, `originalPrice: ${hit.orig}`);
        if (hit.pct) l = l.replace(/discount: '[^']*'/, `discount: '${hit.pct.trim()}'`);
        if (l !== line) applied++;
        return l;
      }).join('\n');
    }
  }

  // 판매상태 반영: 품절·절판은 saleStatus를 달고, 다시 판매중이 된 책은 떼어낸다.
  // "검색 안 됨"·"코드 N"은 상태가 확실하지 않아 건드리지 않는다(리포트로만 확인).
  let marked = 0, cleared = 0;
  if (APPLY_STATUS) {
    const mark = new Map(unavailable.filter(e => e.status === '품절' || e.status === '절판').map(e => [e.isbn, e.status]));
    out = out.split('\n').map(line => {
      const isbn = lineIsbn(line);
      if (!isbn || !line.includes('title:')) return line;
      const had = line.match(/ saleStatus: '[^']*',/);
      if (mark.has(isbn)) {
        const tag = ` saleStatus: '${mark.get(isbn)}',`;
        if (had && had[0] === tag) return line;
        marked++;
        return had ? line.replace(had[0], tag) : line.replace(/ pageUrl:/, `${tag} pageUrl:`);
      }
      if (had && onSale.has(isbn)) { cleared++; return line.replace(had[0], ''); }
      return line;
    }).join('\n');
  }

  if (out !== src) {
    new Function(out + ';return REAL_BOOKS')(); // 문법 확인
    fs.writeFileSync(BOOKS_FILE, out);
  }

  const today = new Date().toISOString().slice(0, 10);
  const row = e => `| ${e.book.title} | ${e.book.publisher} | ${e.certs.join(', ')} |`;
  const md = [
    `# 수험서 점검 리포트 (${today})`, '',
    `- 점검 도서: ${byIsbn.size}권(ISBN 기준) · 품절/절판/검색 안 됨 ${unavailable.length} · 가격 변경 ${priceChanged.length}${APPLY_PRICES ? `(반영 ${applied}줄)` : ''}${APPLY_STATUS ? ` · 판매상태 표시 ${marked}줄·해제 ${cleared}줄` : ''} · 후속판 ${successors.length} · 조회 실패 ${failed.length}`, '',
    `## 후속판 출간 (${successors.length})`, '', '| 현재 등록 | 출판사 | 자격증 | 후속판 | 후속판 상품코드 |', '|---|---|---|---|---|',
    ...successors.map(e => `| ${e.book.title} | ${e.book.publisher} | ${e.certs.join(', ')} | ${e.succ.title} (${e.succ.isbn}) | ${e.succ.pid} |`), '',
    `## 품절·절판·검색 안 됨 (${unavailable.length})`, '', '| 도서 | 출판사 | 자격증 | 상태 |', '|---|---|---|---|',
    ...unavailable.map(e => `${row(e)} ${e.status} |`), '',
    `## 가격 변경 (${priceChanged.length})`, '', '| 도서 | 출판사 | 자격증 | 등록가 → 현재가 |', '|---|---|---|---|',
    ...priceChanged.map(e => `${row(e)} ${e.book.price} → ${e.hit.price} |`), '',
    ...(failed.length ? [`## 조회 실패 (${failed.length})`, '', ...failed.map(e => `- ${e.book.title} (${e.isbn})`), ''] : []),
  ].join('\n');
  const reportDir = path.join(ROOT, 'reports');
  fs.mkdirSync(reportDir, { recursive: true });
  const reportPath = path.join(reportDir, `book-check-${today}.md`);
  fs.writeFileSync(reportPath, md);
  console.log(md.split('\n')[2]);
  console.log('리포트:', reportPath);
})();
