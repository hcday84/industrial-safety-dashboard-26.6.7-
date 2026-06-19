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

    // Kyobo search results show ratings as "10.0 (9)" or "9.8 (14)" in HTML
    // Pattern: score followed by count in parentheses
    const ratingMatch = html.match(/\b(10\.0|[1-9]\.\d)\s*\((\d+)\)/);
    if (ratingMatch) {
      return res.status(200).json({
        rating: parseFloat(ratingMatch[1]),
        reviewCount: parseInt(ratingMatch[2]),
        htmlLength: html.length,
      });
    }

    return res.status(200).json({ rating: null, reviewCount: null, htmlLength: html.length });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
