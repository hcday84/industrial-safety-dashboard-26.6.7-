const API_KEY = process.env.GOV_API_KEY || '';
const BASE = 'http://openapi.q-net.or.kr/api/service/rest/InquiryQualPassRateSVC/getList';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=3600');

  const { grdCd, certName, baseYY = '2023' } = req.query;
  if (!grdCd || !certName) return res.status(400).json({ error: 'grdCd and certName are required' });

  const url = `${BASE}?serviceKey=${API_KEY}&grdCd=${grdCd}&baseYY=${baseYY}&numOfRows=300&pageNo=1&_type=json`;

  try {
    const r = await fetch(url);
    const data = await r.json();
    const body = data?.response?.body;
    if (!body || body.totalCount === 0) {
      return res.status(200).json({ error: 'no_data', debug: data });
    }

    const raw = body.items?.item;
    const items = Array.isArray(raw) ? raw : (raw ? [raw] : []);

    // 종목명이 정확히 일치하는 행만 추출 (필기/실기 구분값은 신뢰하지 않고 합산)
    const matched = items.filter(it => it.jmFldNm === certName);
    if (matched.length === 0) {
      return res.status(200).json({ error: 'no_match' });
    }

    let recptCnt = 0;
    let passCnt = 0;
    for (const it of matched) {
      recptCnt += Number(it.recptNoCnt) || 0;
      passCnt  += Number(it.examPassCnt) || 0;
    }

    res.status(200).json({
      grdCd,
      baseYY,
      certName,
      recptCnt,
      passCnt,
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
