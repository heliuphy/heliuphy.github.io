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

var precacheConfig = [["2016/05/01/Endnote的style/index.html","7d9627479b8880ebbb7929ee73449e2d"],["2016/05/01/KeePass/index.html","5bdbe3d3eff3ebb10d61418ca34f561f"],["2016/05/01/VPS+Hexo+Dropbox创建个人博客/index.html","5c2f17bc21aabe9b76c4b67c84f4df2d"],["2016/05/01/VPS服务器搭建ghost blog/index.html","d31876db6331f886c6624f98b0779320"],["2016/05/01/coding和github同时使用/index.html","cdacdfe849a045d5f9589cb49a1045f2"],["2016/05/01/利用Keepass2.x进行ftp或webdev同步/index.html","538d381bc580e87d680e6ea81a5d9cce"],["2016/05/01/搭建hexo博客小记/index.html","cb4f40f9cc16478859821f85ba9420df"],["2016/05/10/beamer的theme/index.html","c5625052e8852156c49057966278991d"],["2016/05/13/win8.1与ubuntu双系统安装（硬盘安装）/index.html","d2bb66a4205c452936114e9788685e6c"],["2016/05/14/Hexo利用Swiftype建立站内搜索/index.html","6b568f627185387cb3fa802a1108abeb"],["2017/05/07/Leanote安装教程/index.html","40d8a13c6c6836bb1691c8be05965997"],["2017/05/07/VTK-5.10.1 TO VTK-7.1.1的变动/index.html","da66e2cc9aabd8ebb72fed3a056fa77e"],["2017/05/07/VTK-VS2008编译教程/index.html","f683ef7a59c837561e2933c4142b1c7a"],["2017/05/07/VTK运行Tcl文件/index.html","a9ccea885394b1ce066df2c1850395b0"],["2017/05/07/vtk-imageblend图像融合报错/index.html","10a01d347f184ab8e2a8ee80bcb232c2"],["2017/05/07/利用Dropbox备份vps中的文件/index.html","eee73b6f0264a772877cde18bc6eb393"],["2017/05/07/如何利用Dropbox备份指定文件夹/index.html","21dc1877c203befafe18ee0b89363e4c"],["2017/05/10/VTK提示MetaImage cannot read data from file/index.html","b0261b936f92ea1bff6c9cbff948b05b"],["2017/05/10/hexo在线编写博客/index.html","e19d16277971cbd48fb42e9841c39e15"],["2017/05/10/分享一款极好用的Chrome插件/index.html","6a29790f05be2bddae6d2adc1856e0c4"],["2017/05/11/Linux零打碎敲/index.html","e0a389e78a2e9680f4df0a682d4f1e11"],["2017/05/15/Bash编程（一）/index.html","cfd7d6c7151946cdf6c7cc7fa742dbd8"],["2017/05/16/将图片自动上传到七牛并在markdown中引用/index.html","46d7545a595c0c29e7d9de3cac1b43b5"],["2017/06/19/软件推荐/index.html","5105d2139d44c95bd8bc77a580bcf489"],["2018/07/20/HexoEditor-测试/index.html","4f4862e02f41662e4ddb3564983d3824"],["2018/07/26/四步安装好支持tensorflow和C++的Jupyter-notebook/index.html","ce274429524b7df405f9476615bb7a76"],["2018/07/28/自己构建Docker镜像在自己的服务器上搭建支持C++和tensorflow的jupyter-notebook/index.html","7da355bb23a6bc53864d344a695b468d"],["2018/10/14/阮一峰JS学习笔记/index.html","a3ef1ca74e9fc5d201f62f069be4bef6"],["archives/2016/05/index.html","c0e60cb4fbe8d4b08c90e7ff167afe40"],["archives/2016/index.html","969d0526cf7e6afd7c691b909d1f2c30"],["archives/2017/05/index.html","c54022157efd0b8a9677d903e5291a5b"],["archives/2017/05/page/2/index.html","fd458f420fba7a25fb82d12b1202bdf6"],["archives/2017/06/index.html","087809ef14b0cbf985edfdb1d3d46dae"],["archives/2017/index.html","5e01a19eb4fb7de7746e7645468b0eaf"],["archives/2017/page/2/index.html","01f9c1ee13489bff11ccb9e6efe89ad6"],["archives/2018/07/index.html","04352bcaf0047ac60d83866b7349686b"],["archives/2018/10/index.html","e8ee2e3881b6a47fa430536333706956"],["archives/2018/index.html","35b59126c3227d9baadfa69f48feb843"],["archives/index.html","ce2cd6a539bfae95381502b047241161"],["archives/page/2/index.html","dd4623b711d0b0f7bc6c7de716810dc1"],["archives/page/3/index.html","667f7bbd7364168bf6cbd6b99b83a5aa"],["avatar.jpg","ea7dfe92d6e37ae050863316c80e4d50"],["categories/Docker/index.html","c40cde106799a57ca62d3ade7afed5f0"],["categories/Git/index.html","1d14553c51794f215bfdb4e1d93aab33"],["categories/Linux/index.html","ac04be417c98c8c0da80d409a96702e6"],["categories/VTK/index.html","b29724ffa7508f36824c7c5cf964d22a"],["categories/index.html","eb153e8a67d950a0e49cdd9e84d52f69"],["categories/web/index.html","4ccd6c68eba3eaa02d739797f58ffa27"],["categories/博客/index.html","98103a34649ce780ea5ce0e7c695835b"],["categories/软件/index.html","189061a247cf9d4e5f826b8ee3bc5f73"],["css/index.css","581a4b829c16aa1e9e84c77fb1acbcce"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","bec6ad209accdca3be5d8f95a62eb5fc"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","a8c293e9463a4b92f2c19e1fc0f6db31"],["js/copy.js","e874c6f7e7a19bc720141c5e06060d29"],["js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","ea8ce28130bd4ce09d5fca2ca22ad168"],["js/search/local-search.js","0f0737f61144676eebc9f0959dc60f01"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","06f72a6cafa9b992111c6c65c13f2490"],["page/3/index.html","0335458681177a0c07d0927672deba9a"],["posts_bak/Endnote的style.html","29ed45ff542f675be3b2c789b85695c0"],["posts_bak/HexoEditor-测试.html","5c91e67b4c84a221080a67115f506a7c"],["posts_bak/Linux零打碎敲.html","71e3dd7546caf18290bad64f6806a9a4"],["posts_bak/VTK-5.10.1 TO VTK-7.1.1的变动.html","5c07ae5101c0500beb0102278a0e3eb4"],["posts_bak/VTK-VS2008编译教程.html","3266efb8db21d397c32c02c5ea404938"],["posts_bak/VTK提示MetaImage cannot read data from file.html","070780c4cc8ab5325e42bc839ea7f322"],["posts_bak/VTK运行Tcl文件.html","d7e1bf3b27c142865899a69df16150a5"],["posts_bak/beamer的theme.html","e1ae99b0f2569709e0f5ea8bdb16cc78"],["posts_bak/coding和github同时使用.html","47a17a18dc8f08d922aee287b42882a9"],["posts_bak/vtk-imageblend图像融合报错.html","f2c7d4b350a7352f292be3a70aea2c13"],["posts_bak/利用Keepass2.x进行ftp或webdev同步.html","4503604fea9aa4b2d9502eacdd2d9680"],["posts_bak/如何利用Dropbox备份指定文件夹.html","bc383529280c7fe334178c54cc5ddd6f"],["posts_bak/软件推荐.html","2b01b58deb42b7ce63e06231c16536e4"],["slides/index.html","8747b63f2dee9b140be3e099d44ca66b"],["tags/Bash/index.html","23c4a932be88626bfc1e97630233f101"],["tags/Chrome/index.html","f6e5dbca9e0ff2c65c5d72379dff8ad2"],["tags/Docker/index.html","b391cbeed408efbaa9713bd57f02634c"],["tags/Dropbox/index.html","a6692e776fd1ce082328dfdd47507807"],["tags/Endnote/index.html","4e70df3568fe729c0a79d22dd8b8c7d9"],["tags/Git/index.html","47177b2f7963fa0cf7571c9d4443818c"],["tags/Github/index.html","4dd4ab543d49279946f300c36c1fd30b"],["tags/Hexo/index.html","5797e02076ebda1dfe823d8d1a3ced95"],["tags/Jupyter/index.html","db32bd052252e67fb06aeffe6d130daa"],["tags/KeePass/index.html","288e0989350ec6c9167d2353eb97e48d"],["tags/Linux/index.html","723dd5e5dcb38c3cb7a2d32a6b8c4d09"],["tags/Markdown/index.html","5fbed5995bee99d019cb10b55ad8dc39"],["tags/Swiftype/index.html","9ee01b331cf1f98a1262518bb2ca0baf"],["tags/Tcl/index.html","d6a42229ab5657dd4d4a63765478c23c"],["tags/Ubuntu/index.html","9bf478649ff7f3683de9c22fb210b28f"],["tags/VPS/index.html","f61f0a06fa649fa6715fcde0a9dafa99"],["tags/VTK/index.html","ac510cc840f6475d19804d418d7149c3"],["tags/c/index.html","8a4c176e831120e14e4733b84e0076d5"],["tags/cloud9/index.html","148740e4cea069845115cc10009afb05"],["tags/coding/index.html","34588d35d30a21616f9b7d39682e2c5e"],["tags/ghost-blog/index.html","f3fa34291a8b67521e3ddf10a53a89f2"],["tags/index.html","9342342a0f38c461c7eeb440c91aa94d"],["tags/javascript/index.html","bc6b9cf6a1466a823c29b75d092e7312"],["tags/jupyter-notebook/index.html","29bd8392058c4a32f39c695f12660d00"],["tags/latex/index.html","7c1e83a4527fcb0530cc6d2e0abf9cfe"],["tags/leanote/index.html","a9ae2949e5d60a29ea38eadedb3352c8"],["tags/python/index.html","7b122e128257d84c769108ffe1a463c9"],["tags/style/index.html","98c5437c10c4bff6c1b3bb0bde1e88c7"],["tags/visualstudio/index.html","882e668c0bd75e66a98d88ef4847c1c9"],["tags/web/index.html","34b5ffa1bbd9652fbd0665c108663402"],["tags/七牛云/index.html","c7692784d489e9d8306bc2e6f947b7e5"],["tags/插件/index.html","31cdcbbbde8fe39ff4cb7fd0b83e1dc6"],["tags/站内搜索/index.html","3d072e88e4234edf5c37784207f9df64"],["tags/系统安装/index.html","ab530cc41e36698df5ce4c531d33a182"]];
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







