const API_KEY = '688d62bca5f00144bd4be91139ca3297c2641d3c918f57e0a5e80ad59faece52';
const BASE = 'http://openapi.q-net.or.kr/api/service/rest/InquiryStatSVC/getTotExamList';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const { baseYY = '2023' } = req.query;

  const url = `${BASE}?serviceKey=${API_KEY}&baseYY=${baseYY}&_type=json`;

  try {
    const r = await fetch(url);
    const data = await r.json();
    const item = data?.response?.body?.items?.item;
    if (!item || typeof item !== 'object') {
      return res.status(200).json({ error: 'no_data' });
    }

    // 필기: 최근 5회차 응시/합격 합산
    let pilRc = 0, pilPs = 0;
    for (let i = 1; i <= 5; i++) {
      pilRc += item[`pilrccnt${i}`] || 0;
      pilPs += item[`pilpscnt${i}`] || 0;
    }
    // 실기: 최근 5회차 응시/합격 합산
    let silRc = 0, silPa = 0;
    for (let i = 1; i <= 5; i++) {
      silRc += item[`silrccnt${i}`] || 0;
      silPa += item[`silpacnt${i}`] || 0;
    }

    const pilRate = pilRc > 0 ? ((pilPs / pilRc) * 100).toFixed(1) : null;
    const silRate = silRc > 0 ? ((silPa / silRc) * 100).toFixed(1) : null;
    const avgRate = (pilRate && silRate)
      ? (((parseFloat(pilRate) + parseFloat(silRate)) / 2).toFixed(1))
      : null;

    res.status(200).json({
      baseYY,
      pilRate,   // 필기 합격률
      silRate,   // 실기 합격률
      avgRate,   // 평균 합격률
      pilRc,     // 필기 응시자 수 (최근 5회차 합산)
      silRc,     // 실기 응시자 수 (최근 5회차 합산)
      pilPs,     // 필기 합격자 수
      silPa,     // 실기 합격자 수
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
