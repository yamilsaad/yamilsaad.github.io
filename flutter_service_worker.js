'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"android-chrome-192x192.png": "00bd30295d81fc44c8750fd9a993b8b3",
"assets/AssetManifest.bin": "6e9bc6fbbaa25fc9587e9d52ba9fe880",
"assets/AssetManifest.bin.json": "6e1f24d068a6f97e10b34462e5e1fed3",
"assets/AssetManifest.json": "d3877d12c9e97502c06759a3f6f920df",
"assets/assets/fonts/JosefinSans-VariableFont_wght.ttf": "2e8222ace1f1b9047606c56fa65686a2",
"assets/assets/fonts/Rubik-VariableFont_wght.ttf": "6d3102fa33194bef395536d580f91b56",
"assets/assets/fonts/SpaceGrotesk-VariableFont_wght.ttf": "f8409c4c5e0b5ab0abc7783a1ce58fda",
"assets/assets/img/icons/logo_1.png": "233dd4a602c97aa98aaa5c0db4a3b8d4",
"assets/assets/img/icons/logo_2.png": "f93002793989ca146e0907ab24790ef8",
"assets/assets/img/icons/logo_3.png": "de87c466b9e16cb7d27e59bedab0b1dc",
"assets/assets/img/photos/avatar.webp": "d05ce9a641d22ab395a3c42deacb30e9",
"assets/assets/img/photos/avatar2.webp": "222bc5dfa631940fdd3a1c02f97cd08c",
"assets/assets/img/photos/banner_portafolio1.webp": "535b3ab2f583d545842b45e47c50987a",
"assets/assets/img/photos/banner_portafolio10.webp": "ac2731aa4b355f138ee1d100f31d6f97",
"assets/assets/img/photos/banner_portafolio11.webp": "1bc96926d760a2022e8da910401e66f7",
"assets/assets/img/photos/banner_portafolio12.webp": "a026b1b20cdae523dd612e575ef4a8b8",
"assets/assets/img/photos/banner_portafolio2.webp": "161d9db4150de4ed084847929487d511",
"assets/assets/img/photos/banner_portafolio3.webp": "40b9e39022c680c68a3014199b825ba1",
"assets/assets/img/photos/banner_portafolio4.webp": "a1692b022d79605df33b4833f61a3042",
"assets/assets/img/photos/banner_portafolio5.webp": "2a7196d36357bf931dd03b0ba984a73a",
"assets/assets/img/photos/banner_portafolio6.webp": "b55f09a7603cfc2cd1bd07cc7d22c4cf",
"assets/assets/img/photos/banner_portafolio7.webp": "afe1f20f40f3e8d1e3ab6ceab5dc2c7a",
"assets/assets/img/photos/banner_portafolio8.webp": "3e2c325ce0b8071a03b810118098e25b",
"assets/assets/img/photos/banner_portafolio9.webp": "497c42d85a06e9cb6db5740f2f0e1ad4",
"assets/assets/img/photos/developer.webp": "a373994b3fbc62ab6a79482c36600bb1",
"assets/assets/img/photos/logo1_trans.webp": "0f591672fc30823cadc47d0a074555da",
"assets/assets/img/photos/logo_grande.webp": "3eb7f7233c0109976ceeec972ce16962",
"assets/assets/img/photos/rubik.webp": "b6597481c25165df65a3b3a31ee12bef",
"assets/FontManifest.json": "d5670d8ff973b3cd827621a665901da5",
"assets/fonts/MaterialIcons-Regular.otf": "6d858745b77547a1df4f7db800336a08",
"assets/NOTICES": "86a66df7cd988768b69135a3344bb689",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "aea93550e544058da3c9d0a2887a678c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f727774767b2a2693c13cc3ff92a6191",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "271d77bb70bf0c43cd60311c1af379fc",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon-32x32.png": "31d19615896e9073f2521a50c218592d",
"favicon.ico": "9b58e4eae8312caa783f99bee72db56b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "2c2cf994b4f3e16b2846d37d4d97c18b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1e1ff02951a74d9ee6c039565623f431",
"/": "1e1ff02951a74d9ee6c039565623f431",
"main.dart.js": "ad92b9b75e7e888c4bff2c1c589e5e2e",
"manifest.json": "3c48fabee6e7a3ab4677082e900c39b0",
"version.json": "be5ae17ad98330e98e3804bca8131b98"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
