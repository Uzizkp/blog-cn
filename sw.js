"use strict";var workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/".concat(workboxVersion,"/workbox-sw.js")),workbox.core.setCacheNameDetails({prefix:"zkpeace"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"0dd6c4633143fa7f342ec691198393a4",url:"./404.html"},{revision:"f90697faf1db9f9b198f5b4b69eb0bd8",url:"./archives/1970/01/index.html"},{revision:"2663bffcb7d8dd289da5b30c65c37820",url:"./archives/1970/index.html"},{revision:"20b610e2bc3e5bb57fcf65c235fa12b4",url:"./archives/2018/09/index.html"},{revision:"aa2f56d41532cdc7a8c529bd56dd1fdf",url:"./archives/2018/index.html"},{revision:"bd7f8f59e848132bf5a0515dfa2f3fef",url:"./archives/2019/05/index.html"},{revision:"e23e2630c18d4082895a317996f5d96c",url:"./archives/2019/06/index.html"},{revision:"922859135d08bc73728a6169418ecf7c",url:"./archives/2019/08/index.html"},{revision:"51afc8d134ea1a7f39da216ba9c424cf",url:"./archives/2019/10/index.html"},{revision:"27fdfdeadce3fbdee633b335dd0f8439",url:"./archives/2019/index.html"},{revision:"ffef953dd1dd11e5f60cd87a1730c5ef",url:"./archives/2020/01/index.html"},{revision:"9c1aa4ce5070ceef4537ffbd2eca97f8",url:"./archives/2020/02/index.html"},{revision:"58d708c356a7b872da3de77cffef0f21",url:"./archives/2020/03/index.html"},{revision:"6a833d11df00cb3a258d28839d79772d",url:"./archives/2020/04/index.html"},{revision:"6a51ea221f42d475c4a3ceace79b100f",url:"./archives/2020/05/index.html"},{revision:"92739d15396d10914e48948f5d38b2c7",url:"./archives/2020/06/index.html"},{revision:"92814133dd5a509a1490eb9aa84be8dc",url:"./archives/2020/07/index.html"},{revision:"9a9e6979c9c7d2448681892e78dd37de",url:"./archives/2020/10/index.html"},{revision:"7e907e26844405c43419f2367134d1dd",url:"./archives/2020/index.html"},{revision:"91b4b4aaeb5cd9dba8616e4cc3e6ed30",url:"./archives/2020/page/2/index.html"},{revision:"f4affe405f2115163e165a278e09b023",url:"./archives/2021/05/index.html"},{revision:"8f5dcff00b57c75b1f2fb963619a9be1",url:"./archives/2021/06/index.html"},{revision:"2aefee6212c6415e093c6af7f101e686",url:"./archives/2021/07/index.html"},{revision:"af56e941bd1ff63911afb806a1d5a84f",url:"./archives/2021/index.html"},{revision:"543efc68bcb9b80a4c7d5c2cde04036b",url:"./archives/2022/03/index.html"},{revision:"793e168e4818093dc866388944c48bae",url:"./archives/2022/04/index.html"},{revision:"c0a662a3b5287af163d337968fa7c3c1",url:"./archives/2022/05/index.html"},{revision:"7725a431fd8085541ae059c0f838ed9b",url:"./archives/2022/index.html"},{revision:"1d484528c7a1ced8985d360151e1b405",url:"./archives/index.html"},{revision:"f694b12faaaea7397d97cfaf1b57ad9d",url:"./archives/page/2/index.html"},{revision:"e911446450419c2c271569c7f577f375",url:"./archives/page/3/index.html"},{revision:"216f05537e2a044703d117d34c5d5cae",url:"./archives/page/4/index.html"},{revision:"af11bc3b74fe48c350cd2e509d45e110",url:"./archives/page/5/index.html"},{revision:"fbe994054426fadb2dff69d824c5c67a",url:"./assets/css/APlayer.min.css"},{revision:"8f1017e7a73737e631ff95fa51e4e7d7",url:"./assets/js/APlayer.min.js"},{revision:"bfac0368480fd344282ec018d28f173d",url:"./assets/js/Meting.min.js"},{revision:"b12f45af2c75354d8fb05611565bac8a",url:"./categories/技术/计算机系统/index.html"},{revision:"58f0440c66fa59103c3919d62b4146d4",url:"./categories/技术/认知机器/index.html"},{revision:"797da64fd18d69b81e5dc10a785718c0",url:"./categories/技术/图形学/index.html"},{revision:"3dea5695f7784045e509a98e5fd2179d",url:"./categories/技术/小程序/index.html"},{revision:"1906d8bb9906c7e18a1143fcaf427b59",url:"./categories/技术/智能家居/index.html"},{revision:"c7cac2e933750e218a6793b0f89e9c38",url:"./categories/技术/index.html"},{revision:"fc65ed7b5d21e2df9c8646547bb7f26b",url:"./categories/技术/page/2/index.html"},{revision:"c029fcd9f7442faf5804fc16bcef42f3",url:"./categories/技术/python/index.html"},{revision:"fef97bfaa46afc9ce221a18dc0f8c851",url:"./categories/技术/web/index.html"},{revision:"ddf197b3d8ffa6420d2a294eb1f23291",url:"./categories/生活/测评/index.html"},{revision:"0322c2ac249488f0382136f7e873955d",url:"./categories/生活/记事/index.html"},{revision:"b62a9a22f6ca4071ecb974ecc2a6f226",url:"./categories/生活/旅行/index.html"},{revision:"5b33d895c492051ac8e93fa859bdbf9b",url:"./categories/生活/软件/index.html"},{revision:"fc0e300a59cc1dc9068869554a71ccbf",url:"./categories/生活/影评/index.html"},{revision:"bba0f95148689e4b3948ed9cbf2b67f1",url:"./categories/生活/index.html"},{revision:"8237376590538de60454501b17bac090",url:"./categories/生活/page/2/index.html"},{revision:"743b70936e89d770ff4abdbe5f93d443",url:"./categories/生活/page/3/index.html"},{revision:"6019deb03bdae055c09249f1f3e01d80",url:"./categories/项目/其他项目/index.html"},{revision:"d2a942e8371fcd2f210c8f6f9a6ec169",url:"./categories/项目/认知机器/index.html"},{revision:"40cbd6488ace8dde43a653908569c864",url:"./categories/项目/应用开发/index.html"},{revision:"d198a6339f2dbac4943edf97380c6f8c",url:"./categories/项目/index.html"},{revision:"d7b9fafca54b8a35f28e1a138fd37082",url:"./categories/index.html"},{revision:"bebc6eaec83d7bdd676155655b8e0cc0",url:"./channel/index.html"},{revision:"3041cd3a1cccf4f9819baadbdb5a0619",url:"./copyright/index.html"},{revision:"a8bc819e01e001d3bc6ae03a2afad957",url:"./css/hbe.style.css"},{revision:"fe00cfe522b5122a67f9ade78a90bd1b",url:"./css/index.css"},{revision:"a3739484410c8b5f3fa0d8b6f3d26c61",url:"./css/var.css"},{revision:"e913db04aa9396973fe3cde421cff97e",url:"./douban/index.html"},{revision:"2745f935febe3da61bbfacf5d5a6e6ba",url:"./friends/index.html"},{revision:"ee5b5ac8df2a4519bf2051136de88712",url:"./gallery/index.html"},{revision:"c9912eafdb26ec0e999bc2dd9fe866b9",url:"./gallery/life/index.html"},{revision:"9e49c61ea4c472a24a0a688e4cd18b90",url:"./gallery/photography/index.html"},{revision:"97e2f6c9f23ef73fc9e6fa6f2bb6029f",url:"./gallery/photos/index.html"},{revision:"891e6f8f2a07eda09b4ee81f0cc58d5f",url:"./gallery/profile/index.html"},{revision:"38995466fe00d8cee4ef14c201e6a97d",url:"./gallery/qingdao/index.html"},{revision:"61bd456f67ca21435938b5b5947e894e",url:"./gallery/selfish/index.html"},{revision:"10dc4db49af249938182f1839f3d0543",url:"./gallery/sketching/index.html"},{revision:"43a06b77bb120db4ebd9c711d6212c1a",url:"./gallery/sky/index.html"},{revision:"3e9bfbcbd9ef8d487d9436b35674c851",url:"./gallery/street/index.html"},{revision:"e72c51647af5e3c9ef63df7146568e9d",url:"./gallery/transcribe/index.html"},{revision:"4bcd93bce2eb1750e6cdb21fb8355b31",url:"./home/index.html"},{revision:"c54e06fb3849161680bac2c28b34d3f9",url:"./index.html"},{revision:"ad0d133aec64934868a2ab64a3c6e408",url:"./js/main.js"},{revision:"40050ed7f51da310cb33fce172a92e01",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"4a7e94ac7224adfce4b0572ca5c57fef",url:"./lib/hbe.js"},{revision:"133daff360e8cef162928b05d1edd0e8",url:"./list/index.html"},{revision:"ecf26ec6530b60a3aab4afca17b427f1",url:"./manifest.json"},{revision:"fa21babf838ffbb76a5af5af916f2331",url:"./message/index.html"},{revision:"61bc1d5b7a910f48ee32400a6345283f",url:"./page/2/index.html"},{revision:"b5500339e7dfd2e96277cca5b08dbe37",url:"./page/3/index.html"},{revision:"0dfdb3d99a9fa076710c68e6769c54ca",url:"./page/4/index.html"},{revision:"2121fc5e1c549a47171656a850304799",url:"./page/5/index.html"},{revision:"366a0260e86a25ffe31032d5bfbd0c81",url:"./page/6/index.html"},{revision:"224e8b76f4c019df1ab2ccd3852665fe",url:"./posts/12331/index.html"},{revision:"5cc217bd958f1c5149dfb85c20cd3376",url:"./posts/12591/index.html"},{revision:"a5a2199143595cff6308ed7bea2eface",url:"./posts/14800/index.html"},{revision:"81452d4292698f11e8086959cbb17dc4",url:"./posts/1524/index.html"},{revision:"703af97f8108a38f93b41a5f4e26a558",url:"./posts/15482/index.html"},{revision:"2ef962d712316fa526546e4ce47ff2a7",url:"./posts/16907/index.html"},{revision:"ba5cc8884df587a375d90329e69224b2",url:"./posts/1941/index.html"},{revision:"ec88f116bdea1695f78ae4791488deab",url:"./posts/19657/index.html"},{revision:"1226c4fb61f1341e0fb9c884235c7c1a",url:"./posts/19980/index.html"},{revision:"65c5b0fd7024e2393a737269c7e6ab8a",url:"./posts/240/index.html"},{revision:"51066867636c901d7eb0056448f67bac",url:"./posts/24491/index.html"},{revision:"aa057bc936fc8a272d4fb86f8b9a1213",url:"./posts/25946/index.html"},{revision:"bf126f059d61a1d245540fdc68559e49",url:"./posts/25971/index.html"},{revision:"83a810f4efb7cf3adf3d44ab6fe46a35",url:"./posts/26811/index.html"},{revision:"9d6aabb2ed277323181196f2688396b4",url:"./posts/27207/index.html"},{revision:"73380a1fb387bf74a4e252361d70fd87",url:"./posts/29555/index.html"},{revision:"39d03eee692e1355e92c84fa1d073b0a",url:"./posts/30954/index.html"},{revision:"ec9a75d8aaa2ec5fb0c899a571ccca40",url:"./posts/31156/index.html"},{revision:"e38fa46c9cff9e7e962c8816eba05f02",url:"./posts/31211/index.html"},{revision:"23d7bcdf018476d457e45fd2e10d7ce5",url:"./posts/34388/index.html"},{revision:"e3ab3df95fa3d8d0811a14697ba47c3f",url:"./posts/34877/index.html"},{revision:"8180045eb9ffb1d369665f560b681e80",url:"./posts/34937/index.html"},{revision:"7dbe673b02a6646c89b12f9d0d7de354",url:"./posts/35289/index.html"},{revision:"3b4223478a87f42fa1d0f8e6f954223c",url:"./posts/36979/index.html"},{revision:"94862fe525409d03f9148158c70bcd22",url:"./posts/37419/index.html"},{revision:"318878e25e727841f2b2f37fa56f6c6a",url:"./posts/37805/index.html"},{revision:"cd32e8da5b2aa8a27d04fce30acb56a3",url:"./posts/3829/index.html"},{revision:"e420afd356016286d3e4fa7dfff42015",url:"./posts/39656/index.html"},{revision:"c8ef95a6ab23fa6678c88c19564e0c1b",url:"./posts/39769/index.html"},{revision:"f806a38b9e345faca5716388316e25a1",url:"./posts/40641/index.html"},{revision:"f48cf13dde65383f290cc68857276c9b",url:"./posts/41204/index.html"},{revision:"ec5847ed36eb79b7e82437cd2f472cc7",url:"./posts/42552/index.html"},{revision:"c72787ed75a834cb51ebd9339ec03607",url:"./posts/43039/index.html"},{revision:"4fda9a2c9fb6f9fd18a9c1626cd8e6ac",url:"./posts/51440/index.html"},{revision:"676f24d946c87de401b7257d0e914cca",url:"./posts/525/index.html"},{revision:"7485d58dfb5ab34f5b5a339151506cbf",url:"./posts/53467/index.html"},{revision:"73bf5d55c81474e51a7b41b66027585c",url:"./posts/53493/index.html"},{revision:"d5b91e261e2a84227e03a6539935a18d",url:"./posts/58505/index.html"},{revision:"cb937882d787aad2349529689aa38771",url:"./posts/59487/index.html"},{revision:"6463126551d48ac9fda5d28e6158dfb1",url:"./posts/60961/index.html"},{revision:"75c09d9d22dcf8f3346011d4baff1476",url:"./posts/60986/index.html"},{revision:"ebc1da828e02f713ab837c92e1569f0a",url:"./posts/6129/index.html"},{revision:"01c07c84f186b7064981bf08fd4f8ca6",url:"./posts/61398/index.html"},{revision:"281320fd968c55d3c5a98a1e4d7a6cd7",url:"./posts/61713/index.html"},{revision:"2af7f143b925da8671cbaf8fde813907",url:"./posts/62736/index.html"},{revision:"8bf9df9c631eef567e9141356541d0a0",url:"./posts/63260/index.html"},{revision:"4efefc0ae66ba913c8cd069f8bd9f20c",url:"./posts/771/index.html"},{revision:"365f1554206819fe5e68ad2d1644ed61",url:"./posts/8155/index.html"},{revision:"29aa3d78167831ee91caab5516fbfeec",url:"./profile/index.html"},{revision:"1e900ea69f491c5965b12c35746b4272",url:"./projects/index.html"},{revision:"9a2ff4e1fb147ca60d78a22853dba646",url:"./service-worker.js"},{revision:"ee3afc02b8dbe3670085568657980aff",url:"./services/index.html"},{revision:"495c5f2fcb43f354f3bbe995dd93feec",url:"./sponsorship/index.html"},{revision:"8a0202433a31f31524ba959a99767fb7",url:"./store/index.html"},{revision:"8d593db2aca3674cead9c42efa8a53f1",url:"./tags/3d/index.html"},{revision:"9de55e47d0543ae763e5a99d5c5491ed",url:"./tags/包管理系统/index.html"},{revision:"6df8e9ef11c173e028512d2b1f316786",url:"./tags/笔记/index.html"},{revision:"f86197633243328f8ebe8024c40a7cd2",url:"./tags/笔记/page/2/index.html"},{revision:"c7bd4aa2f9816206b72f40da3a9ab28f",url:"./tags/测评/index.html"},{revision:"92fe19142aae966c269c0512c9e41a7e",url:"./tags/传感器/index.html"},{revision:"e220f96b21d3e4d2ca4c25eb9bedb80e",url:"./tags/德国/index.html"},{revision:"052149da58565878f193a2bc5dcf877a",url:"./tags/电影/index.html"},{revision:"5e95f2deec7d51631e14e7cbdcf28a2f",url:"./tags/动画/index.html"},{revision:"dd2ef660b5ee5fa6064c79327d47406c",url:"./tags/读书/index.html"},{revision:"3ab1616d4f715d4effc653675d97f0f7",url:"./tags/番茄工作法/index.html"},{revision:"4ca377ebbd0e59a5eb92cb1b197a6817",url:"./tags/浮生六记/index.html"},{revision:"4feebb81fb230162861d05a8da9f9fe4",url:"./tags/购物/index.html"},{revision:"106bf954ce98d0fad164e5293cdbba51",url:"./tags/观点/index.html"},{revision:"7475b91c518492dddba60d5cfad3043c",url:"./tags/鸿蒙/index.html"},{revision:"7d1fbc65373c45c719c46f76fe2ba582",url:"./tags/火箭/index.html"},{revision:"0c1db1917e41a743b5a2d7e0e242f5b2",url:"./tags/机器人/index.html"},{revision:"bf6ee1bf6ae083468c464351e126085d",url:"./tags/机器学习/index.html"},{revision:"36ca8ec19d7e8805fbed390afd703b07",url:"./tags/计算机视觉/index.html"},{revision:"6ffbccdb4991df42c6122a066a95c7ad",url:"./tags/记事/index.html"},{revision:"26df4adff0db545f883f234020169a27",url:"./tags/技术/index.html"},{revision:"3213736ce95cb48aafad61eb838795ad",url:"./tags/科幻/index.html"},{revision:"8efd07683c358b59ff42665f609a57ab",url:"./tags/扩展目标追踪/index.html"},{revision:"8b4282d93dd6da96c0dc5f6b671a44f3",url:"./tags/理论/index.html"},{revision:"82840f900e7cf304c78a7d74b796b5fa",url:"./tags/旅行/index.html"},{revision:"f54df4d8411a601cc7eacb1f93164430",url:"./tags/猫/index.html"},{revision:"2478e58cd008213928d3d957837ae65d",url:"./tags/其他项目/index.html"},{revision:"314ae07c9a00c4778763144e07f68a72",url:"./tags/前端/index.html"},{revision:"30a71cf940ff62ba12ecd93b9defbf57",url:"./tags/入门/index.html"},{revision:"30e960ed6eda27b73a08c0cd02815f7a",url:"./tags/软件/index.html"},{revision:"a49274545643e22ddf36478218e954b2",url:"./tags/设计/index.html"},{revision:"463b0ab7023db50f51684780ec82d26f",url:"./tags/摄影/index.html"},{revision:"eb7fac55d5ab7232326a8b48223aee3b",url:"./tags/生活/index.html"},{revision:"45b1fa07b50d06fb02c1b7afce421448",url:"./tags/视频/index.html"},{revision:"2b095f7eb544de47ac0c1b46e752af30",url:"./tags/手机/index.html"},{revision:"573ab08f759d2a2beb9eea3c932f21a6",url:"./tags/书评/index.html"},{revision:"382769db9628dad0818eecea2d14ed3e",url:"./tags/书影音/index.html"},{revision:"4e18075277ba2cad674cade30561ab47",url:"./tags/数据可视化/index.html"},{revision:"3c5c45d7ae15b037f9ea546bd9939dae",url:"./tags/数据融合/index.html"},{revision:"d1f338faecc8895bd7b08577998f1fe2",url:"./tags/说明/index.html"},{revision:"943ced2461cf85099a055cd620c8279b",url:"./tags/太空/index.html"},{revision:"0f536fa66e76129565621bd1bd779703",url:"./tags/天文/index.html"},{revision:"178b9acdc87b7fe1cf5aa77f85f3d527",url:"./tags/吐槽/index.html"},{revision:"c72bbafda1d1feede83d8107784b7813",url:"./tags/推荐/index.html"},{revision:"2a1a2649c91c64bf5ea612593619246a",url:"./tags/网站/index.html"},{revision:"3cdb47150505156dda77bdfa16927a42",url:"./tags/未完成/index.html"},{revision:"062039531ae91d8b5bb9ad5c1695d893",url:"./tags/项目/index.html"},{revision:"55e28953a56d588db7aff67a1f19548e",url:"./tags/小程序/index.html"},{revision:"3efac34f72d616e9afe76b1a79b5d158",url:"./tags/效率/index.html"},{revision:"98d8e502674766fda1d640bb30de262b",url:"./tags/意大利/index.html"},{revision:"7165be28316f38df974147587a145bdd",url:"./tags/影评/index.html"},{revision:"ad5a6e6fa20dce764da8abd325120b86",url:"./tags/友链/index.html"},{revision:"5282d4d2000eafcc88e73705242fe10c",url:"./tags/运动规划/index.html"},{revision:"f9852156c6aa107b0f109c9a669fb45e",url:"./tags/知识库/index.html"},{revision:"c61516d376804c554c95ddaacc9c5a56",url:"./tags/智能家居/index.html"},{revision:"2f67cf342e8c2cdc438998d98731eb1e",url:"./tags/apt/index.html"},{revision:"b91d1c05e921e1a5c456dc3da31891db",url:"./tags/cg/index.html"},{revision:"aacf6f2f73068539dfd189510291a035",url:"./tags/hexo/index.html"},{revision:"c09d1912ffda981275b6fff91a8cdf53",url:"./tags/index.html"},{revision:"d234494eb787094518e803198d9345c9",url:"./tags/js/index.html"},{revision:"7882b81b2a4fbf18ab1baafc4f096a66",url:"./tags/logo/index.html"},{revision:"3925fdfcdcc20c55ea783b1dcd886d33",url:"./tags/mac/index.html"},{revision:"f5f8f8036faa22a81a948d6f91b61d00",url:"./tags/numpy/index.html"},{revision:"e1bb87ac49a217e7820ce3c7e5fe619c",url:"./tags/python/index.html"},{revision:"a4dda771f6f35338ca7a1e813bf3707a",url:"./tags/ros/index.html"},{revision:"136ad83dc971f23fb4a1efcd6b8aa965",url:"./tags/seaborn/index.html"},{revision:"86d1b80706038ca1f8225ae79f82c79c",url:"./tags/ui/index.html"},{revision:"236b3167620fff695bb237455776ebb2",url:"./tags/web/index.html"},{revision:"5c25818f1c587a203e2f4ab65081263c",url:"./things/index.html"},{revision:"0f31b87f4cc01950e84bba01b8df2081",url:"./travel/index.html"},{revision:"d6d9675c6eb19126a2bbdbe81fd9ff6b",url:"./workbox-b77dd8d1.js"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();