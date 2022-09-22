const CACHE_NAME = "static-cache-v1";
const DATA_CACHE_NAME = "data-cache-v1";
// 이게 중요한게 아니니까 안중요한 파일만 caching
const FILES_TO_CACHE = [
  "/",
  "/icon/android-chrome-192x192.png",
  "/icon/android-chrome-512x512.png",
  "/manifest.json",
  "/style.css",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        // console.log('pre-cache successfull!');
        return cache.addAll(FILES_TO_CACHE);
      })
      .catch((err) => {
        console.error(err.stack);
      })
  );
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            // console.log('Removed old cache', key);
            return caches.delete(key);
          }
        })
      );
    })
  );

  self.clients.claim();
});

// ***fetch // needs this function to make my app installable
self.addEventListener("fetch", function (event) {});
