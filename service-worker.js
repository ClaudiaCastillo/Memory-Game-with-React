"use strict";var precacheConfig=[["/memory-game-with-react/index.html","247ccf9a86e206c47e56a321387b9ae3"],["/memory-game-with-react/static/css/main.9422b930.css","798f5f353b9f29b335c729aa0eb35554"],["/memory-game-with-react/static/js/main.782735fb.js","ca7ea05a9ead48b6cc11b5b75b73fae1"],["/memory-game-with-react/static/media/background2.0b718ca3.jpg","0b718ca3375aa3a6e9d8dfbf95bc8072"],["/memory-game-with-react/static/media/hor.0e093f7e.jpg","0e093f7ee54b657fec9739540744ab0b"],["/memory-game-with-react/static/media/hor1.1c374d8e.jpg","1c374d8eb31311b08f8d7e42c7507cd9"],["/memory-game-with-react/static/media/hor10.e3453e80.jpg","e3453e8095e7f8aea5049d7d67c37613"],["/memory-game-with-react/static/media/hor11.7284eb98.jpg","7284eb980687ae3af71a12b1b0f49241"],["/memory-game-with-react/static/media/hor12.c83dfc62.jpg","c83dfc621d9f9eeb156332e5f3b1881e"],["/memory-game-with-react/static/media/hor13.48d6554d.jpg","48d6554dab44d5e3fbbf258b822fa523"],["/memory-game-with-react/static/media/hor2.f8b8f001.jpg","f8b8f001ac1af1093237f5d7880cc158"],["/memory-game-with-react/static/media/hor3.82aa024f.jpg","82aa024fe5eb9819d2a29b5d947b5b76"],["/memory-game-with-react/static/media/hor4.64966dd8.jpg","64966dd8e92b21e4b32a56f46aa8b689"],["/memory-game-with-react/static/media/hor5.a6cd1c49.jpg","a6cd1c49d00de83251d2e561973f097e"],["/memory-game-with-react/static/media/hor6.6e8926d3.jpg","6e8926d35254539fe5e4f1c33f189368"],["/memory-game-with-react/static/media/hor7.049ed0e5.jpg","049ed0e51ccdf2a8154e9edb086c2db2"],["/memory-game-with-react/static/media/hor8.8af5d900.jpg","8af5d90071b29b1e2943c1229f734f07"],["/memory-game-with-react/static/media/hor9.7a0a15ac.jpg","7a0a15ac289173be5203c22ee8f9f5b4"],["/memory-game-with-react/static/media/logo.c030eba9.png","c030eba9bfdfcb653476c9eabae92a38"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/memory-game-with-react/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});