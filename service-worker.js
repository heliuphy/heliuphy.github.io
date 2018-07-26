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

var precacheConfig = [["2016/05/01/Endnote的style/index.html","62d448def83571be7ec21c98b7380222"],["2016/05/01/KeePass/index.html","e13f374e8c6b1796624c1c6fb86bab3f"],["2016/05/01/VPS+Hexo+Dropbox创建个人博客/index.html","31bc4c5dbae329993b7fb1a8dac3dad6"],["2016/05/01/VPS服务器搭建ghost blog/index.html","5d3534efb335677841ed8d85e09ab235"],["2016/05/01/coding和github同时使用/index.html","8a135fa918c092cfc19720f5f895bcb0"],["2016/05/01/利用Keepass2.x进行ftp或webdev同步/index.html","fbe3e60a0bc7ee9a4254ca531c1c851c"],["2016/05/01/搭建hexo博客小记/index.html","d150945228bc7c3ba87625a11ac38a05"],["2016/05/10/beamer的theme/index.html","91a69165e73d8d76e2978860468bbadd"],["2016/05/13/win8.1与ubuntu双系统安装（硬盘安装）/index.html","b51b48af14900463bbb7c6d700718e7b"],["2016/05/14/Hexo利用Swiftype建立站内搜索/index.html","bb53f4f0630de833e7a8091080cac132"],["2017/05/07/Leanote安装教程/index.html","bb8a3ea05be01de04e1467921f3870f5"],["2017/05/07/VTK-5.10.1 TO VTK-7.1.1的变动/index.html","3a6531f370a66399362bf9dc3245a274"],["2017/05/07/VTK-VS2008编译教程/index.html","45228195ec32b8633637fabc7199637f"],["2017/05/07/VTK运行Tcl文件/index.html","6d43fd5fcd6e64ee2535abd95a671fff"],["2017/05/07/vtk-imageblend图像融合报错/index.html","14c255beb565ec63ca22b8dce3a1df86"],["2017/05/07/利用Dropbox备份vps中的文件/index.html","1653d2bfdb94057b0420b1fa5eae9c3f"],["2017/05/07/如何利用Dropbox备份指定文件夹/index.html","bd7b0c24f9a24b7d6b267260d2ccfdae"],["2017/05/10/VTK提示MetaImage cannot read data from file/index.html","6d906c2aa5eebfef519c1ffd92fad7f2"],["2017/05/10/hexo在线编写博客/index.html","a9572407023fba4e7eec54d0d170239c"],["2017/05/10/分享一款极好用的Chrome插件/index.html","9039cb99f942b2377e09bade2a0d17f1"],["2017/05/11/Linux零打碎敲/index.html","96b3309b23c790c0396068561160ea6c"],["2017/05/15/Bash编程（一）/index.html","609fceb8d96e4de4b13607637ee4f2b4"],["2017/05/16/将图片自动上传到七牛并在markdown中引用/index.html","4d749fa714632051a2035ce10c4c7691"],["2017/06/19/软件推荐/index.html","12be0d90cb6be1611e7fcb45c7572c52"],["2018/07/20/HexoEditor-测试/index.html","395a4197a1a8c92d5dc56a77cadaf6cf"],["2018/07/26/四步安装好支持tensorflow和C++得Jupyter-notebook/index.html","59cdc53ef517571d227ae7c62477f841"],["archives/2016/05/index.html","864326ecc1a91b3e859194336a97208f"],["archives/2016/index.html","cabf593cc376c31d55b7bc46ba552455"],["archives/2017/05/index.html","7a5eb70c991b1ab7544a8dcbcfc0e4a0"],["archives/2017/05/page/2/index.html","72fe5881160841298ce45455bf8d4082"],["archives/2017/06/index.html","eb088f4aa065ce443c73fe7e83207f8e"],["archives/2017/index.html","3c34fc5e12e63b46219dc9db41ceff04"],["archives/2017/page/2/index.html","bc3a88f8708a50d1bb32c162fe9f2139"],["archives/2018/07/index.html","88ff991bcd7e1d696931d5f96e8e127d"],["archives/2018/index.html","5c1ffa9aee088baf09eeb71b36a2d49e"],["archives/index.html","cb536eab0afb726eac18800dbb09d1f3"],["archives/page/2/index.html","6bf85f181c237fb426a817dc6c72a7c9"],["archives/page/3/index.html","c982049a8e9fcf400ca27309e169eb01"],["avatar.jpg","ea7dfe92d6e37ae050863316c80e4d50"],["categories/Docker/index.html","16df494cdce7662eae209bb6dbbe3c8c"],["categories/Git/index.html","84b6a9f215f4da0767307e9f4d7414f8"],["categories/Linux/index.html","bb2d4d0ca80d48d71918bd0919cc41de"],["categories/VTK/index.html","d96855ccb2401df52c89ca4f04450402"],["categories/index.html","597a46b507a10f56203dfcf39fe7c6a3"],["categories/web/index.html","704930bf5c989400bbdae678428a2dd6"],["categories/博客/index.html","a0af3037beb52204a069b5e70ef13454"],["categories/软件/index.html","1e2c6bf230866ab62de3b2a15ad08b9d"],["css/index.css","581a4b829c16aa1e9e84c77fb1acbcce"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","76271f479a21ae16f1d9b42865cdf666"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","66e07d2d280cb869caf45d8175846088"],["js/copy.js","e874c6f7e7a19bc720141c5e06060d29"],["js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","ea8ce28130bd4ce09d5fca2ca22ad168"],["js/search/local-search.js","0f0737f61144676eebc9f0959dc60f01"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","ac1d0bd33c6a5efba4a736a8b3c9dfb7"],["page/3/index.html","4e10139fd13f35580d53df5f98174fe4"],["slides/index.html","90e588d6f3a608cce612407d21303269"],["tags/Bash/index.html","4807d02051047ef3798f0b21d78c04b3"],["tags/Chrome/index.html","3ec0c83771368830723690d64d82ebe7"],["tags/Docker/index.html","4adc18c5f647d41abc2d549080ca2f6f"],["tags/Dropbox/index.html","b96046dfc0862b1b6818ecf9893a56db"],["tags/Endnote/index.html","47f4c7a6a883bd0a1380109f43d7952f"],["tags/Git/index.html","7ca2312bb4ac6e45d80b6ca2681b9c82"],["tags/Github/index.html","7481c17b497d5d9775efe0fa40b7ee22"],["tags/Hexo/index.html","8c7150a4953a46ef0bbc190a4d2605cc"],["tags/KeePass/index.html","49b5650a2c01f3e229e59d35d040c7c9"],["tags/Linux/index.html","1c9f4035eb8f2e9aef51ab4e00f47650"],["tags/Markdown/index.html","aa67dc8f115a90357de5064404e24680"],["tags/Swiftype/index.html","875904dc9fd4aae612d15283cddb8c35"],["tags/Tcl/index.html","2989aaf454204ed1c652413514c2c217"],["tags/Ubuntu/index.html","1b4b108ed1a4b236109f3377812e5ba5"],["tags/VPS/index.html","73abd1051a5a0d267511b2b56a397d69"],["tags/VTK/index.html","c1704cde65f933cb9b11d8b5ad1ca245"],["tags/c/index.html","2b32cb00ec7c700c4fc4f317be7902ab"],["tags/cloud9/index.html","230bc677bbd84b1e06aafb56a95d6c23"],["tags/coding/index.html","d4b1d9e5d1a9d3c020eb0cb4473a0776"],["tags/ghost-blog/index.html","f264bba136bf7715cdaaf5037d0cb06b"],["tags/index.html","65889d6b79395207caf9ea9aac29c9a2"],["tags/jupyter-notebook/index.html","cad162eab0adecbac681661adc042423"],["tags/latex/index.html","334e2f86b3cadb649387b3bc6d7110f9"],["tags/leanote/index.html","0337271b31c74260204ff701f44b2b52"],["tags/python/index.html","3066cacf5570df7413755d1c5fa86010"],["tags/style/index.html","faaae7a051088b1ff22da77b6a5fc613"],["tags/visualstudio/index.html","432c750d3404f684e9c79ece223d23a9"],["tags/web/index.html","116474652b51d58a8289a06994f66743"],["tags/七牛云/index.html","556b7cbfac5737e40a305d88cc4e4298"],["tags/插件/index.html","d8cc3d27faab4628687b3d2b4ac5a7b6"],["tags/站内搜索/index.html","b363435fe2243c8afe3f26203f70065c"],["tags/系统安装/index.html","d5045adc190d32e009b2ac5a0d3b03cd"]];
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







