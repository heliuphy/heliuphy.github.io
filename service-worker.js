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

var precacheConfig = [["2016/05/01/Endnote的style/index.html","7d9627479b8880ebbb7929ee73449e2d"],["2016/05/01/KeePass/index.html","66e6348bc5825411ac66cbf1077f087a"],["2016/05/01/VPS+Hexo+Dropbox创建个人博客/index.html","bfd2b6f9fd5cacc3d7d6352d923555fb"],["2016/05/01/VPS服务器搭建ghost blog/index.html","b119089aab70ca654f187cba549d9510"],["2016/05/01/coding和github同时使用/index.html","cdacdfe849a045d5f9589cb49a1045f2"],["2016/05/01/利用Keepass2.x进行ftp或webdev同步/index.html","538d381bc580e87d680e6ea81a5d9cce"],["2016/05/01/搭建hexo博客小记/index.html","2386df199d018041e6ecbe315d6de250"],["2016/05/10/beamer的theme/index.html","c5625052e8852156c49057966278991d"],["2016/05/13/win8.1与ubuntu双系统安装（硬盘安装）/index.html","fa52e515fa632d50e5a8e7e82c823031"],["2016/05/14/Hexo利用Swiftype建立站内搜索/index.html","58ad535c2ea10a17f45c8f367973f7f6"],["2017/05/07/Leanote安装教程/index.html","364169e8f1053f6b81ec374351b16257"],["2017/05/07/VTK-5.10.1 TO VTK-7.1.1的变动/index.html","da66e2cc9aabd8ebb72fed3a056fa77e"],["2017/05/07/VTK-VS2008编译教程/index.html","f683ef7a59c837561e2933c4142b1c7a"],["2017/05/07/VTK运行Tcl文件/index.html","a9ccea885394b1ce066df2c1850395b0"],["2017/05/07/vtk-imageblend图像融合报错/index.html","10a01d347f184ab8e2a8ee80bcb232c2"],["2017/05/07/利用Dropbox备份vps中的文件/index.html","1c8f5dc91cb58d7422617e55d0151042"],["2017/05/07/如何利用Dropbox备份指定文件夹/index.html","21dc1877c203befafe18ee0b89363e4c"],["2017/05/10/VTK提示MetaImage cannot read data from file/index.html","b0261b936f92ea1bff6c9cbff948b05b"],["2017/05/10/hexo在线编写博客/index.html","04eb621ad48e9a62297c98be0e71d3d8"],["2017/05/10/分享一款极好用的Chrome插件/index.html","f15814f846d71c1329e30c5539820bca"],["2017/05/11/Linux零打碎敲/index.html","e0a389e78a2e9680f4df0a682d4f1e11"],["2017/05/15/Bash编程（一）/index.html","2e2a33d7555e3385d739b48925d12187"],["2017/05/16/将图片自动上传到七牛并在markdown中引用/index.html","841401030b89b7e80ff6ce134d0100b3"],["2017/06/19/软件推荐/index.html","5105d2139d44c95bd8bc77a580bcf489"],["2018/07/20/HexoEditor-测试/index.html","4f4862e02f41662e4ddb3564983d3824"],["2018/07/26/四步安装好支持tensorflow和C++的Jupyter-notebook/index.html","8d2b45f8ad560ea2441ac9734c939d31"],["2018/07/28/自己构建Docker镜像在自己的服务器上搭建支持C++和tensorflow的jupyter-notebook/index.html","2846626e2d385e6fe51c8498bcf1ab7c"],["2018/10/14/阮一峰JS学习笔记/index.html","ad2323c8787585a29aecc8789ca1e3eb"],["2018/10/20/colab读写外部文件的四种方式/index.html","08f9fdf3e001ad349f5f31f1dab5393e"],["2018/11/28/OS-X-10.14-怎么安装非AppStore的Safari扩展/index.html","9b3a5110a47092a03bc2c61c02141878"],["archives/2016/05/index.html","2241502bc618b5e94310ab3d59e17ce6"],["archives/2016/index.html","4370e87fe02ac4b23572b701dd0d6095"],["archives/2017/05/index.html","6dca831e881c0b5cf72ae701a0c5332b"],["archives/2017/05/page/2/index.html","fd458f420fba7a25fb82d12b1202bdf6"],["archives/2017/06/index.html","087809ef14b0cbf985edfdb1d3d46dae"],["archives/2017/index.html","e32f5d4a47b95cba5d54431e50fbc3a0"],["archives/2017/page/2/index.html","01f9c1ee13489bff11ccb9e6efe89ad6"],["archives/2018/07/index.html","3e9bf5d3124fb33939a2c1eb9e71b055"],["archives/2018/10/index.html","39499518ef925e401697fef017d032ec"],["archives/2018/11/index.html","465419258d79342fe02f2a10a2796bc0"],["archives/2018/index.html","5a64b724106721f86d75a906567ba777"],["archives/index.html","9fb2dbf75e18bf3cc67a553c50cec59f"],["archives/page/2/index.html","12501f345ae44cc2c67b414688e3a848"],["archives/page/3/index.html","667f7bbd7364168bf6cbd6b99b83a5aa"],["avatar.jpg","ea7dfe92d6e37ae050863316c80e4d50"],["categories/Docker/index.html","464e24f49195fc9320c4d28da9c66f46"],["categories/Git/index.html","1d14553c51794f215bfdb4e1d93aab33"],["categories/Linux/index.html","56f8cc135628a65d09d404c80544510f"],["categories/VTK/index.html","b29724ffa7508f36824c7c5cf964d22a"],["categories/index.html","8a2910102572a8d5e3fd2602525209ed"],["categories/web/index.html","92a8052b4907f0faf6636b177c2ae9f7"],["categories/博客/index.html","4c9692191f1b9d852514f836225a93a7"],["categories/机器学习/index.html","b2b107980afe4613e2cdb8f866d8b418"],["categories/浏览器/index.html","eced4d6557ebd7ae1740f41622e96ec5"],["categories/软件/index.html","08eb40665f6cd61020705c7eb5c3a7b4"],["css/index.css","581a4b829c16aa1e9e84c77fb1acbcce"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","5caae0fd841ea10b5d98e6abda9dccb0"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","703fa9168ef403b6ed3dda2e6dbe447a"],["js/copy.js","e874c6f7e7a19bc720141c5e06060d29"],["js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","ea8ce28130bd4ce09d5fca2ca22ad168"],["js/search/local-search.js","0f0737f61144676eebc9f0959dc60f01"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","90c0205767a7c248348bffd83156cfd9"],["page/3/index.html","0335458681177a0c07d0927672deba9a"],["posts_bak/Endnote的style.html","bc3e868c1911cc22aa47fbec15aaf809"],["posts_bak/HexoEditor-测试.html","004ea6af5d6737380821456010265b6c"],["posts_bak/Linux零打碎敲.html","05bf68826a8c241fe8bf4ef62d9a6eb9"],["posts_bak/VTK-5.10.1 TO VTK-7.1.1的变动.html","750df18703eef6dbb53e68421b57df2d"],["posts_bak/VTK-VS2008编译教程.html","46849c954c2e13669f112da91488ea3c"],["posts_bak/VTK提示MetaImage cannot read data from file.html","65210b1a0f4f1e26cfa33473011348f9"],["posts_bak/VTK运行Tcl文件.html","950aaa61736dab787c5d92fd38442008"],["posts_bak/beamer的theme.html","6dd3470f286ee0d0263c0e135d402a47"],["posts_bak/coding和github同时使用.html","e56f9809857450dd4eec61ff43855a6f"],["posts_bak/vtk-imageblend图像融合报错.html","a58dd14d22c5560b5fc276b544592c57"],["posts_bak/利用Keepass2.x进行ftp或webdev同步.html","bf509da7dff31ab8ce4d92a2d469775b"],["posts_bak/如何利用Dropbox备份指定文件夹.html","18a12e3c7f5e9e627d80c5802c4a465a"],["posts_bak/软件推荐.html","97aec660cf9b0bff692effaf250fa131"],["slides/index.html","2fe85e70aa8990d86f4ce1a55ca63a03"],["tags/Bash/index.html","77dbba57d5d3087b210141ea90d42dd1"],["tags/Chrome/index.html","48ea0c8fc5df44d3e31c83663986dad4"],["tags/Docker/index.html","97fd11c21e27018d3105313f1471b8ec"],["tags/Dropbox/index.html","4e726f2086e2ec4b4525da9c9d6e37a2"],["tags/Endnote/index.html","4e70df3568fe729c0a79d22dd8b8c7d9"],["tags/Git/index.html","47177b2f7963fa0cf7571c9d4443818c"],["tags/Github/index.html","4dd4ab543d49279946f300c36c1fd30b"],["tags/Hexo/index.html","1b2b7e2b229d4cef11758cc66ee9efe9"],["tags/Jupyter/index.html","51047e8fb5f9f1a530b9ae82205e2d13"],["tags/KeePass/index.html","086d18adff7e5f0b7a8575b95ecd5d93"],["tags/Linux/index.html","54d8e7fef0d8669ea50fface9767053d"],["tags/Markdown/index.html","4e6488d759b06d4b31fbbd94ff8b4cf9"],["tags/Safari/index.html","1852c42a5025ac27b11a172f1c375762"],["tags/Swiftype/index.html","26852050d50ac339c5ab9c4f0ed23772"],["tags/Tcl/index.html","d6a42229ab5657dd4d4a63765478c23c"],["tags/Ubuntu/index.html","a76a3fbd670ee8fd2c9c129cd3575ee7"],["tags/VPS/index.html","537db85c62d0e6ada4acb095649f4d95"],["tags/VTK/index.html","ac510cc840f6475d19804d418d7149c3"],["tags/c/index.html","36f5a1daac004114e16f95cf8e2cb414"],["tags/cloud9/index.html","bf31bd53cfb7b2eba6611120c24b446c"],["tags/coding/index.html","34588d35d30a21616f9b7d39682e2c5e"],["tags/colab/index.html","9023beea3bb8ef09cd82ad4376fcf309"],["tags/ghost-blog/index.html","bc6f5f427232cf992139e2c053d5c129"],["tags/index.html","ecf608fefd5f2f108ed9c868db902a12"],["tags/javascript/index.html","0bc8e0aa8a8d337284d0d0799ac0a96e"],["tags/jupyter-notebook/index.html","a6942b1257c625e36120090d54319e5e"],["tags/latex/index.html","7c1e83a4527fcb0530cc6d2e0abf9cfe"],["tags/leanote/index.html","bb7f0eda7eb0d6ce2c00cf97312c3354"],["tags/python/index.html","fc229f6e111622e2d99f732999639865"],["tags/style/index.html","98c5437c10c4bff6c1b3bb0bde1e88c7"],["tags/visualstudio/index.html","882e668c0bd75e66a98d88ef4847c1c9"],["tags/web/index.html","d3a9e87221b1b7b149f9cdcbcc8f6b7a"],["tags/七牛云/index.html","de53f94650c7e944f8e9d528ada019f7"],["tags/插件/index.html","333cfe10e0d941b25aad81bf00dae4a6"],["tags/站内搜索/index.html","da5210efcc8e60ecd573728bbca2e517"],["tags/系统安装/index.html","4d8ec32c38e64059987924881b45163b"]];
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







