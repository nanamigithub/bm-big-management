const cacheName = 'bp-app-v1';
const filesToCache = [
  '/big-life-manage/bp-app/',
  '/big-life-manage/bp-app/index.html',
  '/big-life-manage/bp-app/manifest.json',
  '/big-life-manage/bp-app/icon-192.png',
  '/big-life-manage/bp-app/icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(filesToCache))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
