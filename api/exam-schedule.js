const API_KEY = process.env.GOV_API_KEY || '';
const BASE = 'https://apis.data.go.kr/B490007/qualExamSchd/getQualExamSchdList';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const { jmCd, implYy = '2026' } = req.query;
  if (!jmCd) return res.status(400).json({ error: 'jmCd is required' });

  const url = `${BASE}?serviceKey=${API_KEY}&numOfRows=20&pageNo=1&dataFormat=json&implYy=${implYy}&jmCd=${jmCd}`;

  try {
    const r = await fetch(url);
    const data = await r.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
