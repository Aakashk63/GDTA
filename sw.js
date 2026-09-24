/* =========================================================
   GDTA 2026 WI-FI PORTAL SERVICE WORKER
   High-density traffic caching for 900+ concurrent attendees
========================================================= */

const CACHE_NAME = 'gdta-wifi-cache-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './favicon.svg',
  './gdta-background.webp',
  './gdta-background.png',
  './qr-gdta-2026.svg',
  './qr-gdta-guest.svg',
  './qr-sns-gdta.svg',
  './qr-gdta-media.svg'
];

// Install: Cache critical core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Activate: Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: Stale-While-Revalidate strategy for high-performance edge delivery
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});
