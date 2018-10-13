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

var precacheConfig = [["2016/05/01/Endnote的style/index.html","74db8026a301000d5dee2d9102cd8677"],["2016/05/01/KeePass/index.html","0151a991c609727a4bf6115fe20bbe21"],["2016/05/01/VPS+Hexo+Dropbox创建个人博客/index.html","3efa22f93246d97b344f83eeb7a056f9"],["2016/05/01/VPS服务器搭建ghost blog/index.html","20c323830ab8a092466e4855bbcb5b40"],["2016/05/01/coding和github同时使用/index.html","ca355e61f0ea95bed034307aecb31882"],["2016/05/01/利用Keepass2.x进行ftp或webdev同步/index.html","857415f9f39f1bed91556838bb09579a"],["2016/05/01/搭建hexo博客小记/index.html","8a587e927b90110ed294a36808e4e2c1"],["2016/05/10/beamer的theme/index.html","74818af83dbcddd952b96b966889feeb"],["2016/05/13/win8.1与ubuntu双系统安装（硬盘安装）/index.html","ede3a80b89b494b527498df94a4d5712"],["2016/05/14/Hexo利用Swiftype建立站内搜索/index.html","59304d1f32e0529a6d8cb5e000231aef"],["2017/05/07/Leanote安装教程/index.html","3d0ebef0fb8a5415bbf0e69601eec70d"],["2017/05/07/VTK-5.10.1 TO VTK-7.1.1的变动/index.html","277bfbedc92312ad5495e6273bc9680e"],["2017/05/07/VTK-VS2008编译教程/index.html","56fb3111d85eb42a2a0d8a3bd914a854"],["2017/05/07/VTK运行Tcl文件/index.html","04804f5fed6c9fb157ba886bc4920cd4"],["2017/05/07/vtk-imageblend图像融合报错/index.html","5b54f6b343c7b703b31de5e617bc050f"],["2017/05/07/利用Dropbox备份vps中的文件/index.html","b05ffc3cd3832355c5495c213db51c66"],["2017/05/07/如何利用Dropbox备份指定文件夹/index.html","d22367a1ff121fed7ec2e81a539751c5"],["2017/05/10/VTK提示MetaImage cannot read data from file/index.html","25a072ceb43a36b962e577c97db9cecd"],["2017/05/10/hexo在线编写博客/index.html","5c13223dc7d79dfd33fdd325e0c25164"],["2017/05/10/分享一款极好用的Chrome插件/index.html","b37f97723ca98393a0f9a0f1c018f883"],["2017/05/11/Linux零打碎敲/index.html","d767c9840ed121a88ce2a577a23ae04c"],["2017/05/15/Bash编程（一）/index.html","1713a3d32719799a03c4f3215805c14f"],["2017/05/16/将图片自动上传到七牛并在markdown中引用/index.html","401312f01b5dddb25285e7d2103ccf6c"],["2017/06/19/软件推荐/index.html","836d2f1e9609ea81017a43d0a7205e04"],["2018/07/20/HexoEditor-测试/index.html","61df25136c9c779c5264378b1ad2f57c"],["2018/07/26/四步安装好支持tensorflow和C++的Jupyter-notebook/index.html","181fb03d8defa9d39875bcf089c998a6"],["2018/07/28/自己构建Docker镜像在自己的服务器上搭建支持C++和tensorflow的jupyter-notebook/index.html","562f7a57d0fa8a11d62c4dd5d719deeb"],["2018/10/11/阮一峰JS学习笔记/index.html","c990151ffd685aecde9da5c984fde8e5"],["archives/2016/05/index.html","0e3ea5cc4b7d477a05c76053c08711b5"],["archives/2016/index.html","b93eb8f23bdc3a78026eb255e60e2b3a"],["archives/2017/05/index.html","ed9d7541de10ddc6c7f844d91d57e7bb"],["archives/2017/05/page/2/index.html","7579267653832df17390b5e6ecea7beb"],["archives/2017/06/index.html","494725ab8a9468e3272a76a777a90a3d"],["archives/2017/index.html","32324e8f249f1d6bfe4db4d26ebe203e"],["archives/2017/page/2/index.html","64ad813a49bf607af43abb9bc8f450d4"],["archives/2018/07/index.html","4cf6c9e76d1e812f709f23e2f069c2c1"],["archives/2018/10/index.html","78257b663d4cec3f9bde46c7518cab81"],["archives/2018/index.html","e5e6d1bc2d814a4a88e8784fdcdd6aee"],["archives/index.html","6cad77fa82a357a65bf05495b95fe868"],["archives/page/2/index.html","8b2828eb7c873a30864434b5b414d6ed"],["archives/page/3/index.html","d72b621366aa3ca2aa98011353fb2686"],["avatar.jpg","ea7dfe92d6e37ae050863316c80e4d50"],["categories/Docker/index.html","7672a7bbe72135dafd6d8bedf005b903"],["categories/Git/index.html","c664f7c16a52e22776d428e98052302b"],["categories/Linux/index.html","4c020572c673f0f2fe56c6264ebe03b8"],["categories/VTK/index.html","27cc012a9bf07bd1d7b544119a7aeb24"],["categories/index.html","38a4504bfe92e0c4a60e0c68b20e6f0b"],["categories/web/index.html","c59eb849315bf3f3ad77b5eafce66cee"],["categories/博客/index.html","e60229ae0626116efeabed54cb1ebeb5"],["categories/软件/index.html","a222f481d81a9fb6db3b9e11bf94cace"],["css/index.css","581a4b829c16aa1e9e84c77fb1acbcce"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","4fc435762800a8203097d92d22f0cf5f"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","dfd411de7eefee37f1a967b14aa7bf05"],["js/copy.js","e874c6f7e7a19bc720141c5e06060d29"],["js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","ea8ce28130bd4ce09d5fca2ca22ad168"],["js/search/local-search.js","0f0737f61144676eebc9f0959dc60f01"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","be39c351d4ec69dee86cfaee91d4048e"],["page/3/index.html","591c6685bbbeb076bcf33d722d43878d"],["slides/index.html","550b2b510389c410013cb919b66bd1a3"],["tags/Bash/index.html","c909b33ff74aee270232efe1eb287610"],["tags/Chrome/index.html","b5a5583e4c1c0def13075f9c9f313971"],["tags/Docker/index.html","5c9ba7d7c2faa19e4f7d78c88ac82be0"],["tags/Dropbox/index.html","886cb40385574a4f489ec47926887fa2"],["tags/Endnote/index.html","d70c371bae22178d977d9dc43e68e535"],["tags/Git/index.html","705ddd1451550fc29f5e7cd25ed83e47"],["tags/Github/index.html","f94772041f1c8b91ee59de1990c05cc8"],["tags/Hexo/index.html","0d0c7b8fde5da76e4d0d37564c85532d"],["tags/Jupyter/index.html","f9cb6318f3edad6a3fcf21a49847fb7f"],["tags/KeePass/index.html","43dc4df619ab2a52c1ac55810e010f55"],["tags/Linux/index.html","846018e1e9923105a4988853e5fb6efd"],["tags/Markdown/index.html","d28f3b9b68ba537bd054abdac6d2490a"],["tags/Swiftype/index.html","1b7e05a3854f6fea3fc731960075d5e1"],["tags/Tcl/index.html","ac3574909d42a71489db117b3844eb94"],["tags/Ubuntu/index.html","6377982ff6f920e31e5587715082148b"],["tags/VPS/index.html","97598e72ba8bee125dbcf990a61cd41f"],["tags/VTK/index.html","9c0d4c2197266684f50edb83067782c9"],["tags/c/index.html","b2b7649692d265679381311943172e49"],["tags/cloud9/index.html","15e264f7d7e303f920d86c41161639cf"],["tags/coding/index.html","736faf3eab79d19e9832c4f3fae1972d"],["tags/ghost-blog/index.html","fc02e7e7e8aa21076b5aee65b4850deb"],["tags/index.html","9647016b553e7d8f6d77b316cb47c018"],["tags/jupyter-notebook/index.html","746682ee52110caccf33953aa4c28827"],["tags/latex/index.html","ad781a85421e405468469f7f99c5c4e9"],["tags/leanote/index.html","c6e2b45893cb3238a51683edc0586f38"],["tags/python/index.html","fb4316a64e2297add88b1b1c51b9032f"],["tags/style/index.html","c4a35cfccc6b91218cd02d48a867ba0c"],["tags/visualstudio/index.html","906fefaaef6099064efe9dad2bb3de82"],["tags/web/index.html","fccfcda4e6816b5eb34f84c44703a6ff"],["tags/七牛云/index.html","1aa5aec930572eb751e4a2b80257177b"],["tags/插件/index.html","f8c8e018b6a298568846e1a31840c232"],["tags/站内搜索/index.html","57b02a60a17a63be4a276803f88f5e73"],["tags/系统安装/index.html","3ef589cd7e8e182328f4971f180a456b"]];
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







