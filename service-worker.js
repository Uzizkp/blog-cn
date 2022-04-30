"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,i){if(e){if("string"==typeof e)return _arrayLikeToArray(e,i);var a=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(a="Object"===a&&e.constructor?e.constructor.name:a)||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?_arrayLikeToArray(e,i):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,i){(null==i||i>e.length)&&(i=e.length);for(var a=0,r=new Array(i);a<i;a++)r[a]=e[a];return r}var e,i,a;self.define||(i={},a=function(r,a){return r=new URL(r+".js",a).href,i[r]||new Promise(function(i){var a;"document"in self?((a=document.createElement("script")).src=r,a.onload=i,document.head.appendChild(a)):(e=r,importScripts(r),i())}).then(function(){var e=i[r];if(!e)throw new Error("Module ".concat(r," didn’t register its module"));return e})},self.define=function(r,d){var c,s,n,b=e||("document"in self?document.currentScript.src:"")||location.href;i[b]||(n={module:{uri:b},exports:c={},require:s=function(e){return a(e,b)}},i[b]=Promise.all(r.map(function(e){return n[e]||s(e)})).then(function(e){return d.apply(void 0,_toConsumableArray(e)),c}))}),define(["./workbox-b77dd8d1"],function(e){self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"416c7d33cd30060896cc991f9fd8750b"},{url:"archives/1970/01/index.html",revision:"e26762fef22c78f60e29f41a3a6dc7cc"},{url:"archives/1970/index.html",revision:"e408ed2cb5a9350ce94f2af3d4476721"},{url:"archives/2018/09/index.html",revision:"ce0c7a7cc9092302968d55000b2ccbec"},{url:"archives/2018/index.html",revision:"26dfd14dde20b4cc468c086f3720c51c"},{url:"archives/2019/08/index.html",revision:"353364e5f5d6b6564d24c0870bdddf34"},{url:"archives/2019/10/index.html",revision:"f025c249063b2f01135285a49079cfe0"},{url:"archives/2019/index.html",revision:"8276647e847aa8ebfb86787103caaa09"},{url:"archives/2020/01/index.html",revision:"4b091b2a97af834e7f6ab905d2b7ea11"},{url:"archives/2020/02/index.html",revision:"4b5e486488e4d13c67162933b8cb81b3"},{url:"archives/2020/03/index.html",revision:"4d733ba9fdb17a0397504698809e9f9a"},{url:"archives/2020/04/index.html",revision:"2efc4108819ab39c59cf5f3de9ce3307"},{url:"archives/2020/05/index.html",revision:"65be081e7c99e3f2f6e2581943326bc3"},{url:"archives/2020/07/index.html",revision:"e7d8da9f85af67d9005fc95083758008"},{url:"archives/2020/10/index.html",revision:"f7b794f6122c11b2a44c7a2cc25e49bb"},{url:"archives/2020/index.html",revision:"3999b9575b989f052ddb5806c1cd71bf"},{url:"archives/2020/page/2/index.html",revision:"dded6a86672dc6e8cf667adfc9611821"},{url:"archives/2021/05/index.html",revision:"1c90b9513da64a631373073ef202f5f4"},{url:"archives/2021/06/index.html",revision:"66af78aa11194b62ef19fe3793d53b96"},{url:"archives/2021/07/index.html",revision:"1ccc1825ff127e4a761b74eb4dcdb49a"},{url:"archives/2021/index.html",revision:"72e92963a92f4cd4987d41f28771a7cc"},{url:"archives/2022/03/index.html",revision:"8013528d1e88518465f94c3e3576e9c4"},{url:"archives/2022/04/index.html",revision:"177b9b172338abe10b84b88fc91d5fc4"},{url:"archives/2022/index.html",revision:"859ec63fc0a49f23b519d320b8bcb278"},{url:"archives/index.html",revision:"11bca1a8c49169a1f88dde27a4afa22c"},{url:"archives/page/2/index.html",revision:"794c9632a6dec212683bc1ff13bdb304"},{url:"archives/page/3/index.html",revision:"ae59e2d79b9290afd1278b2702eea4fc"},{url:"archives/page/4/index.html",revision:"4687a25dbe025a1d362b97a568b2cf96"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/技术/计算机系统/index.html",revision:"46163cc5485f74c530b7189459ae61ca"},{url:"categories/技术/认知机器/index.html",revision:"a5efb97416b7eef37cd078aab323e5b1"},{url:"categories/技术/图形学/index.html",revision:"18022e7bcbff3940159e3d927deebb36"},{url:"categories/技术/小程序/index.html",revision:"c3a6ebe7231aaf4d4502705698e90b79"},{url:"categories/技术/智能家居/index.html",revision:"6e07200038d48f90a597ce6057c452da"},{url:"categories/技术/index.html",revision:"ee6938123ac03f5a55ae22e76c32f1b6"},{url:"categories/技术/page/2/index.html",revision:"5601c7f6bfa502912a12858a2b87bfe5"},{url:"categories/技术/python/index.html",revision:"86af86e82aa25e1295395267f805b473"},{url:"categories/技术/web/index.html",revision:"9e64842b366591243db3a7ea54256d40"},{url:"categories/生活/记事/index.html",revision:"e4964dee7c112947cab89b565544108e"},{url:"categories/生活/旅行/index.html",revision:"0ca1cf2431caa49ea97becc172ef9a71"},{url:"categories/生活/软件/index.html",revision:"baa967ad33eb7de3d9a74267c74ca7a2"},{url:"categories/生活/影评/index.html",revision:"650f3c16425205d988ed29cb280b5ae1"},{url:"categories/生活/index.html",revision:"2ba9df824b2c9c8b8fcfd4b1b7e78e43"},{url:"categories/生活/page/2/index.html",revision:"42f469d2b92cb79398ab0c40ff1d5e2c"},{url:"categories/项目/其他项目/index.html",revision:"a2f86b048a434bdd4c6c00863daec794"},{url:"categories/项目/认知机器/index.html",revision:"d6b231e6a43d17c4504903d68578a0d8"},{url:"categories/项目/应用开发/index.html",revision:"453ae65bd10d74439db6605d1a8d2117"},{url:"categories/项目/index.html",revision:"e31aa1f91e0bb441bc173529d140ce3b"},{url:"categories/index.html",revision:"651526f0811e510383c6dd949992cc10"},{url:"channel/index.html",revision:"4ad3648fcf69e72f97e6e992e221fe82"},{url:"copyright/index.html",revision:"c06eb6835e5a3535ca8fecf166a9c4ea"},{url:"css/fcircle-beta.css",revision:"edb8931f69e71f76b59e59d50ee97350"},{url:"css/fm-style.css",revision:"aa06a3e0b5ba83795ccbda4c8248e7e5"},{url:"css/index.css",revision:"602fca65e5133f235088e28d34fb5fdd"},{url:"css/sponsor.css",revision:"828fd546b5a9fefbc45c4fe897200c4f"},{url:"css/var.css",revision:"4263dbfaf8d76842a2b5459a2126d1ad"},{url:"css/weibo.css",revision:"0f5987119ebac161403bc7c05821753f"},{url:"douban/index.html",revision:"eb085344bdcf197bea7852c55d60fcb8"},{url:"friends/index.html",revision:"5f3f3d70a6438a52667a1167ea0ce5a5"},{url:"gallery/index.html",revision:"758f0fc49cf0f1cd4f7a44adf4d207a9"},{url:"gallery/life/index.html",revision:"d3cae99b68888798b9503763af258bfd"},{url:"gallery/photography/index.html",revision:"9f92ea47d3d307149eccd8999d4f0c15"},{url:"gallery/photos/index.html",revision:"120cabf7f6700c41a44919243f3a0efe"},{url:"gallery/profile/index.html",revision:"91faa5718d47ca7af4329225e72af0e7"},{url:"gallery/qingdao/index.html",revision:"36ae74ca4f865ea6142db77007e2d137"},{url:"gallery/sketching/index.html",revision:"40ba3664cb0795dbc947d0bf8585721e"},{url:"gallery/sky/index.html",revision:"b2579b64c89ac83efe4a1e9c9fff0560"},{url:"gallery/street/index.html",revision:"73b4002b929ea1381896cbfc3b26aaf1"},{url:"gallery/transcribe/index.html",revision:"a207f01d717b2771f6f378ba8da69cd6"},{url:"home/index.html",revision:"c1eff2a0410666fbbf72a8fbf60bb3b2"},{url:"img/bg/bg-1.jpg",revision:"620ca5ddd7a7e635d74b82940d45fe1f"},{url:"img/bg/bg-2.jpg",revision:"ff9f3370b41e84638a994126e1ee4b84"},{url:"img/bg/bg-3.jpg",revision:"61580b62482ddb5ea08d9f0f40eba1ad"},{url:"img/bg/bg-4.jpg",revision:"7b6e9ed899b968ac308d5ba5f02ac2ce"},{url:"img/bg/bg-5.jpg",revision:"5bb570cdd878a04090322f66e74a890b"},{url:"img/cube-logo.png",revision:"ccc146bcca3d8e120b9a1e59836f844b"},{url:"img/curioso/1.jpg",revision:"39b8a02eb9d549334882ab1e7b402d4f"},{url:"img/curioso/11.jpg",revision:"7612499298be387532036ad5ab219070"},{url:"img/curioso/12.jpg",revision:"6e4111d657eab1075d078dc0a13414a6"},{url:"img/curioso/2.jpg",revision:"c1aa8009c4e4e0b8e87d63efb2cb3d21"},{url:"img/curioso/3.jpg",revision:"6a579909fa2a109bb90f49961210e1a6"},{url:"img/kp-logo.png",revision:"44f26c12e39d23907b2813c0215a4787"},{url:"img/logo.png",revision:"616e410095b1e73847325d36494e5846"},{url:"img/pwa/icon-128x128.png",revision:"086745e12ea25d13ac73138b7d724e30"},{url:"img/pwa/icon-144x144.png",revision:"f7aa17eebb3b695eeb875635e60db943"},{url:"img/pwa/icon-152x152.png",revision:"7718178280fbb5854ebc4fe511f133a5"},{url:"img/pwa/icon-192x192.png",revision:"71c8925cf8209bb2c1d2065b11b9e9fd"},{url:"img/pwa/icon-256x256.png",revision:"6f6ea478cf51d1e96cb73c704ee38d31"},{url:"img/pwa/icon-384x384.png",revision:"40329db91208f72fe7c9a53d06a3128f"},{url:"img/pwa/icon-512x512.png",revision:"beaed897d6c4796e5686afa275a6742b"},{url:"img/pwa/icon-72x72.png",revision:"84f082108a7096e06e841ca342dcf100"},{url:"img/pwa/icon-96x96.png",revision:"7d1fe60d9e5ecdd9bdc90d5f46ac564f"},{url:"img/store.png",revision:"58b1dabfa708438a19dcdf23ad52044b"},{url:"index.html",revision:"ac3688a98847adca24e07015915e1995"},{url:"js/bg-music.js",revision:"c179ac41ddbbe3fdd1ea8279277a5dd1"},{url:"js/chart/gantt.js",revision:"b784e27b1ccbd32154a8023a2907d232"},{url:"js/chart/githubcalendar.js",revision:"51a10cc797ffd0bd97cf9f3fb3ba7798"},{url:"js/chart/heatmap.js",revision:"255382915f8d099ca0dfd51e992b1b4f"},{url:"js/chart/map.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"js/chart/radar.js",revision:"345240a9371a7d02f43bce557d3bc647"},{url:"js/chart/sun.js",revision:"df82a224214fa1309f191dd899b1eff2"},{url:"js/main.js",revision:"ad0d133aec64934868a2ab64a3c6e408"},{url:"js/search/algolia.js",revision:"e59d23e445a9f30b5c2b5228b8ee827b"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/travel.js",revision:"56822714c988671c14743d2aedbb899d"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"message/index.html",revision:"ebff5df6a6fce8856f63ea170fa6d668"},{url:"page/2/index.html",revision:"5eb2bfbfdc90cff50e942ad33e911100"},{url:"page/3/index.html",revision:"5d18f4ac6a4f91ac34260a2c7f70ef8a"},{url:"page/4/index.html",revision:"b9e14bc2867167b68f313fefaa224818"},{url:"page/5/index.html",revision:"05445add7343979de0a30477dbf79e76"},{url:"page/6/index.html",revision:"e10c3a2032867cf5d9c77ba61897e7c3"},{url:"page/7/index.html",revision:"7d7adcebad8212886d3f63b77a5ccf96"},{url:"page/8/index.html",revision:"620477b5cd309dfea15c226cfffe1592"},{url:"posts/12331/index.html",revision:"62599794f283dd7fccf66e7cd269c66f"},{url:"posts/12591/index.html",revision:"410cd1ff9aee0e5a8aa230fbf31f1041"},{url:"posts/16907/index.html",revision:"5609db6fe6ae8c944ba63047eab54ad9"},{url:"posts/1941/index.html",revision:"e02522dbefe0c8a027adc72f84e8aa5a"},{url:"posts/19657/index.html",revision:"a3bf2d2ea5770f3b346ac54524aba095"},{url:"posts/19980/index.html",revision:"8a2d537d46deb9b65ccac64bdaf7b611"},{url:"posts/240/index.html",revision:"3303e5849addb6c4ac29cb1fce36de6d"},{url:"posts/24491/index.html",revision:"98b721ffbeea6df4c5b05c866e7b2d18"},{url:"posts/25946/index.html",revision:"bad0180864e46755c0eb4aa5b82719f9"},{url:"posts/25971/index.html",revision:"e0c81a28b032c5b87a13299acb1de0e8"},{url:"posts/26811/index.html",revision:"f141f0d3da28cc4d1beb9ae9f12a6e9c"},{url:"posts/27207/index.html",revision:"9c7d54d44ce2d3ac661c4c9cca1fd756"},{url:"posts/29555/index.html",revision:"a0e55ff7f5296264cf7b185503464373"},{url:"posts/30954/index.html",revision:"dbae79f033f2a9bea2f8703fd4aed117"},{url:"posts/31156/index.html",revision:"4c31d4a6871d87097226521707d2236d"},{url:"posts/31211/index.html",revision:"2b09f182a5c32a3dfbf7011a6f53451a"},{url:"posts/34388/index.html",revision:"22a57583234b0d0ddcf45c0b9d3672a0"},{url:"posts/34877/index.html",revision:"3364edaede74519a8d9bb74aefd758d9"},{url:"posts/34937/index.html",revision:"1d9e3fab1825c2f32e830e5b7e18d896"},{url:"posts/35289/index.html",revision:"ca1e82dd7fa906cab74262ed55b4f26b"},{url:"posts/36979/index.html",revision:"fdceadf94997569924b57faa7619627f"},{url:"posts/37419/index.html",revision:"d3a8af3d68b045820456c273d0ec3b5e"},{url:"posts/37805/index.html",revision:"db4926de77ae76276e13434fe3e8aa22"},{url:"posts/3829/index.html",revision:"8266794879d63e42e9e01552e0f349fc"},{url:"posts/39656/index.html",revision:"1967ecb74f011c0a11ca8a123f462e88"},{url:"posts/41204/index.html",revision:"826853a436798fbd82196ab0917cecf2"},{url:"posts/43039/index.html",revision:"b63a714cdabada99a7abd64929e48112"},{url:"posts/51440/index.html",revision:"dcf18a37c36d31c930a92d23b58c805f"},{url:"posts/525/index.html",revision:"1096fc38d0a9c467546c5722f48697ab"},{url:"posts/53467/index.html",revision:"5c02987414e5e6fda641d87b03092333"},{url:"posts/53493/index.html",revision:"572f9010c67b14cb70f62f591adcaea1"},{url:"posts/58505/index.html",revision:"2813f7ee9af5a62d3a4b62e3a383dd28"},{url:"posts/59487/index.html",revision:"b185ae9dbfbd509cd8384761d1c0e079"},{url:"posts/60961/index.html",revision:"af938253ae66367b291b1debfa1b2fbf"},{url:"posts/60986/index.html",revision:"23328cc5c40301fcd155ff298263ea02"},{url:"posts/6129/index.html",revision:"b07534cbc7a2b481f517a896dc380cd4"},{url:"posts/61713/index.html",revision:"b27257db4745549a0834469d4d58bbea"},{url:"posts/62736/index.html",revision:"3ba213e0a92f3dfa2dba8d1ab03c300d"},{url:"posts/63260/index.html",revision:"13918c97c9cc0308935301fde73cabf0"},{url:"posts/771/index.html",revision:"6950c5f4e9e73f4c416d7fcb750fc621"},{url:"profile/index.html",revision:"fd787947113276e97508cd76874c0b45"},{url:"projects/index.html",revision:"4520766f07c49fcf21b060317ff67a5c"},{url:"sponsorship/index.html",revision:"1c0855a75c3de5bde0c4b39b188bd1f1"},{url:"store/index.html",revision:"25fbbe1246d556634a79684fa59f4e9e"},{url:"tags/3d/index.html",revision:"c2b0199edfa8fadd4042adc825827772"},{url:"tags/包管理系统/index.html",revision:"aee9700bab009bfe2942f6dd808a168e"},{url:"tags/笔记/index.html",revision:"b50eb55605f1c2435aafa98afc701c2d"},{url:"tags/笔记/page/2/index.html",revision:"38afebd350c06cce41f433bf7f369110"},{url:"tags/传感器/index.html",revision:"1a22aa4fafb3678c06ec1dbf14be194f"},{url:"tags/德国/index.html",revision:"844ac89b6e1c3f951e1af448d18c2900"},{url:"tags/电影/index.html",revision:"31ea727a28d77ba29a73a3a69b3fa5d1"},{url:"tags/动画/index.html",revision:"ae3a70e1a1094f7c6a2f0ed478c1e454"},{url:"tags/读书/index.html",revision:"22baf700ca35c32db46b1f9fecb442f3"},{url:"tags/番茄工作法/index.html",revision:"708a949f40d229fbd687191e7aaa996b"},{url:"tags/浮生六记/index.html",revision:"f6679117586caa3cf06214e4474e0348"},{url:"tags/观点/index.html",revision:"6983da7d587ebfeec14684d893b2aa4e"},{url:"tags/鸿蒙/index.html",revision:"dfcb56f2d13fdcfab68f7d9063ea08b2"},{url:"tags/火箭/index.html",revision:"5cb2747c5c7b0c72deb24d3f3732818c"},{url:"tags/机器人/index.html",revision:"403b920924a8e64d876d8637f29491b1"},{url:"tags/机器学习/index.html",revision:"ded4817182fb850a39cad6b34e85aa36"},{url:"tags/计算机视觉/index.html",revision:"31b22d6eacd7e24dcfb6e058523da93e"},{url:"tags/记事/index.html",revision:"d7c64bd042dfb4bd32a408570a9dc241"},{url:"tags/技术/index.html",revision:"4af67561007a778eccffa79fd8e6a6a2"},{url:"tags/科幻/index.html",revision:"4ec733b0cb402d3a82fece919f8d0e18"},{url:"tags/扩展目标追踪/index.html",revision:"6be0a3308ca71e4f41bf78ac0b4f2494"},{url:"tags/理论/index.html",revision:"7d2e446726504270c9d4bf0a76b602e8"},{url:"tags/旅行/index.html",revision:"7bad99fc041030ca40f5ca5d5b93a9e9"},{url:"tags/猫/index.html",revision:"7bb08843f079d17d16bbef35af190b71"},{url:"tags/其他项目/index.html",revision:"a9b1f31c161d9584f140c91775b32af6"},{url:"tags/前端/index.html",revision:"05245a77a2a493a1bba98d2f15784891"},{url:"tags/入门/index.html",revision:"43915673a26ce95319dfbc39a5352bdc"},{url:"tags/软件/index.html",revision:"c7d63b19380ed6839193ee22c8088814"},{url:"tags/设计/index.html",revision:"2e4a1c807aa4b98bc3de6e4549b47f0a"},{url:"tags/摄影/index.html",revision:"b71c5269798417c76c2123476011e199"},{url:"tags/生活/index.html",revision:"4c5b513bb42f6e6a74588c648237f598"},{url:"tags/视频/index.html",revision:"5be98907eb0e466a7898fa13347d7605"},{url:"tags/手机/index.html",revision:"afedc4939664bbbd2214f6b0c48be4b6"},{url:"tags/书评/index.html",revision:"6f2abe4a4140bd3e855c81a2d6903895"},{url:"tags/书影音/index.html",revision:"50545411027fc6a1d085097339dbdb76"},{url:"tags/数据可视化/index.html",revision:"5972db5e0e7270946cf143f44fddcb10"},{url:"tags/数据融合/index.html",revision:"a073d9e7757d064d0415d6a79b181521"},{url:"tags/说明/index.html",revision:"a764d68b95f70f3e0665e6b4992c0141"},{url:"tags/太空/index.html",revision:"53c6b7938c9bc9f7e74c5fcf82cb837b"},{url:"tags/天文/index.html",revision:"2881d4bbe7b6ff5278fc0a850bc9671f"},{url:"tags/吐槽/index.html",revision:"0056455782c61d257babb8cfa37cd67b"},{url:"tags/推荐/index.html",revision:"6873ff2f4e1cf0cdd3cf9830adc68e10"},{url:"tags/网站/index.html",revision:"50860b605d5be11357ecf023213cac76"},{url:"tags/未完成/index.html",revision:"ee839434f23b4cb47b5c8474a8b878c3"},{url:"tags/项目/index.html",revision:"089d3bb23034579e847637b6f7325d7e"},{url:"tags/小程序/index.html",revision:"f6d133192ac3cb292f02c30ebe96465e"},{url:"tags/效率/index.html",revision:"2b060fbc9b09853e7258aaf03958cfc6"},{url:"tags/意大利/index.html",revision:"98e6f045715fdcebbf59e203a5f15dc7"},{url:"tags/影评/index.html",revision:"b9be4d4eb5a7ef1add4306f0f1c770c5"},{url:"tags/友链/index.html",revision:"9cb6cac3b4468a9eb2ead3bf584220b9"},{url:"tags/运动规划/index.html",revision:"4cad46f97838c99da09f3df55ca00983"},{url:"tags/知识库/index.html",revision:"2bb4032e587f09714fb72a8ab19ec174"},{url:"tags/智能家居/index.html",revision:"01dea0ceac1c41bd3081021b0b1856c0"},{url:"tags/apt/index.html",revision:"fe5143f0a1aaf58ad79b91c9040bfb3e"},{url:"tags/cg/index.html",revision:"7617fc59f94d8e283ca271d7fbced8af"},{url:"tags/hexo/index.html",revision:"7f89ec0b536eb0c64e2b9c2190379e60"},{url:"tags/index.html",revision:"fdb01f374ccb0d4c6c560c167af96fae"},{url:"tags/js/index.html",revision:"ead2d55c2076ec27083dfcc097f13772"},{url:"tags/logo/index.html",revision:"bb232f0a3e8683e3d74893681e71c041"},{url:"tags/mac/index.html",revision:"b28de0fe9b21d73cf615428e1bb09211"},{url:"tags/numpy/index.html",revision:"72430741073963eec6030e9b0b441e2d"},{url:"tags/python/index.html",revision:"c03a845372e77cea0ec89fa05113a872"},{url:"tags/ros/index.html",revision:"28f59bb9ffee865b2acf912eaea0f679"},{url:"tags/seaborn/index.html",revision:"86dae41cefb3821b65ec2fe1f0b871d6"},{url:"tags/ui/index.html",revision:"689dce2c6227902b2464bbbfa8dc8800"},{url:"tags/web/index.html",revision:"0bb310388e13d4e120391263991e76b8"},{url:"things/index.html",revision:"2b80023afc2b10ff49841d9e4e016a97"},{url:"travel/index.html",revision:"875c99ab12e218f5f7ec5528227f8b8f"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")});