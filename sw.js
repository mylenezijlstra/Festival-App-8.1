/* ============================================================
   Festival App – Service Worker
   ============================================================
   Verzorgt caching en offline functionaliteit.
   ============================================================ */

const CACHE_NAME = 'festival-app-v2';

// Bestanden die we bij installatie willen cachen
const PRECACHE_URLS = [
  '/Festival-App-8.1/index.html',
  '/Festival-App-8.1/info.html',
  '/Festival-App-8.1/programma.html',
  '/Festival-App-8.1/kaart.html',
  '/Festival-App-8.1/artiest.html',
  '/Festival-App-8.1/css/style.css',
  '/Festival-App-8.1/js/app.js',
  '/Festival-App-8.1/manifest.json'
];

// ---------- Install: bestanden cachen ----------
self.addEventListener('install', (event) => {
  console.log('[SW] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Pre-caching app shell');
        return cache.addAll(PRECACHE_URLS);
      })
      .then(() => self.skipWaiting())
  );
});

// ---------- Activate: oude caches opruimen ----------
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => {
            console.log('[SW] Deleting old cache:', name);
            return caches.delete(name);
          })
      );
    }).then(() => self.clients.claim())
  );
});

// ---------- Fetch: cache-first strategie ----------
self.addEventListener('fetch', (event) => {
  // Alleen GET-requests cachen
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request).then((networkResponse) => {
          // Alleen succesvolle responses cachen
          if (!networkResponse || networkResponse.status !== 200) {
            return networkResponse;
          }

          // Clone de response om in cache op te slaan
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return networkResponse;
        });
      })
      .catch(() => {
        // Offline fallback: toon de cached index.html
        if (event.request.mode === 'navigate') {
          return caches.match('/Festival-App-8.1/index.html');
        }
      })
  );
});
