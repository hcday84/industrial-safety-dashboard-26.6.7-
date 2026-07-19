// 도서 표지 이미지 조회 — 교보 → 네이버 → 알라딘 → Google Books
const TTB_KEY      = process.env.ALADIN_TTB_KEY      || '';
const NAVER_ID     = process.env.NAVER_CLIENT_ID     || '';
const NAVER_SECRET = process.env.NAVER_CLIENT_SECRET || '';
const ALADIN_BASE  = 'https://www.aladin.co.kr/ttb/api/ItemSearch.aspx';
const GOOGLE_BOOKS = 'https://www.googleapis.com/books/v1/volumes';
const NAVER_BOOKS  = 'https://openapi.naver.com/v1/search/book.json';

const PUBLISHERS = [
  '에듀윌','시나공','길벗','성안당','예문사','일진사','세화','구민사','해커스',
  '이기적','수제비','크라운','영진','나합격','직8딴','벼락치기','찐합격','스마트',
  '해커스자격증','김영북스','삼원북스','박문각','나무와숲','세경북스','시대고시기획',
  '시대에듀','EBS','학지사','범문에듀케이션','군자출판사','고려의학','보험연수원',
  '법률미디어','기문사','광일문화사','레인보우북스','커뮤니케이션북스','교육과학사',
  '나눔의집','수의학교육출판부',
];

