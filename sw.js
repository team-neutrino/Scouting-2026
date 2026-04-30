const CACHE_NAME = 'my-site-v1';

const FILES_TO_CACHE = [
  '/app.js',
  '/auton-dumper.html',
  '/auton.html',
  '/background.png',
  '/fuel.css',
  '/index-old.html',
  '/index.css',
  '/index.html',
  '/loading-animation.html',
  '/new%20app/background.png',
  '/new%20app/index.css',
  '/new%20app/index.html',
  '/new%20app/loader.css',
  '/new%20app/loader.js',
  '/new%20app/otherApp.js',
  '/new%20app/reefscapeheader.png',
  '/qr.css',
  '/qr.html',
  '/qrCode.js',
  '/qual.css',
  '/qual.html',
  '/quote.js',
  '/styleSheet.css',
  '/teleop-dumper.html',
  '/teleop.html',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cached) => cached || fetch(e.request))
  );
});
