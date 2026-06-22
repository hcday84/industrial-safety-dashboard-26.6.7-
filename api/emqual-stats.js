const API_KEY = '688d62bca5f00144bd4be91139ca3297c2641d3c918f57e0a5e80ad59faece52';
const BASE = 'http://openapi.q-net.or.kr/api/service/rest/InquiryEmqualPassSVC/getList';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const { grdCd, baseYY = '2023' } = req.query;
  if (!grdCd) return res.status(400).json({ error: 'grdCd is required' });

  const url = `${BASE}?serviceKey=${API_KEY}&grdCd=${grdCd}&baseYY=${baseYY}&numOfRows=100&pageNo=1&_type=json`;

  try {
    const r = await fetch(url);
    const data = await r.json();
    const body = data?.response?.body;
    if (!body || body.totalCount === 0) {
      return res.status(200).json({ items: [], totalCount: 0 });
    }

    const raw = body.items?.item;
    const items = Array.isArray(raw) ? raw : (raw ? [raw] : []);

    // 응시자격별 접수자 합산 → 상위 Top5 + 기타로 요약
    const merged = {};
    for (const it of items) {
      const key = it.emqualDispNm;
      if (!merged[key]) {
        merged[key] = { label: key, recptCnt: 0, pilPassCnt: 0, silPassCnt: 0 };
      }
      merged[key].recptCnt   += it.recptCnt   || 0;
      merged[key].pilPassCnt += it.pilPassCnt || 0;
      merged[key].silPassCnt += it.silPassCnt || 0;
    }

    const sorted = Object.values(merged).sort((a, b) => b.recptCnt - a.recptCnt);
    const totalRecpt = sorted.reduce((s, x) => s + x.recptCnt, 0);
    const top5 = sorted.slice(0, 5).map(x => ({
      ...x,
      pct: totalRecpt > 0 ? Math.round((x.recptCnt / totalRecpt) * 100) : 0,
    }));
    const otherRecpt = sorted.slice(5).reduce((s, x) => s + x.recptCnt, 0);

    res.status(200).json({
      grdCd,
      baseYY,
      grdNm: items[0]?.grdNm || '',
      totalCount: body.totalCount,
      totalRecpt,
      top5,
      otherPct: totalRecpt > 0 ? Math.round((otherRecpt / totalRecpt) * 100) : 0,
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