// ── 제목 핵심 토큰 추출 (검색 결과 검증용, 검색어로는 쓰지 않음) ──
// 자격증명(+필기/실기 구분)을 뽑아, 외부 API가 돌려준 후보 도서의 제목에
// 이 토큰이 실제로 포함돼 있는지 확인해서 "엉뚱한 도서 표지" 매칭을 걸러낸다.
function extractCoreToken(title) {
  let cleaned = title
    .replace(/^(20\d{2})\s+/, '')
    .replace(new RegExp(PUBLISHERS.join('|'), 'g'), '')
    .replace(/\+.*$/, '')
    .replace(/\(.*?\)/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();

  const words = cleaned.split(' ').filter(Boolean);

  const techIdx = words.findIndex(w => /기사|기능사|기술사|SQLD|빅데이터|정보보안/.test(w));
  if (techIdx !== -1) return words[techIdx];

  const proKeywords = [
    '공인중개사','세무사','공인회계사','감정평가사','변리사','법무사','공인노무사',
    '관세사','손해사정사','보험계리사','행정사','주택관리사','변호사',
    '사회복지사','청소년상담사','청소년지도사','평생교육사','한국어교원',
    '건축사','수의사','스포츠지도사','사회조사분석사',
    '간호사','물리치료사','작업치료사','방사선사','임상병리사','치과위생사',
    '치과기공사','안경사','언어재활사','의무기록사','위생사','영양사',
    '요양보호사','응급구조사','의사','치과의사','한의사','약사','한약사',
    '나무의사','보건교육사','정신건강임상심리사',
  ];
  const proWord = words.find(w => proKeywords.some(k => w.includes(k)));
  if (proWord) return proWord;

  return words[0] || title;
}

function normalize(s) {
  return String(s || '').replace(/<[^>]*>/g, '').replace(/\s+/g, '').toLowerCase();
}

// 자격증명 하나만으로는 같은 자격증의 다른 출판사·다른 판형 도서와 구분이 안 되므로,
// 제목에 드러나는 출판사명 / 필기·실기 구분도 함께 필수 토큰으로 뽑는다
function extractRequiredTokens(title) {
  const tokens = [extractCoreToken(title)];

  const examType = title.match(/필기|실기/);
  if (examType) tokens.push(examType[0]);

  const publisher = PUBLISHERS.find(p => title.includes(p));
  if (publisher) tokens.push(publisher);

  return tokens.filter(Boolean);
}

// 후보 도서 제목이 우리가 찾는 도서와 실제로 같은 자격증/출판사/필기·실기 상품을 가리키는지 검증
// candidatePublisher: API가 제목과 별도로 내려주는 출판사 메타데이터(있으면 함께 검사)
function titleMatches(queryTitle, candidateTitle, candidatePublisher) {
  if (!candidateTitle) return false;
  const candidate = normalize(candidateTitle);
  const candidatePub = normalize(candidatePublisher);
  const tokens = extractRequiredTokens(queryTitle).map(normalize);
  if (!tokens.length) return false;
  return tokens.every(t => candidate.includes(t) || (candidatePub && candidatePub.includes(t)));
}

// ── 1순위: 교보 CDN (ISBN → URL 직접 구성) ──
// 네이버 검색으로 ISBN13을 얻어 교보 CDN URL을 검증 후 반환
// 후보 도서 제목이 검색어와 실제로 대응하는지 확인한 뒤에만 채택한다
async function searchKyoboViaNaver(query) {
  if (!NAVER_ID || !NAVER_SECRET) return { kyoboUrl: null, naverImage: null };
  try {
    const params = new URLSearchParams({ query, display: 10, start: 1 });
    const res = await fetch(`${NAVER_BOOKS}?${params}`, {
      headers: {
        'X-Naver-Client-Id':     NAVER_ID,
        'X-Naver-Client-Secret': NAVER_SECRET,
      },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return { kyoboUrl: null, naverImage: null };
    const data = await res.json();
    const items = data?.items || [];

    for (const item of items) {
      if (!titleMatches(query, item.title, item.publisher)) continue;

      const naverImage = (item.image && !item.image.includes('noimage')) ? item.image : null;
      // isbn 필드: "ISBN10 ISBN13" 형태 — 13자리 추출
      const isbn13 = item.isbn?.split(' ').find(p => p.length === 13) || null;

      if (isbn13) {
        const kyoboUrl = `https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/${isbn13}.jpg`;
        // HEAD 요청으로 실제 이미지 존재 여부 확인
        try {
          const check = await fetch(kyoboUrl, { method: 'HEAD', signal: AbortSignal.timeout(2500) });
          // Content-Length 0 또는 200 미만은 플레이스홀더로 간주
          const contentLength = parseInt(check.headers.get('content-length') || '0', 10);
          if (check.ok && contentLength > 1000) {
            return { kyoboUrl, naverImage };
          }
        } catch { /* HEAD 실패 시 스킵 */ }
        if (naverImage) return { kyoboUrl: null, naverImage };
      } else if (naverImage) {
        return { kyoboUrl: null, naverImage };
      }
    }
    return { kyoboUrl: null, naverImage: null };
  } catch { return { kyoboUrl: null, naverImage: null }; }
}

// ── 3순위: 알라딘 ────────────────────────────
// 후보 제목이 검색어와 대응하는 첫 항목만 채택
async function searchAladin(query) {
  if (!TTB_KEY) return null;
  try {
    const params = new URLSearchParams({
      TTBKey: TTB_KEY, Query: query, QueryType: 'Title',
      MaxResults: 5, start: 1, SearchTarget: 'Book',
      output: 'js', Version: '20131101',
    });
    const res = await fetch(`${ALADIN_BASE}?${params}`, { signal: AbortSignal.timeout(4000) });
    const data = await res.json();
    const items = data?.item || [];
    const match = items.find(i => i.cover && !i.cover.includes('noimg') && titleMatches(query, i.title));
    return match ? match.cover : null;
  } catch { return null; }
}

// ── 4순위: Google Books ───────────────────────
// 후보 제목이 검색어와 대응하는 첫 항목만 채택
async function searchGoogleBooks(query) {
  try {
    const params = new URLSearchParams({
      q: query, langRestrict: 'ko', maxResults: 5, printType: 'books',
    });
    const res = await fetch(`${GOOGLE_BOOKS}?${params}`, { signal: AbortSignal.timeout(4000) });
    const data = await res.json();
    const items = data?.items || [];
    for (const item of items) {
      if (!titleMatches(query, item.volumeInfo?.title)) continue;
      const links = item.volumeInfo?.imageLinks;
      if (links?.thumbnail) {
        return links.thumbnail.replace('zoom=1', 'zoom=2').replace('http://', 'https://');
      }
    }
    return null;
  } catch { return null; }
}

// ── 핸들러 ───────────────────────────────────
// 검색어는 항상 전체 제목만 사용한다 (자격증명만 남긴 짧은 키워드로 재시도하면
// 여러 도서가 동일한 인기 검색결과로 수렴해 서로 다른 도서인데 같은 표지가
// 붙는 문제가 있어 제거함 — 대신 각 후보의 제목 검증으로 정확도를 높인다)
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=3600');

  const { title } = req.query;
  if (!title) return res.status(400).json({ imageUrl: null });

  try {
    let imageUrl = null;

    // 1·2순위: 교보(ISBN 검증) → 네이버 이미지
    const { kyoboUrl, naverImage } = await searchKyoboViaNaver(title);
    imageUrl = kyoboUrl || naverImage;

    // 3순위: 알라딘
    if (!imageUrl) imageUrl = await searchAladin(title);

    // 4순위: Google Books
    if (!imageUrl) imageUrl = await searchGoogleBooks(title);

    res.status(200).json({ imageUrl: imageUrl || null });
  } catch (e) {
    res.status(500).json({ imageUrl: null });
  }
}
