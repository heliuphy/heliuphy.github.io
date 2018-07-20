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

var precacheConfig = [["2016/05/01/Endnote的style/index.html","ccc4addbbc27debe050d48e233b79980"],["2016/05/01/KeePass/index.html","4eaac59bdcb3454c6cb2def2f6bc0f29"],["2016/05/01/VPS+Hexo+Dropbox创建个人博客/index.html","e2a104a1882283319d1bb44929d25185"],["2016/05/01/VPS服务器搭建ghost blog/index.html","4990968dd551da1b3c91fae0ddf972f7"],["2016/05/01/coding和github同时使用/index.html","1395d556285ef6392c9a1445709ebc2d"],["2016/05/01/利用Keepass2.x进行ftp或webdev同步/index.html","8a83c2d9e7b7c1e893bd82bd65fa7468"],["2016/05/01/搭建hexo博客小记/index.html","8f0ac518bf488303e5cb1a3961c2a42e"],["2016/05/10/beamer的theme/index.html","a6dc5cd2c699d9fd12550e1637fc89c9"],["2016/05/13/win8.1与ubuntu双系统安装（硬盘安装）/index.html","9b1ca01cba91b67b0900ccf427389361"],["2016/05/14/Hexo利用Swiftype建立站内搜索/index.html","6ea0fe708ed4702469dbdcaf679e4ebc"],["2017/05/07/Leanote安装教程/index.html","935032ed4aa9da5befa940f7a931bd82"],["2017/05/07/VTK-5.10.1 TO VTK-7.1.1的变动/index.html","0cb50bbba41b64adff4620bd8f3c7bfa"],["2017/05/07/VTK-VS2008编译教程/index.html","0311c39f7cf2cb695cba31118e708f5c"],["2017/05/07/VTK运行Tcl文件/index.html","b06d89621226126f8293fcec9d0ea3c0"],["2017/05/07/vtk-imageblend图像融合报错/index.html","967d306e2eaba794b9678b867b032ab4"],["2017/05/07/利用Dropbox备份vps中的文件/index.html","ff9316e86d15b3175d8f25b3122cc3c2"],["2017/05/07/如何利用Dropbox备份指定文件夹/index.html","c296a14e94b0657491b10587fea216e0"],["2017/05/10/VTK提示MetaImage cannot read data from file/index.html","1ba4e04c7860c09fe5e1a5b4ae30070b"],["2017/05/10/hexo在线编写博客/index.html","896bc49c9870c6a79899031ae0ba1410"],["2017/05/10/分享一款极好用的Chrome插件/index.html","033a581a3a8fd132d01ba720eaa80286"],["2017/05/11/Linux零打碎敲/index.html","4bc2ca4cdcc40061c4c37f75bca9103e"],["2017/05/15/Bash编程（一）/index.html","3de2278e934d95651fc5e9ae9f8f8a5b"],["2017/05/16/将图片自动上传到七牛并在markdown中引用/index.html","ef820e3cf1c6eadd3b3a43b470526022"],["2017/06/19/软件推荐/index.html","91cc2120a255ee8c42569d7e98670748"],["2018/07/20/20180720220809/index.html","137f6bda73d930d9f525a663416ce39f"],["2018/07/20/HexoEditor测试/index.html","ca1dde38e44e5dea8af1cd55d50426ed"],["archives/2016/05/index.html","c5eea791fa07edbeaff242264e2aaea4"],["archives/2016/index.html","76763955b79fec4584b15e228e283a2c"],["archives/2017/05/index.html","a46611aec946fa5a8582c6b98f55ec89"],["archives/2017/05/page/2/index.html","9d74842cbef0555614e0b4b8a23cec37"],["archives/2017/06/index.html","a1e8b5e72287e5490d82540473b0af90"],["archives/2017/index.html","6bcab53b3dfa5a195aa9652e47c43a3b"],["archives/2017/page/2/index.html","51d01d87c12f43dad2d55d53b88cc1b3"],["archives/2018/07/index.html","d5d70512ccaf051eed3d08148c255bce"],["archives/2018/index.html","5ebcd02f7dfd73b38f7c4e361ed557c2"],["archives/index.html","8963cc371d883c53783d777ba5b72edc"],["archives/page/2/index.html","a3c5301d19fe5d5f4094e855a710e7c4"],["archives/page/3/index.html","80b6ed5041194fd88174bedd8690278f"],["avatar.jpg","ea7dfe92d6e37ae050863316c80e4d50"],["categories/Git/index.html","ce2c4b9c304cdd1011f847cb0b5d9e9e"],["categories/Linux/index.html","aa53fad2280aaa31c6abb63e1d20a9dc"],["categories/VTK/index.html","3efaaa5c424dc6744b35bf193edf4702"],["categories/index.html","2cf1ea6db21a8868eea2b7587304db4d"],["categories/web/index.html","b824f054678b5588c5c30ab3a8ea2e1c"],["categories/博客/index.html","a7c28a027035ed5734926bbd2061c73c"],["categories/软件/index.html","792384e41ee384d8977b67712f7fb75e"],["css/index.css","581a4b829c16aa1e9e84c77fb1acbcce"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","c7d1c12eeb9c6f48ab2e21ffe33c49f8"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","1725e8583958042e8890ec6332a3e2c9"],["js/copy.js","e874c6f7e7a19bc720141c5e06060d29"],["js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","ea8ce28130bd4ce09d5fca2ca22ad168"],["js/search/local-search.js","0f0737f61144676eebc9f0959dc60f01"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","b51470ec1192358c661e68994eb5b3bf"],["page/3/index.html","27dbcfafbd96fe639b74644dc68a53b2"],["slides/index.html","7085f5b019198089ffd757f7b6163e58"],["tags/Bash/index.html","129735f645ed200bec96d9b2b0a102e8"],["tags/Chrome/index.html","ef5594f5456114037c2a129816c1db4c"],["tags/Docker/index.html","58ad95b47621eaea6c4e499662dce6f1"],["tags/Dropbox/index.html","5c4349844ead24a2cc8847a620b52d45"],["tags/Endnote/index.html","10740ede09359ff44b7dbebb93e81c02"],["tags/Git/index.html","cf16260f4034eb6c1d5b8dc981276766"],["tags/Github/index.html","51406ceb0565bf2658854e3a3512f96a"],["tags/Hexo/index.html","14d877a220c261e68944d642f3411a55"],["tags/KeePass/index.html","1de57e9ce786ee0b69cc2f15e58ee69d"],["tags/Linux/index.html","89516cbc84ec606e904d578e03dc39fa"],["tags/Markdown/index.html","523e0e47028975593f421f88e58e0b1c"],["tags/Swiftype/index.html","0855a4a5409c9ca956bf04735f6d8722"],["tags/Tcl/index.html","2b53e52220eee7786076191a13709038"],["tags/Ubuntu/index.html","8bc293fc158897e4ea9d3d825ecd4e22"],["tags/VPS/index.html","f580de569a1f75f18b987e9748c2ff3f"],["tags/VTK/index.html","223a8b3b646306953b7a5ca3122e43da"],["tags/cloud9/index.html","73ccaada38cf2769c663d5f1ac1c9e3e"],["tags/coding/index.html","43365908e124a0deb616ab47728b1f47"],["tags/ghost-blog/index.html","d16c6f16a7baf90d8a38035ae17f09af"],["tags/index.html","7840175311284613901dc86d0bfb6fbc"],["tags/latex/index.html","0dbfe12ffdf49ba70e5e5a2b45ecb1e1"],["tags/leanote/index.html","60ba999ceeaf5487d7c2f1b241e90c69"],["tags/style/index.html","0293481036e6ad9861c20637c0b68f35"],["tags/visualstudio/index.html","961c8e999ef1904032cf4d93a2ac6ae0"],["tags/web/index.html","f29601bcaabc7481fad8ce6f588c8ab0"],["tags/七牛云/index.html","3dcf4a1cab43cb39ef0bbbef39d867f1"],["tags/插件/index.html","dca2a10a7c173230b8c19942847f639f"],["tags/站内搜索/index.html","961aa02050675842aafe2fb6364333d5"],["tags/系统安装/index.html","508f5d66c15876f2b09624ff187e2e8b"]];
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







