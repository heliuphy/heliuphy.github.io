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

var precacheConfig = [["2016/05/01/Endnote的style/index.html","7d9627479b8880ebbb7929ee73449e2d"],["2016/05/01/KeePass/index.html","05c4ceb9588e2833acc2ff761b705c38"],["2016/05/01/VPS+Hexo+Dropbox创建个人博客/index.html","49f8ef708616d48f8235e34cfa33e946"],["2016/05/01/VPS服务器搭建ghost blog/index.html","31abc76e3e0b74e07fcf15440dca25bf"],["2016/05/01/coding和github同时使用/index.html","cdacdfe849a045d5f9589cb49a1045f2"],["2016/05/01/利用Keepass2.x进行ftp或webdev同步/index.html","538d381bc580e87d680e6ea81a5d9cce"],["2016/05/01/搭建hexo博客小记/index.html","b38522034bd902bbcced6ff09ed81a82"],["2016/05/10/beamer的theme/index.html","c5625052e8852156c49057966278991d"],["2016/05/13/win8.1与ubuntu双系统安装（硬盘安装）/index.html","91cd7803d0835121eadba2e5ac7a775f"],["2016/05/14/Hexo利用Swiftype建立站内搜索/index.html","7b623408f5df639fa14eb13fea566d2d"],["2017/05/07/Leanote安装教程/index.html","081a80f8caeb700cbcbcbc36c681f516"],["2017/05/07/VTK-5.10.1 TO VTK-7.1.1的变动/index.html","da66e2cc9aabd8ebb72fed3a056fa77e"],["2017/05/07/VTK-VS2008编译教程/index.html","f683ef7a59c837561e2933c4142b1c7a"],["2017/05/07/VTK运行Tcl文件/index.html","a9ccea885394b1ce066df2c1850395b0"],["2017/05/07/vtk-imageblend图像融合报错/index.html","10a01d347f184ab8e2a8ee80bcb232c2"],["2017/05/07/利用Dropbox备份vps中的文件/index.html","145df974fc572740c8d76455c1ed6d2f"],["2017/05/07/如何利用Dropbox备份指定文件夹/index.html","21dc1877c203befafe18ee0b89363e4c"],["2017/05/10/VTK提示MetaImage cannot read data from file/index.html","b0261b936f92ea1bff6c9cbff948b05b"],["2017/05/10/hexo在线编写博客/index.html","6be28ae5ce7167fa0231097edfb7e0b6"],["2017/05/10/分享一款极好用的Chrome插件/index.html","f92395bd053ce943ac2d5338f19f1687"],["2017/05/11/Linux零打碎敲/index.html","e0a389e78a2e9680f4df0a682d4f1e11"],["2017/05/15/Bash编程（一）/index.html","0cfd6cbef6032d5c30e8fc5f8237915c"],["2017/05/16/将图片自动上传到七牛并在markdown中引用/index.html","b2a99e13c9a2b1661c8c38b9576d0e87"],["2017/06/19/软件推荐/index.html","5105d2139d44c95bd8bc77a580bcf489"],["2018/07/20/HexoEditor-测试/index.html","4f4862e02f41662e4ddb3564983d3824"],["2018/07/26/四步安装好支持tensorflow和C++的Jupyter-notebook/index.html","c7b8dc2f1236fa66c5ec77fad26e40b5"],["2018/07/28/自己构建Docker镜像在自己的服务器上搭建支持C++和tensorflow的jupyter-notebook/index.html","ca9f3a88aa0d51f239f9a65b3b14a266"],["2018/10/14/阮一峰JS学习笔记/index.html","6333d57118a425762e9795c8d690990f"],["2018/10/20/colab读写外部文件的四种方式/index.html","6afd9b4bf3e5e5be89670ed972c7488d"],["archives/2016/05/index.html","8fc5ee4a47b52c0501fe7b13276461b6"],["archives/2016/index.html","9b8124667cbeff9409c20a1d738dbcec"],["archives/2017/05/index.html","d97f036c0f6f9def62ef7094706dbf49"],["archives/2017/05/page/2/index.html","fd458f420fba7a25fb82d12b1202bdf6"],["archives/2017/06/index.html","087809ef14b0cbf985edfdb1d3d46dae"],["archives/2017/index.html","8ab1e296a2acec4c6d850b98afd2d3fa"],["archives/2017/page/2/index.html","01f9c1ee13489bff11ccb9e6efe89ad6"],["archives/2018/07/index.html","cc5780cd092be3e76d53f50887403c11"],["archives/2018/10/index.html","3a16eadf73da71648b614d6304fe54a8"],["archives/2018/index.html","1e985bed9cdec4c2edde2e9d7ac1190d"],["archives/index.html","63b4fdf99c95ee4fb4aa50fc94195728"],["archives/page/2/index.html","29bc3ef15b7759ea4e0ff4ee9fd8a624"],["archives/page/3/index.html","667f7bbd7364168bf6cbd6b99b83a5aa"],["avatar.jpg","ea7dfe92d6e37ae050863316c80e4d50"],["categories/Docker/index.html","78c5910d3c2f75c9af291e389b9dabe0"],["categories/Git/index.html","1d14553c51794f215bfdb4e1d93aab33"],["categories/Linux/index.html","273f21516a047d15e7682d025f4cd83c"],["categories/VTK/index.html","b29724ffa7508f36824c7c5cf964d22a"],["categories/index.html","20ace0c94873ee1ace5fde24630cbd62"],["categories/web/index.html","760274972f64321ac50f27f20cdfebba"],["categories/博客/index.html","eb33ad39b5e71dac8d1145b70543a669"],["categories/机器学习/index.html","0772f02af2e7d3c5f5bcda68b0c35cf2"],["categories/软件/index.html","f785627ba5f0fddfe9e7c80b0db8894b"],["css/index.css","581a4b829c16aa1e9e84c77fb1acbcce"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","d66bf4bc4efd3ab42073d7ce03450c2f"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","1a8f34c12183c201c1d58eae43b393a6"],["js/copy.js","e874c6f7e7a19bc720141c5e06060d29"],["js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","ea8ce28130bd4ce09d5fca2ca22ad168"],["js/search/local-search.js","0f0737f61144676eebc9f0959dc60f01"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","8cbaa93799c46b57f222054fe281ad73"],["page/3/index.html","0335458681177a0c07d0927672deba9a"],["posts_bak/Endnote的style.html","df702fc380bb81bc0e8de914ba028a77"],["posts_bak/HexoEditor-测试.html","adedc0d5b0b3192d0ca5b6fea3d55b2a"],["posts_bak/Linux零打碎敲.html","1b9a8ae4647bad530e778981b5cc1563"],["posts_bak/VTK-5.10.1 TO VTK-7.1.1的变动.html","36625705ab4e0282beb4bd6cc5f83f35"],["posts_bak/VTK-VS2008编译教程.html","e88182d37a443f4630537956d1874e7c"],["posts_bak/VTK提示MetaImage cannot read data from file.html","cb5958a24e924ff829fb831d849554c8"],["posts_bak/VTK运行Tcl文件.html","b4fdc7cd5a2783a5c73a9b7d227cfda9"],["posts_bak/beamer的theme.html","0ffd1ae7b6a800b90425871851433c76"],["posts_bak/coding和github同时使用.html","278552194784ea62c2961fbf80aaf255"],["posts_bak/vtk-imageblend图像融合报错.html","253f34a2f687651a6e4d842f992b14e9"],["posts_bak/利用Keepass2.x进行ftp或webdev同步.html","6c34c3d6c8d7cb45d9f8a10598dd40c1"],["posts_bak/如何利用Dropbox备份指定文件夹.html","7ed752638c40ff080ebecda9e2bd7de1"],["posts_bak/软件推荐.html","e56a15a973ff9abe9ee33e5a34f8e5ab"],["slides/index.html","4a4e92d4a268eed4cd286c1871823a2f"],["tags/Bash/index.html","c595c76fc969ad82726ab7429574eef3"],["tags/Chrome/index.html","f74fd82f802688cb23a683bf33d5cac5"],["tags/Docker/index.html","940b1111d942b5da657d1db4a5e298e9"],["tags/Dropbox/index.html","44fdc6c26a916bb626d5d06caf32cd4f"],["tags/Endnote/index.html","4e70df3568fe729c0a79d22dd8b8c7d9"],["tags/Git/index.html","47177b2f7963fa0cf7571c9d4443818c"],["tags/Github/index.html","4dd4ab543d49279946f300c36c1fd30b"],["tags/Hexo/index.html","12723b313fe0ca67c32e11d083fe5896"],["tags/Jupyter/index.html","4691df6b2480bcaf7efc0ced0640dc63"],["tags/KeePass/index.html","7c2e4d553eb4ba6b6509c130ea6e6ebe"],["tags/Linux/index.html","8296550762f7dc853112029b3a9e2851"],["tags/Markdown/index.html","263af0199d237cb265992f1e121b2ad1"],["tags/Swiftype/index.html","0bca64df564ff9b815e8545748bfbef7"],["tags/Tcl/index.html","d6a42229ab5657dd4d4a63765478c23c"],["tags/Ubuntu/index.html","3891cd6173fdfd6c274fdcd36d6b870a"],["tags/VPS/index.html","0e82ecdbbc19f40efe7b6646b157e36d"],["tags/VTK/index.html","ac510cc840f6475d19804d418d7149c3"],["tags/c/index.html","04a28d461b1f1f71589c6e4e32e65e6d"],["tags/cloud9/index.html","b798e90e59524382c5e08e251ec1acd4"],["tags/coding/index.html","34588d35d30a21616f9b7d39682e2c5e"],["tags/colab/index.html","3c06b51d209aa4cd38cfe6d3a270859d"],["tags/ghost-blog/index.html","e38abd92a6f8c97c3bf50f5008562877"],["tags/index.html","64b372aebaaac971f21226c38fb0af1e"],["tags/javascript/index.html","9f28bd4acaf5e4de33e16aa6914b03c1"],["tags/jupyter-notebook/index.html","ed919dcaa8e8a5c90d0d6f3e547fc995"],["tags/latex/index.html","7c1e83a4527fcb0530cc6d2e0abf9cfe"],["tags/leanote/index.html","6fa360bf1be89febc4d9ae2811fd3964"],["tags/python/index.html","3fd9d138278c0d546a09b36afd055e99"],["tags/style/index.html","98c5437c10c4bff6c1b3bb0bde1e88c7"],["tags/visualstudio/index.html","882e668c0bd75e66a98d88ef4847c1c9"],["tags/web/index.html","3422b84d8a8d806d197f171431ae78e9"],["tags/七牛云/index.html","30b516ff4c76a734dd149f257206d916"],["tags/插件/index.html","3bcbafcaec3cbd0158208818db442d6f"],["tags/站内搜索/index.html","414cde4fa4ef0334d67c6beed81c5fe6"],["tags/系统安装/index.html","c5c6ca5ef7add1e4ed676335da7edbb5"]];
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







