if (!self.define) {
  const e = (e) => {
      "require" !== e && (e += ".js");
      let a = Promise.resolve();
      return (
        c[e] ||
          (a = new Promise(async (a) => {
            if ("document" in self) {
              const c = document.createElement("script");
              (c.src = e), document.head.appendChild(c), (c.onload = a);
            } else importScripts(e), a();
          })),
        a.then(() => {
          if (!c[e]) throw new Error(`Module ${e} didn’t register its module`);
          return c[e];
        })
      );
    },
    a = (a, c) => {
      Promise.all(a.map(e)).then((e) => c(1 === e.length ? e[0] : e));
    },
    c = { require: Promise.resolve(a) };
  self.define = (a, s, i) => {
    c[a] ||
      (c[a] = Promise.resolve().then(() => {
        let c = {};
        const f = { uri: location.origin + a.slice(1) };
        return Promise.all(
          s.map((a) => {
            switch (a) {
              case "exports":
                return c;
              case "module":
                return f;
              default:
                return e(a);
            }
          })
        ).then((e) => {
          const a = i(...e);
          return c.default || (c.default = a), c;
        });
      }));
  };
}
define("./sw.js", ["./workbox-c2b5e142"], function (e) {
  "use strict";
  importScripts(),
    e.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/7VaLMI9sUyED06R47jFHt/_buildManifest.js",
          revision: "a0251d77f3ea555167053d352f4504d5",
        },
        {
          url: "/_next/static/7VaLMI9sUyED06R47jFHt/_ssgManifest.js",
          revision: "abee47769bf307639ace4945f9cfd4ff",
        },
        {
          url:
            "/_next/static/chunks/124718cdb3966ffc3e30c3d9a381ee2da68be82c.a6bff12f6346b7f08588.js",
          revision: "41c48f09bc67ca812f32f9b82dd48549",
        },
        {
          url:
            "/_next/static/chunks/244f9634c7fc970e139332856b134d1cd4584e77.222991b06aa40f3c5467.js",
          revision: "ac0f2d261e4a074ef87b05a21669ee1c",
        },
        {
          url:
            "/_next/static/chunks/4af1a1f5c7e540ab18b00b4e53a086af9a7d0825.3500fcee5fb17b710c0f.js",
          revision: "241afd7350de78eaeaadfd0f48987e48",
        },
        {
          url:
            "/_next/static/chunks/55c7d7e532fc4eab0024bb3772280ae6605997b5.b48b154a55619f3a35e5.js",
          revision: "537951b3219cb5751decc94f8291178a",
        },
        {
          url: "/_next/static/chunks/5ecfe452.7b37a38a8911fc5fb44b.js",
          revision: "c36c776021ab51c427356f0ebd60f2a2",
        },
        {
          url:
            "/_next/static/chunks/87f116f6a1fe8955318416c74b85a37254baba05.636a7570f31beb4f9b17.js",
          revision: "9d4192544c54008bfbf2d048be894401",
        },
        {
          url:
            "/_next/static/chunks/b20b8eec583cdf75bb24f8d36570196c3dc004ba.4f6262660dbba99c643a.js",
          revision: "07cdd31b137cf4cc83404770deb6d065",
        },
        {
          url:
            "/_next/static/chunks/c6be16eaa579be69b8e5df611132c8ab5bfef272.012b8d359726bbf87404.js",
          revision: "815d0abe8a513ff687febdb02af0e84d",
        },
        {
          url: "/_next/static/chunks/commons.4b4051bd9b58d946cb2f.js",
          revision: "91f19150a6b8b4e9c4cfb8b7220b60c4",
        },
        {
          url:
            "/_next/static/chunks/e26db6e3b908b1d6c7c2be6ded5626d054e5e846.4c83d26c509b9892150c.js",
          revision: "9fe82ef7da979dc4a1c8bd41da501606",
        },
        {
          url:
            "/_next/static/chunks/eed912fc399efc42ef0109467aaf4c81d1ccc205.d732928261aa45e101cd.js",
          revision: "9f7154cf5414d56012280dc4da90d65f",
        },
        {
          url: "/_next/static/chunks/framework.1d36bc031662b4dc4c28.js",
          revision: "7eafc2b810ea3395615465510119d273",
        },
        {
          url: "/_next/static/chunks/main-28a136123020df8e099e.js",
          revision: "c66a5d8c538b1084c2adb4db71bda022",
        },
        {
          url: "/_next/static/chunks/pages/404-befd1c89539cdf5ac6ed.js",
          revision: "b060cc3363f179cefc0e3885586fb5a9",
        },
        {
          url: "/_next/static/chunks/pages/_app-02e27a40be6e1c0a1314.js",
          revision: "fdfd37a395183b4f96ced5acbb81b06c",
        },
        {
          url: "/_next/static/chunks/pages/_error-818540eb3cae2ce7cbd5.js",
          revision: "9633f7235e39aa43c62471ff2579190a",
        },
        {
          url: "/_next/static/chunks/pages/index-5aa3bee22d5aac51fb37.js",
          revision: "81793d791692bf3278d61e58b14669f6",
        },
        {
          url: "/_next/static/chunks/pages/login-c152b7c9ecb4ac32e9a1.js",
          revision: "16cff36e63f04e146a174e4b40125be7",
        },
        {
          url: "/_next/static/chunks/pages/properties-c649d95fe97a726c0a9e.js",
          revision: "0e6ad94ff1efe6f208eb892beead620b",
        },
        {
          url:
            "/_next/static/chunks/pages/properties/%5BpropertyId%5D-ff4e1de797c52e305c33.js",
          revision: "aa723ea6af022b03c1e11ee094223a33",
        },
        {
          url: "/_next/static/chunks/pages/signup-f79bafeab84388dfd83c.js",
          revision: "5d882daa9419fb7951fb05ee8e67fb3f",
        },
        {
          url:
            "/_next/static/chunks/pages/user/%5BuserId%5D-6bcfc4fdf12b4ddbc0bf.js",
          revision: "d0b989fa3376916ed903821528bed6b9",
        },
        {
          url: "/_next/static/chunks/polyfills-05d6b25b3c33d28a7267.js",
          revision: "0e076d47ddcfa8b46257b2fa14fb59ce",
        },
        {
          url: "/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",
          revision: "8c19f623e8389f11131a054a7e17ff95",
        },
        {
          url: "/_next/static/css/b707f9c2d128ee59e217.css",
          revision: "87660571e6b0933af693f3040add62cf",
        },
        {
          url: "/_next/static/css/e3e4f3edce0e64f7873e.css",
          revision: "62e32c93db331c9904ada7486622f06d",
        },
        {
          url:
            "/_next/static/media/ajax-loader.fb6f3c230cb846e25247dfaa1da94d8f.gif",
          revision: "c5cd7f5300576ab4c88202b42f6ded62",
        },
        {
          url:
            "/_next/static/media/brand-icons.278156e41e0ad908cf7f841b17130502.woff2",
          revision: "e8c322de9658cbeb8a774b6624167c2c",
        },
        {
          url:
            "/_next/static/media/brand-icons.65a2fb6d9aaa164b41a039302093995b.ttf",
          revision: "c5ebe0b32dc1b5cc449a76c4204d13bb",
        },
        {
          url:
            "/_next/static/media/brand-icons.6729d29753e000c17489ed43135ba8d5.svg",
          revision: "a1a749e89f578a49306ec2b055c073da",
        },
        {
          url:
            "/_next/static/media/brand-icons.cac87dc00c87a5d74711d0276713808a.woff",
          revision: "a046592bac8f2fd96e994733faf3858c",
        },
        {
          url:
            "/_next/static/media/brand-icons.d68fa3e67dbb653a13cec44b1bcabcfe.eot",
          revision: "13db00b7a34fee4d819ab7f9838cc428",
        },
        {
          url: "/_next/static/media/flags.99f63ae7a743f21ab30847ed06a698d9.png",
          revision: "9c74e172f87984c48ddf5c8108cabe67",
        },
        {
          url:
            "/_next/static/media/icons.38c6d8bab26db77d8c806813e1497763.woff2",
          revision: "0ab54153eeeca0ce03978cc463b257f7",
        },
        {
          url:
            "/_next/static/media/icons.425399f81e4ce7cbd967685402ba0260.woff",
          revision: "faff92145777a3cbaf8e7367b4807987",
        },
        {
          url: "/_next/static/media/icons.62d9dae4e0040e81c980950003df0e07.svg",
          revision: "962a1bf31c081691065fe333d9fa8105",
        },
        {
          url: "/_next/static/media/icons.a01e3f2d6c83dc3aee175e2482b3f777.eot",
          revision: "8e3c7f5520f5ae906c6cf6d7f3ddcd19",
        },
        {
          url: "/_next/static/media/icons.c656b8caa454ed19b9a2ef7f4f5b8fea.ttf",
          revision: "b87b9ba532ace76ae9f6edfe9f72ded2",
        },
        {
          url:
            "/_next/static/media/outline-icons.5367103510b27b78482794590e1ce3b0.ttf",
          revision: "ad97afd3337e8cda302d10ff5a4026b8",
        },
        {
          url:
            "/_next/static/media/outline-icons.687a4990ea22bb1a49d469a5d9319790.woff2",
          revision: "cd6c777f1945164224dee082abaea03a",
        },
        {
          url:
            "/_next/static/media/outline-icons.752905fa5edf21fc52a10a0c1ca9c7a4.eot",
          revision: "701ae6abd4719e9c2ada3535a497b341",
        },
        {
          url:
            "/_next/static/media/outline-icons.9c4845b4b41ef40a22faee76144fa816.svg",
          revision: "82f60bd0b94a1ed68b1e6e309ce2e8c3",
        },
        {
          url:
            "/_next/static/media/outline-icons.ddae9b1ba9b0b42f58809904b0b21349.woff",
          revision: "ef60a4f6c25ef7f39f2d25a748dbecfe",
        },
        {
          url: "/_next/static/media/slick.2630a3e3eab21c607e21576571b95b9d.svg",
          revision: "f97e3bbf73254b0112091d0192f17aec",
        },
        {
          url:
            "/_next/static/media/slick.295183786cd8a138986521d9f388a286.woff",
          revision: "b7c9e1e479de3b53f1e4e30ebac2403a",
        },
        {
          url: "/_next/static/media/slick.a4e97f5a2a64f0ab132323fbeb33ae29.eot",
          revision: "ced611daf7709cc778da928fec876475",
        },
        {
          url: "/_next/static/media/slick.c94f7671dcc99dce43e22a89f486f7c2.ttf",
          revision: "d41f55a78e6f49a5512878df1737e58a",
        },
        {
          url: "/apple-icon.png",
          revision: "6fa92cc1ff1b1538606e6339df1b9bd7",
        },
        { url: "/favicon.ico", revision: "2ffb42f49d4083996e46a1fd78b71336" },
        {
          url: "/images/error-background.jpg",
          revision: "5dd9cc7a49c451166da295cca49496c6",
        },
        {
          url: "/images/error-background.webp",
          revision: "76dcbddf7b75fec53ed9adbc1a458f27",
        },
        {
          url: "/images/landing-background.jpg",
          revision: "0fa49ee53f70473cf436ea374de18c3c",
        },
        {
          url: "/images/landing-background.webp",
          revision: "01e6ee84e67c8b1eaf4e0882958c86e1",
        },
        {
          url: "/images/logos/FullYellowLogo.png",
          revision: "dcd73fb5d467014631f8e678dc5aa106",
        },
        {
          url: "/images/logos/FullYellowLogo.webp",
          revision: "413d99f9f89bc1b545e596ed4535c6dc",
        },
        {
          url: "/images/logos/NamedYellowLogo.png",
          revision: "a5781835bc3659cd92f6a074c88f4aef",
        },
        {
          url: "/images/logos/NamedYellowLogo.webp",
          revision: "a0bfc76faa04f6cec9f91eddda2ec528",
        },
        {
          url: "/images/logos/YellowLogo.png",
          revision: "fa562863245d29870d29b73eb96fd0f8",
        },
        {
          url: "/images/logos/YellowLogo.webp",
          revision: "845dd0d84a2ea5b7708baf56b2d94f61",
        },
        { url: "/logo192.png", revision: "95171610be39de4a68d1694a567e4dc5" },
        { url: "/logo512.png", revision: "cf5e28bc17eb5225a07aa8090c976122" },
        { url: "/manifest.json", revision: "471c1decc4a7c6c5effc9ba786249251" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 1,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/api\/.*$/i,
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /.*/i,
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    );
});
