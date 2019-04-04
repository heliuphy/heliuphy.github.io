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

var precacheConfig = [["2016/05/01/KeePass/index.html","1c7814a19843ef230606e1e481f3c11e"],["2016/05/01/VPS+Hexo+Dropbox创建个人博客/index.html","dd39321c4611b0c69d53d224694739c0"],["2016/05/01/VPS服务器搭建ghost blog/index.html","d86d23f5540e76c6e43afcbf3313959b"],["2016/05/01/搭建hexo博客小记/index.html","cd8104a0e5191ccb7d88bded18f87966"],["2016/05/13/win8.1与ubuntu双系统安装（硬盘安装）/index.html","78c5f3f3e38dc03a5ef1d048346d63eb"],["2016/05/14/Hexo利用Swiftype建立站内搜索/index.html","047a490fe6404d093dc7c60aaada3311"],["2017/05/07/Leanote安装教程/index.html","6cc08f40658a93f4ac21864beeb4383c"],["2017/05/07/利用Dropbox备份vps中的文件/index.html","b3a411ea1833deb151ceb343a9b75cc7"],["2017/05/10/hexo在线编写博客/index.html","33dcbe468f1bd4d6d4321526e82af5c3"],["2017/05/10/分享一款极好用的Chrome插件/index.html","93b1504eb0917ae6cc2fb58b49c089cd"],["2017/05/15/Bash编程（一）/index.html","0d6c3d5fd362c919fcc9fef920ab7681"],["2017/05/16/将图片自动上传到七牛并在markdown中引用/index.html","0df5a020f24d8566c7ca26da206060d1"],["2018/07/26/四步安装好支持tensorflow和C++的Jupyter-notebook/index.html","bb603a33a941ad9ac6b3de1f00310eab"],["2018/07/28/自己构建Docker镜像在自己的服务器上搭建支持C++和tensorflow的jupyter-notebook/index.html","5f9bd43099b014264e2de215cc72479a"],["2018/10/14/阮一峰JS学习笔记/index.html","82f2a634263f87526c2469b7f5ee1cb2"],["2018/10/20/colab读写外部文件的四种方式/index.html","83354ed7d9b8a407bddd81866203833b"],["2018/11/28/OS-X-10.14-怎么安装非AppStore的Safari扩展/index.html","d44bece5d4d8b575c16da745992f9aa7"],["2018/12/06/双系统win10访问ubuntu系统文件/index.html","c53733f1fb707fb218fb54ec3340727f"],["2018/12/22/Ubuntu18.04完美配置/index.html","f8233323d6c6dccc1b59ffbab63dd516"],["2018/12/24/iPhone怎么在手机上设置自定义铃声/index.html","9014f59e70f7a38554d1d61e9e81273e"],["README.html","6e998e6ab788fece7d6d73cb69aa1cc0"],["archives/2016/05/index.html","3d7009841c8646dc475437052866e9e4"],["archives/2016/index.html","55b386e777e8aee55793c737324e9dc8"],["archives/2017/05/index.html","92eab0ffb3805e3bb20c130a72c45989"],["archives/2017/index.html","4e4f261ffa4429ba969e6f0de2a99074"],["archives/2018/07/index.html","5268f0a2aa1d468ec9435e9712fc5c05"],["archives/2018/10/index.html","74f9aea34a307cf99a33f070e3a70667"],["archives/2018/11/index.html","816db2eb7de51a0cce034bbc1a20be19"],["archives/2018/12/index.html","e14146db7d66d0fdec49afef654d6004"],["archives/2018/index.html","1ec44871ffcced28c2d66cbb3c681a8e"],["archives/index.html","7f628466bbecdc661b67d9d733debcda"],["archives/page/2/index.html","ab6baf472fd3e2ab2be352ec35fa7e5d"],["avatar.jpg","ea7dfe92d6e37ae050863316c80e4d50"],["categories/Docker/index.html","eb68bdda203a3c2ae1152bd3e33496a8"],["categories/Linux/index.html","12cf7feba3370a2300458584adce92a1"],["categories/index.html","ca2560a4f36e5b910cd1eaa7219a0bfb"],["categories/web/index.html","5d2c4c464febfe2f262414e1b988769b"],["categories/博客/index.html","45bf104f6ab0b4d8c74a185921edf1f2"],["categories/机器学习/index.html","9381e26be7e2c8bdd4423f641b689c76"],["categories/浏览器/index.html","aa794c04d7e2e26b06cc665cda6fbb2d"],["categories/软件/index.html","7f2aa498264e1f89ad2871aa367da844"],["css/index.css","c133e0e093d9ddbc3cf9028530dd254c"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","7177afdc51aaff967b808a040a59962a"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","5e50737605d2337120bb7edd29fc5619"],["js/copy.js","10b58e108593f60eb272b8ecda1f2a27"],["js/fancybox.js","9cfc893a86a6bfc51f4db6293c4d2b08"],["js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","e2433ba220e56fa03095f6164bac719e"],["js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","1d57e5a1945fee099b3802f3f83f1d7b"],["posts_bak/Endnote的style.html","ab9b0b2d3b09e0eaef158c8bb4e6baac"],["posts_bak/HexoEditor-测试.html","b56a0c7ede3c2410a34b5d0f138344f8"],["posts_bak/Linux零打碎敲.html","5943f90a98e513444fc7c74e7754f1ee"],["posts_bak/VTK-5.10.1 TO VTK-7.1.1的变动.html","7f6207911c8f60523d17d8311516772a"],["posts_bak/VTK-VS2008编译教程.html","4e174c918d51f91719ac8e84c6128827"],["posts_bak/VTK提示MetaImage cannot read data from file.html","903ac0836a23dce4c881fd2862aa9bfd"],["posts_bak/VTK运行Tcl文件.html","8b0bc4547fd3fad0cd2ee0a1feb6287a"],["posts_bak/beamer的theme.html","ac722d028c50f469f2f7dacf026a7022"],["posts_bak/coding和github同时使用.html","2d5d64e2c1c8eadffede44d5bf2fb4dc"],["posts_bak/vtk-imageblend图像融合报错.html","7982c44e9fae73f2bf6250ca284fd20c"],["posts_bak/利用Keepass2.x进行ftp或webdev同步.html","dd88921eab9d26207a877107ef23152e"],["posts_bak/如何利用Dropbox备份指定文件夹.html","a5d2d489c6f5bc7f7a636def09ecf190"],["posts_bak/软件推荐.html","6624ede0dfdae135a27e65221e08f437"],["slides/index.html","1bd521044a69043d2ac480a2f4234bd8"],["tags/Bash/index.html","57c52eebad20affe4e8dec47abfa168d"],["tags/Chrome/index.html","1629e565683fe7d41d06be29d6731122"],["tags/Docker/index.html","4d2f8fcd18595a3a97c6c9286139fe9b"],["tags/Dropbox/index.html","d6df9c72b6b90fdcea9e78af47b0f711"],["tags/Hexo/index.html","c4da7a2b5367b4690556cd0b5db5e645"],["tags/Jupyter/index.html","b2800c3476c9821cda9210734d86eb53"],["tags/KeePass/index.html","5f1e351302e9788752c62f6fe11a8d42"],["tags/Linux/index.html","340a6f42e3d0d85e3c906d358101db8a"],["tags/Markdown/index.html","d7dc83c95d7d85fc9b53433304b69eef"],["tags/Safari/index.html","f6f39391f6ecd1658aa48c9b45c190d2"],["tags/Swiftype/index.html","c9811ab4ed60e2101516b6879f83b8cc"],["tags/Ubuntu/index.html","9ba54750184b6c82bde16d23890314ca"],["tags/VPS/index.html","be105a1dad0e3a654685675735ff9ff7"],["tags/c/index.html","20d1ee68a9c63bc740df8e23f65d5f21"],["tags/cloud9/index.html","211783e06189e713523b5dcd466e42d7"],["tags/colab/index.html","b09bdb05458d6869d7facc892cf60d17"],["tags/ghost-blog/index.html","0b1d40ff2a2f6ae54fe9807d435c64ba"],["tags/iPhone/index.html","2e109268ef96ea1759aa9ef3e1e2d6a3"],["tags/index.html","b49d8e0e621132d209ce079d602d8c65"],["tags/javascript/index.html","e075801710d1257e08492507cad545b7"],["tags/jupyter-notebook/index.html","462e4ce471d0c8b88691bebfdb3a1fc4"],["tags/leanote/index.html","bd30e27f18f32caf7686160edbe70b1e"],["tags/python/index.html","141f7b1e8cbac504356588c27387d869"],["tags/web/index.html","b96ad8c1d8f5bb652632eb5be7658ac6"],["tags/七牛云/index.html","7f7f63136862089374942ae7325c3174"],["tags/双系统/index.html","569bdd3308a5daaf76f0976ee0d86678"],["tags/插件/index.html","22a3351d23f703498bbdb62da001cf99"],["tags/站内搜索/index.html","885ca0791a9984fd1691b875681ae9fe"],["tags/系统安装/index.html","621f1cb44f80963885c6651601c53e6c"],["tags/系统美化/index.html","d5b1481b706c7e6ce20de504efb4a97c"]];
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







