// Service Worker for PWA and caching strategies

const CACHE_NAME = 'kaleidoscope-v1.0.0';
const OFFLINE_URL = '/offline.html';

// Resources to cache immediately
const PRECACHE_RESOURCES = [
  '/',
  '/offline.html',
  '/manifest.json',
  '/favicon.ico',
  '/og-image.jpg',
  '/logo.png'
];

// Routes to cache with Network First strategy
const NETWORK_FIRST_ROUTES = [
  '/api/',
  '/travel-section-regional-discovery',
  '/culture-section-editorial-authority',
  '/search-hub-content-discovery-engine'
];

// Static assets to cache with Cache First strategy
const CACHE_FIRST_ASSETS = [
  /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
  /\.(?:js|css)$/,
  /\.(?:woff|woff2|eot|ttf|otf)$/
];

// Install event - cache critical resources
self.addEventListener('install', event => {
  console.log('[SW] Install event');
  
  event.waitUntil(
    (async () => {
      try {
        const cache = await caches.open(CACHE_NAME);
        
        // Cache critical resources
        await cache.addAll(PRECACHE_RESOURCES);
        
        console.log('[SW] Precached resources');
        
        // Skip waiting to activate immediately
        self.skipWaiting();
      } catch (error) {
        console.error('[SW] Precache failed:', error);
      }
    })()
  );
});

// Activate event - cleanup old caches
self.addEventListener('activate', event => {
  console.log('[SW] Activate event');
  
  event.waitUntil(
    (async () => {
      try {
        // Clean up old caches
        const cacheNames = await caches.keys();
        await Promise.all(
          cacheNames
            .filter(cacheName => cacheName !== CACHE_NAME)
            .map(cacheName => caches.delete(cacheName))
        );
        
        // Claim all clients immediately
        await self.clients.claim();
        
        console.log('[SW] Old caches cleaned up');
      } catch (error) {
        console.error('[SW] Activation failed:', error);
      }
    })()
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;
  
  // Skip chrome-extension and other non-http requests
  if (!event.request.url.startsWith('http')) return;
  
  const { request } = event;
  const url = new URL(request.url);
  
  // Handle different types of requests with appropriate strategies
  event.respondWith(
    (async () => {
      try {
        // Network First for API calls and dynamic content
        if (NETWORK_FIRST_ROUTES.some(route => url.pathname.startsWith(route))) {
          return await networkFirst(request);
        }
        
        // Cache First for static assets
        if (CACHE_FIRST_ASSETS.some(pattern => pattern.test(url.pathname))) {
          return await cacheFirst(request);
        }
        
        // Stale While Revalidate for HTML pages
        if (request.destination === 'document') {
          return await staleWhileRevalidate(request);
        }
        
        // Default to network first for everything else
        return await networkFirst(request);
        
      } catch (error) {
        console.error('[SW] Fetch failed:', error);
        
        // Return offline page for navigation requests
        if (request.destination === 'document') {
          const cache = await caches.open(CACHE_NAME);
          return await cache.match(OFFLINE_URL) || new Response('Offline');
        }
        
        // Return a generic offline response for other requests
        return new Response('Offline', { status: 503 });
      }
    })()
  );
});

// Network First strategy
async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  
  try {
    // Try network first
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Fall back to cache
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    throw error;
  }
}

// Cache First strategy
async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  
  // Try cache first
  const cachedResponse = await cache.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    // Fall back to network
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    throw error;
  }
}

// Stale While Revalidate strategy
async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  
  // Get from cache immediately
  const cachedResponse = await cache.match(request);
  
  // Start network request in parallel
  const networkPromise = (async () => {
    try {
      const networkResponse = await fetch(request);
      
      if (networkResponse.ok) {
        cache.put(request, networkResponse.clone());
      }
      
      return networkResponse;
    } catch (error) {
      console.log('[SW] Network request failed:', error);
    }
  })();
  
  // Return cached response immediately if available
  if (cachedResponse) {
    // Update cache in background
    networkPromise;
    return cachedResponse;
  }
  
  // If no cache, wait for network
  return await networkPromise;
}

// Background sync for offline forms
self.addEventListener('sync', event => {
  console.log('[SW] Background sync:', event.tag);
  
  if (event.tag === 'newsletter-signup') {
    event.waitUntil(syncNewsletterSignup());
  }
});

// Sync newsletter signups when back online
async function syncNewsletterSignup() {
  try {
    // Get queued signups from IndexedDB
    const signups = await getQueuedSignups();
    
    for (const signup of signups) {
      try {
        await fetch('/api/newsletter/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(signup)
        });
        
        // Remove from queue on success
        await removeFromQueue(signup.id);
      } catch (error) {
        console.error('[SW] Newsletter signup sync failed:', error);
      }
    }
  } catch (error) {
    console.error('[SW] Sync failed:', error);
  }
}

// Push notification handler
self.addEventListener('push', event => {
  console.log('[SW] Push received');
  
  const options = {
    body: event.data ? event.data.text() : 'Ново съдържание в Kaleidoscope!',
    icon: '/android-chrome-192x192.png',
    badge: '/badge-72x72.png',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Разгледай',
        icon: '/icons/explore.png'
      },
      {
        action: 'close',
        title: 'Затвори',
        icon: '/icons/close.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('Kaleidoscope Magazine', options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', event => {
  console.log('[SW] Notification click:', event.action);
  
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Helper functions for IndexedDB operations
async function getQueuedSignups() {
  // Placeholder - implement IndexedDB operations
  return [];
}

async function removeFromQueue(id) {
  // Placeholder - implement IndexedDB operations
}

// Message handler for communication with main thread
self.addEventListener('message', event => {
  console.log('[SW] Message received:', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Periodic background sync for content updates
self.addEventListener('periodicsync', event => {
  console.log('[SW] Periodic sync:', event.tag);
  
  if (event.tag === 'content-sync') {
    event.waitUntil(syncContent());
  }
});

async function syncContent() {
  try {
    // Update critical content in background
    const cache = await caches.open(CACHE_NAME);
    
    const contentUrls = [
      '/',
      '/travel-section-regional-discovery',
      '/culture-section-editorial-authority'
    ];
    
    for (const url of contentUrls) {
      try {
        const response = await fetch(url);
        if (response.ok) {
          await cache.put(url, response);
        }
      } catch (error) {
        console.log(`[SW] Failed to sync ${url}:`, error);
      }
    }
  } catch (error) {
    console.error('[SW] Content sync failed:', error);
  }
}