// 알라딘 오픈 API — 도서 표지 이미지 조회
const TTB_KEY = 'ttbhcday841606001';
const ALADIN_BASE = 'http://www.aladin.co.kr/ttb/api/ItemSearch.aspx';

async function searchAladin(query) {
  const params = new URLSearchParams({
    TTBKey: TTB_KEY,
    Query: query,
    QueryType: 'Title',
    MaxResults: 3,
    start: 1,
    SearchTarget: 'Book',
    output: 'js',
    Version: '20131101',
  });
  const res = await fetch(`${ALADIN_BASE}?${params}`);
  const data = await res.json();
  const items = data?.item || [];
  return items.map(i => i.cover).find(u => u && !u.includes('noimg')) || null;
}

// "2026 에듀윌 산업안전산업기사 필기 한권끝장" → "산업안전산업기사 필기"
function extractKeywords(title) {
  return title
    .replace(/^(20\d{2})\s+/, '')          // 앞 연도 제거
    .replace(/에듀윌|시나공|길벗|성안당|예문사|일진사|세화|구민사|해커스|이기적|수제비|크라운|영진|나합격|직8딴|벼락치기|찐합격|스마트|해커스자격증/g, '')
    .replace(/\+.*$/, '')                   // + 이후 제거
    .replace(/\s{2,}/g, ' ')
    .trim()
    .split(' ').slice(0, 4).join(' ');      // 최대 4단어
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=3600');

  const { title } = req.query;
  if (!title) return res.status(400).json({ imageUrl: null });

  try {
    // 1차: 전체 제목으로 검색
    let imageUrl = await searchAladin(title);

    // 2차: 핵심 키워드로 재검색
    if (!imageUrl) {
      const keywords = extractKeywords(title);
      if (keywords && keywords !== title) {
        imageUrl = await searchAladin(keywords);
      }
    }

    res.status(200).json({ imageUrl });
  } catch (e) {
    res.status(500).json({ imageUrl: null });
  }
}
