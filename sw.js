if(!self.define){let e,s={};const r=(r,a)=>(r=new URL(r+".js",a).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(a,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let l={};const u=e=>r(e,i),o={module:{uri:i},exports:l,require:u};s[i]=Promise.all(a.map((e=>o[e]||u(e)))).then((e=>(n(...e),l)))}}define(["./workbox-30e9d199"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_app/immutable/assets/_layout-610732b7.css",revision:null},{url:"_app/immutable/chunks/_layout-e59680bc.js",revision:null},{url:"_app/immutable/chunks/0-4217f7bc.js",revision:null},{url:"_app/immutable/chunks/1-8ce9450a.js",revision:null},{url:"_app/immutable/chunks/2-e9d3c18b.js",revision:null},{url:"_app/immutable/chunks/3-1ffd82b1.js",revision:null},{url:"_app/immutable/chunks/4-230e6be8.js",revision:null},{url:"_app/immutable/chunks/5-4b58042e.js",revision:null},{url:"_app/immutable/chunks/footer-af91771a.js",revision:null},{url:"_app/immutable/chunks/icon-6f369ed0.js",revision:null},{url:"_app/immutable/chunks/index-6a732392.js",revision:null},{url:"_app/immutable/chunks/index-a61c3598.js",revision:null},{url:"_app/immutable/chunks/post_card-9f0a817e.js",revision:null},{url:"_app/immutable/chunks/post_layout-ed11ed97.js",revision:null},{url:"_app/immutable/chunks/posts-c28dfff0.js",revision:null},{url:"_app/immutable/chunks/preload-helper-41c905a7.js",revision:null},{url:"_app/immutable/chunks/singletons-6f718a6d.js",revision:null},{url:"_app/immutable/chunks/table-b07611df.js",revision:null},{url:"_app/immutable/chunks/title-a514d004.js",revision:null},{url:"_app/immutable/components/pages/_error.svelte-55895ca2.js",revision:null},{url:"_app/immutable/components/pages/_layout.svelte-e54669a2.js",revision:null},{url:"_app/immutable/components/pages/_page.svelte-ce1ba69a.js",revision:null},{url:"_app/immutable/components/pages/about-me/_page.svelte.md-a673e885.js",revision:null},{url:"_app/immutable/components/pages/keynote/ai-art/_page.svelte.md-72f79985.js",revision:null},{url:"_app/immutable/components/pages/keynote/chess-popular/_page.svelte.md-17800fcf.js",revision:null},{url:"_app/immutable/modules/pages/_layout.ts-690d05ce.js",revision:null},{url:"_app/immutable/start-e2d84565.js",revision:null},{url:"assets/any@180.png",revision:"f4f60db532ae6da52da5ede208b59988"},{url:"assets/any@192.png",revision:"5206db97ccfcfb7aa8250cd1ae88ca7b"},{url:"assets/any@512.png",revision:"18a88f7030b0f8485466d553489a55b9"},{url:"assets/astro_500.png",revision:"cf87b607811aba6d0179ddc74cb09945"},{url:"assets/e9dc595e-4ef9-42ef-bb09-2893012589ff_Astroneural_simple_andmodernpurplegalaxylogo(1).png",revision:"cf87b607811aba6d0179ddc74cb09945"},{url:"assets/maskable@192.png",revision:"6b777c4543f418b595d173d3d6839a26"},{url:"assets/maskable@512.png",revision:"4de74e06031ddc52aa54ff80f1300aa6"},{url:"server/_app/immutable/assets/_layout-2fb1fd5f.css",revision:null},{url:"server/chunks/footer.js",revision:"44222ac97a176b11a218f8b1ec0f3ef2"},{url:"server/chunks/hooks.server.js",revision:"6ed0137f5b1b428fcebfb4211d321ea5"},{url:"server/chunks/icon.js",revision:"b6e1fb44756ec7aeeb983de230f41258"},{url:"server/chunks/index.js",revision:"79bab20fdfa81e19fed246aa5c7b8ab6"},{url:"server/chunks/index2.js",revision:"056c9122c7a01bce7e57c50b53a9ce0f"},{url:"server/chunks/index3.js",revision:"b1098a7ea315a59f729f33499e446dca"},{url:"server/chunks/internal.js",revision:"254d3bba8914584d7651ce2d58936d10"},{url:"server/chunks/post_card.js",revision:"d9c4ca3a6d6ac09fe217a903e2f0fee6"},{url:"server/chunks/posts.js",revision:"efb2f40e975a4835933247ddc74bd112"},{url:"server/chunks/prod-ssr.js",revision:"61cd30ecbbcd623b1d3535cb80266f5a"},{url:"server/chunks/site.js",revision:"bf310f048fb95adf6bef1450aad356f9"},{url:"server/chunks/title.js",revision:"f3b365fb561c049ddda63ed66d1c1e02"},{url:"server/entries/endpoints/atom.xml/_server.ts.js",revision:"6d6b1d37f3b3fb0ca5ef81e8ff4b97fa"},{url:"server/entries/endpoints/feed.json/_server.ts.js",revision:"213c6c6bcf86f503a4f3939acfc0e38d"},{url:"server/entries/endpoints/manifest.webmanifest/_server.ts.js",revision:"cac5ff7dd4676b4033b07a59525b551e"},{url:"server/entries/endpoints/posts.json/_server.ts.js",revision:"3680e786c090c488e5c4d8330cc5ea51"},{url:"server/entries/endpoints/sitemap.xml/_server.ts.js",revision:"5c9faeb7155f3e1dfda2753f8c54df83"},{url:"server/entries/endpoints/tags.json/_server.ts.js",revision:"3f706ebd4a24dd69c56d0f0efa797aab"},{url:"server/entries/pages/_error.svelte.js",revision:"aa5f6f1693dd7be1d9d2966e792076b4"},{url:"server/entries/pages/_layout.svelte.js",revision:"4462be2d9841d222b7be9d05b7c6efda"},{url:"server/entries/pages/_layout.ts.js",revision:"2263b7579c01ba9bff61b1d1fb5120ae"},{url:"server/entries/pages/_page.svelte.js",revision:"19d50faf8e470cfc6d167bde6fd7d4cb"},{url:"server/entries/pages/about-me/_page.svelte.md.js",revision:"45da03ccf94a41ff8434afe31a0b97c6"},{url:"server/entries/pages/keynote/ai-art/_page.svelte.md.js",revision:"75b735658bea623d268f974b35b4c052"},{url:"server/entries/pages/keynote/chess-popular/_page.svelte.md.js",revision:"78a8bd5bc49978f05c6f5b0fef11de79"},{url:"server/index.js",revision:"3056c4c57bb9b4a0db6eafb43fd7b97b"},{url:"server/internal.js",revision:"e0a9404c28f3dfa4c5b401181bed13f7"},{url:"server/manifest-full.js",revision:"f55637c76d7afaa21bdf94cefeda57a3"},{url:"server/nodes/0.js",revision:"94d35197cee576736e350e70a1f3b59f"},{url:"server/nodes/1.js",revision:"b9fb9548d69b97b47bf21126f1a9af89"},{url:"server/nodes/2.js",revision:"7ac808dd59dee58b6ed718a56c351662"},{url:"server/nodes/3.js",revision:"effbb4abe33b31915ff2d78b3488cee5"},{url:"server/nodes/4.js",revision:"149a7c44a52101e9b9aaca2d3a12d86c"},{url:"server/nodes/5.js",revision:"837e84927f204d781babeedb850232eb"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("./")))}));
