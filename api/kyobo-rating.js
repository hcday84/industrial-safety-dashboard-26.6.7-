export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const { code } = req.query;
  if (!code) return res.status(400).json({ error: 'code is required' });

  // 교보문고 내부 API 후보 목록
  const candidates = [
    `https://product.kyobobook.co.kr/api/product/detail?saleCmdtId=${code}`,
    `https://product.kyobobook.co.kr/api/product/${code}`,
    `https://product.kyobobook.co.kr/api/product/review/summary?saleCmdtId=${code}`,
    `https://product.kyobobook.co.kr/api/v1/product?saleCmdtId=${code}`,
  ];

  for (const url of candidates) {
    try {
      const r = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          'Accept': 'application/json',
          'Referer': `https://product.kyobobook.co.kr/detail/${code}`,
        },
      });
      if (r.ok) {
        const ct = r.headers.get('content-type') || '';
        if (ct.includes('json')) {
          const data = await r.json();
          return res.status(200).json({ url, data });
        }
      }
    } catch (e) {
      // continue
    }
  }

  // 모두 실패 시 HTML 페이지에서 파싱 시도
  try {
    const r = await fetch(`https://product.kyobobook.co.kr/detail/${code}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'text/html',
      },
    });
    const html = await r.text();
    // 별점 패턴 추출
    const ratingMatch = html.match(/"ratingAvg"\s*:\s*([\d.]+)/) ||
                        html.match(/class="[^"]*star[^"]*"[^>]*>([\d.]+)/) ||
                        html.match(/"starScore"\s*:\s*([\d.]+)/);
    const reviewMatch = html.match(/"reviewCount"\s*:\s*(\d+)/) ||
                        html.match(/"ratingCount"\s*:\s*(\d+)/);

    return res.status(200).json({
      source: 'html-parse',
      rating: ratingMatch ? parseFloat(ratingMatch[1]) : null,
      reviewCount: reviewMatch ? parseInt(reviewMatch[1]) : null,
      htmlLength: html.length,
    });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
