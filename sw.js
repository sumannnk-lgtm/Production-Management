self.addEventListener('install', (e) => console.log('Production SW Installed'));
self.addEventListener('fetch', (e) => e.respondWith(fetch(e.request)));