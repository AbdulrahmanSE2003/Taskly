// public/service-worker.js

const CACHE_NAME = 'taskly-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/assets/index-CtDZ6dRI.js',
    '/assets/index-StGgXSHr.css',
    '/assets/logo-DuOrXX7l.png'
];

// عند تثبيت الـ SW
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
    self.skipWaiting();
});

// التحكم في الـ fetch
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});

// عند التفعيل / تنظيف الكاش القديم
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(keyList =>
            Promise.all(
                keyList.map(key => {
                    if (!cacheWhitelist.includes(key)) {
                        return caches.delete(key);
                    }
                })
            )
        )
    );
    self.clients.claim();
});
