importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js");let o;window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),o=e,showInstallPromotion(),console.log("'beforeinstallprompt' event was fired.")});buttonInstall.addEventListener("click",async()=>{hideInstallPromotion(),o.prompt();const{outcome:e}=await o.userChoice;console.log(`User response to the install prompt: ${e}`),o=null});window.addEventListener("appinstalled",()=>{hideInstallPromotion(),o=null,console.log("PWA was installed")});window.matchMedia("(display-mode: standalone)").addEventListener("change",e=>{let t="browser";e.matches&&(t="standalone"),console.log("DISPLAY_MODE_CHANGED",t)});workbox.precaching.precacheAndRoute([{"revision":null,"url":"code/app-about.014939cb.js"},{"revision":null,"url":"code/index.4463af53.js"},{"revision":null,"url":"code/index.729f4d80.css"},{"revision":"4defbf52ab1cfc6d4611ae1680225448","url":"index.html"},{"revision":"6f3c69a371dddf189c91aa63c381483e","url":"manifest.json"},{"revision":"4837d20ef6ab9602f89a3f3d098d1c94","url":"registerSW.js"},{"revision":"8abae7a44a556436c9b70737d7434bc6","url":"manifest.webmanifest"}]||[]);
//# sourceMappingURL=sw.js.map
