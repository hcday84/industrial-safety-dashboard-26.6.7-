// 도서 표지 이미지 조회 — 교보 → 네이버 → 알라딘 → Google Books
const TTB_KEY      = process.env.ALADIN_TTB_KEY      || '';
const NAVER_ID     = process.env.NAVER_CLIENT_ID     || '';
const NAVER_SECRET = process.env.NAVER_CLIENT_SECRET || '';
const ALADIN_BASE  = 'https://www.aladin.co.kr/ttb/api/ItemSearch.aspx';
const GOOGLE_BOOKS = 'https://www.googleapis.com/books/v1/volumes';
const NAVER_BOOKS  = 'https://openapi.naver.com/v1/search/book.json';

// ── 1순위: 교보 CDN (ISBN → URL 직접 구성) ──
// 네이버 검색으로 ISBN13을 얻어 교보 CDN URL을 검증 후 반환
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
    return items.map(i => i.cover).find(u => u && !u.includes('noimg')) || null;
  } catch { return null; }
}

// ── 4순위: Google Books ───────────────────────
async function searchGoogleBooks(query) {
  try {
    const params = new URLSearchParams({
      q: query, langRestrict: 'ko', maxResults: 5, printType: 'books',
    });
    const res = await fetch(`${GOOGLE_BOOKS}?${params}`, { signal: AbortSignal.timeout(4000) });
    const data = await res.json();
    const items = data?.items || [];
    for (const item of items) {
      const links = item.volumeInfo?.imageLinks;
      if (links?.thumbnail) {
        return links.thumbnail.replace('zoom=1', 'zoom=2').replace('http://', 'https://');
      }
    }
    return null;
  } catch { return null; }
}

// ── 핵심 키워드 추출 ─────────────────────────
function extractKeywords(title) {
  const publishers = [
    '에듀윌','시나공','길벗','성안당','예문사','일진사','세화','구민사','해커스',
    '이기적','수제비','크라운','영진','나합격','직8딴','벼락치기','찐합격','스마트',
    '해커스자격증','김영북스','삼원북스','박문각','나무와숲','세경북스','시대고시기획',
    '시대에듀','EBS','학지사','범문에듀케이션','군자출판사','고려의학','보험연수원',
    '법률미디어','기문사','광일문화사','레인보우북스','커뮤니케이션북스','교육과학사',
    '나눔의집','수의학교육출판부',
  ];

  let cleaned = title
    .replace(/^(20\d{2})\s+/, '')
    .replace(new RegExp(publishers.join('|'), 'g'), '')
    .replace(/\+.*$/, '')
    .replace(/\(.*?\)/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();

  const words = cleaned.split(' ').filter(Boolean);

  const techIdx = words.findIndex(w => /기사|기능사|기술사|SQLD|빅데이터|정보보안/.test(w));
  if (techIdx !== -1) {
    const cert = words[techIdx];
    const level = words.slice(techIdx + 1).find(w => /필기|실기/.test(w));
    return level ? `${cert} ${level}` : cert;
  }

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
  if (proWord) {
    const round = words.find(w => /^[12]차$/.test(w));
    const subject = words.find(w =>
      /필기|실기|국시|법학|세법|회계|민법|노동|관세|부동산|간호|치위생|임상|방사선|보험/.test(w)
    );
    const extra = round || subject || '';
    return extra ? `${proWord} ${extra}` : proWord;
  }

  return words.slice(0, 3).join(' ');
}

// ── 핸들러 ───────────────────────────────────
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=3600');

  const { title } = req.query;
  if (!title) return res.status(400).json({ imageUrl: null });

  try {
    const keywords = extractKeywords(title);
    let imageUrl = null;

    // 1·2순위: 교보(ISBN 검증) → 네이버 이미지 — 전체 제목
    const { kyoboUrl, naverImage } = await searchKyoboViaNaver(title);
    imageUrl = kyoboUrl || naverImage;

    // 키워드로 재시도
    if (!imageUrl && keywords !== title) {
      const { kyoboUrl: ku2, naverImage: ni2 } = await searchKyoboViaNaver(keywords);
      imageUrl = ku2 || ni2;
    }

    // 3순위: 알라딘 (전체 제목)
    if (!imageUrl) imageUrl = await searchAladin(title);

    // 알라딘 키워드 재시도
    if (!imageUrl && keywords !== title) imageUrl = await searchAladin(keywords);

    // 4순위: Google Books (키워드 → 전체 제목)
    if (!imageUrl) imageUrl = await searchGoogleBooks(keywords);
    if (!imageUrl && keywords !== title) imageUrl = await searchGoogleBooks(title);

    res.status(200).json({ imageUrl: imageUrl || null });
  } catch (e) {
    res.status(500).json({ imageUrl: null });
  }
}
