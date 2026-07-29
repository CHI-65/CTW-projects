// Minimal service worker for The Beat Relay.
// Its ONLY job is to make the app installable as a standalone app on Android
// (Chrome requires a service worker with a fetch handler to offer "Install app").
// It deliberately does NOT cache anything — every request goes straight to the
// network — so the app always loads the latest version. No stale-cache surprises.
self.addEventListener('install', function(e){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(e){ /* pass through to network (no cache) */ });
