// Cache-first offline support
const CACHE = 'flappy-assets-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './assets/images/bird.png',
  './assets/images/bg.png',
  './assets/images/pipe.png',
  './assets/images/ground.png',
  './assets/audio/flap.wav',
  './assets/audio/score.wav',
  './assets/audio/hit.wav'
];
self.addEventListener('install', (e)=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', (e)=>{ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', (e)=>{
  const url = new URL(e.request.url);
  if (url.origin === location.origin) {
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
  }
});
