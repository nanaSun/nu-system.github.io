/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1f7b3a84f54052f9324f9a6307b11a7f"
  },
  {
    "url": "assets/css/0.styles.e304676b.css",
    "revision": "03c15b2393c162abf53cc0ff1324f5b5"
  },
  {
    "url": "assets/img/demo.84beb638.png",
    "revision": "84beb638fd907bdd2e1135b925c689f5"
  },
  {
    "url": "assets/img/demo.f1ab39e9.png",
    "revision": "f1ab39e9505a95b563c422cdcf46a26a"
  },
  {
    "url": "assets/img/demo.f67e0c09.png",
    "revision": "f67e0c099015a3f648e74bb53f328610"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1659b245.js",
    "revision": "a5f4ce266e704272151c77139ab65d7d"
  },
  {
    "url": "assets/js/11.c68d25d5.js",
    "revision": "3aee3ac78d278f54b289c29a78b4388a"
  },
  {
    "url": "assets/js/12.f2b5d18f.js",
    "revision": "f5d7d4a663dd4697de5ba779736d6331"
  },
  {
    "url": "assets/js/13.dda45304.js",
    "revision": "f05b19a9458b0369dbb0708c92af2509"
  },
  {
    "url": "assets/js/14.8241afb7.js",
    "revision": "07c9c03fe05414fab1d26d972f20f1c8"
  },
  {
    "url": "assets/js/15.8edb8197.js",
    "revision": "fbc743018985f5f50dce743fbd9aaae0"
  },
  {
    "url": "assets/js/16.1cc1d856.js",
    "revision": "22448cd5ff6c58da9ccade28337cc382"
  },
  {
    "url": "assets/js/17.1740284a.js",
    "revision": "f1e3c6e3f602c016179e95faea23d459"
  },
  {
    "url": "assets/js/18.7e924271.js",
    "revision": "0fc367f3cae5b5128cc566d32edc5e2d"
  },
  {
    "url": "assets/js/19.089bb914.js",
    "revision": "cafc83602680e9194c17aa35d864cdf5"
  },
  {
    "url": "assets/js/2.fa8b9d67.js",
    "revision": "50e7c7b24833b80c4a1bc6a73ece99ac"
  },
  {
    "url": "assets/js/20.12dc578e.js",
    "revision": "076609395e6f75a519c4f4c0f076f385"
  },
  {
    "url": "assets/js/21.a949a182.js",
    "revision": "89475227f99c7a04cf4b5fed3f724ae8"
  },
  {
    "url": "assets/js/22.e1bd3fea.js",
    "revision": "8554b936978be6450e5f8ccd493f1e3c"
  },
  {
    "url": "assets/js/23.77872654.js",
    "revision": "0fc44d6031dc5eed5f8b32151d776456"
  },
  {
    "url": "assets/js/24.ad4d99f3.js",
    "revision": "1cf59cfd8d1bbcc69238727d74b0e7a9"
  },
  {
    "url": "assets/js/25.2bf8947c.js",
    "revision": "88afbeca4422d76b230e5a4b9bbb728a"
  },
  {
    "url": "assets/js/26.9d992491.js",
    "revision": "518577334fea50f61b34d6e51d8e6087"
  },
  {
    "url": "assets/js/3.b80d3dba.js",
    "revision": "54c30edd41161355120a313c1d244697"
  },
  {
    "url": "assets/js/4.57d9c8d9.js",
    "revision": "a363bfd6210ece5d2e2b5c0fd483d971"
  },
  {
    "url": "assets/js/5.d785768d.js",
    "revision": "5c736be311a99b38bafb88e7eb23f00d"
  },
  {
    "url": "assets/js/6.5c44cc24.js",
    "revision": "1ba0839cc542a258e0ed499246569658"
  },
  {
    "url": "assets/js/7.d5d2d4af.js",
    "revision": "cc107c6c654d98611ee29f1d2acb195a"
  },
  {
    "url": "assets/js/8.4b711e02.js",
    "revision": "39cd7c5cd78963c08762b00131b26d51"
  },
  {
    "url": "assets/js/9.ba71fb8c.js",
    "revision": "43eb92c21a5e21bbec1309aedf1fda13"
  },
  {
    "url": "assets/js/app.3dc3baea.js",
    "revision": "de16b3ff2ad7b66e722e286d098766ed"
  },
  {
    "url": "index.html",
    "revision": "d419a5523f47b899f92a6cea98b5b000"
  },
  {
    "url": "logo.png",
    "revision": "fa6447be688e9e1568f5d10075257392"
  },
  {
    "url": "react-native/acss/index.html",
    "revision": "4e6fade4795655432bd414822076fe18"
  },
  {
    "url": "react-native/button/index.html",
    "revision": "a42b8cde59b7314ad98fcb9694ce10ba"
  },
  {
    "url": "react-native/grid/index.html",
    "revision": "07c340a8b88cf0589e55fe5e3037c961"
  },
  {
    "url": "react-native/index.html",
    "revision": "28e1d1df779501a49f6431d9ad403383"
  },
  {
    "url": "react/button/index.html",
    "revision": "da2bf9f25c90b4dea843cf2edcfee251"
  },
  {
    "url": "react/dialog/index.html",
    "revision": "3368753b68585c4730c74ebf2aa0198a"
  },
  {
    "url": "react/index.html",
    "revision": "65892755128d34d23e327e1653aedc3a"
  },
  {
    "url": "react/toast/index.html",
    "revision": "403851a53d4f33f224b5e2f08e94ddd3"
  },
  {
    "url": "vanilla/button/index.html",
    "revision": "465ddd40bfdc0d12aa54cd545c65d89b"
  },
  {
    "url": "vanilla/dialog/index.html",
    "revision": "33d26767a0ea90e43c282b22936184c3"
  },
  {
    "url": "vanilla/index.html",
    "revision": "b31bea48d9c7394f29f0a5f9cefa96e9"
  },
  {
    "url": "vanilla/toast/index.html",
    "revision": "cd3574daee2e34118e426de4d641a6a0"
  },
  {
    "url": "vue/axios-form/index.html",
    "revision": "72808ad71179911acc3b7bcd22d24e0e"
  },
  {
    "url": "vue/button/index.html",
    "revision": "5ea8ba9ed3564bfb2f37b014b48f4ab9"
  },
  {
    "url": "vue/dialog/index.html",
    "revision": "eacbb2c31293d1096ef491f28dcce3fa"
  },
  {
    "url": "vue/index.html",
    "revision": "26cd996601cc90e30e3e4cc5d80eec3b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
