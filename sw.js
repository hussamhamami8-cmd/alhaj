const CACHE_NAME = "hajj-guide-v6";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./manifest.json",

  "./images/logo.svg",
  "./images/placeholder.svg",

  "./images/haram.jpg",
  "./images/mina.jpg",
  "./images/arafat.jpg",
  "./images/muzdalifah.jpg",
  "./images/jamarat.jpg",
  "./images/safa-marwa.jpg",

  "./images/ihram.jpg",
  "./images/day-sacrifice.jpg",
  "./images/farewell-tawaf.jpg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))
      .catch(error => {
        console.log("Cache install:", error);
      })
  );

  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );

  self.clients.claim();
});

self.addEventListener("fetch", event => {

  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(cached => {

        if (cached) {
          return cached;
        }

        return fetch(event.request)
          .then(response => {

            if (!response || !response.ok) {
              return response;
            }

            const copy = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, copy).catch(() => {});
              });

            return response;

          })
          .catch(() => {

            if (event.request.mode === "navigate") {
              return caches.match("./index.html");
            }

            return new Response("", {
              status: 503,
              statusText: "Offline"
            });

          });

      })
  );

});
