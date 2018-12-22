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

var precacheConfig = [["2016/05/01/Endnote的style/index.html","7d9627479b8880ebbb7929ee73449e2d"],["2016/05/01/KeePass/index.html","8e92e71038a8ab4650489f9614697c7f"],["2016/05/01/VPS+Hexo+Dropbox创建个人博客/index.html","839bc75b65e7f12a036e3153444adaae"],["2016/05/01/VPS服务器搭建ghost blog/index.html","6341cfdcfffae0c0d998feaa14842e83"],["2016/05/01/coding和github同时使用/index.html","cdacdfe849a045d5f9589cb49a1045f2"],["2016/05/01/利用Keepass2.x进行ftp或webdev同步/index.html","538d381bc580e87d680e6ea81a5d9cce"],["2016/05/01/搭建hexo博客小记/index.html","2950c0b3a9f404b29ead45e5ebdded53"],["2016/05/10/beamer的theme/index.html","c5625052e8852156c49057966278991d"],["2016/05/13/win8.1与ubuntu双系统安装（硬盘安装）/index.html","86a458d80327e7c4d3fb7881dee023a4"],["2016/05/14/Hexo利用Swiftype建立站内搜索/index.html","2bf7a979aeb2381a86f163af1907ce45"],["2017/05/07/Leanote安装教程/index.html","5dabdf779a98717f9e406323fe83a954"],["2017/05/07/VTK-5.10.1 TO VTK-7.1.1的变动/index.html","da66e2cc9aabd8ebb72fed3a056fa77e"],["2017/05/07/VTK-VS2008编译教程/index.html","f683ef7a59c837561e2933c4142b1c7a"],["2017/05/07/VTK运行Tcl文件/index.html","a9ccea885394b1ce066df2c1850395b0"],["2017/05/07/vtk-imageblend图像融合报错/index.html","10a01d347f184ab8e2a8ee80bcb232c2"],["2017/05/07/利用Dropbox备份vps中的文件/index.html","f0bc644241cf9a0b369dae7e54fddb9e"],["2017/05/07/如何利用Dropbox备份指定文件夹/index.html","21dc1877c203befafe18ee0b89363e4c"],["2017/05/10/VTK提示MetaImage cannot read data from file/index.html","b0261b936f92ea1bff6c9cbff948b05b"],["2017/05/10/hexo在线编写博客/index.html","8d96f3bf6daaf552cdd5ae065e88aec1"],["2017/05/10/分享一款极好用的Chrome插件/index.html","dbf42b9af01864936ac528892c290977"],["2017/05/11/Linux零打碎敲/index.html","e0a389e78a2e9680f4df0a682d4f1e11"],["2017/05/15/Bash编程（一）/index.html","cc18f627d23d958d8d7098cd73af382d"],["2017/05/16/将图片自动上传到七牛并在markdown中引用/index.html","de96d279e3e653489241e1f073df450f"],["2017/06/19/软件推荐/index.html","5105d2139d44c95bd8bc77a580bcf489"],["2018/07/20/HexoEditor-测试/index.html","4f4862e02f41662e4ddb3564983d3824"],["2018/07/26/四步安装好支持tensorflow和C++的Jupyter-notebook/index.html","009d7456961c8364d9fb9c432dd357da"],["2018/07/28/自己构建Docker镜像在自己的服务器上搭建支持C++和tensorflow的jupyter-notebook/index.html","92ba4eefc5d59725c42979d924d1c1be"],["2018/10/14/阮一峰JS学习笔记/index.html","e3054067d46549d49caaaee1ce0fe702"],["2018/10/20/colab读写外部文件的四种方式/index.html","31004720852e398679a6b8f09552370e"],["2018/11/28/OS-X-10.14-怎么安装非AppStore的Safari扩展/index.html","f48596e6ad869a477e069e10399b2f7e"],["2018/12/06/双系统win10访问ubuntu系统文件/index.html","771122ad24868b47394fdbd234d12084"],["archives/2016/05/index.html","b4a02e1f8b63432b4460549af20fdd95"],["archives/2016/index.html","c09621f710530abcb5fa84ce97d6466a"],["archives/2017/05/index.html","b69dddee44607307e4c279b75630024e"],["archives/2017/05/page/2/index.html","fd458f420fba7a25fb82d12b1202bdf6"],["archives/2017/06/index.html","087809ef14b0cbf985edfdb1d3d46dae"],["archives/2017/index.html","32244adf57ffdef0ddfb2522ffa707ef"],["archives/2017/page/2/index.html","01f9c1ee13489bff11ccb9e6efe89ad6"],["archives/2018/07/index.html","9b8a3909f9508d898868e3b6205e5c07"],["archives/2018/10/index.html","85cb6d05250ebffb35a926e587f75c3b"],["archives/2018/11/index.html","06dcf4b8afdad6ae309a28f74faf46a3"],["archives/2018/12/index.html","f8dcef6e60613d5629518e84b620e2e6"],["archives/2018/index.html","9d00ebb952f130f2b4360f4a0582d29d"],["archives/index.html","9ad77685adda0dad9473842182d5fe93"],["archives/page/2/index.html","b73ff41b5aba83b6a47e0f6a52e99a6f"],["archives/page/3/index.html","667f7bbd7364168bf6cbd6b99b83a5aa"],["avatar.jpg","ea7dfe92d6e37ae050863316c80e4d50"],["categories/Docker/index.html","a55c3c98466024091683e4f18547ba58"],["categories/Git/index.html","1d14553c51794f215bfdb4e1d93aab33"],["categories/Linux/index.html","05ef9dec34e4002902dc99705b866b25"],["categories/VTK/index.html","b29724ffa7508f36824c7c5cf964d22a"],["categories/index.html","01e06a9f3be2f8a0b02d1b275a71d46c"],["categories/web/index.html","c14c3c1f603ec6d2a6d6b025cd0cd7fa"],["categories/博客/index.html","8b07acbe142c3a9e44533f648ae7ce8b"],["categories/机器学习/index.html","91d123bfb3517797f2cb53cd73097ce0"],["categories/浏览器/index.html","721d009916bb7fe04de950c6b21b82ca"],["categories/软件/index.html","9d75f0e38d7a91321942e5c8109a95e8"],["css/index.css","581a4b829c16aa1e9e84c77fb1acbcce"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","cbed1c3be4894a08a83d8b7b7b8add14"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","ae5f650bc07f140955e8806aa2ce55f6"],["js/copy.js","e874c6f7e7a19bc720141c5e06060d29"],["js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","ea8ce28130bd4ce09d5fca2ca22ad168"],["js/search/local-search.js","0f0737f61144676eebc9f0959dc60f01"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","54b2e2d4de57da7e2f85bd42b1cfc656"],["page/3/index.html","0335458681177a0c07d0927672deba9a"],["posts_bak/Endnote的style.html","e943152c4945918ab1925d98919fe93f"],["posts_bak/HexoEditor-测试.html","d40fae680109d494230432805fe95a61"],["posts_bak/Linux零打碎敲.html","fbf7cc52e86640d71739dd5b05a73101"],["posts_bak/VTK-5.10.1 TO VTK-7.1.1的变动.html","13891bcaaa0111854d7fb882c5484e6e"],["posts_bak/VTK-VS2008编译教程.html","89a5b7aaeefb7ef769999f1c1a81db6b"],["posts_bak/VTK提示MetaImage cannot read data from file.html","b05aaee183b4430c214b8c5c568038f3"],["posts_bak/VTK运行Tcl文件.html","a8a29f8a9ce655b8b92c9348ec2d372f"],["posts_bak/beamer的theme.html","114e444078eb4233aa6de70f4ccb46cb"],["posts_bak/coding和github同时使用.html","fe02a81a504a362124c0a07d445f4500"],["posts_bak/vtk-imageblend图像融合报错.html","b2326f7374b0f96bb52abfdf43ce4ec7"],["posts_bak/利用Keepass2.x进行ftp或webdev同步.html","b8f146a7745b6b9d7af0297304ddff10"],["posts_bak/如何利用Dropbox备份指定文件夹.html","9264a8b523abf1a2df308e55e82f608c"],["posts_bak/软件推荐.html","48dc15d67d99c71fb9b0c3c1add943e5"],["slides/index.html","01abfed6e66f73e0df098d159278d4ff"],["tags/Bash/index.html","97286f566096bd7e61fb793cb4625835"],["tags/Chrome/index.html","69a150973b4aa2125ae41ef0add3983a"],["tags/Docker/index.html","317c5bbe39516fdddb8931bc591fade1"],["tags/Dropbox/index.html","fbc213da7e93a8676c478487eacb8c61"],["tags/Endnote/index.html","4e70df3568fe729c0a79d22dd8b8c7d9"],["tags/Git/index.html","47177b2f7963fa0cf7571c9d4443818c"],["tags/Github/index.html","4dd4ab543d49279946f300c36c1fd30b"],["tags/Hexo/index.html","5190f4bdc14c41ece449c7984665c214"],["tags/Jupyter/index.html","986dc236c77b4a9f1f86ce77c682dc2c"],["tags/KeePass/index.html","80aed6114dad86082741b12e96eb3e40"],["tags/Linux/index.html","74ada935fb2c337a3eb3511be69c8b6f"],["tags/Markdown/index.html","afbfb09c500807315208ca2bc4ed6577"],["tags/Safari/index.html","e350738f9a9efa7666c5e9566815d406"],["tags/Swiftype/index.html","f3c6c947bffacb80b7aae46424b93aa2"],["tags/Tcl/index.html","d6a42229ab5657dd4d4a63765478c23c"],["tags/Ubuntu/index.html","608579031bda3f531009f681494b0ca0"],["tags/VPS/index.html","b0ddec1f90d28b3f3d73fa22ba64d8fd"],["tags/VTK/index.html","ac510cc840f6475d19804d418d7149c3"],["tags/c/index.html","b8e3dfb73580baa58311fc1c54945f47"],["tags/cloud9/index.html","8f62f6b9251bf5e1ff69542d40ab8183"],["tags/coding/index.html","34588d35d30a21616f9b7d39682e2c5e"],["tags/colab/index.html","40196d7c4b51c5ba5f7d50680df60c0d"],["tags/ghost-blog/index.html","513c8b0c51f86361c1cdfb09dbe3e7e8"],["tags/index.html","bdd03f00664e2c403fc14bd0a5cf6ffd"],["tags/javascript/index.html","2bf98247aa7fabaeb4cc30577d4c7449"],["tags/jupyter-notebook/index.html","259c1df1f91ff3617899eb7eb1e1ef30"],["tags/latex/index.html","7c1e83a4527fcb0530cc6d2e0abf9cfe"],["tags/leanote/index.html","5a5e5d5200da280cc1538c05cca8b98d"],["tags/python/index.html","1b94a57737f8bceb15c05bfaa7aeb665"],["tags/style/index.html","98c5437c10c4bff6c1b3bb0bde1e88c7"],["tags/visualstudio/index.html","882e668c0bd75e66a98d88ef4847c1c9"],["tags/web/index.html","559a8fb41ef75079b976d91e2e79a33d"],["tags/七牛云/index.html","9b2ef81712af72f8bc9bc1d7d9e0021a"],["tags/双系统/index.html","39bce0c572febd4f9166b3efe1e950c0"],["tags/插件/index.html","101894a2412731f80b6b2f658fed5a2c"],["tags/站内搜索/index.html","5f64faebb8824323288e5594083540e2"],["tags/系统安装/index.html","81d6a2d8b129c0dd455fd9e7e9f63c13"]];
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







