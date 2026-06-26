// 알라딘 오픈 API — 도서 표지 이미지 조회
// TTBKey: 알라딘 오픈 API 키 (https://www.aladin.co.kr/ttb/wapi_info.aspx)
const TTB_KEY = process.env.ALADIN_TTB_KEY || '';
const ALADIN_BASE = 'http://www.aladin.co.kr/ttb/api/ItemSearch.aspx';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=3600');

  const { title } = req.query;
  if (!title) return res.status(400).json({ imageUrl: null });
  if (!TTB_KEY) return res.status(503).json({ imageUrl: null, error: 'API key not configured' });

  try {
    const params = new URLSearchParams({
      TTBKey: TTB_KEY,
      Query: title,
      QueryType: 'Title',
      MaxResults: 3,
      start: 1,
      SearchTarget: 'Book',
      output: 'js',
      Version: '20131101',
    });

    const apiRes = await fetch(`${ALADIN_BASE}?${params}`);
    const data = await apiRes.json();

    const items = data?.item || [];
    // 표지 이미지가 있는 첫 번째 항목 사용
    const imageUrl = items.map(i => i.cover).find(u => u && !u.includes('noimg')) || null;

    res.status(200).json({ imageUrl });
  } catch (e) {
    res.status(500).json({ imageUrl: null });
  }
}
