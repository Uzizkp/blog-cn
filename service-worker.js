"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,i){if(e){if("string"==typeof e)return _arrayLikeToArray(e,i);var a=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(a="Object"===a&&e.constructor?e.constructor.name:a)||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?_arrayLikeToArray(e,i):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,i){(null==i||i>e.length)&&(i=e.length);for(var a=0,d=new Array(i);a<i;a++)d[a]=e[a];return d}var e,i,d;self.define||(i={},d=function(d,a){return d=new URL(d+".js",a).href,i[d]||new Promise(function(i){var a;"document"in self?((a=document.createElement("script")).src=d,a.onload=i,document.head.appendChild(a)):(e=d,importScripts(d),i())}).then(function(){var e=i[d];if(!e)throw new Error("Module ".concat(d," didn’t register its module"));return e})},self.define=function(a,r){var c,n,s,l=e||("document"in self?document.currentScript.src:"")||location.href;i[l]||(s={module:{uri:l},exports:c={},require:n=function(e){return d(e,l)}},i[l]=Promise.all(a.map(function(e){return s[e]||n(e)})).then(function(e){return r.apply(void 0,_toConsumableArray(e)),c}))}),define(["./workbox-b77dd8d1"],function(e){self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"9d7066ba5e7f0b78850ecfcc2434e4e4"},{url:"archives/1970/01/index.html",revision:"04beaefd4c8f19c4d405344effe0ff54"},{url:"archives/1970/index.html",revision:"0724df7a5d744f674d40e322003fd70f"},{url:"archives/2018/09/index.html",revision:"92ea3c8e2d7829cd54aa7cd0cbbb97c5"},{url:"archives/2018/index.html",revision:"e54faef4d43bf8920b7c2395349a8797"},{url:"archives/2019/05/index.html",revision:"4df5b4c6ba97bda48f5feb7f2a7832a2"},{url:"archives/2019/06/index.html",revision:"9db2672f7ef45e5b8589c98c92833e01"},{url:"archives/2019/08/index.html",revision:"183c012adde9117c6fd101589945029d"},{url:"archives/2019/10/index.html",revision:"0579d7e936f16f170dc5c4c8626a3ce0"},{url:"archives/2019/index.html",revision:"3f620c03556b6046952bcadbcb54c6f9"},{url:"archives/2020/01/index.html",revision:"800da614096064ce7a7e91cb87c1fb05"},{url:"archives/2020/02/index.html",revision:"881847e2485e1be12c70b221a3af1446"},{url:"archives/2020/03/index.html",revision:"cc51e0ea13a3be384c2f8940f9a5fa1c"},{url:"archives/2020/04/index.html",revision:"39bc50e963ccbec65e5f6a91515982a2"},{url:"archives/2020/05/index.html",revision:"bf1deca3846fb1d86f1bf76dacfcb957"},{url:"archives/2020/06/index.html",revision:"80f1e7536b2628a532631e92f169747f"},{url:"archives/2020/07/index.html",revision:"550fbe18b68c3971d36998bb6dcd050e"},{url:"archives/2020/10/index.html",revision:"c3066c4b861a04aadfd54cc920809431"},{url:"archives/2020/index.html",revision:"cb489c693dc10f8facf448fcddd3765b"},{url:"archives/2020/page/2/index.html",revision:"f85f117d6c946e100cd7c01a4659817e"},{url:"archives/2021/05/index.html",revision:"2577491eb0f0aafd45d37b0609907410"},{url:"archives/2021/06/index.html",revision:"3033091ae1e3a3ff38e76e22ec415a7f"},{url:"archives/2021/07/index.html",revision:"2c108a0c6a7cd1e9df85b2726e339d65"},{url:"archives/2021/index.html",revision:"a81ebb859892ed9a8ded58ab374c538c"},{url:"archives/2022/03/index.html",revision:"ede669282016466d257e6e24ebb95af2"},{url:"archives/2022/04/index.html",revision:"a539a637bd386a3a38b2edd191af6288"},{url:"archives/2022/05/index.html",revision:"64dafaf26de59dd5c37ba032b8d9edb1"},{url:"archives/2022/index.html",revision:"bf41bd1f286a312fc6258620959389fe"},{url:"archives/index.html",revision:"cdb8ff71392d6926e635697de638f8a2"},{url:"archives/page/2/index.html",revision:"73eb9f98595c8c051a6d4cfec3f2ebf4"},{url:"archives/page/3/index.html",revision:"baa9e25609ee7b7eaad1132c132fcd1b"},{url:"archives/page/4/index.html",revision:"a4aaf077112eb8eb15580e4679b7d05d"},{url:"archives/page/5/index.html",revision:"2323d06e85a61b3c7051dae47d3cbb94"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/技术/计算机系统/index.html",revision:"487d5e15ab2684b16cb715ab9c5c2db7"},{url:"categories/技术/认知机器/index.html",revision:"cff9d2708ebcbd96e9107dd06d868a50"},{url:"categories/技术/图形学/index.html",revision:"e9e8d598fa6e2c537e8aa34d1b567ba5"},{url:"categories/技术/小程序/index.html",revision:"76cee4cdaa8de100255ae27e3a3ea2df"},{url:"categories/技术/智能家居/index.html",revision:"80c2365c22f9756ed5f80b3f10c33545"},{url:"categories/技术/index.html",revision:"a07285343c101d1e4a5733cf920d49bc"},{url:"categories/技术/page/2/index.html",revision:"b3a45dbc825089a6ddd6125ca4d87b30"},{url:"categories/技术/python/index.html",revision:"1eeaf8bc258176293750487b5915de7f"},{url:"categories/技术/web/index.html",revision:"8ac5b3c592fd5a2a5e38cb52462f0813"},{url:"categories/生活/测评/index.html",revision:"6e584c44b036def6b1b8047fd3f03ccb"},{url:"categories/生活/记事/index.html",revision:"d6dbec50eba672b77693c0c42cc2fb97"},{url:"categories/生活/旅行/index.html",revision:"c1f4eb2ab053d1f76dd3dedbd7cbb014"},{url:"categories/生活/软件/index.html",revision:"c381d0d059ee7c454c6b89b27e320c6b"},{url:"categories/生活/影评/index.html",revision:"319d3b40d49502c3e50542e849d05ca7"},{url:"categories/生活/index.html",revision:"4a272db735ffd7c80b0babdf9ed02bc2"},{url:"categories/生活/page/2/index.html",revision:"78b405546a8d7f47ed9b4fd1fbf32e99"},{url:"categories/生活/page/3/index.html",revision:"9e655b7dac07c3e336f55eaa5e182046"},{url:"categories/项目/其他项目/index.html",revision:"6a65a9e8a203bbee8675a40ae526001d"},{url:"categories/项目/认知机器/index.html",revision:"4f3e6d902f25ce0d84c980f8b0c08321"},{url:"categories/项目/应用开发/index.html",revision:"c33006d8b66ba27f3d419d01217ba7c0"},{url:"categories/项目/index.html",revision:"30285419a55440cf5d33426f58a6e6bf"},{url:"categories/index.html",revision:"df8a7b784d10184c72bd2e1ddeddb8d0"},{url:"channel/index.html",revision:"bebc6eaec83d7bdd676155655b8e0cc0"},{url:"copyright/index.html",revision:"d0edc64752ef6085b7158f2fc53fe220"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/index.css",revision:"961cf4afc844c53018a38a7f37d72952"},{url:"css/var.css",revision:"3eb3c67f4548c9ad9e2deb31314bb283"},{url:"douban/index.html",revision:"e913db04aa9396973fe3cde421cff97e"},{url:"friends/index.html",revision:"2745f935febe3da61bbfacf5d5a6e6ba"},{url:"gallery/index.html",revision:"12aa93fdc7678a3a94e6d844b978655c"},{url:"gallery/life/index.html",revision:"0a3d93a4b6c9e72855adff887c3f667f"},{url:"gallery/photography/index.html",revision:"9e49c61ea4c472a24a0a688e4cd18b90"},{url:"gallery/photos/index.html",revision:"69d4793bd3e738e06c4e8685f30d1d69"},{url:"gallery/profile/index.html",revision:"f83310b86d0f9a5fb1cc7ecfed0d15e9"},{url:"gallery/qingdao/index.html",revision:"38995466fe00d8cee4ef14c201e6a97d"},{url:"gallery/selfish/index.html",revision:"87ec58c41e2e6991aeb48dd74a9a02f2"},{url:"gallery/sketching/index.html",revision:"61b08273d19a6c09ecd19c344ad8daa2"},{url:"gallery/sky/index.html",revision:"ac81a36712c981f22cd2d462168e75d5"},{url:"gallery/street/index.html",revision:"642d23d1061f889bc1ca70a73bfa6c7a"},{url:"gallery/transcribe/index.html",revision:"84b711a20535fe9679f3d3fe61aa8d25"},{url:"home/index.html",revision:"4bcd93bce2eb1750e6cdb21fb8355b31"},{url:"img/avatar_error.png",revision:"a0296d11e236ff53e2ae9e27021cd18b"},{url:"img/bg/bg-1.jpg",revision:"620ca5ddd7a7e635d74b82940d45fe1f"},{url:"img/bg/bg-2.jpg",revision:"ff9f3370b41e84638a994126e1ee4b84"},{url:"img/bg/bg-3.jpg",revision:"61580b62482ddb5ea08d9f0f40eba1ad"},{url:"img/bg/bg-4.jpg",revision:"7b6e9ed899b968ac308d5ba5f02ac2ce"},{url:"img/bg/bg-5.jpg",revision:"5bb570cdd878a04090322f66e74a890b"},{url:"img/kp-logo.png",revision:"44f26c12e39d23907b2813c0215a4787"},{url:"img/logo.png",revision:"616e410095b1e73847325d36494e5846"},{url:"img/pwa/icon-192x192.png",revision:"e98a9a97931336355e18c2b04c33784c"},{url:"img/pwa/icon-256x256.png",revision:"4125b8033ca55656d0e6370889634aaf"},{url:"img/pwa/icon-384x384.png",revision:"fa45e91a0a8786560a4e522d019bbe0e"},{url:"img/pwa/icon-512x512.png",revision:"957be7ae275279ef006b9922ee9f1022"},{url:"index.html",revision:"86cdd939c23bc0a96be3472d5fac945c"},{url:"js/main.js",revision:"ad0d133aec64934868a2ab64a3c6e408"},{url:"js/search/algolia.js",revision:"40050ed7f51da310cb33fce172a92e01"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"list/index.html",revision:"66ca5c93663487d8af0b1f8ff81a10a8"},{url:"message/index.html",revision:"fa21babf838ffbb76a5af5af916f2331"},{url:"page/2/index.html",revision:"5328a2b4c4c25c76bd6c9d9c8d29faed"},{url:"page/3/index.html",revision:"97d72094e7421d2a856b8aee2a9ac877"},{url:"page/4/index.html",revision:"36e8e678e22ad31042dff6429e71f277"},{url:"page/5/index.html",revision:"a2e399cbd44ea399ad2a90bffa79093c"},{url:"page/6/index.html",revision:"d64d4a3430b6ace969e834edf04cc8d7"},{url:"posts/12331/index.html",revision:"36557a672527de9f226e7aee24d258af"},{url:"posts/12591/index.html",revision:"a8aa295554f2d3468a1f0d5290fa37eb"},{url:"posts/14800/index.html",revision:"a5a2199143595cff6308ed7bea2eface"},{url:"posts/1524/index.html",revision:"81452d4292698f11e8086959cbb17dc4"},{url:"posts/15482/index.html",revision:"72533a362a0d836d3fdaf1f4b5378c45"},{url:"posts/16907/index.html",revision:"e4db59b7a2b28fec7a83fbd99b96e51f"},{url:"posts/1941/index.html",revision:"a5407e81150911dc895dc5f23a98a0ad"},{url:"posts/19657/index.html",revision:"95fd8f897ac3d4a83831d21c5b8b3f66"},{url:"posts/19980/index.html",revision:"c32dae1fd99d1aecf012bdd3e5e19a40"},{url:"posts/240/index.html",revision:"4ee9fe8fc4dee6f7885bb2eb2cf448cb"},{url:"posts/24491/index.html",revision:"3b751726bd359185873519611ff0979d"},{url:"posts/25946/index.html",revision:"584570acd80ae1bcf75e07aeeea84fb7"},{url:"posts/25971/index.html",revision:"e3ae0bab91ddc2127f05e987ebe14c2e"},{url:"posts/26811/index.html",revision:"041c3e350de2cd32b68dca45dc063038"},{url:"posts/27207/index.html",revision:"14209ece2e1262763322fe09f1d8791e"},{url:"posts/29555/index.html",revision:"af371560122edb86026391a3aaf110e8"},{url:"posts/30954/index.html",revision:"bd14e6dfe7145923ef4f5da171c504e7"},{url:"posts/31156/index.html",revision:"95b23c57826bff07eda3abfbca59dfc2"},{url:"posts/31211/index.html",revision:"18f573d8ed580e318bb022b4fdf3af37"},{url:"posts/34388/index.html",revision:"c529d23efef0f6af5abc31c284486b11"},{url:"posts/34877/index.html",revision:"7ce4bf68e01b833a1940469ad38f6a22"},{url:"posts/34937/index.html",revision:"e30da75fa1c18320ceba116af2b88e40"},{url:"posts/35289/index.html",revision:"26889a6f9f067fdfde62519d9442a708"},{url:"posts/36979/index.html",revision:"066d157f30c5a31b948b8a582837ae9a"},{url:"posts/37419/index.html",revision:"afc514df06dec907d0472c77a2afbddb"},{url:"posts/37805/index.html",revision:"d75465b825977880e8ec09497a8ae1c5"},{url:"posts/3829/index.html",revision:"82fa820661441a6405f1a0790a325612"},{url:"posts/39656/index.html",revision:"9ced36dc4bca0810a808518589154cf8"},{url:"posts/39769/index.html",revision:"c8ef95a6ab23fa6678c88c19564e0c1b"},{url:"posts/40641/index.html",revision:"42b0162d923190f1e67cf5866369e439"},{url:"posts/41204/index.html",revision:"c1a3e4bd74012e19d9a0da20bbde9b55"},{url:"posts/42552/index.html",revision:"ec5847ed36eb79b7e82437cd2f472cc7"},{url:"posts/43039/index.html",revision:"a9da25354a265bb19a48305fb3856c53"},{url:"posts/51440/index.html",revision:"4787f1e175e5bfe8c63fa0262a0f9146"},{url:"posts/525/index.html",revision:"bdc415b5a7cf41004fe404115dd75f3c"},{url:"posts/53467/index.html",revision:"be4a34a4666b2e19750dd77c89b4392f"},{url:"posts/53493/index.html",revision:"6d1bf11c689b6bcb91bf52ca8cdd8bb9"},{url:"posts/58505/index.html",revision:"a47f7b5069fc3db95248d84e881df759"},{url:"posts/59487/index.html",revision:"6c3a7ee05e4bba946917b599d1ab3cb6"},{url:"posts/60961/index.html",revision:"55acafc2e092c675f71a05c4550ef6c5"},{url:"posts/60986/index.html",revision:"b57a9d286c2bdfda17464506e9827309"},{url:"posts/6129/index.html",revision:"a40b394278301ede8a05c83d7904d20f"},{url:"posts/61398/index.html",revision:"01c07c84f186b7064981bf08fd4f8ca6"},{url:"posts/61713/index.html",revision:"47c5d643b05fcb4505deda5389a74726"},{url:"posts/62736/index.html",revision:"88cb5d66e796956daa43bdb55da532fa"},{url:"posts/63260/index.html",revision:"cb2b23ddcb9ec43858a26a37ff39cbfe"},{url:"posts/771/index.html",revision:"25baa213d9e8ddc8807ce0582b6ad7ae"},{url:"posts/8155/index.html",revision:"58a9924ef62e2ec0b4e0a6a1c7139974"},{url:"profile/index.html",revision:"bce630530004177aa2ef366eee021eac"},{url:"projects/index.html",revision:"1e900ea69f491c5965b12c35746b4272"},{url:"services/index.html",revision:"150bb728ef631f1c7f5263916ff8cf13"},{url:"sponsorship/index.html",revision:"495c5f2fcb43f354f3bbe995dd93feec"},{url:"store/index.html",revision:"8a0202433a31f31524ba959a99767fb7"},{url:"tags/3d/index.html",revision:"74a3cad81ffa82a629d2369766b5f75a"},{url:"tags/包管理系统/index.html",revision:"62cb6217f366ee6b9ceef0ae40b447d2"},{url:"tags/笔记/index.html",revision:"d068ea7979eac5493a7dfc1a41fcb0ba"},{url:"tags/笔记/page/2/index.html",revision:"f288fd437b9c484cf27a1beb70824dbc"},{url:"tags/测评/index.html",revision:"a207f49bf51c8e860db55ef35a5d162d"},{url:"tags/传感器/index.html",revision:"b2db1756061a011bc9b6f79b7bbe78d0"},{url:"tags/德国/index.html",revision:"1f0c46e060531e82b80d9ba1677a501f"},{url:"tags/电影/index.html",revision:"ddeaa31ae05ce1ef41e6acf580a5adfb"},{url:"tags/动画/index.html",revision:"6c5b618e6d723b261da5b6b0011a6f5f"},{url:"tags/读书/index.html",revision:"659e179110265749a89059d0c6240767"},{url:"tags/番茄工作法/index.html",revision:"959c6882b202946828b3c0a8a7a9d955"},{url:"tags/浮生六记/index.html",revision:"c5504bdedad0bd213693b0dd3f8ab714"},{url:"tags/购物/index.html",revision:"7f0c45ba10b4f768fd183d05d5728d7c"},{url:"tags/观点/index.html",revision:"53637cbd6f5306752c9e2c1269d7cf26"},{url:"tags/鸿蒙/index.html",revision:"f646726278ba1a7cf98336b2721bde1e"},{url:"tags/火箭/index.html",revision:"3c659707884fc1c9f4d678b763ac76d3"},{url:"tags/机器人/index.html",revision:"4da5f81b44b81db19ad96b6c6e349a2c"},{url:"tags/机器学习/index.html",revision:"404d2a1b83c3174ed34e1631e466ae3e"},{url:"tags/计算机视觉/index.html",revision:"6646029e10512da9a302bf519215af73"},{url:"tags/记事/index.html",revision:"eca7651c43cdb935fed0fda0175554d6"},{url:"tags/技术/index.html",revision:"28830893854c294c4c932957302b08ea"},{url:"tags/科幻/index.html",revision:"64d2a02bd3bb47279fd5b975b4ffbe5e"},{url:"tags/扩展目标追踪/index.html",revision:"503dcd160c4065957163e73251fb5649"},{url:"tags/理论/index.html",revision:"cc9fca12266fc2b5974c1c41ee9c3055"},{url:"tags/旅行/index.html",revision:"c492e70f2d14199a83e095e7b850257c"},{url:"tags/猫/index.html",revision:"337e78869bba3d4179b78618a119dcc7"},{url:"tags/其他项目/index.html",revision:"1f30425ecd870c112fa909ff83e8f2e4"},{url:"tags/前端/index.html",revision:"54a1cb9ff2e0cc40dd4e43e0913cc4c4"},{url:"tags/入门/index.html",revision:"8d5c24e8dfc084f8c45ba4e16432aec7"},{url:"tags/软件/index.html",revision:"0f090c00fdb832afafaeca1421c39ce5"},{url:"tags/设计/index.html",revision:"a24b404f357d6c3f512ceb2993d87fe2"},{url:"tags/摄影/index.html",revision:"865ee1147d1a85d8b73b4e7050196d47"},{url:"tags/生活/index.html",revision:"805b15074dcb1ceedea288280a535a63"},{url:"tags/视频/index.html",revision:"f64c50b9f5ed11f54b60ab895db6dd26"},{url:"tags/手机/index.html",revision:"b2afcfc83b8e27a6f94410234319b1b7"},{url:"tags/书评/index.html",revision:"2d8b351d7052cc641a71605a93220a4e"},{url:"tags/书影音/index.html",revision:"8f93a4331a58ea475340a3850cf5a798"},{url:"tags/数据可视化/index.html",revision:"4ffecf4d4adf9197f92064872f277665"},{url:"tags/数据融合/index.html",revision:"8f4efc3cf061970d4efe5c604b9bdff5"},{url:"tags/说明/index.html",revision:"aa8831fb2aa598ee1e038e55ec910470"},{url:"tags/太空/index.html",revision:"c363839a31baec18d6cf53d72c1fb7bc"},{url:"tags/天文/index.html",revision:"e5723b6bd48653250761cdb308b4bf1e"},{url:"tags/吐槽/index.html",revision:"f06cf0190068f4173e0837c47909bd71"},{url:"tags/推荐/index.html",revision:"afd8c285a523e37167a77a843ed20217"},{url:"tags/网站/index.html",revision:"d8261ec23a5995bcc5899af45b3d9767"},{url:"tags/未完成/index.html",revision:"10737bdb97132a43c8fda95fe5ed74d2"},{url:"tags/项目/index.html",revision:"c96139dd6b6803d7c45509b2759e18c4"},{url:"tags/小程序/index.html",revision:"9fc70aec007cee8fbea0bda3a1750755"},{url:"tags/效率/index.html",revision:"25d1a33e618e3c6dd59b37a94aebc0ae"},{url:"tags/意大利/index.html",revision:"260e1132c9e6d268143a71af9875cd5c"},{url:"tags/影评/index.html",revision:"5f7539030375b3296e9a32f1474521b0"},{url:"tags/友链/index.html",revision:"7aead1c4a2bfba6f58ed9bc972f3f2f5"},{url:"tags/运动规划/index.html",revision:"f68234571e7370ae0ed2b89fb91ee71a"},{url:"tags/知识库/index.html",revision:"9cf2df463a6fae8bc55068e0f8ad2c47"},{url:"tags/智能家居/index.html",revision:"bf60d029aca30eefba9a2190360d8f8d"},{url:"tags/apt/index.html",revision:"721e6db75b502c145f4d5ad85ee3c4b2"},{url:"tags/cg/index.html",revision:"97da58fb56f6e6d5fb510d8405c09a6d"},{url:"tags/hexo/index.html",revision:"75d0cc75fe04e2548160f58e40424749"},{url:"tags/index.html",revision:"b52e74503a9ec669b11c002b51f5aa32"},{url:"tags/js/index.html",revision:"4a90cc0eb6dc3562af5ca370ef0df81c"},{url:"tags/logo/index.html",revision:"d2a167f2e44daf339b8282161b709fa4"},{url:"tags/mac/index.html",revision:"d1388a9d79f50f8ff553a737e051e492"},{url:"tags/numpy/index.html",revision:"303b3f306b882758a6bd65f5ce2cd421"},{url:"tags/python/index.html",revision:"d7b6240ccca4e4beb0dd20f7cad45665"},{url:"tags/ros/index.html",revision:"baf6b812fae9b74fcb0b9e89ffadffd6"},{url:"tags/seaborn/index.html",revision:"e120f089ce310a73036905930a60069d"},{url:"tags/ui/index.html",revision:"ef87a74e588dcef87da3a42b0831f39f"},{url:"tags/web/index.html",revision:"84d97569767f5170cf9be660fbefe599"},{url:"things/index.html",revision:"5c25818f1c587a203e2f4ab65081263c"},{url:"travel/index.html",revision:"0f31b87f4cc01950e84bba01b8df2081"}],{}),e.registerRoute(/^https:\/\/blog-1253324855\.cos\.ap-shanghai\.myqcloud\.com\/.*/,new e.CacheFirst,"GET")});