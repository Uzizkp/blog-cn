"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,i){if(e){if("string"==typeof e)return _arrayLikeToArray(e,i);var a=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(a="Object"===a&&e.constructor?e.constructor.name:a)||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?_arrayLikeToArray(e,i):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,i){(null==i||i>e.length)&&(i=e.length);for(var a=0,d=new Array(i);a<i;a++)d[a]=e[a];return d}var e,i,d;self.define||(i={},d=function(d,a){return d=new URL(d+".js",a).href,i[d]||new Promise(function(i){var a;"document"in self?((a=document.createElement("script")).src=d,a.onload=i,document.head.appendChild(a)):(e=d,importScripts(d),i())}).then(function(){var e=i[d];if(!e)throw new Error("Module ".concat(d," didn’t register its module"));return e})},self.define=function(a,r){var c,n,s,l=e||("document"in self?document.currentScript.src:"")||location.href;i[l]||(s={module:{uri:l},exports:c={},require:n=function(e){return d(e,l)}},i[l]=Promise.all(a.map(function(e){return s[e]||n(e)})).then(function(e){return r.apply(void 0,_toConsumableArray(e)),c}))}),define(["./workbox-b77dd8d1"],function(e){self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"3bd46df64b65cd2f7bc4115b0a2106c8"},{url:"archives/1970/01/index.html",revision:"9d5504e478db3e57ddbba88ff0ad5810"},{url:"archives/1970/index.html",revision:"72202688562598051b92fb9a80e38833"},{url:"archives/2018/09/index.html",revision:"80421c07c8ebce20f1cc0f7183c5d49c"},{url:"archives/2018/index.html",revision:"35d91801c9a66bd24af3dc4625e3a1ed"},{url:"archives/2019/08/index.html",revision:"5195d402cf71e2b2ebe4baba2fc7481f"},{url:"archives/2019/10/index.html",revision:"54b60e398effe1226d79be60286cbf6b"},{url:"archives/2019/index.html",revision:"32d31886bb6de4a687bd82e1a84c93cd"},{url:"archives/2020/01/index.html",revision:"f420891475f9164265a34baf80f8e286"},{url:"archives/2020/02/index.html",revision:"72f277496d21e6d55fdf0889123b0260"},{url:"archives/2020/03/index.html",revision:"e3e4617a1637de10faacfc5a0fd9d1a6"},{url:"archives/2020/04/index.html",revision:"ba893dcd26d2271da843802659701214"},{url:"archives/2020/05/index.html",revision:"d007bdc7a4472a719a9dc352f0c46c65"},{url:"archives/2020/07/index.html",revision:"a8ac34e7b9ffbcfc8efb4e2c158f1a3d"},{url:"archives/2020/10/index.html",revision:"e79a4f743e47d18d4df0e624c3cb7ba0"},{url:"archives/2020/index.html",revision:"1968524aa66067ca17ce7587a8a96e98"},{url:"archives/2020/page/2/index.html",revision:"6ade33bbcdd172738fda8b6dbd540599"},{url:"archives/2021/05/index.html",revision:"7048b0fd1ac97edf2590d8a277a8c938"},{url:"archives/2021/06/index.html",revision:"934fdb915df056a31afcc7a59a282591"},{url:"archives/2021/07/index.html",revision:"86b0b132488fda1c3ef05cbd29c4bb25"},{url:"archives/2021/index.html",revision:"0cfe9cca43f6412ca5e5ebf9b50747fb"},{url:"archives/2022/03/index.html",revision:"64953e669d2c05feef1c093434bb1a47"},{url:"archives/2022/04/index.html",revision:"793f5fc419973b389ccd80a6d08cfaa4"},{url:"archives/2022/index.html",revision:"8eb4098e64dcf34c776ae2f16b29a821"},{url:"archives/index.html",revision:"b96ee047fb304a65a82d432b7504ab46"},{url:"archives/page/2/index.html",revision:"9db257cfbbff3ddcb4a5659da3570cfe"},{url:"archives/page/3/index.html",revision:"ea4a2e5c78e1c44686b1e43c33a7247c"},{url:"archives/page/4/index.html",revision:"4d7cbce361473a458114614daf16c29a"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/技术/计算机系统/index.html",revision:"e1ac41238f4983b81b5fd2b692921550"},{url:"categories/技术/认知机器/index.html",revision:"a5be1245dd5ad4c89cf098650a251d79"},{url:"categories/技术/图形学/index.html",revision:"b1530b73da9cd9e6661ad5f323255d10"},{url:"categories/技术/小程序/index.html",revision:"77ccbd9e3343821528c628ba4c5d1410"},{url:"categories/技术/智能家居/index.html",revision:"fd53b11462c56edff063eb8e613f410d"},{url:"categories/技术/index.html",revision:"8624345f6bed4d06a49694633a5eb71b"},{url:"categories/技术/page/2/index.html",revision:"68e2670c3869dfbb7019fe137c69fb18"},{url:"categories/技术/python/index.html",revision:"879d7add8c967d8c634cc93cc4e64bcc"},{url:"categories/技术/web/index.html",revision:"de7db748328eef625c1f4964b028518f"},{url:"categories/生活/记事/index.html",revision:"20c917f0b2399ad3424c8330be9ce12e"},{url:"categories/生活/旅行/index.html",revision:"faa27c533999073627b503832a72128c"},{url:"categories/生活/软件/index.html",revision:"2faae6c1b5facd410be5a6674d55212e"},{url:"categories/生活/影评/index.html",revision:"ef57b8fd13d5fdcba6a04cc70fbab86b"},{url:"categories/生活/index.html",revision:"b71cd7469f002715c0976ebc09cd99dd"},{url:"categories/生活/page/2/index.html",revision:"7f2d090067b0044d26ca7522ecbf96b5"},{url:"categories/项目/其他项目/index.html",revision:"a4bf0a7f5ec4cf46aa664fed0aa25885"},{url:"categories/项目/认知机器/index.html",revision:"3dbc3bb3fb01cf2da0d57d6697d43272"},{url:"categories/项目/应用开发/index.html",revision:"02fabec8b09261ee78c23e2de082b330"},{url:"categories/项目/index.html",revision:"5f6212de470964915c8c48b87ec5e057"},{url:"categories/index.html",revision:"392338cb81cb30004382623dd1947ec3"},{url:"channel/index.html",revision:"4ad3648fcf69e72f97e6e992e221fe82"},{url:"copyright/index.html",revision:"c06eb6835e5a3535ca8fecf166a9c4ea"},{url:"css/fcircle-beta.css",revision:"116a95e05babb4c46e7d9d969a0954f2"},{url:"css/fm-style.css",revision:"24f022f590a1ac22806c1e0e49383074"},{url:"css/index.css",revision:"01a1ae320b5a72413ee20d313fbb6274"},{url:"css/sponsor.css",revision:"1837a065ee45dd85a3bc373ed5d75dc1"},{url:"css/var.css",revision:"9b74eb03ac21d7f25837d3ad426ac066"},{url:"css/weibo.css",revision:"4912c39b64a5c27ca1d704c87c8e4cf1"},{url:"douban/index.html",revision:"4a9afd398200d3596ccf2e2a4bfdd6f3"},{url:"friends/index.html",revision:"5f3f3d70a6438a52667a1167ea0ce5a5"},{url:"gallery/index.html",revision:"758f0fc49cf0f1cd4f7a44adf4d207a9"},{url:"gallery/life/index.html",revision:"d3cae99b68888798b9503763af258bfd"},{url:"gallery/photography/index.html",revision:"9f92ea47d3d307149eccd8999d4f0c15"},{url:"gallery/photos/index.html",revision:"120cabf7f6700c41a44919243f3a0efe"},{url:"gallery/profile/index.html",revision:"91faa5718d47ca7af4329225e72af0e7"},{url:"gallery/qingdao/index.html",revision:"36ae74ca4f865ea6142db77007e2d137"},{url:"gallery/sketching/index.html",revision:"40ba3664cb0795dbc947d0bf8585721e"},{url:"gallery/sky/index.html",revision:"b2579b64c89ac83efe4a1e9c9fff0560"},{url:"gallery/street/index.html",revision:"73b4002b929ea1381896cbfc3b26aaf1"},{url:"gallery/transcribe/index.html",revision:"a207f01d717b2771f6f378ba8da69cd6"},{url:"home/index.html",revision:"157404a64cc2b11bc7340e232ae9ea06"},{url:"img/bg/bg-1.jpg",revision:"620ca5ddd7a7e635d74b82940d45fe1f"},{url:"img/bg/bg-2.jpg",revision:"ff9f3370b41e84638a994126e1ee4b84"},{url:"img/bg/bg-3.jpg",revision:"61580b62482ddb5ea08d9f0f40eba1ad"},{url:"img/bg/bg-4.jpg",revision:"7b6e9ed899b968ac308d5ba5f02ac2ce"},{url:"img/bg/bg-5.jpg",revision:"5bb570cdd878a04090322f66e74a890b"},{url:"img/cube-logo.png",revision:"ccc146bcca3d8e120b9a1e59836f844b"},{url:"img/curioso/1.jpg",revision:"39b8a02eb9d549334882ab1e7b402d4f"},{url:"img/curioso/11.jpg",revision:"7612499298be387532036ad5ab219070"},{url:"img/curioso/12.jpg",revision:"6e4111d657eab1075d078dc0a13414a6"},{url:"img/curioso/2.jpg",revision:"c1aa8009c4e4e0b8e87d63efb2cb3d21"},{url:"img/curioso/3.jpg",revision:"6a579909fa2a109bb90f49961210e1a6"},{url:"img/kp-logo.png",revision:"44f26c12e39d23907b2813c0215a4787"},{url:"img/logo.png",revision:"616e410095b1e73847325d36494e5846"},{url:"img/pwa/icon-128x128.png",revision:"086745e12ea25d13ac73138b7d724e30"},{url:"img/pwa/icon-144x144.png",revision:"f7aa17eebb3b695eeb875635e60db943"},{url:"img/pwa/icon-152x152.png",revision:"7718178280fbb5854ebc4fe511f133a5"},{url:"img/pwa/icon-192x192.png",revision:"71c8925cf8209bb2c1d2065b11b9e9fd"},{url:"img/pwa/icon-256x256.png",revision:"6f6ea478cf51d1e96cb73c704ee38d31"},{url:"img/pwa/icon-384x384.png",revision:"40329db91208f72fe7c9a53d06a3128f"},{url:"img/pwa/icon-512x512.png",revision:"beaed897d6c4796e5686afa275a6742b"},{url:"img/pwa/icon-72x72.png",revision:"84f082108a7096e06e841ca342dcf100"},{url:"img/pwa/icon-96x96.png",revision:"7d1fe60d9e5ecdd9bdc90d5f46ac564f"},{url:"img/store.png",revision:"58b1dabfa708438a19dcdf23ad52044b"},{url:"index.html",revision:"1bb6c9110b0bfc21841d209ee0a52427"},{url:"js/bg-music.js",revision:"c179ac41ddbbe3fdd1ea8279277a5dd1"},{url:"js/main.js",revision:"ad0d133aec64934868a2ab64a3c6e408"},{url:"js/search/algolia.js",revision:"e59d23e445a9f30b5c2b5228b8ee827b"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"message/index.html",revision:"51daaf60f9d4e1f7d2b57d7a9e0b0cf9"},{url:"page/2/index.html",revision:"93d0deea8b2ebce3c033a9667fa7055d"},{url:"page/3/index.html",revision:"e870b07676e848e8cca68731b66fedce"},{url:"page/4/index.html",revision:"3a1102ec590ba5fc6bc1ada96d86046c"},{url:"page/5/index.html",revision:"ca8f3b13e522836ad6d54f5e77c3888b"},{url:"page/6/index.html",revision:"9138d20528e76cce4d5579024fe5d9b4"},{url:"page/7/index.html",revision:"7e4356aa35c44a904fd8eed2a941327a"},{url:"page/8/index.html",revision:"9f5d36848b46f748e609cb55060f3748"},{url:"posts/12331/index.html",revision:"55e60f2fd3c0fe4e3b482537a0738df2"},{url:"posts/12591/index.html",revision:"410cd1ff9aee0e5a8aa230fbf31f1041"},{url:"posts/16907/index.html",revision:"cc7285fc54f48da503f313ea678da933"},{url:"posts/1941/index.html",revision:"78bc291ee69501925dff371118c1ba0d"},{url:"posts/19657/index.html",revision:"a3bf2d2ea5770f3b346ac54524aba095"},{url:"posts/19980/index.html",revision:"a9ad433cf0d55cdea7c32fa79998b44c"},{url:"posts/240/index.html",revision:"3303e5849addb6c4ac29cb1fce36de6d"},{url:"posts/24491/index.html",revision:"98b721ffbeea6df4c5b05c866e7b2d18"},{url:"posts/25946/index.html",revision:"bad0180864e46755c0eb4aa5b82719f9"},{url:"posts/25971/index.html",revision:"e0c81a28b032c5b87a13299acb1de0e8"},{url:"posts/26811/index.html",revision:"f141f0d3da28cc4d1beb9ae9f12a6e9c"},{url:"posts/27207/index.html",revision:"9c7d54d44ce2d3ac661c4c9cca1fd756"},{url:"posts/29555/index.html",revision:"3ed82c0ce86da121a1f3cd12051a1c68"},{url:"posts/30954/index.html",revision:"dbae79f033f2a9bea2f8703fd4aed117"},{url:"posts/31156/index.html",revision:"4c31d4a6871d87097226521707d2236d"},{url:"posts/31211/index.html",revision:"3e30498845840da2c388119f138ab3a3"},{url:"posts/34388/index.html",revision:"6726112b85f09df9e2c0831988c359ac"},{url:"posts/34877/index.html",revision:"e0895af8e90a94c35e0e71d286d820b3"},{url:"posts/34937/index.html",revision:"9f250e5a0bb94e1a55925b47e6bf4bb4"},{url:"posts/35289/index.html",revision:"ca1e82dd7fa906cab74262ed55b4f26b"},{url:"posts/36979/index.html",revision:"fdceadf94997569924b57faa7619627f"},{url:"posts/37419/index.html",revision:"d3a8af3d68b045820456c273d0ec3b5e"},{url:"posts/37805/index.html",revision:"b34b3ff784494647fa00fb43341b21b2"},{url:"posts/3829/index.html",revision:"8266794879d63e42e9e01552e0f349fc"},{url:"posts/39656/index.html",revision:"1967ecb74f011c0a11ca8a123f462e88"},{url:"posts/41204/index.html",revision:"ba4656f5359bbaa306d49a129364265d"},{url:"posts/43039/index.html",revision:"b63a714cdabada99a7abd64929e48112"},{url:"posts/51440/index.html",revision:"97cf0ff4ffcb2c8fd2078637a5b17afa"},{url:"posts/525/index.html",revision:"446f797e824eec6d005f501f315f2f13"},{url:"posts/53467/index.html",revision:"5c02987414e5e6fda641d87b03092333"},{url:"posts/53493/index.html",revision:"bdb8daee5d325e3c11470de33d5782e5"},{url:"posts/58505/index.html",revision:"43a866d46578991eb5dc3e45596154d2"},{url:"posts/59487/index.html",revision:"b185ae9dbfbd509cd8384761d1c0e079"},{url:"posts/60961/index.html",revision:"52360c7b764516f977e20ad315c2bf49"},{url:"posts/60986/index.html",revision:"aa2ac6e95b8233dee7267df477d5cdac"},{url:"posts/6129/index.html",revision:"8ff3f69643b8e0b664bbd0a05ffbeb9f"},{url:"posts/61713/index.html",revision:"b27257db4745549a0834469d4d58bbea"},{url:"posts/62736/index.html",revision:"98d1a2e48050a03e4b8941fdb6f1487a"},{url:"posts/63260/index.html",revision:"13918c97c9cc0308935301fde73cabf0"},{url:"posts/771/index.html",revision:"59541166d94b93961d7cbdf2a7220629"},{url:"profile/index.html",revision:"6792c0a1e33ffd5f8e5ad74bd7a9937f"},{url:"projects/index.html",revision:"d3160e655dd199102fd6c587b6c2be70"},{url:"sponsorship/index.html",revision:"2bac4ba0b4bd46528e5846b1da7cac04"},{url:"store/index.html",revision:"25fbbe1246d556634a79684fa59f4e9e"},{url:"tags/3d/index.html",revision:"7719c467cd57b8ab705c5bf9eba4b138"},{url:"tags/包管理系统/index.html",revision:"d8acda0312fda8b81d4c4c496d1effb2"},{url:"tags/笔记/index.html",revision:"2223d529bffaff70446fae914be7d5a3"},{url:"tags/笔记/page/2/index.html",revision:"c51ebfa94d4af87f5bbf0ea700ff3eb1"},{url:"tags/传感器/index.html",revision:"8cb909fc8317ef58def56f59772bf768"},{url:"tags/德国/index.html",revision:"4ba1f1b0eac75516b67b97c1e32858f5"},{url:"tags/电影/index.html",revision:"43ca3d50c0e032e7f56cafb6de7ae315"},{url:"tags/动画/index.html",revision:"945a3fa6f50458ea20cbfd01450b36a2"},{url:"tags/读书/index.html",revision:"c8ffa8179f119379e72bf43574eee514"},{url:"tags/番茄工作法/index.html",revision:"851aef7c2a69e7957a0025253e346526"},{url:"tags/浮生六记/index.html",revision:"e98e597d3081ef4327f1d8692fca00a5"},{url:"tags/观点/index.html",revision:"a7d65bff9b76b20910a9431e8183ac05"},{url:"tags/鸿蒙/index.html",revision:"7ff8143c15c1f9d756dfea464c69c3e2"},{url:"tags/火箭/index.html",revision:"5d48a9715e11517b912a14d8ba17f491"},{url:"tags/机器人/index.html",revision:"e239107c381b295da83e2654c61d3451"},{url:"tags/机器学习/index.html",revision:"d03914636290f63fd43fc8261430612a"},{url:"tags/计算机视觉/index.html",revision:"16054d43897be2130edf03d1a44ca7b5"},{url:"tags/记事/index.html",revision:"4139a58aea7685e0a84ccad5dbae83ac"},{url:"tags/技术/index.html",revision:"e7533e9dc57e62ab1432cf6d22e57667"},{url:"tags/科幻/index.html",revision:"a97d69367fc1e2704dcc4d36a3cc70af"},{url:"tags/扩展目标追踪/index.html",revision:"a1859aca77ab53b8d2cd21f8ce27a6a0"},{url:"tags/理论/index.html",revision:"5b21d07a55a80942715bdfe0a13abdbf"},{url:"tags/旅行/index.html",revision:"c966f4fdf112e1e3d1dab55449232609"},{url:"tags/猫/index.html",revision:"b664fe119241c6c0d3d53962fc8d8555"},{url:"tags/其他项目/index.html",revision:"859d7de06959a28e601356114d037276"},{url:"tags/前端/index.html",revision:"428c59f108e1e83223ca8a8eabc7ff05"},{url:"tags/入门/index.html",revision:"2cd44874a9808936bd99e2532b8c1d7d"},{url:"tags/软件/index.html",revision:"b3ba58304bcf39c0946c8302e314086b"},{url:"tags/设计/index.html",revision:"9186db00a02eacd4616f946ec4ae4d7e"},{url:"tags/摄影/index.html",revision:"7bc01001d1fd74169e50e8c4ae90469a"},{url:"tags/生活/index.html",revision:"a617a8bf6619ae5e4a7638e132e52609"},{url:"tags/视频/index.html",revision:"079785d6eb2c8c303c30af37591682b2"},{url:"tags/手机/index.html",revision:"d4e9158684d2ec7f27755003bb8a391b"},{url:"tags/书评/index.html",revision:"da2b153527f64f8e03948b4bfe156445"},{url:"tags/书影音/index.html",revision:"de9cf346f9c7ac980dcc6e45b90e4d41"},{url:"tags/数据可视化/index.html",revision:"9962d85f10c226a59ece9a49d2958c26"},{url:"tags/数据融合/index.html",revision:"6914906dc83540859d316baa120524c6"},{url:"tags/说明/index.html",revision:"ca3b2fbe957a9a9d59332d1139560b81"},{url:"tags/太空/index.html",revision:"ac1c6698d07d6f7328b1b4011490bc47"},{url:"tags/天文/index.html",revision:"334edc55849afb3a95f6e11c728ff4f7"},{url:"tags/吐槽/index.html",revision:"4cbbff3bdbdf9364b6d3041b8af0c0e8"},{url:"tags/推荐/index.html",revision:"5edda32be709236132b0308048059acf"},{url:"tags/网站/index.html",revision:"c2bbbf98f2ba70f9f65a6daf3a4fd49d"},{url:"tags/未完成/index.html",revision:"97dbc585553b4c831e1c20c53ba4897d"},{url:"tags/项目/index.html",revision:"6e720b9a7561a25fe96f70fadee79dbc"},{url:"tags/小程序/index.html",revision:"08830d5e0ae761666ce71d3448022458"},{url:"tags/效率/index.html",revision:"b0549040509fecdec9c91e07e71fc66a"},{url:"tags/意大利/index.html",revision:"d49d431d307683ff33c92e47aabcad7b"},{url:"tags/影评/index.html",revision:"5d6a4a0d5b4ee0608534b8af26853f26"},{url:"tags/友链/index.html",revision:"c113d7e0e8130aea8ac0cfe8a5f684aa"},{url:"tags/运动规划/index.html",revision:"f416ac10c7b75de7b5404be4b30ebec3"},{url:"tags/知识库/index.html",revision:"2fc9ccf5fbed36235af1642654e08130"},{url:"tags/智能家居/index.html",revision:"da805f83b49819155cd499d66ae87fd7"},{url:"tags/apt/index.html",revision:"c33149d23494345b5d88723834fab514"},{url:"tags/cg/index.html",revision:"5e2d03e9560725e970838d3afbc80214"},{url:"tags/hexo/index.html",revision:"c9b40cee82efdcebd607a45484f5ab02"},{url:"tags/index.html",revision:"9e2c611b33ba4a833f890e077bf71540"},{url:"tags/js/index.html",revision:"fab5cefd019d964ea0e47e26182125db"},{url:"tags/logo/index.html",revision:"cb13cafc948b278f5635c0bfc59c6767"},{url:"tags/mac/index.html",revision:"fa2adb68bebe8d0db4446408efdd5a93"},{url:"tags/numpy/index.html",revision:"a5b67a4c7754d8baa47b2e0ee11403db"},{url:"tags/python/index.html",revision:"db8aea716b5130ac9b95a32083fe977d"},{url:"tags/ros/index.html",revision:"bd6a5cc1fea82504cfe76b9348beb9f5"},{url:"tags/seaborn/index.html",revision:"9c03d7e4f2c1de7edf1e340908b45941"},{url:"tags/ui/index.html",revision:"ca5784c984b01d547de134e3d426895d"},{url:"tags/web/index.html",revision:"7077f9a4fbc5b34462cf662beab81a65"},{url:"things/index.html",revision:"2b80023afc2b10ff49841d9e4e016a97"},{url:"travel/index.html",revision:"3f607b98e615b0a8573fb6a9d0f7c65b"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")});