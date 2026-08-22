const CACHE_NAME = 'cert-dashboard-v219';
const ASSETS = [
  '/style.css',
  '/manifest.json',
  '/certs_data.js',
  '/app.js',
  '/books_data.js',
  '/jm-codes.js',
  '/kuksiwon_api.js',
  '/inventory-app.js',
  '/inventory-rotation-data.js',
  '/inventory-upcoming-newbooks-data.js',
  '/inventory-styles-scoped.css',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // API 요청 및 HTML 파일은 항상 네트워크 우선
  if (
    e.request.url.includes('api.odcloud.kr') ||
    e.request.url.includes('apis.data.go.kr') ||
    e.request.url.includes('open-meteo.com') ||
    e.request.url.includes('nominatim.openstreetmap.org') ||
    e.request.headers.get('accept')?.includes('text/html') ||
    e.request.url.endsWith('.html') ||
    e.request.url.endsWith('/')
  ) {
    return;
  }
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
