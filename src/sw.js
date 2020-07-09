const cacheName = "WAMS-v2";

const filesToCache = [
  "android-chrome-192x192.png",
  "android-chrome-512x512.png",
  "apple-touch-icon.png",
  "browserconfig.xml",
  "favicon.ico",
  "index.html",
  "favicon-16x16.png",
  "favicon-32x32.png",
  "mstile-144x144.png",
  "mstile-150x150.png",
  "mstile-310x150.png",
  "mstile-310x310.png",
  "mstile-70x70.png",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (cached) {
      return (
        cached ||
        fetch(event.request).then(function (response) {
          return caches.open(cacheName).then(function (cache) {
            cache.put(e.request, response.clone());
            return response;
          });
        })
      );
    })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.map(function (key) {
          if (key !== cacheName) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});
