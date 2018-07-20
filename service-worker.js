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

var precacheConfig = [["2016/05/01/Endnote的style/index.html","6a9f957a2e535d65532d98f5c7d945b7"],["2016/05/01/KeePass/index.html","cf038a65807fb084559a1134beb4f7c8"],["2016/05/01/VPS+Hexo+Dropbox创建个人博客/index.html","3a2f7973cf699fc3db6f951b4d4c4382"],["2016/05/01/VPS服务器搭建ghost blog/index.html","59edb5369520d9307954302a187246a5"],["2016/05/01/coding和github同时使用/index.html","3b7274b31f7910bddf6fcdd7a47dca42"],["2016/05/01/利用Keepass2.x进行ftp或webdev同步/index.html","72f1ba163b399c76fd2d89ddcf158a65"],["2016/05/01/搭建hexo博客小记/index.html","897501f3a96606f3f3fc7c1b48b2b7a5"],["2016/05/10/beamer的theme/index.html","3baef15ad0a35e3f77e15713a62407da"],["2016/05/13/win8.1与ubuntu双系统安装（硬盘安装）/index.html","3c74fa71c8e851e1e7c2097419cda107"],["2016/05/14/Hexo利用Swiftype建立站内搜索/index.html","1b69d418272231a05407b314fd189b39"],["2017/05/07/Leanote安装教程/index.html","074a34d2a73f2ad7df77d8b8437668d9"],["2017/05/07/VTK-5.10.1 TO VTK-7.1.1的变动/index.html","4ea171e11c4cd74a0a7af1c5d52c9c18"],["2017/05/07/VTK-VS2008编译教程/index.html","440092e97d9e87c5a9d3e85aab1018bf"],["2017/05/07/VTK运行Tcl文件/index.html","24e03038c42a20c429e865c5a6c3dda7"],["2017/05/07/vtk-imageblend图像融合报错/index.html","029c0261bb2cfe7b7a445a55478726cf"],["2017/05/07/利用Dropbox备份vps中的文件/index.html","9e2a560cd39c692f628cf06f7cf52770"],["2017/05/07/如何利用Dropbox备份指定文件夹/index.html","583c33d895d8383ead65c700f6866a5e"],["2017/05/10/VTK提示MetaImage cannot read data from file/index.html","f68a3f01563034de5c2800c98d139d34"],["2017/05/10/hexo在线编写博客/index.html","8418f86014a3a5bc9b3186da1a4ff768"],["2017/05/10/分享一款极好用的Chrome插件/index.html","615a9d86bf998f5c458bc29f2c10203b"],["2017/05/11/Linux零打碎敲/index.html","27140e2e2a6281a33e816dfa5aaf54df"],["2017/05/15/Bash编程（一）/index.html","81b3b93601188e921a6d5ea93e2bc614"],["2017/05/16/将图片自动上传到七牛并在markdown中引用/index.html","84576b2453ab304088f409ab36a1ba2a"],["2017/06/19/软件推荐/index.html","762c46e39a51e245d5933b13d93b64e7"],["archives/2016/05/index.html","e5e6921e5d8aa1ca2670f710f136beb1"],["archives/2016/index.html","10bae1ce2412c805e9a05dc10afc79af"],["archives/2017/05/index.html","37337c5eb0c4256383bbc6f42d1f75a6"],["archives/2017/05/page/2/index.html","e61eaa1d0477ad36b087224edc8996cd"],["archives/2017/06/index.html","e9c2a34867ec96ec8153272f2837391b"],["archives/2017/index.html","66f2ab03e7a3766b517f6a23ce16c6f2"],["archives/2017/page/2/index.html","7267f135e5af495d16be87d21d87b55e"],["archives/index.html","fa3d69bbce73f950a5fad095b203da37"],["archives/page/2/index.html","4d75fe1bbd56433e511af477b388d48a"],["archives/page/3/index.html","649ab96b5002af4a7c516983453bdd54"],["categories/Git/index.html","65995e15925c45cf4b19bd29883f7c57"],["categories/Linux/index.html","a0434f831ae5df4cca878e5d570f58dc"],["categories/VTK/index.html","8927c736f05c4c42031637023af24ce2"],["categories/index.html","1c7bab30cb0523bb3fbb161bcab681d1"],["categories/web/index.html","412d92670f46e587460be634b261de6d"],["categories/博客/index.html","3301737c43f8e96e865081bbabb554f4"],["categories/软件/index.html","8b327448d12f1e1d0d58959b5d4acd96"],["css/index.css","581a4b829c16aa1e9e84c77fb1acbcce"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["gallery/index.html","42a799e6d1a60ef19a8b8b8a9f1fd4ab"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["index.html","4757986f7e4bdf70f61f010ab8eae9d7"],["js/copy.js","e874c6f7e7a19bc720141c5e06060d29"],["js/fancybox.js","cdef3c681834a3e5ee4de9a7ed2e0fb0"],["js/fireworks.js","c186e041cb64c2e7efd345b7838f6ad7"],["js/head.js","72dbb78b4e9c4cdf14fd4b8c9bd9828c"],["js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["js/scroll.js","c1789d3ce75d3ff59ea20a6b435c2fcf"],["js/search/algolia.js","ea8ce28130bd4ce09d5fca2ca22ad168"],["js/search/local-search.js","0f0737f61144676eebc9f0959dc60f01"],["js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["js/transition.js","bd261a5dda799613501070ecc19d6e69"],["js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["page/2/index.html","c62be82a2dc444d09d7a27c443e94ee5"],["page/3/index.html","c92e30a6e2ff4442c04401762b3d977c"],["slides/index.html","c32f99027f763dfb6f7be84c574b7b6a"],["tags/Bash/index.html","13775d5c6ea8df355fe28e8d957697f6"],["tags/Chrome/index.html","f07833217836f36408b9c2bfe3496398"],["tags/Docker/index.html","e9a79f0accb899a7441fcf16ec2c23ee"],["tags/Dropbox/index.html","90e445b3ea3622fa07638f306b3789e1"],["tags/Endnote/index.html","3e1aa0e9f77ce2f9f5e131205faf62b6"],["tags/Git/index.html","cfb94944df5c99e648960c464dfd0e50"],["tags/Github/index.html","b02dc1f04576656188e47cf010fe4831"],["tags/Hexo/index.html","53a31a32af8151b1bf2a63cd10b490a3"],["tags/KeePass/index.html","df26d1aece8bb1fe927d9df6d8453c7e"],["tags/Linux/index.html","73bb31c2a2a1404eff96f581ac35dbfd"],["tags/Markdown/index.html","862bdc4d8e245ce9def0b36620869560"],["tags/Swiftype/index.html","09f80e1efc9a3916da14d25538f95231"],["tags/Tcl/index.html","4b9431c438c9e2f8b6fbf39129d4094b"],["tags/Ubuntu/index.html","5b770f422fc045f3f83bf80e5c3135ea"],["tags/VPS/index.html","be454fc098bc3e7a56860641b4a261e1"],["tags/VTK/index.html","35306ed985775b5ca6aadfcbefaa92af"],["tags/cloud9/index.html","544af0554d0521fbc883d40ca72c9fa3"],["tags/coding/index.html","3c8c681decda4f1cd3f703296f40a778"],["tags/ghost-blog/index.html","b34ced1a1ef071520e02e9e49687a610"],["tags/index.html","538eaf0a949739f46d521e7eb8860d49"],["tags/latex/index.html","de5715e9cdede2d27ceeb3a1cab0e162"],["tags/leanote/index.html","dd1a7505919b607024b6c84c9ab5d1f5"],["tags/style/index.html","a6b420fd27d55aaa0ce716a2a4f061f8"],["tags/visualstudio/index.html","7e6e6dba0664f2daf7fb486c198a95d7"],["tags/web/index.html","30a336005a128c09f856a497978a369e"],["tags/七牛云/index.html","516d02567036c8f461b66ff81bccbe19"],["tags/插件/index.html","1e9da718dd864fbb6ea7863742300ee3"],["tags/站内搜索/index.html","2b64f314b9c633ce6208fb54d0b7086a"],["tags/系统安装/index.html","f2b267b1bda1b26ed6330790594b2565"]];
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







