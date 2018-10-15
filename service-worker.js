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

var precacheConfig = [["2016/05/01/Endnote的style/index.html","7d9627479b8880ebbb7929ee73449e2d"],["2016/05/01/KeePass/index.html","9206469201b5d254925ac27eb1283905"],["2016/05/01/VPS+Hexo+Dropbox创建个人博客/index.html","b5388e894d94aa72720e8716a49c288b"],["2016/05/01/VPS服务器搭建ghost blog/index.html","a7e828c8fa84c6534956205aca015789"],["2016/05/01/coding和github同时使用/index.html","cdacdfe849a045d5f9589cb49a1045f2"],["2016/05/01/利用Keepass2.x进行ftp或webdev同步/index.html","538d381bc580e87d680e6ea81a5d9cce"],["2016/05/01/搭建hexo博客小记/index.html","90615e7c5bd8a2816664fe0d3c2da9e3"],["2016/05/10/beamer的theme/index.html","c5625052e8852156c49057966278991d"],["2016/05/13/win8.1与ubuntu双系统安装（硬盘安装）/index.html","fd2b9bf6cd15eb78bccd443bcffac05e"],["2016/05/14/Hexo利用Swiftype建立站内搜索/index.html","fd41f345aaaccfd434c03388d8962bd0"],["2017/05/07/Leanote安装教程/index.html","67e56c49bb4094c6998bd7ded3e49020"],["2017/05/07/VTK-5.10.1 TO VTK-7.1.1的变动/index.html","da66e2cc9aabd8ebb72fed3a056fa77e"],["2017/05/07/VTK-VS2008编译教程/index.html","f683ef7a59c837561e2933c4142b1c7a"],["2017/05/07/VTK运行Tcl文件/index.html","a9ccea885394b1ce066df2c1850395b0"],["2017/05/07/vtk-imageblend图像融合报错/index.html","10a01d347f184ab8e2a8ee80bcb232c2"],["2017/05/07/利用Dropbox备份vps中的文件/index.html","223fd4aeaa1fd40d6bba5c96cfc4c75f"],["2017/05/07/如何利用Dropbox备份指定文件夹/index.html","21dc1877c203befafe18ee0b89363e4c"],["2017/05/10/VTK提示MetaImage cannot read data from file/index.html","b0261b936f92ea1bff6c9cbff948b05b"],["2017/05/10/hexo在线编写博客/index.html","b23c6a0aa3f7e45ee8b2e5e3e759fd7d"],["2017/05/10/分享一款极好用的Chrome插件/index.html","014e533a9a37597dd7fbe716fd16ee01"],["2017/05/11/Linux零打碎敲/index.html","e0a389e78a2e9680f4df0a682d4f1e11"],["2017/05/15/Bash编程（一）/index.html","139a113d0334080cd9c295303ff48bf9"],["2017/05/16/将图片自动上传到七牛并在markdown中引用/index.html","b085fc1465076877becce00615df9887"],["2017/06/19/软件推荐/index.html","5105d2139d44c95bd8bc77a580bcf489"],["2018/07/20/HexoEditor-测试/index.html","4f4862e02f41662e4ddb3564983d3824"],["2018/07/26/四步安装好支持tensorflow和C++的Jupyter-notebook/index.html","ff0c278f63d816f636d59cc8927f903e"],["2018/07/28/自己构建Docker镜像在自己的服务器上搭建支持C++和tensorflow的jupyter-notebook/index.html","373c5dad96bf12dc67309693e92f0ff7"],["2018/10/14/阮一峰JS学习笔记/index.html","a63ad52a3bf58c7b80d6c02881bd8f16"],["archives/2016/05/index.html","34df9a50582654eb46e7ee0d3e699e99"],["archives/2016/index.html","3c0f636e656112aa69d4d2f2204284a5"],["archives/2017/05/index.html","bb0c3e9c5381bd37a1ba1eee0be1fb58"],["archives/2017/05/page/2/index.html","fd458f420fba7a25fb82d12b1202bdf6"],["archives/2017/06/index.html","087809ef14b0cbf985edfdb1d3d46dae"],["archives/2017/index.html","b0513f5a1e942c53a8de50125ee84ed4"],["archives/2017/page/2/index.html","01f9c1ee13489bff11ccb9e6efe89ad6"],["archives/2018/07/index.html","f8c5b0f36a5ca09abff8e0c5a9151eb8"],["archives/2018/10/index.html","8f328362a7221f6ae958088f078965f2"],["archives/2018/index.html","aa50697c7c4381c4706f258a225c66c3"],["archives/index.html","abeeae8af83250701bc9ff644da9673b"],["archives/page/2/index.html","809806076ed23c827fcad0358c077238"],["archives/page/3/index.html","667f7bbd7364168bf6cbd6b99b83a5aa"],["avatar.jpg","ea7dfe92d6e37ae050863316c80e4d50"],["categories/Docker/index.html","18df27829e115e4d5387cb23f02cb557"],["categories/Git/index.html","1d14553c51794f215bfdb4e1d93aab33"],["categories/Linux/index.html","7d7c8f2c547a14cb1c1449849c26d074"],["categories/VTK/index.html","b29724ffa7508f36824c7c5cf964d22a"],["categories/index.html","d5ee90e0255226fb0837d8bb0f6593fd"],["categories/web/index.html","446b8de6bdaedbfdfd487b6eaffeee36"],["categories/博客/index.html","e89e0c9b87ddb6b56aa52b9d86c1930d"],["categories/软件/index.html","7f4f0eaed601aea786932a5a284331e9"],["css/index.css","581a4b829c16aa1e9e84c77fb1acbcce"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","8923d2789cf047eb30fbc3a419080e64"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","6fe83c055c1bede9b234ab5a381d6e58"],["js/copy.js","e874c6f7e7a19bc720141c5e06060d29"],["js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","ea8ce28130bd4ce09d5fca2ca22ad168"],["js/search/local-search.js","0f0737f61144676eebc9f0959dc60f01"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","dbaa0c55468e6332bde72f443958cb8f"],["page/3/index.html","0335458681177a0c07d0927672deba9a"],["slides/index.html","a918b4e6919409b8c24f36cf1f846565"],["tags/Bash/index.html","074a3bf4c78756e1d128e53a7001a202"],["tags/Chrome/index.html","014e7364ec88a30c71c24e48ad49988a"],["tags/Docker/index.html","ab2aad1707c11f2f27cdaec8c24ea2db"],["tags/Dropbox/index.html","8140edbeabf8d73049492a20f607226b"],["tags/Endnote/index.html","4e70df3568fe729c0a79d22dd8b8c7d9"],["tags/Git/index.html","47177b2f7963fa0cf7571c9d4443818c"],["tags/Github/index.html","4dd4ab543d49279946f300c36c1fd30b"],["tags/Hexo/index.html","6df16a4f187de03d2ca1886ef7175d66"],["tags/Jupyter/index.html","6406273c9e3c4f423ebaac6326e175cb"],["tags/KeePass/index.html","5856890d11741e528a3a27ec9f07f327"],["tags/Linux/index.html","34e0b82f3c966e02508c15e5061f2905"],["tags/Markdown/index.html","36b735599a6665b21657fd0f04280fa8"],["tags/Swiftype/index.html","984b9ffb119e24da1e74af7ea032c2d8"],["tags/Tcl/index.html","d6a42229ab5657dd4d4a63765478c23c"],["tags/Ubuntu/index.html","613ef8ef8b572b482416a1f6b8d4d259"],["tags/VPS/index.html","245dbfcde0188dcefe0d430cd979b17a"],["tags/VTK/index.html","ac510cc840f6475d19804d418d7149c3"],["tags/c/index.html","296ab75bbfa245d4a8a479c4281ac39d"],["tags/cloud9/index.html","ef5a597d64b94131929c60034ab9a6a1"],["tags/coding/index.html","34588d35d30a21616f9b7d39682e2c5e"],["tags/ghost-blog/index.html","cfa1ce942d438a5e50ba26d3975bf723"],["tags/index.html","3bf90488b5a0c10060ee705002daef9b"],["tags/javascript/index.html","449d170182ecd55b439c53ebe80cd352"],["tags/jupyter-notebook/index.html","11c06703cacfd6b4c7792eab9f6105ce"],["tags/latex/index.html","7c1e83a4527fcb0530cc6d2e0abf9cfe"],["tags/leanote/index.html","4c79d068f563ae021dd2f460f8decc52"],["tags/python/index.html","e41926eba2653f38ba7889a935f917f6"],["tags/style/index.html","98c5437c10c4bff6c1b3bb0bde1e88c7"],["tags/visualstudio/index.html","882e668c0bd75e66a98d88ef4847c1c9"],["tags/web/index.html","f86cc034d5af7ab68433a7c94d166e09"],["tags/七牛云/index.html","32555af89ecb00ae134f7481ab1adc3a"],["tags/插件/index.html","a342cc6bee83deac8c66cb24fb237b60"],["tags/站内搜索/index.html","914d21c99e68c9d63d571fb8efddc4a7"],["tags/系统安装/index.html","e02abea8e67eb1d94079a87113672de2"]];
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







