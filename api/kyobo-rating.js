export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const { title } = req.query;
  if (!title) return res.status(400).json({ error: 'title is required' });

  const searchUrl = `https://search.kyobobook.co.kr/search?keyword=${encodeURIComponent(title)}&target=total`;

  try {
    const r = await fetch(searchUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'ko-KR,ko;q=0.9',
        'Referer': 'https://www.kyobobook.co.kr/',
      }
    });

    const html = await r.text();

    if (!html || html.length < 500) {
      return res.status(200).json({ rating: null, reviewCount: null, htmlLength: html.length });
    }

    // Find rating patterns — try multiple formats Kyobo might use
    const patterns = [
      /\b(10\.0|[1-9]\.\d)\s*\((\d+)\)/,         // "9.8 (14)"
      /"starScore"\s*:\s*"?([\d.]+)"?/,             // JSON field
      /"ratingAvg"\s*:\s*"?([\d.]+)"?/,
      /별점\s*[:：]?\s*([\d.]+)/,
      /([0-9]\.[0-9])\s*점\s*\((\d+)/,
    ];

    for (const pat of patterns) {
      const m = html.match(pat);
      if (m) {
        return res.status(200).json({
          rating: parseFloat(m[1]),
          reviewCount: m[2] ? parseInt(m[2]) : null,
          htmlLength: html.length,
          pattern: pat.toString(),
        });
      }
    }

    // Debug: return a snippet around any digit.digit pattern
    const snippetMatch = html.match(/.{0,50}[0-9]\.[0-9].{0,50}/);
    return res.status(200).json({
      rating: null,
      reviewCount: null,
      htmlLength: html.length,
      snippet: snippetMatch ? snippetMatch[0] : 'no digit.digit found',
    });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
