importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js");const s="cool-cache",a=["/assets/","/src/"];self.addEventListener("install",e=>{e.waitUntil((async()=>{(await caches.open(s)).addAll(a)})())});self.addEventListener("activate",e=>{e.waitUntil(clients.claim())});self.addEventListener("fetch",e=>{e.respondWith(async()=>{const c=await(await caches.open(s)).match(e.request);return c!==void 0?c:fetch(e.request)})});workbox.precaching.precacheAndRoute([{"revision":null,"url":"code/app-about.014939cb.js"},{"revision":null,"url":"code/index.4463af53.js"},{"revision":null,"url":"code/index.729f4d80.css"},{"revision":"da710a2e941d487345ae34260cad5f4e","url":"index.html"},{"revision":"6f3c69a371dddf189c91aa63c381483e","url":"manifest.json"},{"revision":"4837d20ef6ab9602f89a3f3d098d1c94","url":"registerSW.js"},{"revision":"8abae7a44a556436c9b70737d7434bc6","url":"manifest.webmanifest"}]||[]);
//# sourceMappingURL=sw.js.map
