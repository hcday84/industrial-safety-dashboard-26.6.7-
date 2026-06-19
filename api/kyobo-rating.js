export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const { code } = req.query;
  if (!code) return res.status(400).json({ error: 'code is required' });

  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'ko-KR,ko;q=0.9',
    'Referer': `https://product.kyobobook.co.kr/detail/${code}`,
    'Origin': 'https://product.kyobobook.co.kr',
  };

  const apiCandidates = [
    `https://product.kyobobook.co.kr/api/product/information?saleCmdtId=${code}`,
    `https://product.kyobobook.co.kr/api/product/evaluation?saleCmdtId=${code}`,
    `https://product.kyobobook.co.kr/api/product/detail?saleCmdtId=${code}`,
    `https://product.kyobobook.co.kr/api/product/review/summary?saleCmdtId=${code}`,
    `https://product.kyobobook.co.kr/api/product/${code}`,
  ];

  const log = [];
  for (const url of apiCandidates) {
    try {
      const r = await fetch(url, { headers });
      const text = await r.text();
      log.push({ url: url.replace(`https://product.kyobobook.co.kr`, ''), status: r.status, len: text.length, preview: text.substring(0, 100) });
      if (r.ok && text.length > 10) {
        try {
          const data = JSON.parse(text);
          return res.status(200).json({ success: true, url, data });
        } catch (_) {}
      }
    } catch (e) {
      log.push({ url, error: e.message });
    }
  }

  // HTML 페이지 직접 파싱
  try {
    const r = await fetch(`https://product.kyobobook.co.kr/detail/${code}`, { headers: { ...headers, Accept: 'text/html,application/xhtml+xml' } });
    const html = await r.text();
    const ratingMatch = html.match(/"ratingAvg"\s*:\s*([\d.]+)/) ||
                        html.match(/"starScore"\s*:\s*([\d.]+)/) ||
                        html.match(/"avgScore"\s*:\s*([\d.]+)/);
    const reviewMatch = html.match(/"reviewCount"\s*:\s*(\d+)/) ||
                        html.match(/"ratingCount"\s*:\s*(\d+)/);
    log.push({ html: true, status: r.status, len: html.length });
    return res.status(200).json({
      source: 'html-parse',
      rating: ratingMatch ? parseFloat(ratingMatch[1]) : null,
      reviewCount: reviewMatch ? parseInt(reviewMatch[1]) : null,
      htmlLength: html.length,
      log,
    });
  } catch (e) {
    return res.status(500).json({ error: e.message, log });
  }
}
