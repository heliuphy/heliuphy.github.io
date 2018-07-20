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

var precacheConfig = [["2016/05/01/Endnote的style/index.html","716cb5920280807b22fd6c43a41ffcb9"],["2016/05/01/KeePass/index.html","5de104b3fdb41f0ff6652a3c0784f474"],["2016/05/01/VPS+Hexo+Dropbox创建个人博客/index.html","65df4f19c7872acd0ffc2f289f908e06"],["2016/05/01/VPS服务器搭建ghost blog/index.html","06865829d5535b1b355e21490b54992b"],["2016/05/01/coding和github同时使用/index.html","d1987b2f5e611b529dc4fa0fa0bb5d17"],["2016/05/01/利用Keepass2.x进行ftp或webdev同步/index.html","ce6678ee45754082e14ad95d45127df8"],["2016/05/01/搭建hexo博客小记/index.html","ac6ae24bd0f02eed0f9e48be0dc058a6"],["2016/05/10/beamer的theme/index.html","d655e7613b1e0bdab172e2f0dd46dc04"],["2016/05/13/win8.1与ubuntu双系统安装（硬盘安装）/index.html","b9e1df040749d7e4c252ff35d8805f3f"],["2016/05/14/Hexo利用Swiftype建立站内搜索/index.html","b99c33ed6d60ab8445d2ad4bb68a3176"],["2017/05/07/Leanote安装教程/index.html","58a0505dc4bd26d08c5ecf05fbc109d4"],["2017/05/07/VTK-5.10.1 TO VTK-7.1.1的变动/index.html","463ba053ba3cef68926d81d2e3045553"],["2017/05/07/VTK-VS2008编译教程/index.html","515f0834e30167d18cddd29017753db4"],["2017/05/07/VTK运行Tcl文件/index.html","a0692e76e2ec09e9dda0a698a8511999"],["2017/05/07/vtk-imageblend图像融合报错/index.html","779f1cf22db6d1fef40bec173f2f3426"],["2017/05/07/利用Dropbox备份vps中的文件/index.html","fe730fe6667b4dc8ae4020f30c5a6d76"],["2017/05/07/如何利用Dropbox备份指定文件夹/index.html","d8a53cb79ac1e833b9ffa0e4cfc55300"],["2017/05/10/VTK提示MetaImage cannot read data from file/index.html","ab07977737edaecd6940bbd6c488b29e"],["2017/05/10/hexo在线编写博客/index.html","647754905509fa63055bd5baa504168f"],["2017/05/10/分享一款极好用的Chrome插件/index.html","c2220499ba1c004f269093ba0e90a5de"],["2017/05/11/Linux零打碎敲/index.html","4707746bc5c36389e138b9acaa662d86"],["2017/05/15/Bash编程（一）/index.html","2a7da4ddada1e21d9f3ceaff2ac8c3dd"],["2017/05/16/将图片自动上传到七牛并在markdown中引用/index.html","655783f611faf32bc634ba87f7b2318e"],["2017/06/19/软件推荐/index.html","69d8b32badff975a3db52fc7c5a98338"],["2018/07/20/HexoEditor-测试/index.html","4220ecff457edc2ad21907c8b6a6d0b3"],["archives/2016/05/index.html","dcc1ba7dd24ed13179e049beeebf39cc"],["archives/2016/index.html","44ff89d77de563f3e1bebe716537766d"],["archives/2017/05/index.html","9f355fd6622353f873f0d2ab2ca413b8"],["archives/2017/05/page/2/index.html","1ea8e16298d0ddc461656d5cc445fb5c"],["archives/2017/06/index.html","57a3554843421b5d16cef65df654a198"],["archives/2017/index.html","e4273937c42b35bdf31127f8d5811c61"],["archives/2017/page/2/index.html","9188ea324a2302f01d61f074d8231a39"],["archives/2018/07/index.html","dbd6ae7126620e273699f4c5953e9b5d"],["archives/2018/index.html","092ccf03d371327f01400b9af61ef8ef"],["archives/index.html","4e2db338a6cc51b93541bf9857e0df70"],["archives/page/2/index.html","bdf6c6ed2696e1b71a08e31edbce3a17"],["archives/page/3/index.html","2acb2153f452a17763a0826874f3c208"],["avatar.jpg","ea7dfe92d6e37ae050863316c80e4d50"],["categories/Git/index.html","2250aca8bd5ee958c3f2ff89229ae427"],["categories/Linux/index.html","396b5061a95031cd67eee79f5f35425d"],["categories/VTK/index.html","c5ebf61aedb1975a0a9ccc39701ccb9a"],["categories/index.html","334b14701218d7081c501d2d12acb2b8"],["categories/web/index.html","54d1ddfe82e39722791e7aae01fcec8a"],["categories/博客/index.html","c93a2287aa21f3f135fbdb21e0501608"],["categories/软件/index.html","ea473e0b4bf6d1f70407408c59fb86ee"],["css/index.css","581a4b829c16aa1e9e84c77fb1acbcce"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","ef02062d5c57601d305fee08a074811c"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","5af43222dd89055c153acf12a3648a25"],["js/copy.js","e874c6f7e7a19bc720141c5e06060d29"],["js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","ea8ce28130bd4ce09d5fca2ca22ad168"],["js/search/local-search.js","0f0737f61144676eebc9f0959dc60f01"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","bb9e74656084e172ebd51d06cca6f47d"],["page/3/index.html","e7e35e023ab156e92da95baf576fd66c"],["slides/index.html","e214991ca3da51577633bca2aee93602"],["tags/Bash/index.html","5bd0ff9999ee3dee67192c3104ff843c"],["tags/Chrome/index.html","90db3476d3a03d03732093fd06933f2c"],["tags/Docker/index.html","28d605be223f531e26ff403441f57d97"],["tags/Dropbox/index.html","b653c8aa0e6e4e39f65e3fb04d3983d7"],["tags/Endnote/index.html","47b98ffdd30958cb7f7157e28bcffe3c"],["tags/Git/index.html","42ec1be52df15c7330a13146b3a82c17"],["tags/Github/index.html","ef26844a44e0b3b96a073a9c72e9ccff"],["tags/Hexo/index.html","863dba6ca7752ea6998bc9bf04ab1598"],["tags/KeePass/index.html","6c257dca15adf03f57e0fde78bacc26c"],["tags/Linux/index.html","0e02353a913d6c926f0a62489a694d8d"],["tags/Markdown/index.html","2afc93a58cee82ee904df9f0e63144a9"],["tags/Swiftype/index.html","163d1e2cbeacee0e7e8e85c2fc87ecf0"],["tags/Tcl/index.html","3c4d6bae5a17dce054e0cd2af436a8f3"],["tags/Ubuntu/index.html","a85aada0202660cb5068242ca2ff63f4"],["tags/VPS/index.html","52d238498ce63c5cfb2817215af4f83b"],["tags/VTK/index.html","f28329a5164e825bc1394f07d3f8d1e5"],["tags/cloud9/index.html","b6319f6b7e83646b9baca5995da89f70"],["tags/coding/index.html","596c8a6f2411a7fd99ef0ad959c47e7f"],["tags/ghost-blog/index.html","13db8342566c7fe20a7584f0bafd373f"],["tags/index.html","5a9d1c6b63cb7ed7bb45e444ffddfc62"],["tags/latex/index.html","c9f2f4441136326ae445f82b58f8596b"],["tags/leanote/index.html","f254d57341b517f801512adad7673997"],["tags/style/index.html","ef7fe4b6c3a28726f3da07bec7813a60"],["tags/visualstudio/index.html","8ca0a5c9d34b2f90a23d6f3fc2c02177"],["tags/web/index.html","3b1e541686a4de90b4c373f78cd448bb"],["tags/七牛云/index.html","5472160392bbf3618d29108adf451d35"],["tags/插件/index.html","fda404e09b66454cc21ebacea5efabfc"],["tags/站内搜索/index.html","f70fc147d18330bed63eef3dbe218936"],["tags/系统安装/index.html","b898a0da8d8b33acc7817fdd677e4064"]];
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







