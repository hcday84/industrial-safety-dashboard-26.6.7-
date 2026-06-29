const API_KEY = process.env.GOV_API_KEY || '';
const BASE = 'https://api.odcloud.kr/api/3038404/v1/uddi:cde11ae6-35ca-47b8-98cb-ad71146c6fd9';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=3600');

  const { certName } = req.query;
  if (!certName) return res.status(400).json({ error: 'certName is required' });

  const params = new URLSearchParams({
    serviceKey: API_KEY,
    page: 1,
    perPage: 20,
    returnType: 'JSON',
  });
  params.append('cond[종목명::EQ]', certName);

  try {
    const r = await fetch(`${BASE}?${params}`);
    if (!r.ok) return res.status(502).json({ error: 'upstream error' });
    const json = await r.json();
    const data = json.data || [];
    if (!data.length) return res.status(200).json(null);

    const get = (항목) => data.find(d => d.항목 === 항목)?.내용 || '';
    res.status(200).json({
      overview: get('개요'),
      duties: get('수행직무'),
      career: get('진로 및 전망'),
      howToGet: get('취득방법'),
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
