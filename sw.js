"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"zkpeace"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"52fb955ad8161a036c52c86948f6eeef",url:"./404.html"},{revision:"9b4b5af3a03e11c1acea4061bfad074c",url:"./archives/1970/01/index.html"},{revision:"54e5068ea4b6682735c63f834afbaf9c",url:"./archives/1970/index.html"},{revision:"8ff849bb4e40c93fd34b3f42da79ff23",url:"./archives/2018/09/index.html"},{revision:"992e222a5124d47a926fdc3ee4a009ef",url:"./archives/2018/index.html"},{revision:"64c9355812ccd20761fbd216d01e8478",url:"./archives/2019/05/index.html"},{revision:"919bef5f07a7b6d942db487e79959cf0",url:"./archives/2019/06/index.html"},{revision:"fcd48a7989ed5303779c4a85987df794",url:"./archives/2019/08/index.html"},{revision:"4a376236aa3fc3cb25f29ce36695078f",url:"./archives/2019/10/index.html"},{revision:"8ffecafcee31f43b84f3997ec60c917a",url:"./archives/2019/index.html"},{revision:"705ab2d80ce3bb0665dfedda8899b0b6",url:"./archives/2020/01/index.html"},{revision:"f1bf8b4130dd22f5756e1b4ca28b65c9",url:"./archives/2020/02/index.html"},{revision:"383d801533d40f57e2ab5afde61a7623",url:"./archives/2020/03/index.html"},{revision:"44bfd24ef440bc7a26ca259aa9a62058",url:"./archives/2020/04/index.html"},{revision:"bf318420f37481cf9c380181a64dd318",url:"./archives/2020/05/index.html"},{revision:"f2520223ebb1bd32c5e34f76e181d1d5",url:"./archives/2020/06/index.html"},{revision:"25a06c479420c01f7262564c52743841",url:"./archives/2020/07/index.html"},{revision:"c7280bac886e085ea988e66cfe15b1b8",url:"./archives/2020/10/index.html"},{revision:"4acd2673a790142e6c73d7edb2a0533a",url:"./archives/2020/index.html"},{revision:"bb53dec66ea7b666e58d049ac09000b5",url:"./archives/2020/page/2/index.html"},{revision:"d0d596a1f1f413f18570d659bc450e8f",url:"./archives/2021/05/index.html"},{revision:"701a08220f4c809edc60d12453d73af5",url:"./archives/2021/06/index.html"},{revision:"444df2ee67ed2ac0d36d771ae418b545",url:"./archives/2021/07/index.html"},{revision:"19ea356909f9c874436634d7dd1d909e",url:"./archives/2021/index.html"},{revision:"0f48f0818fac0cee5311351572145704",url:"./archives/2022/03/index.html"},{revision:"e5300eca66a8af61190bf69df72cf962",url:"./archives/2022/04/index.html"},{revision:"7c785245880b0fc10fc1c2ca70fd270b",url:"./archives/2022/05/index.html"},{revision:"2ce98129e08c4edf3f860defe9536988",url:"./archives/2022/index.html"},{revision:"c787e22c0ba61388054d13590003ad9d",url:"./archives/index.html"},{revision:"f0989cab49412b08eceff03abbfc9866",url:"./archives/page/2/index.html"},{revision:"157f6bbcc142ab6b3797edfb6a905899",url:"./archives/page/3/index.html"},{revision:"5e0f90b2403e79eefaa9f7c8ff0f4cb0",url:"./archives/page/4/index.html"},{revision:"0056f4eb391a4052763df27a05d51c88",url:"./archives/page/5/index.html"},{revision:"fbe994054426fadb2dff69d824c5c67a",url:"./assets/css/APlayer.min.css"},{revision:"8f1017e7a73737e631ff95fa51e4e7d7",url:"./assets/js/APlayer.min.js"},{revision:"bfac0368480fd344282ec018d28f173d",url:"./assets/js/Meting.min.js"},{revision:"64b6bbc03d251c6a7228255b20b1f0a7",url:"./categories/技术/计算机系统/index.html"},{revision:"24af712aaefb161b09b6f5d38252e81f",url:"./categories/技术/认知机器/index.html"},{revision:"9a18823c812a784fe452fca9238339fb",url:"./categories/技术/图形学/index.html"},{revision:"74070ed0568267c0e32671f13a5544f1",url:"./categories/技术/小程序/index.html"},{revision:"2fd5c7199116c3db1e5d839789b032d8",url:"./categories/技术/智能家居/index.html"},{revision:"585ef130a0b46e836ae18a58699312a6",url:"./categories/技术/index.html"},{revision:"bdcdd391dc171e79d091c9b1f3d1849a",url:"./categories/技术/page/2/index.html"},{revision:"86f25b036d5500b4373b0b113bcbb414",url:"./categories/技术/python/index.html"},{revision:"b2e3130effa8074766d01b3a103ea53a",url:"./categories/技术/web/index.html"},{revision:"24dec2cefa9b11433f978d9d2fb04f5e",url:"./categories/生活/测评/index.html"},{revision:"a225603a921e7d728ebadba1e2dd8c34",url:"./categories/生活/记事/index.html"},{revision:"0709e3a95ca812d973bfb11e07666925",url:"./categories/生活/旅行/index.html"},{revision:"240459813704249bacca5e8a7de4df1e",url:"./categories/生活/软件/index.html"},{revision:"e720a912cabce93a73bbfd8224bffea0",url:"./categories/生活/影评/index.html"},{revision:"e0828313eed93553ba7c0c7b33d7734f",url:"./categories/生活/index.html"},{revision:"b4460c930896a3d86a3e0979edb560fa",url:"./categories/生活/page/2/index.html"},{revision:"104b9ab0fa29ce39cd81d378f3649cde",url:"./categories/生活/page/3/index.html"},{revision:"f824adc64881b6c3434b92325b3c67ab",url:"./categories/项目/其他项目/index.html"},{revision:"f38ffb02fbaab38d85accb584508a61e",url:"./categories/项目/认知机器/index.html"},{revision:"25f6d3c9a7d7dd7baccab7f43e185e87",url:"./categories/项目/应用开发/index.html"},{revision:"9c6211f59358d9aa81780738f9a243fe",url:"./categories/项目/index.html"},{revision:"fd6717b8fae10a4559717240e8ca8732",url:"./categories/index.html"},{revision:"23c899a4d9f1b2c5dd37f2c5956684db",url:"./channel/index.html"},{revision:"a753aafa8fd51f9bbad90bbf1c282550",url:"./copyright/index.html"},{revision:"a8bc819e01e001d3bc6ae03a2afad957",url:"./css/hbe.style.css"},{revision:"6df7e83765d94cfab057755617126a02",url:"./css/index.css"},{revision:"d00a5d272c1a17990a991eb80ab486a3",url:"./css/var.css"},{revision:"8416dacb1655d101c3787fbf98bbb6f7",url:"./douban/index.html"},{revision:"9ee875f8ee8fed3bde50d386a2622854",url:"./friends/index.html"},{revision:"6472c8e2f09b54db79db7e21470cf762",url:"./gallery/index.html"},{revision:"0f5c4778c807160df123b9635be6fe9d",url:"./gallery/life/index.html"},{revision:"3fdbd23b6535afb8b9de7347bc554dd5",url:"./gallery/photography/index.html"},{revision:"c470384c23146b84e65f80dd22e23982",url:"./gallery/photos/index.html"},{revision:"16f57faffcecd247cba815bc99109171",url:"./gallery/profile/index.html"},{revision:"b317e581b077f48cb709f700b2bc715c",url:"./gallery/qingdao/index.html"},{revision:"198d5624beddbed9c5f7312ffdea2aa4",url:"./gallery/selfish/index.html"},{revision:"0680cb12797b4f024b8bc31a87953d77",url:"./gallery/sketching/index.html"},{revision:"4f21f097cbf9df9ae8f877f6a890ddab",url:"./gallery/sky/index.html"},{revision:"a800b2cd6e7b2fec1ed8baa988016680",url:"./gallery/street/index.html"},{revision:"29f47f77cbcdf9c4f14733a215890cc3",url:"./gallery/transcribe/index.html"},{revision:"592428421af37ea8f40a4e76f8113821",url:"./home/index.html"},{revision:"8d5a413441036e8f33777aa3010bf39a",url:"./index.html"},{revision:"ad0d133aec64934868a2ab64a3c6e408",url:"./js/main.js"},{revision:"40050ed7f51da310cb33fce172a92e01",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"4a7e94ac7224adfce4b0572ca5c57fef",url:"./lib/hbe.js"},{revision:"6be28e4a0a782617a12dc5de44b90493",url:"./list/index.html"},{revision:"ecf26ec6530b60a3aab4afca17b427f1",url:"./manifest.json"},{revision:"8bc3a1b9610c983bcaa923b645455560",url:"./message/index.html"},{revision:"51c73a6d41efdb6dce7cf4c6bb252131",url:"./page/2/index.html"},{revision:"2c667fa869dd10dc350773d64410742e",url:"./page/3/index.html"},{revision:"e08095320f719242916dd81e1f52fa57",url:"./page/4/index.html"},{revision:"31dd29838c3927d9d100ace1630f8a01",url:"./page/5/index.html"},{revision:"d95d1805652de774450bc02b25331e69",url:"./page/6/index.html"},{revision:"1f25bd838c6f775113cb5afca236a3b3",url:"./posts/12331/index.html"},{revision:"8f022fa721c7d298b7dff2352d7689cc",url:"./posts/12591/index.html"},{revision:"40e283d22cd355b2e9504784ef654073",url:"./posts/14800/index.html"},{revision:"b1c2d005b78d2c3c152ceee468a8ee7f",url:"./posts/1524/index.html"},{revision:"83cb7851d1a24b94d4513da812fc214c",url:"./posts/15482/index.html"},{revision:"188f539a4b09611bae97b39ad39e24bc",url:"./posts/16907/index.html"},{revision:"3333b1e0518a27d4078aeaa92837306a",url:"./posts/1941/index.html"},{revision:"da99773e5cf641eb2614bb24d83f4e9a",url:"./posts/19657/index.html"},{revision:"345838f805bd2e2b299afa79d2adf516",url:"./posts/19980/index.html"},{revision:"deddf62b2f0f96d1a0d14d1929c5d07b",url:"./posts/240/index.html"},{revision:"80e5d8a364903f3d79513d984fabb751",url:"./posts/24491/index.html"},{revision:"455b5055132c3c8e205632e83ba39b5c",url:"./posts/25946/index.html"},{revision:"2c4b1746faf468c77cbfc2dee426a3f1",url:"./posts/25971/index.html"},{revision:"9190512fa07c51c7bc5fea798b2050d3",url:"./posts/26811/index.html"},{revision:"786228915fd955a960478786c52448cb",url:"./posts/27207/index.html"},{revision:"be38cff7430f06d919357d59861b2a73",url:"./posts/29555/index.html"},{revision:"9bd79b1aad291b905bc09cd1deb6b3f9",url:"./posts/30954/index.html"},{revision:"c84282d5cd5ab2e871f85c82ad3d57a4",url:"./posts/31156/index.html"},{revision:"b807db437cbdd157fd54852d5297104d",url:"./posts/31211/index.html"},{revision:"2a639c05a8bb61898ae558cfcfbbc672",url:"./posts/34388/index.html"},{revision:"23d95de80a1fe228ceaaa49d843dc640",url:"./posts/34877/index.html"},{revision:"468eb08de8fb5474a1835912b497ca3b",url:"./posts/34937/index.html"},{revision:"7a51837f2fa74dac6ddcb736af4fb49c",url:"./posts/35289/index.html"},{revision:"cb5349ba4df101ece39f702415b77cd1",url:"./posts/36979/index.html"},{revision:"87c4bb9f8eb20cf16c46b134895d6e76",url:"./posts/37419/index.html"},{revision:"70382d6e9cef2ebbfd0e8f21f51e2d35",url:"./posts/37805/index.html"},{revision:"adca43e8b8cfe543a1db3f70a0798ad0",url:"./posts/3829/index.html"},{revision:"aff01607eaa9947b69b5621ede18afd6",url:"./posts/39656/index.html"},{revision:"56262fb87bb93ae8f0a0eea0039d0259",url:"./posts/39769/index.html"},{revision:"0d9762f08539adc47daeaa8ca523bf10",url:"./posts/40641/index.html"},{revision:"de0a3e75451bc6a140f4bdfcbf2cde40",url:"./posts/41204/index.html"},{revision:"48e6405776f03afcb6d9ffb39f72c7f8",url:"./posts/42552/index.html"},{revision:"69eb1d06325681a69eaffa167c7465b3",url:"./posts/43039/index.html"},{revision:"900b4b6e69d92f06a711a7f59387a148",url:"./posts/51440/index.html"},{revision:"267b8eedf130550157cdfec1327aba9e",url:"./posts/525/index.html"},{revision:"7eb2f542ed2b6eb2754820490ffd8505",url:"./posts/53467/index.html"},{revision:"0c21f5cf6d3286fe95eb217f2f73d71e",url:"./posts/53493/index.html"},{revision:"25895bc7b225617eead0c2149f6e01b4",url:"./posts/58505/index.html"},{revision:"3699147e63f4fe84513fb7de7ca629d0",url:"./posts/59487/index.html"},{revision:"7b56e0b06e540f7f6361de5fc7ff43f3",url:"./posts/60961/index.html"},{revision:"a3d34fb8491da91175b0f64b3bdc2bdb",url:"./posts/60986/index.html"},{revision:"0020e6ca98c87ef30002a384fd788a98",url:"./posts/6129/index.html"},{revision:"3e05568a7c86ce2b66242e6edb119662",url:"./posts/61398/index.html"},{revision:"abeca0bc459ada6e3bb1a7779e4d7c34",url:"./posts/61713/index.html"},{revision:"5952dba1a00fcdcad5db18628eb4f2a7",url:"./posts/62736/index.html"},{revision:"aeb8df158b710b286dd0ea2e0e03ed71",url:"./posts/63260/index.html"},{revision:"5796c3f02002ebee83405948271c0a34",url:"./posts/771/index.html"},{revision:"1858ae6bf223b73d3ca680c3403ff926",url:"./posts/8155/index.html"},{revision:"523abe0ae1bf0df262494c62bd9d02fa",url:"./profile/index.html"},{revision:"ed3dc9fe1da4e7a0601d30ffc645fe9d",url:"./projects/index.html"},{revision:"d0a9357a78746b231a84c455df2e74f0",url:"./service-worker.js"},{revision:"39dc804616ebefd16c3ffea8a3210e63",url:"./services/index.html"},{revision:"330a29122c2febc1e6d0d707ab44c941",url:"./sponsorship/index.html"},{revision:"67d84f1aa404c8454d72bd9ff2f2d5f7",url:"./store/index.html"},{revision:"f76a2a715a2ca270a42ab9298b88d105",url:"./tags/3d/index.html"},{revision:"f000c8b9f8c01b66e6db50181bf4d61f",url:"./tags/包管理系统/index.html"},{revision:"9872ea97ebb7695c2c40879a7052cb94",url:"./tags/笔记/index.html"},{revision:"544d1bbc974146274166b799b584b2f0",url:"./tags/笔记/page/2/index.html"},{revision:"1924881f81d62ba1c7768a5e49e2c534",url:"./tags/测评/index.html"},{revision:"b7d6142b5acca8589f87350721a4fa37",url:"./tags/传感器/index.html"},{revision:"9e41949936cf8437b4baa2ebc39fd5ea",url:"./tags/德国/index.html"},{revision:"5cac6bbf834404e2056f42782e83df52",url:"./tags/电影/index.html"},{revision:"8f9bb6a0a6e05b09ff48c3fea2a7e64d",url:"./tags/动画/index.html"},{revision:"018fec79b31233439d51c3d9d69b726b",url:"./tags/读书/index.html"},{revision:"d68eea2e49dd8aef11de71bb669e81c5",url:"./tags/番茄工作法/index.html"},{revision:"2656ada62ba2c5d662a7d72cba9801e0",url:"./tags/浮生六记/index.html"},{revision:"8537c2ecfdc8e6e55cc99c1346a94dd2",url:"./tags/购物/index.html"},{revision:"ea9acc07d9ebed42b792ca8a96e9c74d",url:"./tags/观点/index.html"},{revision:"f66ac12dbf844b4c610c2e1e059d0373",url:"./tags/鸿蒙/index.html"},{revision:"1ca5458d3097134da58a771e499483db",url:"./tags/火箭/index.html"},{revision:"740208bcaf3b3806db8f707b04ab0633",url:"./tags/机器人/index.html"},{revision:"9e0e418ef6ba43f5e7724183ebaa6232",url:"./tags/机器学习/index.html"},{revision:"2dea6f2a0fdcf707ef4649169d244125",url:"./tags/计算机视觉/index.html"},{revision:"cdc7c17472a9390bf31bfa8f2aff6701",url:"./tags/记事/index.html"},{revision:"bc91f04aa18ecd194aaffd93c834599e",url:"./tags/技术/index.html"},{revision:"c933b98959414f4beb3e58dd68623ae1",url:"./tags/科幻/index.html"},{revision:"0ee209c45538df51826d3cf54ac6415f",url:"./tags/扩展目标追踪/index.html"},{revision:"1d538848ecd1adeaff6181ff433e9734",url:"./tags/理论/index.html"},{revision:"5a8ce0b2dae0230f9473249d82fc3e55",url:"./tags/旅行/index.html"},{revision:"8818501511d5d3d80910a492a323e923",url:"./tags/猫/index.html"},{revision:"fc22ae46c4512b1d4c12c71497209bdd",url:"./tags/其他项目/index.html"},{revision:"b44067eddccf8ace216cabbbb6a89460",url:"./tags/前端/index.html"},{revision:"328c84066d3b2e0d71c09301e25bff75",url:"./tags/入门/index.html"},{revision:"05f7bb963ae8f46395c23b612c6bfbc9",url:"./tags/软件/index.html"},{revision:"c51c9783b2158852dd391adaa0ff1926",url:"./tags/设计/index.html"},{revision:"c3f04625d8e19784088470db264a53b3",url:"./tags/摄影/index.html"},{revision:"b692a74bc5ce13e2baafc2e4274c9094",url:"./tags/生活/index.html"},{revision:"33b9d36e86cb8c22d13057b0d612b198",url:"./tags/视频/index.html"},{revision:"57cf3f45d849ee3a41a59485406cea5f",url:"./tags/手机/index.html"},{revision:"d8b8def9c3d26ba8f86bc84dd8b6c5c7",url:"./tags/书评/index.html"},{revision:"c2c2cd9d0ff3a91e3f5f8c642a0fd09c",url:"./tags/书影音/index.html"},{revision:"e1a658ec2c8ae3c2fcb79dfc14cd18ce",url:"./tags/数据可视化/index.html"},{revision:"14b189479f3b9a797d43dce2a21c90ed",url:"./tags/数据融合/index.html"},{revision:"f1d8fd8c6bcb8eea3f52b46a331360a5",url:"./tags/说明/index.html"},{revision:"f2cd91f673b4edebb3d94384d040b830",url:"./tags/太空/index.html"},{revision:"fe072712956912d5451a5608adb1caf3",url:"./tags/天文/index.html"},{revision:"dd9572b512945babcba165b4d6b29eec",url:"./tags/吐槽/index.html"},{revision:"17a086caadd7cbe170df4f20e706934c",url:"./tags/推荐/index.html"},{revision:"f1b50251f856aa496fde22e982047aab",url:"./tags/网站/index.html"},{revision:"e2ebb347e47bfb6e94b6c2653ee1872b",url:"./tags/未完成/index.html"},{revision:"2aaa02d2244110c26f1a801b0848130c",url:"./tags/项目/index.html"},{revision:"6d612bc23b00422cfbb8203fecad1b64",url:"./tags/小程序/index.html"},{revision:"be4eb2c47773739e5e25e07c7e931a94",url:"./tags/效率/index.html"},{revision:"57d0be77a3b132224a5ed05744241d86",url:"./tags/意大利/index.html"},{revision:"08a0be65d38b9db652ae23452a98557c",url:"./tags/影评/index.html"},{revision:"4d9e4a7b3273b93b40509f509f2b2e23",url:"./tags/友链/index.html"},{revision:"4b80aaca82af6ebf8b6b36777f89a2ad",url:"./tags/运动规划/index.html"},{revision:"966b5c99528ea6a345d252d0d9077c1e",url:"./tags/知识库/index.html"},{revision:"ae7188c021c894f740c140931f95a35c",url:"./tags/智能家居/index.html"},{revision:"41266fc668ac4fcaebeaa6df1cee03e2",url:"./tags/apt/index.html"},{revision:"8bcfe3ac7effd9a1a7cfc9704fdd193c",url:"./tags/cg/index.html"},{revision:"ad0e6c3688c63c63a95650a06a1107f4",url:"./tags/hexo/index.html"},{revision:"af538bab8699cd235f8d463a033b8ffd",url:"./tags/index.html"},{revision:"9421efbfe4ac3897965dc047d9ba6f1f",url:"./tags/js/index.html"},{revision:"f02267f0b53ba699a56036a7529fbfdb",url:"./tags/logo/index.html"},{revision:"540dc2a37062c90728271f725eef3960",url:"./tags/mac/index.html"},{revision:"167fc3c94b2466e2bc2e49428df473e2",url:"./tags/numpy/index.html"},{revision:"8cb5c95492bc869ea832b4e8a1dcc27d",url:"./tags/python/index.html"},{revision:"c365574e6bfaa609ed327223f0d3040a",url:"./tags/ros/index.html"},{revision:"c38471b97bdce19a2800b95bba4fea9b",url:"./tags/seaborn/index.html"},{revision:"a78774a0e525af608b2551309c0f75d6",url:"./tags/ui/index.html"},{revision:"93ec6644e1a81dfffacd95d2912b1602",url:"./tags/web/index.html"},{revision:"0ae21aafc1eb8fa349fa7d7aabf834e9",url:"./things/index.html"},{revision:"475da73f1544bb86ae5bc8a1b0efb791",url:"./travel/index.html"},{revision:"d6d9675c6eb19126a2bbdbe81fd9ff6b",url:"./workbox-b77dd8d1.js"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();