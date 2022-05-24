"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"zkpeace"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"f2b8c58185a9be11a53f2e64acdf433c",url:"./404.html"},{revision:"c74af022aaba100406957367f1f89335",url:"./archives/1970/01/index.html"},{revision:"7fdcde1ffa38170522a345a9907a5dbd",url:"./archives/1970/index.html"},{revision:"c3e8e2c82c07ba6fbbf01a57c2c309d4",url:"./archives/2018/09/index.html"},{revision:"6c5d392984f0aff14159f88558fd3907",url:"./archives/2018/index.html"},{revision:"7dca8bec253e3c534d86a0fdae08f4f0",url:"./archives/2019/05/index.html"},{revision:"e56c945c4ed53fba9a9d7e0cdfe9bb75",url:"./archives/2019/06/index.html"},{revision:"85c74f7cc6ae6423f21c615d7e6903be",url:"./archives/2019/08/index.html"},{revision:"412776661fc5519ad9b362d8278e89e6",url:"./archives/2019/10/index.html"},{revision:"8198e051e4d9e0547fb1e8be20d01399",url:"./archives/2019/index.html"},{revision:"cce76ba80941c83b4be4fd42a1b6f540",url:"./archives/2020/01/index.html"},{revision:"985b5fe066b9531b20a98af95476d5ce",url:"./archives/2020/02/index.html"},{revision:"4a94ed4fee8dd921878d7d50e5929d7e",url:"./archives/2020/03/index.html"},{revision:"00ec8f4b0d33b8cc09459c86de202e6e",url:"./archives/2020/04/index.html"},{revision:"7b8fc64f78503293830d6657156370b9",url:"./archives/2020/05/index.html"},{revision:"ed894a1d44f0cf2f1ed48353f198c5c0",url:"./archives/2020/06/index.html"},{revision:"c1c3614991584153d7c089d5b61cd565",url:"./archives/2020/07/index.html"},{revision:"006fd48430ce7b6ee0a087c4d03e9a95",url:"./archives/2020/10/index.html"},{revision:"39c680655a95361bb7325334396590ef",url:"./archives/2020/index.html"},{revision:"c43bc0bb24ec4a7bb173d3e1a726c015",url:"./archives/2020/page/2/index.html"},{revision:"0f1c10e06a9f8fbacc56d574b63bb617",url:"./archives/2021/05/index.html"},{revision:"9928cd9fe63e26100824e0366e767588",url:"./archives/2021/06/index.html"},{revision:"fe085478b1e058270e32570dc4daedd9",url:"./archives/2021/07/index.html"},{revision:"f1c01ace48899629ab38271e86ad8ba7",url:"./archives/2021/index.html"},{revision:"bf5088192833aff325601015bb2de99a",url:"./archives/2022/03/index.html"},{revision:"b4a44f9acd421e0eeb2ca3a6c9b45738",url:"./archives/2022/04/index.html"},{revision:"33a35b9533774ee5329a013b4ddbef1b",url:"./archives/2022/05/index.html"},{revision:"f05b21cc5d10bebf6bc6bdce58eba71d",url:"./archives/2022/index.html"},{revision:"115926fcaa33469f89152b28dc6e6bdc",url:"./archives/index.html"},{revision:"b3b86d0fbf2cbd04509c54c42b698ac3",url:"./archives/page/2/index.html"},{revision:"087ef7349320919a0a92d6ac9bb1e51d",url:"./archives/page/3/index.html"},{revision:"287866635b29265aa9d6571ed99e1311",url:"./archives/page/4/index.html"},{revision:"6fbb38b4fcf956596ec5dc07ca046d93",url:"./archives/page/5/index.html"},{revision:"fbe994054426fadb2dff69d824c5c67a",url:"./assets/css/APlayer.min.css"},{revision:"8f1017e7a73737e631ff95fa51e4e7d7",url:"./assets/js/APlayer.min.js"},{revision:"bfac0368480fd344282ec018d28f173d",url:"./assets/js/Meting.min.js"},{revision:"99845dce13db20da1c8b3f5c50eeec3e",url:"./categories/技术/计算机系统/index.html"},{revision:"74ca26999ea55a5ef48828643f192244",url:"./categories/技术/认知机器/index.html"},{revision:"7dfe3d5293104fcf6668ca5f35617232",url:"./categories/技术/图形学/index.html"},{revision:"03015766e0030c0c02824d605285fb6d",url:"./categories/技术/小程序/index.html"},{revision:"90a2146ebf538d17357f8d1060860b88",url:"./categories/技术/智能家居/index.html"},{revision:"682db72791ee98edc6d15905e149de7c",url:"./categories/技术/index.html"},{revision:"3fd86f7ad81685449a16ebc2473d9c9b",url:"./categories/技术/page/2/index.html"},{revision:"65fdca5617ea7c0291942ad70cb13e77",url:"./categories/技术/python/index.html"},{revision:"f06cbaffe625700cd5488bed03f8547f",url:"./categories/技术/web/index.html"},{revision:"9898f81ec3157031f6e2aff7cf814c8f",url:"./categories/生活/测评/index.html"},{revision:"d97d1d893dc520e3a1ccafb2576a06fa",url:"./categories/生活/记事/index.html"},{revision:"e8688a1553bd7accbfc3b884362650b9",url:"./categories/生活/旅行/index.html"},{revision:"c28666b818cda754203d8a1e62ecc219",url:"./categories/生活/软件/index.html"},{revision:"0665791d1415fcd2bd5263f4e5b3a5bf",url:"./categories/生活/影评/index.html"},{revision:"8f179af6eab2879f324b9c5b46ba7a51",url:"./categories/生活/index.html"},{revision:"51f6222d31970f111c45f23cbe6a6454",url:"./categories/生活/page/2/index.html"},{revision:"4cc1f2df5ed18da2491192579c241495",url:"./categories/生活/page/3/index.html"},{revision:"19dfba30cd68a6aaf9b9165183f1719f",url:"./categories/项目/其他项目/index.html"},{revision:"729a59d9486181d8ac3398464647df98",url:"./categories/项目/认知机器/index.html"},{revision:"1841eca56bb5a675ee2e9636c1bfbcb7",url:"./categories/项目/应用开发/index.html"},{revision:"06ad97c6016656d4631da69db8dab723",url:"./categories/项目/index.html"},{revision:"b4fb52968db196d4c8bb3587bd273ee6",url:"./categories/index.html"},{revision:"23c899a4d9f1b2c5dd37f2c5956684db",url:"./channel/index.html"},{revision:"a753aafa8fd51f9bbad90bbf1c282550",url:"./copyright/index.html"},{revision:"a8bc819e01e001d3bc6ae03a2afad957",url:"./css/hbe.style.css"},{revision:"4668ec624bba7cdc233f9e4f57618a3e",url:"./css/index.css"},{revision:"6e291ae8a35cb2c427c83b29ecf938ed",url:"./css/var.css"},{revision:"8416dacb1655d101c3787fbf98bbb6f7",url:"./douban/index.html"},{revision:"9ee875f8ee8fed3bde50d386a2622854",url:"./friends/index.html"},{revision:"6472c8e2f09b54db79db7e21470cf762",url:"./gallery/index.html"},{revision:"0f5c4778c807160df123b9635be6fe9d",url:"./gallery/life/index.html"},{revision:"3fdbd23b6535afb8b9de7347bc554dd5",url:"./gallery/photography/index.html"},{revision:"c470384c23146b84e65f80dd22e23982",url:"./gallery/photos/index.html"},{revision:"16f57faffcecd247cba815bc99109171",url:"./gallery/profile/index.html"},{revision:"b317e581b077f48cb709f700b2bc715c",url:"./gallery/qingdao/index.html"},{revision:"198d5624beddbed9c5f7312ffdea2aa4",url:"./gallery/selfish/index.html"},{revision:"0680cb12797b4f024b8bc31a87953d77",url:"./gallery/sketching/index.html"},{revision:"4f21f097cbf9df9ae8f877f6a890ddab",url:"./gallery/sky/index.html"},{revision:"a800b2cd6e7b2fec1ed8baa988016680",url:"./gallery/street/index.html"},{revision:"29f47f77cbcdf9c4f14733a215890cc3",url:"./gallery/transcribe/index.html"},{revision:"592428421af37ea8f40a4e76f8113821",url:"./home/index.html"},{revision:"d6f071930df3c898d0038c696170a4fa",url:"./index.html"},{revision:"ad0d133aec64934868a2ab64a3c6e408",url:"./js/main.js"},{revision:"40050ed7f51da310cb33fce172a92e01",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"4a7e94ac7224adfce4b0572ca5c57fef",url:"./lib/hbe.js"},{revision:"6be28e4a0a782617a12dc5de44b90493",url:"./list/index.html"},{revision:"ecf26ec6530b60a3aab4afca17b427f1",url:"./manifest.json"},{revision:"8bc3a1b9610c983bcaa923b645455560",url:"./message/index.html"},{revision:"733f1ec3334e89d28f9c9fbe9a413463",url:"./page/2/index.html"},{revision:"1848189a609fc6364259e54c452680f5",url:"./page/3/index.html"},{revision:"1af60c374d95caeee2874fff3eb01c95",url:"./page/4/index.html"},{revision:"6f8751967ca57ccb32f7c9ceb72df341",url:"./page/5/index.html"},{revision:"cb806d64a505916fdaefc582a77ad128",url:"./page/6/index.html"},{revision:"618403c8cbcef661559750114876a283",url:"./posts/12331/index.html"},{revision:"8f022fa721c7d298b7dff2352d7689cc",url:"./posts/12591/index.html"},{revision:"40e283d22cd355b2e9504784ef654073",url:"./posts/14800/index.html"},{revision:"b1c2d005b78d2c3c152ceee468a8ee7f",url:"./posts/1524/index.html"},{revision:"1e203727b907db2c736dccf175767b72",url:"./posts/15482/index.html"},{revision:"188f539a4b09611bae97b39ad39e24bc",url:"./posts/16907/index.html"},{revision:"3333b1e0518a27d4078aeaa92837306a",url:"./posts/1941/index.html"},{revision:"da99773e5cf641eb2614bb24d83f4e9a",url:"./posts/19657/index.html"},{revision:"ff0389090da124ad746e77f319634436",url:"./posts/19980/index.html"},{revision:"deddf62b2f0f96d1a0d14d1929c5d07b",url:"./posts/240/index.html"},{revision:"c99327991c23fce05ccdc5f8f332408a",url:"./posts/24491/index.html"},{revision:"455b5055132c3c8e205632e83ba39b5c",url:"./posts/25946/index.html"},{revision:"2c4b1746faf468c77cbfc2dee426a3f1",url:"./posts/25971/index.html"},{revision:"9190512fa07c51c7bc5fea798b2050d3",url:"./posts/26811/index.html"},{revision:"1c0c5be3d0a80161bd66554092893732",url:"./posts/27207/index.html"},{revision:"be38cff7430f06d919357d59861b2a73",url:"./posts/29555/index.html"},{revision:"79978bc1b7f8c17fd77db9f38c24e4aa",url:"./posts/30954/index.html"},{revision:"c84282d5cd5ab2e871f85c82ad3d57a4",url:"./posts/31156/index.html"},{revision:"43fece058e3ebb60224fc7962ea7a21e",url:"./posts/31211/index.html"},{revision:"6b518d1d3065702167b70b612d5a0186",url:"./posts/34388/index.html"},{revision:"89ec7b0b2d9e858a266870a80b1e139f",url:"./posts/34877/index.html"},{revision:"e1e46fe0e9bbd9579754ff31b65f6737",url:"./posts/34937/index.html"},{revision:"7a51837f2fa74dac6ddcb736af4fb49c",url:"./posts/35289/index.html"},{revision:"cb5349ba4df101ece39f702415b77cd1",url:"./posts/36979/index.html"},{revision:"c50e1e5db55c63868f5f2386de934905",url:"./posts/37419/index.html"},{revision:"70382d6e9cef2ebbfd0e8f21f51e2d35",url:"./posts/37805/index.html"},{revision:"adca43e8b8cfe543a1db3f70a0798ad0",url:"./posts/3829/index.html"},{revision:"aff01607eaa9947b69b5621ede18afd6",url:"./posts/39656/index.html"},{revision:"56262fb87bb93ae8f0a0eea0039d0259",url:"./posts/39769/index.html"},{revision:"132e3055481b8cd142b96f2d83aed950",url:"./posts/40641/index.html"},{revision:"de0a3e75451bc6a140f4bdfcbf2cde40",url:"./posts/41204/index.html"},{revision:"f5f76923945e0c4d45bdb87dab79ef72",url:"./posts/42552/index.html"},{revision:"69eb1d06325681a69eaffa167c7465b3",url:"./posts/43039/index.html"},{revision:"112969a5656538106f17850e73fbb08d",url:"./posts/51440/index.html"},{revision:"6a452eb387279adcc67d2178278cf891",url:"./posts/525/index.html"},{revision:"7eb2f542ed2b6eb2754820490ffd8505",url:"./posts/53467/index.html"},{revision:"28dbd0f62585d58e965ec293c0c54224",url:"./posts/53493/index.html"},{revision:"bd84503daa357219a19b098840847c5f",url:"./posts/58505/index.html"},{revision:"3699147e63f4fe84513fb7de7ca629d0",url:"./posts/59487/index.html"},{revision:"b1d859d00a2515a80cb5ef4d335af6ca",url:"./posts/60961/index.html"},{revision:"bfd347d3a56e164d7147ddfb58699751",url:"./posts/60986/index.html"},{revision:"0020e6ca98c87ef30002a384fd788a98",url:"./posts/6129/index.html"},{revision:"6751b0554de4ae0cc0e93a3bd653842b",url:"./posts/61398/index.html"},{revision:"fc29e278b9b222ba18742b6953d73f32",url:"./posts/61713/index.html"},{revision:"5952dba1a00fcdcad5db18628eb4f2a7",url:"./posts/62736/index.html"},{revision:"aeb8df158b710b286dd0ea2e0e03ed71",url:"./posts/63260/index.html"},{revision:"5796c3f02002ebee83405948271c0a34",url:"./posts/771/index.html"},{revision:"e681732bea306d50756da3e8e19c3bac",url:"./posts/8155/index.html"},{revision:"523abe0ae1bf0df262494c62bd9d02fa",url:"./profile/index.html"},{revision:"ed3dc9fe1da4e7a0601d30ffc645fe9d",url:"./projects/index.html"},{revision:"83e800359ff3a076f3772e95cddf51a2",url:"./service-worker.js"},{revision:"39dc804616ebefd16c3ffea8a3210e63",url:"./services/index.html"},{revision:"330a29122c2febc1e6d0d707ab44c941",url:"./sponsorship/index.html"},{revision:"67d84f1aa404c8454d72bd9ff2f2d5f7",url:"./store/index.html"},{revision:"f3eb307331865d8c7313022b074f386d",url:"./tags/3d/index.html"},{revision:"4e4e6d984e25c07986bbbb65570c6538",url:"./tags/包管理系统/index.html"},{revision:"cbdfced5f6e079bc8ae9dd0dcf1ca434",url:"./tags/笔记/index.html"},{revision:"2ac5aab56188f16658aa23fd18534b46",url:"./tags/笔记/page/2/index.html"},{revision:"a2358e3296a44a1ec2699294c6deb727",url:"./tags/测评/index.html"},{revision:"3824d94d98a889f2231bf0eb73314743",url:"./tags/传感器/index.html"},{revision:"fc52249c048f842a9af9d5d43a060ecf",url:"./tags/德国/index.html"},{revision:"3a0a77393d3da2f5163373a93930568d",url:"./tags/电影/index.html"},{revision:"db886c2aae031ed63ae8570820e56517",url:"./tags/动画/index.html"},{revision:"77626d2b8731f130b810f75b095f147d",url:"./tags/读书/index.html"},{revision:"51d7dc2994937b04f409b34d0e0c14ca",url:"./tags/番茄工作法/index.html"},{revision:"64ab583383ada50106d0f60880fa39f0",url:"./tags/浮生六记/index.html"},{revision:"eded2fb987b144c6128d545a87615865",url:"./tags/购物/index.html"},{revision:"aaedffb9dd66c8fa4a502f73ecb73232",url:"./tags/观点/index.html"},{revision:"bb8902a57341bcd3107fe42bdacac5cd",url:"./tags/鸿蒙/index.html"},{revision:"189f04d43299080cd9af00ea0c211e47",url:"./tags/火箭/index.html"},{revision:"a567410f925e7fa4b998f9baf9bc3e74",url:"./tags/机器人/index.html"},{revision:"0e1b38a4bca004d1c6dae23ed996dfb3",url:"./tags/机器学习/index.html"},{revision:"1bcd7d1b391285408163f2739737f52d",url:"./tags/计算机视觉/index.html"},{revision:"a6f4bb6a1ca2314309f8bb8c2d9f0a60",url:"./tags/记事/index.html"},{revision:"52369547c00f72f10a3505679ff7cdc8",url:"./tags/技术/index.html"},{revision:"851eb45e4fa552b198d0c0c30b590948",url:"./tags/科幻/index.html"},{revision:"63c0f1ba0f0632a412422f9835b7c4af",url:"./tags/扩展目标追踪/index.html"},{revision:"4fab2af6a44aae020bf1c88ba4de9f4a",url:"./tags/理论/index.html"},{revision:"0b6eb8801eac160737db3f606c4cb9b1",url:"./tags/旅行/index.html"},{revision:"8f7f935038e86be18f03bd4f24360152",url:"./tags/猫/index.html"},{revision:"a74926dec64ba9b779d7a4e1b91d8b8b",url:"./tags/其他项目/index.html"},{revision:"8b596da07216eac14b57c85f7bdce033",url:"./tags/前端/index.html"},{revision:"41db8d88c3a8d41c2915ee0ae481c4ea",url:"./tags/入门/index.html"},{revision:"21c4b89cb51dac3faf4d74d880bb45d4",url:"./tags/软件/index.html"},{revision:"82dbb2de906f2506e6d102c7c6b2071c",url:"./tags/设计/index.html"},{revision:"473b348d7fed8ca567c47e4a05538d27",url:"./tags/摄影/index.html"},{revision:"4abd9d72df4d69171e64850286973fa2",url:"./tags/生活/index.html"},{revision:"837c1bacce599a64bf0f19611eb30fbd",url:"./tags/视频/index.html"},{revision:"2bbfcc3eab89abf9e9309b1c6ff1e4ad",url:"./tags/手机/index.html"},{revision:"cd791cb85d74d8128a973a2a1ecaaf8a",url:"./tags/书评/index.html"},{revision:"1c8517f40026f78502d2b20905fac172",url:"./tags/书影音/index.html"},{revision:"f116ad9e379beb7dd988093dcb8500c0",url:"./tags/数据可视化/index.html"},{revision:"463c4937a2289a8d85b8067706977e46",url:"./tags/数据融合/index.html"},{revision:"d1c75971cdbc0bafabe5948406cc3476",url:"./tags/说明/index.html"},{revision:"2304902a36f532bcb1c1d2defc81dd83",url:"./tags/太空/index.html"},{revision:"e49b637c35b03a333056a876df3b96c8",url:"./tags/天文/index.html"},{revision:"67759b4ea02a6bdf194e7470afdd18da",url:"./tags/吐槽/index.html"},{revision:"cd2f9f0b1219cc7d403656a4ba547fde",url:"./tags/推荐/index.html"},{revision:"4efeed134e94dbcd5ce361440482e20f",url:"./tags/网站/index.html"},{revision:"f55f23aaa8b73fb99f7c408277c0c362",url:"./tags/未完成/index.html"},{revision:"85f4bbf39e417d66f94bb83cea476dd2",url:"./tags/项目/index.html"},{revision:"12180d124b46771e0d648dea6b8ee452",url:"./tags/小程序/index.html"},{revision:"87e88260dbfe44b1067ee43a54000ac2",url:"./tags/效率/index.html"},{revision:"dc4496e68e6c820432d6a4ebc0359260",url:"./tags/意大利/index.html"},{revision:"3fc2c5613c86b4cecea8ce5cd9fb16aa",url:"./tags/影评/index.html"},{revision:"40beb180c10c3c546f683f4955cf8fef",url:"./tags/友链/index.html"},{revision:"05ba9ff45fab8591f8d259a92f5a801f",url:"./tags/运动规划/index.html"},{revision:"286ee734a1db1563ac0f17bc6abc0dca",url:"./tags/知识库/index.html"},{revision:"8fce78c95f3a885164eb2185a4f82d9a",url:"./tags/智能家居/index.html"},{revision:"864ebf5f3aaa7f17cae75990872ac942",url:"./tags/apt/index.html"},{revision:"5324728d4803f6ab49771fa867438708",url:"./tags/cg/index.html"},{revision:"5c9dea133fb0025984a1c2c848a03891",url:"./tags/hexo/index.html"},{revision:"873103829c6b1951b77e13a87b2dea2e",url:"./tags/index.html"},{revision:"068be9e4a8da902d4c7458b26aa533b3",url:"./tags/js/index.html"},{revision:"104b273cac6f875818e64ac1cf6e2a9b",url:"./tags/logo/index.html"},{revision:"e61ae70b8ed3dc009ad955d13835216e",url:"./tags/mac/index.html"},{revision:"0a76f6aa0eeeaa8b943e34a6ac66a0d4",url:"./tags/numpy/index.html"},{revision:"913afeb9d5aa5d212959269232b9253f",url:"./tags/python/index.html"},{revision:"cd9992965d4b47ae29390ad04ba17d9a",url:"./tags/ros/index.html"},{revision:"efaa411f6c1b0e0b39ec69726ab60839",url:"./tags/seaborn/index.html"},{revision:"c74c1788c47afadf52114f19c38f79ab",url:"./tags/ui/index.html"},{revision:"1b5947b17ba0d83ea382dc2eb0b094d6",url:"./tags/web/index.html"},{revision:"71a011badad4a1ff94f016fabc1e81a9",url:"./things/index.html"},{revision:"475da73f1544bb86ae5bc8a1b0efb791",url:"./travel/index.html"},{revision:"d6d9675c6eb19126a2bbdbe81fd9ff6b",url:"./workbox-b77dd8d1.js"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();