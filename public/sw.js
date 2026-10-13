/* Wild Project – Service Worker abgeschaltet (13.10.2026).
   Löscht alte Workspace-Caches auf Geräten, die den Workspace früher geöffnet haben. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.map((k) => caches.delete(k))))
      .then(() => self.registration.unregister())
  );
});
