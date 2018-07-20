/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2016/05/01/Endnote的style/index.html","2df5bcd3fe7c3a0d33a86eaa800fd79a"],["2016/05/01/KeePass/index.html","f722689ce34c0b3ed2d3468cd2733c37"],["2016/05/01/VPS+Hexo+Dropbox创建个人博客/index.html","6ea93be61202663b02615f17b14462e0"],["2016/05/01/VPS服务器搭建ghost blog/index.html","6db63d93cf2e15fea0f0d9a80a169b02"],["2016/05/01/coding和github同时使用/index.html","57365be727dd5ecd72a947108ebcdfec"],["2016/05/01/利用Keepass2.x进行ftp或webdev同步/index.html","7bd8db0aa1a08cd85454b7d217f93ab5"],["2016/05/01/搭建hexo博客小记/index.html","4edc630aed92e68a82ed47a1fa80627d"],["2016/05/10/beamer的theme/index.html","93be70a06785eccd94ef643fd0f6ac64"],["2016/05/13/win8.1与ubuntu双系统安装（硬盘安装）/index.html","a1fbe3b0b0a120f5bafecde3710a8a58"],["2016/05/14/Hexo利用Swiftype建立站内搜索/index.html","5263caefa6b5f312211fcf2d7c248f80"],["2017/05/07/Leanote安装教程/index.html","f5d0e1633d4ecf2059dda95c12f5791a"],["2017/05/07/VTK-5.10.1 TO VTK-7.1.1的变动/index.html","91ca479593d55dc12cff46bc031ca66a"],["2017/05/07/VTK-VS2008编译教程/index.html","65865c820aeb7c0f3bbdfc29b54f0409"],["2017/05/07/VTK运行Tcl文件/index.html","6d4194cf2b8e9f3c1f8db9aba887a06c"],["2017/05/07/vtk-imageblend图像融合报错/index.html","a7629de8f0dfee9d9472d8ee94a114de"],["2017/05/07/利用Dropbox备份vps中的文件/index.html","04582b6e3ce2331b176179b2f1bafb28"],["2017/05/07/如何利用Dropbox备份指定文件夹/index.html","2792177ca89945c9050e42f68c4b1b01"],["2017/05/10/VTK提示MetaImage cannot read data from file/index.html","92bb2c30f9ad3642991fa8a8ba12277d"],["2017/05/10/hexo在线编写博客/index.html","b3b7f044681d250251f8d41fe53c3756"],["2017/05/10/分享一款极好用的Chrome插件/index.html","5146997fbbb86b1db39676e04580d2dc"],["2017/05/11/Linux零打碎敲/index.html","d38fa675b1690b104f9d62b2bdb33926"],["2017/05/15/Bash编程（一）/index.html","cde5613c58c1658e0b6dbb71df18cfed"],["2017/05/16/将图片自动上传到七牛并在markdown中引用/index.html","5682752e2efa17ac54f8186090d9aa7e"],["2017/06/19/软件推荐/index.html","f95a859661b29d86ab42684e0a412049"],["archives/2016/05/index.html","1cac0fce156a4b4796588a31b66424e6"],["archives/2016/index.html","ab4d65a0d6cd1b8474dcadf88d81edee"],["archives/2017/05/index.html","7b13f560728c1877383a5588d15ebde1"],["archives/2017/05/page/2/index.html","3bfeb29f9b69d166910bcf476a8fe7e0"],["archives/2017/06/index.html","fd36cd613f41eac35061f108f8959139"],["archives/2017/index.html","0c1d9230ea79860193cb6344c44805a3"],["archives/2017/page/2/index.html","6c948b9c2ad632f357b76ca3a0774f82"],["archives/index.html","30a7f498442c573aa3aab70bf642786f"],["archives/page/2/index.html","517fb08c8088db06c6d81341f2cec301"],["archives/page/3/index.html","e23bffb5bfe53d7df6d388e175fe46f8"],["avatar.jpg","ea7dfe92d6e37ae050863316c80e4d50"],["categories/Git/index.html","768f5ae967883ca56b3e8b7c351591b2"],["categories/Linux/index.html","d445d0fbae4675c8b50f933907f7aaa5"],["categories/VTK/index.html","be3ee795238ecf29141b6d1560b6534e"],["categories/index.html","bef44c25955d55b4ee3c2e25660e182c"],["categories/web/index.html","b80dab8e79cf52c85f517378c72da2a7"],["categories/博客/index.html","c67ae86bef4d983d52d93ae2b7c61501"],["categories/软件/index.html","4f9255c3a1b7ff1a5014f443f8909e99"],["css/index.css","581a4b829c16aa1e9e84c77fb1acbcce"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","e90c604cf5fa54ab80b6a1deff9b0ba9"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","0a4509ecb2f83d30b506048d84d39a71"],["js/copy.js","e874c6f7e7a19bc720141c5e06060d29"],["js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","ea8ce28130bd4ce09d5fca2ca22ad168"],["js/search/local-search.js","0f0737f61144676eebc9f0959dc60f01"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","9740ce47a95a73dc310a85cda2150e40"],["page/3/index.html","f0f4b5a940840dc9d6d924d2c7096c17"],["slides/index.html","064504e3a49f93ce11c4e256da1fa750"],["tags/Bash/index.html","4ffcaaf6556d4dbe221dbd1c68d75de2"],["tags/Chrome/index.html","25058b9cef947d236c9ba3068a0d36b6"],["tags/Docker/index.html","38e45385070e4dd1ac76c1ea476d9e38"],["tags/Dropbox/index.html","b60fad4f6dba1eec23837ea325d07d8f"],["tags/Endnote/index.html","6229e1c84c026ae91556d0b30304e82d"],["tags/Git/index.html","5e68518871927807a680e60e1b0424b8"],["tags/Github/index.html","3c72e9b7e8f201af977efc7f1ef3c8b8"],["tags/Hexo/index.html","82076d72a0dc11bee1e919c186edcdf1"],["tags/KeePass/index.html","d0514401232586281890d8f0acc1537f"],["tags/Linux/index.html","2d3b7eabd5b171ead42b7371bc0de763"],["tags/Markdown/index.html","721055e5d74633698988dcd1a26d8470"],["tags/Swiftype/index.html","c0f514d671e1942f2e55ee26c48dc0d8"],["tags/Tcl/index.html","b91482cd760a2d74f0e153213f44f243"],["tags/Ubuntu/index.html","324de0a86dc5822308c499595ea575d2"],["tags/VPS/index.html","9c83e30ea844d2d3c3b2b76c2fe34744"],["tags/VTK/index.html","545f88ba634b946a2e1c9b51930adfc3"],["tags/cloud9/index.html","48f3791cea12855f8243fd622666359c"],["tags/coding/index.html","5ba4e1f6cbf42c3fab3c3a8f626e894b"],["tags/ghost-blog/index.html","10e9124e048b1af8d0dd074661f4ad57"],["tags/index.html","7629102f034f7b1d2b950da98037533d"],["tags/latex/index.html","d5ff47340419ba8dc22e788b396b8649"],["tags/leanote/index.html","394d5b38b0c3fd23e563fd6319dc5d7d"],["tags/style/index.html","f2ac7f844c96f30f0b9153ae929b06ff"],["tags/visualstudio/index.html","62fbe26ba74521d9adf5b734aa4fb3d8"],["tags/web/index.html","2d75f829b569f3315aca4a9c691f53a7"],["tags/七牛云/index.html","2dcb2959373833178007ec99f3432d54"],["tags/插件/index.html","6abe57cf5e1fda4f42164ea682e0d026"],["tags/站内搜索/index.html","1a14e333b2e619fa6e63f9bfb394f4a0"],["tags/系统安装/index.html","58e99ad7fc3cd9bb92373d18c959aaac"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







