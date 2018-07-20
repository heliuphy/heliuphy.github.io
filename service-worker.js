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

var precacheConfig = [["2016/05/01/Endnote的style/index.html","57b8563574774a3dd094c0bf2e621f72"],["2016/05/01/KeePass/index.html","218735f45d813ec2ae251c3a084ecc78"],["2016/05/01/VPS+Hexo+Dropbox创建个人博客/index.html","929a583eb15ae8b5fda8f2ca7927a88f"],["2016/05/01/VPS服务器搭建ghost blog/index.html","30974e8ac6cffcc7671f4152a7e2f1f5"],["2016/05/01/coding和github同时使用/index.html","7811ae88547d1bcd2dc256fa977a6824"],["2016/05/01/利用Keepass2.x进行ftp或webdev同步/index.html","124bb2b82e5f040a75dbe900c892350b"],["2016/05/01/搭建hexo博客小记/index.html","c5afa87412776ee52270ac53274ec200"],["2016/05/10/beamer的theme/index.html","39f681d5e396807f8ce0fd60d49a5b4c"],["2016/05/13/win8.1与ubuntu双系统安装（硬盘安装）/index.html","9ba95670409370bfa4d0c668a3424317"],["2016/05/14/Hexo利用Swiftype建立站内搜索/index.html","80ae22e8e1147d6d706e5f92c82b53ca"],["2017/05/07/Leanote安装教程/index.html","12bec303ddd150dc6f622bd0de5902b0"],["2017/05/07/VTK-5.10.1 TO VTK-7.1.1的变动/index.html","d09833222bd452627c5a2e51fdf4c227"],["2017/05/07/VTK-VS2008编译教程/index.html","26305a6c27feb7b7d323d650fdab9dc4"],["2017/05/07/VTK运行Tcl文件/index.html","90e19c8d1f4b8b324fe6e33e719569be"],["2017/05/07/vtk-imageblend图像融合报错/index.html","b8e873d390eaa0d5f1c7816d2eebc01c"],["2017/05/07/利用Dropbox备份vps中的文件/index.html","9e2afdb4d336f5655083c429385a9b37"],["2017/05/07/如何利用Dropbox备份指定文件夹/index.html","e2456bc173c185a676b4e3b480d22eb9"],["2017/05/10/VTK提示MetaImage cannot read data from file/index.html","bc1a0c78faf59094c4b94c250011976e"],["2017/05/10/hexo在线编写博客/index.html","cdd7a4cf5124721678327f1f0e643920"],["2017/05/10/分享一款极好用的Chrome插件/index.html","6250837605e13f2e5dd9e82d9c531c53"],["2017/05/11/Linux零打碎敲/index.html","c64491301fe98ff92764870bfdeeba77"],["2017/05/15/Bash编程（一）/index.html","c59b0afd7663f2f6b7ef74273e7ceabb"],["2017/05/16/将图片自动上传到七牛并在markdown中引用/index.html","916445a8b4aba8c6a98fa0e4d6fd3006"],["2017/06/19/软件推荐/index.html","705b9c3388479231ea96562541136be4"],["archives/2016/05/index.html","7573fb9feac55f3fb1ce5493c08fc7a5"],["archives/2016/index.html","a288ef1c9300afbe9a27697aadab0ffb"],["archives/2017/05/index.html","224f5c5a72ff719ccc6bdc9a7b8c0079"],["archives/2017/05/page/2/index.html","8cfca3fecf9005e7d0e5dcc8534bbb78"],["archives/2017/06/index.html","808fc881666bc86b040432ea492bfbda"],["archives/2017/index.html","2841e09a8e5430dc4a3a43606b546513"],["archives/2017/page/2/index.html","ee3e36eab005f98a824a7b4eb1be409a"],["archives/index.html","f7d8e0b5024e12a9839f64695a5d59b5"],["archives/page/2/index.html","3d660473aa61316d4501ceffbf2a0267"],["archives/page/3/index.html","e0886e156dd58670f80832ba0b2d963e"],["avatar.jpg","ea7dfe92d6e37ae050863316c80e4d50"],["categories/Git/index.html","f969c0e70eb4288edbd7b48ad44b1117"],["categories/Linux/index.html","9ef8eb503757712242e6b90d29cc3e5b"],["categories/VTK/index.html","7d88e67771e0ab85a460b8fe4cd81067"],["categories/index.html","1b87f621f880932821e6e49623d84ae3"],["categories/web/index.html","0c2c30bbe8cd6f4cb882242316b98a84"],["categories/博客/index.html","2cf0105f8ca77eaa89c2900bc12b7063"],["categories/软件/index.html","123ffa57e1c80d1a16d00368585df4b3"],["css/index.css","581a4b829c16aa1e9e84c77fb1acbcce"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","261f0e7ffc25b8e3e1058c66cd0ea69a"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","b4f37fca050aca4cb0d6347ea07795dd"],["js/copy.js","e874c6f7e7a19bc720141c5e06060d29"],["js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","ea8ce28130bd4ce09d5fca2ca22ad168"],["js/search/local-search.js","0f0737f61144676eebc9f0959dc60f01"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","0681b999537a060290694306dfe5e017"],["page/3/index.html","9c8843e7869ebc015b078bf7170bbefd"],["slides/index.html","df3a62b01bb256dccf69865eb79a2265"],["tags/Bash/index.html","f914ca8fe32b2726756ad4565675bcb4"],["tags/Chrome/index.html","bf3de38bb237387bcae8bd629cb2fa56"],["tags/Docker/index.html","7e76d2f0add5a322f407ce4b42a84af4"],["tags/Dropbox/index.html","042b75330db61df57d5e6bc3c14f11cb"],["tags/Endnote/index.html","cdfee05bd2b168de340b5b319d53b13f"],["tags/Git/index.html","957dcbcef3f4a7244d6a6e2309dffa00"],["tags/Github/index.html","55b4519853f1957cf0c0a5cef6333c24"],["tags/Hexo/index.html","3389387d730f57af79f97e9880bf4e50"],["tags/KeePass/index.html","4dad4962b8442c47e00ae25308f5c9f0"],["tags/Linux/index.html","44d8df64b651d7a51bad149599fc2542"],["tags/Markdown/index.html","625e78924ae56ac602e6981a3ae2f70e"],["tags/Swiftype/index.html","4c77cb0128c64a983782560018a0127c"],["tags/Tcl/index.html","ea482afcb667d30c218bb5deabb7829a"],["tags/Ubuntu/index.html","3f8a7cc1a7f43346e1dcbbe243af83ae"],["tags/VPS/index.html","6b97c5b9bf4575e89ef7d4074a3da011"],["tags/VTK/index.html","38e5e8ee957c028961ac906489e1e422"],["tags/cloud9/index.html","caa29f607d05edac58395ee8649cfd5e"],["tags/coding/index.html","ba07e0b2373ebd3bb632576cdd9e1fee"],["tags/ghost-blog/index.html","aadc4f0c1ba3bfaa77a182329114ff64"],["tags/index.html","0f9fbb31701c868b6b92702894ec2d8b"],["tags/latex/index.html","55746f6cd39feccb8ec4b65f0118dd63"],["tags/leanote/index.html","8f7d0df7a22f97b39d1fae0a860d201e"],["tags/style/index.html","8fd90cec8537d794bf667455cfd9619e"],["tags/visualstudio/index.html","f037979c02e31940dddad630255ba691"],["tags/web/index.html","aa1e7d48689eff2230373cf41f11c15d"],["tags/七牛云/index.html","6e02d591d2e317e5ac315cd6cd052252"],["tags/插件/index.html","1109be626587580e9b899c731d2ee78a"],["tags/站内搜索/index.html","387794751d4418fd3a51da2fe0777b5b"],["tags/系统安装/index.html","679b99643cd4afa8441fa155383eeead"]];
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







