if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let l={};const u=e=>r(e,n),d={module:{uri:n},exports:l,require:u};s[n]=Promise.all(i.map((e=>d[e]||u(e)))).then((e=>(a(...e),l)))}}define(["./workbox-25d99430"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_app/immutable/assets/0.0b508d21.css",revision:null},{url:"_app/immutable/assets/posts.2fa35b3e.css",revision:null},{url:"_app/immutable/chunks/footer.0845db10.js",revision:null},{url:"_app/immutable/chunks/icon.fb792a4b.js",revision:null},{url:"_app/immutable/chunks/index.00188b86.js",revision:null},{url:"_app/immutable/chunks/index.90e9d7be.js",revision:null},{url:"_app/immutable/chunks/post_card.b537ba1c.js",revision:null},{url:"_app/immutable/chunks/post_layout.e01fca45.js",revision:null},{url:"_app/immutable/chunks/posts.9bf54a43.js",revision:null},{url:"_app/immutable/chunks/preload-helper.cf010ec4.js",revision:null},{url:"_app/immutable/chunks/singletons.a96a5712.js",revision:null},{url:"_app/immutable/chunks/table.6db79477.js",revision:null},{url:"_app/immutable/chunks/title.18aba6a0.js",revision:null},{url:"_app/immutable/chunks/you-tube.8c32d9dd.js",revision:null},{url:"_app/immutable/entry/app.f7b6c054.js",revision:null},{url:"_app/immutable/entry/start.2a1ce05a.js",revision:null},{url:"_app/immutable/nodes/0.3e4485a1.js",revision:null},{url:"_app/immutable/nodes/1.7d7323e8.js",revision:null},{url:"_app/immutable/nodes/2.7f1484ba.js",revision:null},{url:"_app/immutable/nodes/3.3e71cda7.js",revision:null},{url:"_app/immutable/nodes/4.4e7756bb.js",revision:null},{url:"_app/immutable/nodes/5.c68b56fc.js",revision:null},{url:"_app/immutable/nodes/6.46f087a8.js",revision:null},{url:"_app/immutable/nodes/7.9655e03d.js",revision:null},{url:"assets/any@180.png",revision:"f4f60db532ae6da52da5ede208b59988"},{url:"assets/any@192.png",revision:"5206db97ccfcfb7aa8250cd1ae88ca7b"},{url:"assets/any@512.png",revision:"18a88f7030b0f8485466d553489a55b9"},{url:"assets/astro_500.png",revision:"cf87b607811aba6d0179ddc74cb09945"},{url:"assets/chess_banner.webp",revision:"c282992494dd13256b5d6d1468a76ff8"},{url:"assets/e9dc595e-4ef9-42ef-bb09-2893012589ff_Astroneural_simple_andmodernpurplegalaxylogo(1).png",revision:"cf87b607811aba6d0179ddc74cb09945"},{url:"assets/girl-with-a-pearl-earring.webp",revision:"db4efbc415e5829b3b421251715aaffb"},{url:"assets/Guitarra-espanola2.webp",revision:"9133a0bc3acc75275be665accab0c9a4"},{url:"assets/maskable@192.png",revision:"6b777c4543f418b595d173d3d6839a26"},{url:"assets/maskable@512.png",revision:"4de74e06031ddc52aa54ff80f1300aa6"},{url:"assets/messiaen.webp",revision:"3fbf9ea8bbbeadd264ba8c32210d139d"},{url:"server/_app/immutable/assets/_layout.2007626b.css",revision:null},{url:"server/_app/immutable/assets/posts.2fa35b3e.css",revision:null},{url:"server/chunks/footer.js",revision:"6683a75c82d483c1c1c128bf38ed6828"},{url:"server/chunks/hooks.server.js",revision:"6ed0137f5b1b428fcebfb4211d321ea5"},{url:"server/chunks/icon.js",revision:"b6e1fb44756ec7aeeb983de230f41258"},{url:"server/chunks/index.js",revision:"db779c93def37b9dd70f234e62358ca6"},{url:"server/chunks/index2.js",revision:"fecb7551ed0b658b7e735a75550bce00"},{url:"server/chunks/index3.js",revision:"8657d6186fc5f334b22f12eb6b1ad6cd"},{url:"server/chunks/internal.js",revision:"1bc1a4f702587797b6ade2d7a31e4dd7"},{url:"server/chunks/post_card.js",revision:"e408a2819d1f784396ed468812350a09"},{url:"server/chunks/posts.js",revision:"074b1123e1bc80314a3c9723e167864f"},{url:"server/chunks/prod-ssr.js",revision:"61cd30ecbbcd623b1d3535cb80266f5a"},{url:"server/chunks/site.js",revision:"bc80e5697601286654d3c4d0914fc001"},{url:"server/chunks/title.js",revision:"f3b365fb561c049ddda63ed66d1c1e02"},{url:"server/entries/endpoints/atom.xml/_server.ts.js",revision:"9d652fd81c5d5e41cef548531c9a713d"},{url:"server/entries/endpoints/feed.json/_server.ts.js",revision:"213c6c6bcf86f503a4f3939acfc0e38d"},{url:"server/entries/endpoints/manifest.webmanifest/_server.ts.js",revision:"cac5ff7dd4676b4033b07a59525b551e"},{url:"server/entries/endpoints/posts.json/_server.ts.js",revision:"3680e786c090c488e5c4d8330cc5ea51"},{url:"server/entries/endpoints/sitemap.xml/_server.ts.js",revision:"5c9faeb7155f3e1dfda2753f8c54df83"},{url:"server/entries/endpoints/tags.json/_server.ts.js",revision:"3f706ebd4a24dd69c56d0f0efa797aab"},{url:"server/entries/pages/_error.svelte.js",revision:"97ee921e052565582a8a700f84a66c88"},{url:"server/entries/pages/_layout.svelte.js",revision:"5acd0d5b4382a71ed80408a32669bcf4"},{url:"server/entries/pages/_layout.ts.js",revision:"2263b7579c01ba9bff61b1d1fb5120ae"},{url:"server/entries/pages/_page.svelte.js",revision:"7a7c70582a08d75a4ca47fc8a7791f21"},{url:"server/entries/pages/about-me/_page.svelte.md.js",revision:"c5b5c6435afcaa8d9fa4b7e0cfb2b83d"},{url:"server/entries/pages/keynote/ai-art/_page.svelte.md.js",revision:"75b735658bea623d268f974b35b4c052"},{url:"server/entries/pages/keynote/chess-popular/_page.svelte.md.js",revision:"78a8bd5bc49978f05c6f5b0fef11de79"},{url:"server/entries/pages/keynote/messiaen/_page.svelte.md.js",revision:"c539ee5ee6f197e48e5eb26546451326"},{url:"server/entries/pages/more/joaquin-rodrigo/_page.svelte.md.js",revision:"6520cf9578f73be76759d8255597c8fa"},{url:"server/index.js",revision:"ddd378170ce5e276d83146d7b64b7d40"},{url:"server/internal.js",revision:"3844e499e60d526c6664c1c777b19618"},{url:"server/manifest-full.js",revision:"01c462093eced1adb5e192e224fbad2d"},{url:"server/nodes/0.js",revision:"94d35197cee576736e350e70a1f3b59f"},{url:"server/nodes/1.js",revision:"b9fb9548d69b97b47bf21126f1a9af89"},{url:"server/nodes/2.js",revision:"7ac808dd59dee58b6ed718a56c351662"},{url:"server/nodes/3.js",revision:"effbb4abe33b31915ff2d78b3488cee5"},{url:"server/nodes/4.js",revision:"149a7c44a52101e9b9aaca2d3a12d86c"},{url:"server/nodes/5.js",revision:"837e84927f204d781babeedb850232eb"},{url:"server/nodes/6.js",revision:"c2cc8f57b408fd6ecb7286c7f5a2f2ef"},{url:"server/nodes/7.js",revision:"e22e3d1ce8bb198a6783d7a2d6f24681"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/")))}));
