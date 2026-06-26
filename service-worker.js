const CACHE='strong-lean-v1-1';
const ASSETS=['./','./index.html','./css/app.css','./js/app.js','./data/week1.js','./manifest.json','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
