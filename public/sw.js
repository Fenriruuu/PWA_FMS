importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js'
);

// This is your Service Worker, you can put any of your custom Service Worker
// code in this file, above the `precacheAndRoute` line.

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);

// This is the code that will be executed when the Service Worker starts up.
// It will add the `offline` class to the body tag, so you can style your
// offline page to look different to your online page.
self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        (async () => {
            const cache = await caches.open('offline');
            await cache.addAll(['/offline.html']);
        })()
    );
});

// This is the code that will be executed when the Service Worker requests
// a resource. It will check if the resource is in the cache, and if not,
// it will return the offline page.
self.addEventListener('fetch', (event) => {
    event.respondWith(
        (async () => {
            try {
                return await fetch(event.request);
            } catch (error) {
                const cache = await caches.open('offline');
                const cachedResponse = await cache.match('/offline.html');
                return cachedResponse;
            }
        })()
    );
});

// This is the code that will be executed when the Service Worker stops
// running. It will remove the `offline` class from the body tag, so you
// can style your offline page to look different to your online page.
self.addEventListener('activate', (event) => {
    event.waitUntil(
        (async () => {
            if ('navigationPreload' in self.registration) {
                await self.registration.navigationPreload.enable();
            }
        })()
    );
    self.clients.claim();
});