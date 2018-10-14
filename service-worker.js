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

var precacheConfig = [["2016/05/01/Endnote的style/index.html","adba5ddc201ef3935946797207686eca"],["2016/05/01/KeePass/index.html","615d8df1e778fc8f810b31def7426a5d"],["2016/05/01/VPS+Hexo+Dropbox创建个人博客/index.html","14b2b7b21d0b7fc0a29ebb360323a93f"],["2016/05/01/VPS服务器搭建ghost blog/index.html","ece1929b3fdcc370071f34d77a8b94eb"],["2016/05/01/coding和github同时使用/index.html","8dd16c9ed1e29391f64de914a5ca4f2d"],["2016/05/01/利用Keepass2.x进行ftp或webdev同步/index.html","09cfdfada4369c25cd5b9961f88c2802"],["2016/05/01/搭建hexo博客小记/index.html","17f246f2d376e9a28e45c675e9b87d3e"],["2016/05/10/beamer的theme/index.html","0abdf70f10646c04f914ff0328c4380f"],["2016/05/13/win8.1与ubuntu双系统安装（硬盘安装）/index.html","b47bdc2e828a68aed0424ec85da81adf"],["2016/05/14/Hexo利用Swiftype建立站内搜索/index.html","92df4b555cc106e492bdf809244e51b0"],["2017/05/07/Leanote安装教程/index.html","0e022df01d55ced50e5e081ec327ebd2"],["2017/05/07/VTK-5.10.1 TO VTK-7.1.1的变动/index.html","a2917bbcf845d97564ed758d3648217a"],["2017/05/07/VTK-VS2008编译教程/index.html","132f9cec9675c5cdd538e1725cec6000"],["2017/05/07/VTK运行Tcl文件/index.html","db4928042bf46d562892ce0c3b19f595"],["2017/05/07/vtk-imageblend图像融合报错/index.html","b724c0a8521299d8821bf56d5948745a"],["2017/05/07/利用Dropbox备份vps中的文件/index.html","d1dcea8fc592ff0d8d0329738a18df4a"],["2017/05/07/如何利用Dropbox备份指定文件夹/index.html","38c46a18f6c6b13c2a8884693c54e557"],["2017/05/10/VTK提示MetaImage cannot read data from file/index.html","4753560b0277e7d82ed60201bc41901c"],["2017/05/10/hexo在线编写博客/index.html","d7b0dcf230b432502bab3a4df24d3784"],["2017/05/10/分享一款极好用的Chrome插件/index.html","7eb8c6c15bc9b75df795f431fa74c25b"],["2017/05/11/Linux零打碎敲/index.html","7b9c532d4b9a60fb411cf9fec07f4f10"],["2017/05/15/Bash编程（一）/index.html","6f4e3044c415e3a7b2b67081f3befbd8"],["2017/05/16/将图片自动上传到七牛并在markdown中引用/index.html","5c64e602781a08c1e7873dff9ee527eb"],["2017/06/19/软件推荐/index.html","1ca466b91970c69653a0aec9ed377615"],["2018/07/20/HexoEditor-测试/index.html","ab67a06c9f68e666470c9f755e9d779e"],["2018/07/26/四步安装好支持tensorflow和C++的Jupyter-notebook/index.html","6d79793d9677aecae59a566bf30e1dea"],["2018/07/28/自己构建Docker镜像在自己的服务器上搭建支持C++和tensorflow的jupyter-notebook/index.html","e593bf14c6e471ec03d298981bee9c2e"],["2018/10/14/阮一峰JS学习笔记/index.html","932ca6c2bf4b20ab6b6d459533075253"],["archives/2016/05/index.html","a3e360c07892ec57d64a05dfcbf358e9"],["archives/2016/index.html","93036ef339af45a9f7c53839c3cca54a"],["archives/2017/05/index.html","f802bbb4e54d3dc00c938ea11b08e633"],["archives/2017/05/page/2/index.html","3cf7c56b1ac61ad57e743e4c1cbb16a9"],["archives/2017/06/index.html","ac26bb96e6cb5b3f3a6e6fe98ba77615"],["archives/2017/index.html","86f9f5fc70d48e31f299a76e6da3a20b"],["archives/2017/page/2/index.html","ced3fb30d809f57b92416725ab701ca6"],["archives/2018/07/index.html","d8ad23cfee3a5d03a342bfa9a34ee9f4"],["archives/2018/10/index.html","6b3d6827bb7039bd09086d536889f883"],["archives/2018/index.html","8625da09c9b98b01497a18cbeff13e6c"],["archives/index.html","bcbab8df56a07105d93ddc6d2bd82ed6"],["archives/page/2/index.html","1c2c4a76fcd7ff79a73e823c1073d03b"],["archives/page/3/index.html","ecdc8b4c866ef85d61d67cd467230bbc"],["avatar.jpg","ea7dfe92d6e37ae050863316c80e4d50"],["categories/Docker/index.html","cb1657b6fcef2bd61e7d3fbd12aef84f"],["categories/Git/index.html","ed5ce0330fc19a756022c0815a6b737d"],["categories/Linux/index.html","0783e5f77276ffbccd29574f4ceb92df"],["categories/VTK/index.html","7a4fd0055747e6ceea4cf119ecab3348"],["categories/index.html","c8a68d22e2d4701a9d560b2a71b85743"],["categories/web/index.html","b0be708d567c7460e70e302bb04e948f"],["categories/博客/index.html","cd862975710014421d9a01086a2fc151"],["categories/软件/index.html","e47a05a9fdcda6443a750530a8dd81a2"],["css/index.css","581a4b829c16aa1e9e84c77fb1acbcce"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","6c6112e743eecacd388e895c9b9f34ce"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","2370695a30a2d8c2b456e8e1a5f9537f"],["js/copy.js","e874c6f7e7a19bc720141c5e06060d29"],["js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","ea8ce28130bd4ce09d5fca2ca22ad168"],["js/search/local-search.js","0f0737f61144676eebc9f0959dc60f01"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","6492edebf16aee4afa4fb2046000277b"],["page/3/index.html","30e29ffe8c79b4fdd09755215f942a65"],["slides/index.html","1e865467709d4f743bda1af892be940f"],["tags/Bash/index.html","a1e5ccdadc336b9b9e54a90923c7e554"],["tags/Chrome/index.html","dffaa029b1a0597a6c1982db43cebcfa"],["tags/Docker/index.html","c1ac34bf9657e360079b4da57d4138db"],["tags/Dropbox/index.html","8d32d728c4e942b3f52932d3fa7ce7b2"],["tags/Endnote/index.html","d1b22e699739ba3576d8a6a5d64ea63e"],["tags/Git/index.html","538e6d7b29cc139a38eb36b52a00ed13"],["tags/Github/index.html","387150f46ef74a9bca9f479daab7a047"],["tags/Hexo/index.html","470b6fefee98581a70916788c621c25b"],["tags/Jupyter/index.html","b8432993afb4a4677e3cf461997bc97f"],["tags/KeePass/index.html","084abebaa2124b59d2fc50d324fab725"],["tags/Linux/index.html","5945f839da803d28963f3600f0d04567"],["tags/Markdown/index.html","5ef4774003fe36503b5756d76a2f8603"],["tags/Swiftype/index.html","06f0d284ab60c6e785b901a530ff049c"],["tags/Tcl/index.html","2ac0a0f2c8371bc81720fa920040f40a"],["tags/Ubuntu/index.html","41f8eb926a0c5698e172a36ecec0e2e5"],["tags/VPS/index.html","282e2160bad67e92cc498f23f59fd8eb"],["tags/VTK/index.html","988229d42161bf13c4cc201cffabf0a6"],["tags/c/index.html","65466d13d98454b9f44d36ec81c844c3"],["tags/cloud9/index.html","4bd95d4e798485c18c5fd905199767c5"],["tags/coding/index.html","97b8d656ca6fe974e221d9f6b449ee5e"],["tags/ghost-blog/index.html","5b7bb470dd515a2959a0f1c4dbccc728"],["tags/index.html","d39a46fbde03d178bf7417bb8eb43963"],["tags/javascript/index.html","462c00d00aa68d74655a7e84c114ab8f"],["tags/jupyter-notebook/index.html","4e5012c5e172e24ddd23850691604444"],["tags/latex/index.html","da5d55e3969527a2adf311311b63f106"],["tags/leanote/index.html","f458fa36bb02d620fad7060efe1aa7fe"],["tags/python/index.html","ab19c044f023f1c2e5de2986cd548d84"],["tags/style/index.html","bcdf017a65580b0b72dddc0923392ca7"],["tags/visualstudio/index.html","fd8b2121c8d838d430af823defe6489e"],["tags/web/index.html","0153844a7d49d831a3a1a807426bf8d4"],["tags/七牛云/index.html","56f3343ba9fc76e19e207d773b9ec550"],["tags/插件/index.html","cb45ae57e347d20fb255b2f126606003"],["tags/站内搜索/index.html","771c8f0a9f8df0e5d1d590947ec3a098"],["tags/系统安装/index.html","fb879584e13cb35222c23cc0089b1462"]];
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







