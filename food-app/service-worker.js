const cacheName = 'food-app-v1';
const filesToCache = [
  '/big-life-manage/food-app/',
  '/big-life-manage/food-app/index.html',
  '/big-life-manage/food-app/manifest.json',
  '/big-life-manage/food-app/icon-192.png',
  '/big-life-manage/food-app/icon-512.png'
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
