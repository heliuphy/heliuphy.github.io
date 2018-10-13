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

var precacheConfig = [["2016/05/01/Endnote的style/index.html","f5a9df2fc00f5c36aab857b7300dc239"],["2016/05/01/KeePass/index.html","5696e6ff50a3c297c9f27898252d9a3d"],["2016/05/01/VPS+Hexo+Dropbox创建个人博客/index.html","87ba8a141f902bc5340d142431182d4b"],["2016/05/01/VPS服务器搭建ghost blog/index.html","b25926f9ba21b0fecf36152f2ca8954c"],["2016/05/01/coding和github同时使用/index.html","55eee91ff4774a7207c4bd04f885a6fa"],["2016/05/01/利用Keepass2.x进行ftp或webdev同步/index.html","0f943c4039b975b54c1b7f6b79ef126c"],["2016/05/01/搭建hexo博客小记/index.html","c6c31b8bd3cd95ae4bee741ff9ccf65e"],["2016/05/10/beamer的theme/index.html","aedee7edc11e5299a58c4110222b3847"],["2016/05/13/win8.1与ubuntu双系统安装（硬盘安装）/index.html","7cd98929c33b23befc821c0ac33c8591"],["2016/05/14/Hexo利用Swiftype建立站内搜索/index.html","de45a1d4f29814200c718e18f668e720"],["2017/05/07/Leanote安装教程/index.html","49166163a4bcc2b031c6f24f0f0f3176"],["2017/05/07/VTK-5.10.1 TO VTK-7.1.1的变动/index.html","9ef0b25f7a3c7d8710bdadf3cf1353ac"],["2017/05/07/VTK-VS2008编译教程/index.html","ca69205a07072e4e4bb3a2ebce455356"],["2017/05/07/VTK运行Tcl文件/index.html","d9b6af62f36aeb67a6fd80d7e454d7d9"],["2017/05/07/vtk-imageblend图像融合报错/index.html","b5db9da45be94a9d9c65aadb8b0d6ecc"],["2017/05/07/利用Dropbox备份vps中的文件/index.html","d17fe5e3645cd129d43f833da083f037"],["2017/05/07/如何利用Dropbox备份指定文件夹/index.html","018fc1d77290e5a66f27237e39ef1566"],["2017/05/10/VTK提示MetaImage cannot read data from file/index.html","754fa8bfc1a1dcb998d7eaf6123fa6d0"],["2017/05/10/hexo在线编写博客/index.html","c8189e58cd46c541e6293954549959a3"],["2017/05/10/分享一款极好用的Chrome插件/index.html","071be7ff9b272249d9293ebe78f89a41"],["2017/05/11/Linux零打碎敲/index.html","1e2a3c28d579ae7addf3a78bec6f20ad"],["2017/05/15/Bash编程（一）/index.html","fe330bb637c74cbd80b8a047a1e58fb1"],["2017/05/16/将图片自动上传到七牛并在markdown中引用/index.html","5c2bafeb247eb04c6dd4d691a8d81bdc"],["2017/06/19/软件推荐/index.html","e309e4cf241bcbb26bba7bd416b3ab49"],["2018/07/20/HexoEditor-测试/index.html","eeedf72326b47d9a7d472aa02a8ce024"],["2018/07/26/四步安装好支持tensorflow和C++的Jupyter-notebook/index.html","ca478ccbbf64087e2d654d0473d0b82c"],["2018/07/28/自己构建Docker镜像在自己的服务器上搭建支持C++和tensorflow的jupyter-notebook/index.html","0771a48054257e190024309c37816d87"],["archives/2016/05/index.html","24d87dde92485627ec8cd216040bd5ab"],["archives/2016/index.html","78a9aac2c1d94bf1bfb43e5708484aa2"],["archives/2017/05/index.html","4b72d64a74712eef37d826de13c0fcd9"],["archives/2017/05/page/2/index.html","6a23ef43dcf5f51c602c019ab0d6dfff"],["archives/2017/06/index.html","1f97b1967886dfda1d2e5d3e0e4996a6"],["archives/2017/index.html","1b2d5091e910183ca28f92a63b05aee7"],["archives/2017/page/2/index.html","50233a21f405ea89ae8efb83f9c3c8ee"],["archives/2018/07/index.html","3b55fb46d68b07695e4a39baf1eca486"],["archives/2018/index.html","26540c6f8c71ae87d4f648eb38494fd6"],["archives/index.html","b94e3b1df571f2e97f1eae90f4e5edec"],["archives/page/2/index.html","9ef7943b8128120f0c0db053edc5ed92"],["archives/page/3/index.html","7129234ae19a54b98b3bf0ade7ca66a1"],["avatar.jpg","ea7dfe92d6e37ae050863316c80e4d50"],["categories/Docker/index.html","20b4766c3c80a0c46f68ac779491dcaa"],["categories/Git/index.html","a6935d2afc5cbbb24c58c0cacfbc28fe"],["categories/Linux/index.html","926e0fd933ff9217570cae7a2a04e6e7"],["categories/VTK/index.html","31ebfe27a194727264807f0e48d21342"],["categories/index.html","323da8e2daab6e1c6421490ffb56c962"],["categories/web/index.html","0093a31203f31365f1c6ff2d57b3cf7a"],["categories/博客/index.html","1aed4ad8593ad82c632d5e633e138196"],["categories/软件/index.html","f72d1cef72c0e1e1f80bdba97101e680"],["css/index.css","581a4b829c16aa1e9e84c77fb1acbcce"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","f309bee947a07c255b3c67eeab0ae049"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","368af8192055537206b6f3f2338d2e51"],["js/copy.js","e874c6f7e7a19bc720141c5e06060d29"],["js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","ea8ce28130bd4ce09d5fca2ca22ad168"],["js/search/local-search.js","0f0737f61144676eebc9f0959dc60f01"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","8d570d98f1d3a3d81906c476794c8d05"],["page/3/index.html","e51c79ca1a2c8b37bbfba8dd478d3307"],["slides/index.html","8a3685215fc2e48bac2b4d9af32d2162"],["tags/Bash/index.html","21b2108ffdeb9f27b796380632d39503"],["tags/Chrome/index.html","3ee887919f787c9ca7014403e371946a"],["tags/Docker/index.html","5fcede7cb7cea7058504706dab9a96b9"],["tags/Dropbox/index.html","85a7c6f012c7ba24148cbe52d3aae387"],["tags/Endnote/index.html","2e02ca24592871147b9c2cdc9f745464"],["tags/Git/index.html","c60d3b537934d03d7af36d11108cb614"],["tags/Github/index.html","e19d2785f24a6f0c30dddac27f9c27ec"],["tags/Hexo/index.html","6332779ab476d3339fff1542b1e400f4"],["tags/Jupyter/index.html","e83f9c1e88d00fe49c95e85e5adcb914"],["tags/KeePass/index.html","dae65370c05e57ed5aaaf99f4a63724d"],["tags/Linux/index.html","0db6b7787bc1e1f93c7b294467e89600"],["tags/Markdown/index.html","53e5b03e2b4b151cca36bec6cc0fecdf"],["tags/Swiftype/index.html","43f71b1263fe6c7420de1d55fe3ab632"],["tags/Tcl/index.html","885269949318d7c180f2d989e6e71ef5"],["tags/Ubuntu/index.html","f93d9c593369dc21903aaafb27724fdf"],["tags/VPS/index.html","19dc59091b16f3ef1b325f7fb041daf7"],["tags/VTK/index.html","f34403003e70739838addc9c57e14377"],["tags/c/index.html","cfeb707a4c960e688918f120ac86a3c8"],["tags/cloud9/index.html","b117692bfa8ea694ceac47a548d8fb66"],["tags/coding/index.html","4d77558890bf880ff0c43bdbf76888d2"],["tags/ghost-blog/index.html","301e4a6d123884d983f812c4366ed956"],["tags/index.html","7d7f481fbbc5b131bf44f7c7a5ce5fff"],["tags/jupyter-notebook/index.html","c78e5f0fbc4ee16d600cd298a6986d7d"],["tags/latex/index.html","53301de65190925a9119cdab0da07d79"],["tags/leanote/index.html","cedc7b4e666fb30ef574c3466be8fb87"],["tags/python/index.html","4cb59b0ca7580034d3e1affc5037591f"],["tags/style/index.html","5ee2db275d88f717dbbd605299036244"],["tags/visualstudio/index.html","917af6c342ff9022a79b44627affa867"],["tags/web/index.html","a8b71477ded565b50d1cb23d35b478b3"],["tags/七牛云/index.html","4d50d468f5168e927677d5aaa883f154"],["tags/插件/index.html","e6146d0a32d332a3bcaee734afee630a"],["tags/站内搜索/index.html","62a57463dc9954ce435a9bf4573e1692"],["tags/系统安装/index.html","23ce19a9932c4a91fb8b6d83ef5bfc15"]];
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







