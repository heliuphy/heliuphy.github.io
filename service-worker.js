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

var precacheConfig = [["2016/05/01/Endnote的style/index.html","ffe69eda0d0478e387ed02cbc811d87b"],["2016/05/01/KeePass/index.html","a244c820290515072f3c742db19d209d"],["2016/05/01/VPS+Hexo+Dropbox创建个人博客/index.html","51b2a209db0d1298c2e06d803c9564b4"],["2016/05/01/VPS服务器搭建ghost blog/index.html","0869088c355daa8ae51134dc5b818358"],["2016/05/01/coding和github同时使用/index.html","df618d1249e9ff7cf12bc4556b240c66"],["2016/05/01/利用Keepass2.x进行ftp或webdev同步/index.html","965562a2daf331bad1cb78d819b5e33c"],["2016/05/01/搭建hexo博客小记/index.html","bd0a2e8a56f7893a765dd4a53c0d432a"],["2016/05/10/beamer的theme/index.html","040a49bf7cd7ae47e0e3ec8c3927ec4a"],["2016/05/13/win8.1与ubuntu双系统安装（硬盘安装）/index.html","b50811f209a7b000127cf46528e164f5"],["2016/05/14/Hexo利用Swiftype建立站内搜索/index.html","16e49b98431dad6c8d57295803e7ab97"],["2017/05/07/Leanote安装教程/index.html","79ca97c59840888b7411ff616b4e22d1"],["2017/05/07/VTK-5.10.1 TO VTK-7.1.1的变动/index.html","3938752c0932fb312e2648b723da4f00"],["2017/05/07/VTK-VS2008编译教程/index.html","34b2c7dc609d69046a0bd9e7eb939a5a"],["2017/05/07/VTK运行Tcl文件/index.html","65785ff009dc554928744e74bd76b091"],["2017/05/07/vtk-imageblend图像融合报错/index.html","be4079292c401509e843815217235cdf"],["2017/05/07/利用Dropbox备份vps中的文件/index.html","b035fc716bb0541b1386be739b2c4ca7"],["2017/05/07/如何利用Dropbox备份指定文件夹/index.html","b2f964b03c3a4fd987819502c849d408"],["2017/05/10/VTK提示MetaImage cannot read data from file/index.html","2d277aadf1b24c7c5c5321b7ca50e03e"],["2017/05/10/hexo在线编写博客/index.html","e9eefd22b739b0e539dd68e197032a55"],["2017/05/10/分享一款极好用的Chrome插件/index.html","93b0f1d75bbd4409014ae1d76633f343"],["2017/05/11/Linux零打碎敲/index.html","47e0fd6aef3cfbfcac2553f42bb86eb6"],["2017/05/15/Bash编程（一）/index.html","3e4b740fa83bc712fb58c0311d9cb2fa"],["2017/05/16/将图片自动上传到七牛并在markdown中引用/index.html","6d35be85533691f2ab2651c4f0ad717b"],["2017/06/19/软件推荐/index.html","7ed300bf8a96ed56c5705f31cf144467"],["archives/2016/05/index.html","0040c4b55734eef2851c2c01a234e9c8"],["archives/2016/index.html","6d458e63145c860d3b6122a42a5de5ef"],["archives/2017/05/index.html","eccbfb17bc0c628b8fa3894383ea0890"],["archives/2017/05/page/2/index.html","d1f54d888d9966ece090ee6db9ccf49a"],["archives/2017/06/index.html","94f7ddfa0d545163c44b1ced515b4790"],["archives/2017/index.html","4bcd6ab0a12261c08742c06eac9760c5"],["archives/2017/page/2/index.html","56cf21d25769dfeb7bc455e09f874e22"],["archives/index.html","04568caba1fb51644b82fde01e2d8981"],["archives/page/2/index.html","6a163fe84e804d370e617c29ec998e71"],["archives/page/3/index.html","74b877cde9a588bd607a28100413510f"],["categories/Git/index.html","09783cbb7e18efdac54b7493cf8f203c"],["categories/Linux/index.html","3383bb99c79814cc24b0e369a409dafb"],["categories/VTK/index.html","ac06533a0f1b2b3dd0b1c7e1226ec617"],["categories/index.html","d2fc26652fe013da915271d0699ed7cc"],["categories/web/index.html","935483232347f6c79839bf8d58a38f0e"],["categories/博客/index.html","0ac320e1c98dd688aa9ec044d9ff0981"],["categories/软件/index.html","74bb447e2afcbc1014e7bb1eaf97b1ee"],["css/index.css","581a4b829c16aa1e9e84c77fb1acbcce"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","6167462e96d19958b8297459358150a3"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","705892ac0fb109d2b4e08ec5b9fc5094"],["js/copy.js","e874c6f7e7a19bc720141c5e06060d29"],["js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","ea8ce28130bd4ce09d5fca2ca22ad168"],["js/search/local-search.js","0f0737f61144676eebc9f0959dc60f01"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","5ae36f984fee37d471a9e2956210e7db"],["page/3/index.html","0cffce91335ffb0ca6958c89caef1a11"],["slides/index.html","2b2b54da8a7e37c30d28b4a584639922"],["tags/Bash/index.html","c1031069c0fca44285682bf21826d1a5"],["tags/Chrome/index.html","93c1ac21456c87c7686a7fd5449d7619"],["tags/Docker/index.html","4ed94cd094063068891e73b4e3ccb7aa"],["tags/Dropbox/index.html","05dcd9e7769ff424043b47e0d2efe192"],["tags/Endnote/index.html","06104ca30a907ab5516f002546312cfb"],["tags/Git/index.html","ff554dcda77370278575d4a7e805ec6a"],["tags/Github/index.html","771156bfdb98cc78402462aeb7b00e4e"],["tags/Hexo/index.html","017e890be6788a85b936b52305fea636"],["tags/KeePass/index.html","ca148f11fab241963d082b0edc2b7591"],["tags/Linux/index.html","5d53dd63509416ea0137f14adb9b0acd"],["tags/Markdown/index.html","700d17426d9849ebf8e2ca4f540be173"],["tags/Swiftype/index.html","512a2500fe14c9be9a01d3ad86706f0a"],["tags/Tcl/index.html","c5faeb182e49a8b8dee62bf8808a77b2"],["tags/Ubuntu/index.html","a25148b748138b82a039ec3f1c7ab9cc"],["tags/VPS/index.html","3baaba85faa1298e4521d96d93a1400f"],["tags/VTK/index.html","fdbf8e4bae8a3f520e5c0ea466bafac2"],["tags/cloud9/index.html","9db0e17dc0074cc61e0fbcbe1ed8ad4e"],["tags/coding/index.html","3cfdf9ec117932e05390e39aeab97319"],["tags/ghost-blog/index.html","ddb7e7e83cc1556fd1a1b1e024b1d82b"],["tags/index.html","f5e5640358c17b8d8bac15d40e7c8209"],["tags/latex/index.html","16adb1a15b9d94d1a9a64537a747a3eb"],["tags/leanote/index.html","1007c54ad29eb2924c3ebe8773f26e91"],["tags/style/index.html","2df5b79015c8714c0af20ea23ebd86cc"],["tags/visualstudio/index.html","19b56bf748b100ccaee5071545578f55"],["tags/web/index.html","43b7a19fac36442964f5038a50be4a4d"],["tags/七牛云/index.html","d9a08ef1ffd6e38c9fb607f800197f8b"],["tags/插件/index.html","ba6eedfc4cbea0983a19795f2e1a707f"],["tags/站内搜索/index.html","9fb4fe2de1cb7444a8bd919c6bbf9bd1"],["tags/系统安装/index.html","c1968e3b7d863525510acf99f7d6d3ae"]];
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







