const NL_API_KEY = 'f21fff5db86e27ddd700b2a28d21b2aa8b9b9d7fadd8341ff76cae6f87af8390';
const NL_BASE = 'https://www.nl.go.kr/seoji/SearchApi.do';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=3600');

  const { title } = req.query;
  if (!title) return res.status(400).json({ imageUrl: null });

  try {
    const params = new URLSearchParams({
      cert_key: NL_API_KEY,
      result_style: 'json',
      page_no: 1,
      page_size: 5,
      title,
    });
    const apiRes = await fetch(`${NL_BASE}?${params}`);
    const data = await apiRes.json();

    const docs = data?.docs || [];
    const imageUrl = docs.map(d => d.TITLE_URL).find(u => u && u.trim()) || null;

    res.status(200).json({ imageUrl });
  } catch (e) {
    res.status(500).json({ imageUrl: null });
  }
}
