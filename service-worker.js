if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let s={};const b=e=>d(e,c),f={module:{uri:c},exports:s,require:b};i[c]=Promise.all(a.map((e=>f[e]||b(e)))).then((e=>(r(...e),s)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"bad12e18f7dafc93200013057546c9a6"},{url:"archives/1970/01/index.html",revision:"4bf53219f8bb3f05aa72014f69869ac8"},{url:"archives/1970/index.html",revision:"2da0cfc06ac21e4fb5e064fdbf55cc24"},{url:"archives/2018/09/index.html",revision:"b83ef6ca9bfafebed19e8a9476d7cafc"},{url:"archives/2018/index.html",revision:"4563b8096177d883928886760b7ef10b"},{url:"archives/2019/08/index.html",revision:"cd0d8a63c692da5b5084fa59e3f29c6e"},{url:"archives/2019/10/index.html",revision:"e16cdada147985c47d4dc54032305998"},{url:"archives/2019/index.html",revision:"6e54341a9a694cefe5b41d9fb46c28a5"},{url:"archives/2020/01/index.html",revision:"932e8a91f9808ed4ebaaeb0af7b0f2ea"},{url:"archives/2020/02/index.html",revision:"c812bca8ca22ec7655745869df4afa8e"},{url:"archives/2020/03/index.html",revision:"39d9c074042f317058c2c16f0fc8e444"},{url:"archives/2020/04/index.html",revision:"fcd5536ff2a101a4dc8f9651dd8e84b8"},{url:"archives/2020/05/index.html",revision:"e0639a41a83e498c08779c62971f6a78"},{url:"archives/2020/07/index.html",revision:"fcadbc452763d705f0591c192d769792"},{url:"archives/2020/10/index.html",revision:"e9e66423219efc4a9a17db76fc604f57"},{url:"archives/2020/index.html",revision:"d31912ebd22711e653adbf1b03a88779"},{url:"archives/2020/page/2/index.html",revision:"93cbe19aec159b8deed0db2707581ef6"},{url:"archives/2021/05/index.html",revision:"5387997838f3b4abcebef5937bf5fe64"},{url:"archives/2021/06/index.html",revision:"4e062cf981cd8a2f83a0ee82bef3f765"},{url:"archives/2021/07/index.html",revision:"d3c84eb362c026039a72293d63fc136a"},{url:"archives/2021/index.html",revision:"0df0d345768e0d378bcfdea673725d5b"},{url:"archives/2022/03/index.html",revision:"05920df4ee74f4ba15e312259e5d3db3"},{url:"archives/2022/04/index.html",revision:"a68c3147e0bdfaed37d220f79fcc0712"},{url:"archives/2022/05/index.html",revision:"3d362f49913652246b964b057bd0b05b"},{url:"archives/2022/index.html",revision:"9f8e5fdc66729634f1ccae710f6a3d77"},{url:"archives/index.html",revision:"96e60ee953792faab1cc2ec96a097928"},{url:"archives/page/2/index.html",revision:"6e48628aba8689a10c9be11bfa60b870"},{url:"archives/page/3/index.html",revision:"90ce9f3dc28c80484b6bd46483ade9e1"},{url:"archives/page/4/index.html",revision:"6ccd18d2a2e7ae91860bd7108390ff2b"},{url:"archives/page/5/index.html",revision:"7528b422b8e7b0c8e12ef3b9792e96be"},{url:"assets/css/APlayer.min.css",revision:"e1fbeb84b889055ca44f8cfbe96111b7"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/技术/计算机系统/index.html",revision:"219974a17abc0a08fc6583e968d4d677"},{url:"categories/技术/认知机器/index.html",revision:"07f49fc71e19c6f3a9313fcaebb74dd3"},{url:"categories/技术/图形学/index.html",revision:"60bfe8c86b5c8c2211f343ab96f7b993"},{url:"categories/技术/小程序/index.html",revision:"fb0e04f733a24081bfc4dc3154caf44e"},{url:"categories/技术/智能家居/index.html",revision:"09840f68c3934a86e4e4f2fda4ac1a26"},{url:"categories/技术/index.html",revision:"53db84b4fddd56557ba5f2c6114fd8bc"},{url:"categories/技术/page/2/index.html",revision:"3bf60edf464ad886640dd87dad823107"},{url:"categories/技术/python/index.html",revision:"94b828803cbeba608b4b2ec659dec507"},{url:"categories/技术/web/index.html",revision:"8e170b9a23917c385a997137c9e20c1d"},{url:"categories/生活/记事/index.html",revision:"206db9fc63e482158d73f3c3f204d8c7"},{url:"categories/生活/旅行/index.html",revision:"99f84a11cf02c117180ad0413d234207"},{url:"categories/生活/软件/index.html",revision:"7920a0fef7c9ea65cbc011f04b000722"},{url:"categories/生活/影评/index.html",revision:"d33dc5fdae2ccc73958b15a4bba36282"},{url:"categories/生活/index.html",revision:"d4af25e463c62302bcb6786a13dc62b4"},{url:"categories/生活/page/2/index.html",revision:"a3367ef3f294a15d853078cd13e4fc49"},{url:"categories/项目/其他项目/index.html",revision:"59ccb280fc5d90b738b648db824edda3"},{url:"categories/项目/认知机器/index.html",revision:"f502d68092fb0b2fca21cd44e76ab40a"},{url:"categories/项目/应用开发/index.html",revision:"624323931c7872f0e40d0805419046f4"},{url:"categories/项目/index.html",revision:"177f9da859619bb7fa05d71cb9f70f87"},{url:"categories/index.html",revision:"986361416e7d129b21716d9b50527d01"},{url:"channel/index.html",revision:"35d9ffed5f43b30d04fe6cc282d591db"},{url:"copyright/index.html",revision:"fda18f7e16f26387d36099bc89f21805"},{url:"css/fcircle-beta.css",revision:"2b6d3dcdcdb2e9a5b0fe40c2c6062b41"},{url:"css/fm-style.css",revision:"241f1bff47859e20f56eb49360f01a3e"},{url:"css/index.css",revision:"9a352f7a1a8336c94a0eb605c97811fe"},{url:"css/sponsor.css",revision:"dbae057839cfcb4d1812cd24d26c3c46"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/weibo.css",revision:"b74aba6ce1bb3fbaf7925f59e339a894"},{url:"douban/index.html",revision:"20770a2f5d1eaca56dc9328e8f0e18d0"},{url:"friends/index.html",revision:"e052ef5071956f5ce2a7a92f1dc04bda"},{url:"gallery/index.html",revision:"94d93b58596ec1deaeca1d1513135663"},{url:"gallery/life/index.html",revision:"c890450cca12bb5a82e6a1f4c01e6fce"},{url:"gallery/photography/index.html",revision:"74eca5ffd8e0813a2c748ffa358ecb65"},{url:"gallery/photos/index.html",revision:"03eb5bbe49d5dcbaf3080253a3b343dd"},{url:"gallery/profile/index.html",revision:"90d855091f7f3e39e7a4b171e5f24d84"},{url:"gallery/qingdao/index.html",revision:"02426e9a7e394f1f4e20bef33b31ec31"},{url:"gallery/sketching/index.html",revision:"9d8990b2dc5778ab355266eee82fb600"},{url:"gallery/sky/index.html",revision:"eb6c66b4a102c8d9a8835557fe49d721"},{url:"gallery/street/index.html",revision:"30c860cdb929c47d7849372583cc83f1"},{url:"gallery/transcribe/index.html",revision:"ae460ddb5096becc8c37ea6ddffd80db"},{url:"home/index.html",revision:"03257c76ff4a334160d9e8b8b0189152"},{url:"img/bg/bg-1.jpg",revision:"620ca5ddd7a7e635d74b82940d45fe1f"},{url:"img/bg/bg-2.jpg",revision:"ff9f3370b41e84638a994126e1ee4b84"},{url:"img/bg/bg-3.jpg",revision:"61580b62482ddb5ea08d9f0f40eba1ad"},{url:"img/bg/bg-4.jpg",revision:"7b6e9ed899b968ac308d5ba5f02ac2ce"},{url:"img/bg/bg-5.jpg",revision:"5bb570cdd878a04090322f66e74a890b"},{url:"img/cube-logo.png",revision:"ccc146bcca3d8e120b9a1e59836f844b"},{url:"img/curioso/1.jpg",revision:"39b8a02eb9d549334882ab1e7b402d4f"},{url:"img/curioso/11.jpg",revision:"7612499298be387532036ad5ab219070"},{url:"img/curioso/12.jpg",revision:"6e4111d657eab1075d078dc0a13414a6"},{url:"img/curioso/2.jpg",revision:"c1aa8009c4e4e0b8e87d63efb2cb3d21"},{url:"img/curioso/3.jpg",revision:"6a579909fa2a109bb90f49961210e1a6"},{url:"img/kp-logo.png",revision:"44f26c12e39d23907b2813c0215a4787"},{url:"img/logo.png",revision:"616e410095b1e73847325d36494e5846"},{url:"img/pwa/icon-128x128.png",revision:"086745e12ea25d13ac73138b7d724e30"},{url:"img/pwa/icon-144x144.png",revision:"f7aa17eebb3b695eeb875635e60db943"},{url:"img/pwa/icon-152x152.png",revision:"7718178280fbb5854ebc4fe511f133a5"},{url:"img/pwa/icon-192x192.png",revision:"71c8925cf8209bb2c1d2065b11b9e9fd"},{url:"img/pwa/icon-256x256.png",revision:"6f6ea478cf51d1e96cb73c704ee38d31"},{url:"img/pwa/icon-384x384.png",revision:"40329db91208f72fe7c9a53d06a3128f"},{url:"img/pwa/icon-512x512.png",revision:"beaed897d6c4796e5686afa275a6742b"},{url:"img/pwa/icon-72x72.png",revision:"84f082108a7096e06e841ca342dcf100"},{url:"img/pwa/icon-96x96.png",revision:"7d1fe60d9e5ecdd9bdc90d5f46ac564f"},{url:"img/store.png",revision:"58b1dabfa708438a19dcdf23ad52044b"},{url:"index.html",revision:"c65ef767d04effed10ab43bcd5874965"},{url:"js/bg-music.js",revision:"cfa6c928537bc3c0a9af03fb9a95498c"},{url:"js/main.js",revision:"11adc8803ee9b37568c0709eace2662f"},{url:"js/search/algolia.js",revision:"ba3d95e25974f8e41c42023b72a0bb4f"},{url:"js/search/local-search.js",revision:"656225e010a039446b846893d54891ba"},{url:"js/tw_cn.js",revision:"0310e94ad716c794eadcb0fddfab0a2a"},{url:"js/utils.js",revision:"269e9db5c04d551f7c32339357f608dc"},{url:"message/index.html",revision:"0e2a04350be95f36cf3919bf772914ce"},{url:"page/2/index.html",revision:"c02bb1c27aaba8fcc5518bbe7b7b3b8e"},{url:"page/3/index.html",revision:"23a5861d588a1bd2d077ecac698073fe"},{url:"page/4/index.html",revision:"4ff9a0864566b7d2482f455bfc0f2a2c"},{url:"page/5/index.html",revision:"582b52f2a7f764c15a37821c742176ba"},{url:"page/6/index.html",revision:"59c14542b036c86b991d0a356dc24d2e"},{url:"page/7/index.html",revision:"d829cb3eeb3b825baa75b1088e4103ff"},{url:"page/8/index.html",revision:"5f618ef1133928cfdb862b872799a5e8"},{url:"page/9/index.html",revision:"99f20fa8cf6343c8c4f376f0664abf74"},{url:"posts/12331/index.html",revision:"cd543527fecbea7f7c4d0d2ebd881ac8"},{url:"posts/12591/index.html",revision:"518ce3958feb11e43b5f9b44001dc713"},{url:"posts/14800/index.html",revision:"7a23b2e36891b8f14da942b607d4b596"},{url:"posts/16907/index.html",revision:"7a81dfd1abbdf78f8fd83dfbcc427c4b"},{url:"posts/1941/index.html",revision:"1687c5d7cd5fef3be30d41284e4b3aad"},{url:"posts/19657/index.html",revision:"809a84b7e76d6841289de5e99ec70fd5"},{url:"posts/19980/index.html",revision:"f74371dfa11386b86f4d30bd59222aed"},{url:"posts/240/index.html",revision:"f4eb5a929a4479c89996985946f71cce"},{url:"posts/24491/index.html",revision:"5fa28e0e034d79271f85e27dea5aac52"},{url:"posts/25946/index.html",revision:"dc9e1562ff6d8e961770cc3001c4200b"},{url:"posts/25971/index.html",revision:"fb01fa72f8414f77950ddc9034c4bae2"},{url:"posts/26811/index.html",revision:"54bc16c73ee617348056333b2bf0996c"},{url:"posts/27207/index.html",revision:"9a9ed243546eb9a815cb1a7571ab51cc"},{url:"posts/29555/index.html",revision:"97edb87823441a246a1d1d31860fe9c3"},{url:"posts/30954/index.html",revision:"5155441115703a7c6be20632a8c6d3cf"},{url:"posts/31156/index.html",revision:"5809cf4ce9b83745edd552d7254da543"},{url:"posts/31211/index.html",revision:"6fb792e7ecaea82702ef536031c17f85"},{url:"posts/34388/index.html",revision:"95373f10d8d77fa0f6d0dbb1cc7d55cb"},{url:"posts/34877/index.html",revision:"77c836c8d667e8e8ff30ce4be904c67a"},{url:"posts/34937/index.html",revision:"c96db180042f3f53f627b7a72e3db3a1"},{url:"posts/35289/index.html",revision:"dd902f8127e60a301865348d70572531"},{url:"posts/36979/index.html",revision:"eceea50456a8b84f72057fd8284c64c6"},{url:"posts/37419/index.html",revision:"7a724900592db974c2dbb37e53bcddf7"},{url:"posts/37805/index.html",revision:"183a57d938d2f5ba663b2efe7cf4a978"},{url:"posts/3829/index.html",revision:"0e36f860a1ea77b7998e389449a52d12"},{url:"posts/39656/index.html",revision:"ce3f832d0b135c11ba085781a8b07529"},{url:"posts/41204/index.html",revision:"9f39b77d71787fb9be59f0a575e4400a"},{url:"posts/43039/index.html",revision:"0a6c0fb9f6f5d51625e618bbb8692ef0"},{url:"posts/51440/index.html",revision:"2b9a2fa276bb1aa1e63974cfc392f12e"},{url:"posts/525/index.html",revision:"47b750fed2a17916593337a5793615f4"},{url:"posts/53467/index.html",revision:"9d55e744be6051747f7b33b70ede2a87"},{url:"posts/53493/index.html",revision:"dfcef0603803c42d74bed816d562af7e"},{url:"posts/58505/index.html",revision:"9360995244a8141fe9f06216f9812891"},{url:"posts/59487/index.html",revision:"aeb3b9f9bfe78010d73cc1aad4904343"},{url:"posts/60961/index.html",revision:"77137cfad682271326873378d01143f6"},{url:"posts/60986/index.html",revision:"fa5c7e3dc55f774fea0f785c83d5ff32"},{url:"posts/6129/index.html",revision:"f469d67f7136154000df95f665a4365d"},{url:"posts/61713/index.html",revision:"b0ca8b37f806a1cbf7f1ff3535db8800"},{url:"posts/62736/index.html",revision:"04361160286025c618a829cf28eb801d"},{url:"posts/63260/index.html",revision:"f5ba25ddba9b5b56d02a02c10b86041d"},{url:"posts/771/index.html",revision:"109c0d9732a16146957faf1558ed839a"},{url:"profile/index.html",revision:"a7ac1b9de0740b8f69abca5649a8713e"},{url:"projects/index.html",revision:"b051a835cc0a9d9afb94b5cd4fd225ba"},{url:"sponsorship/index.html",revision:"0b01e505f581b65343e3d2a82ff103ba"},{url:"store/index.html",revision:"fc760ad13fb4da480b52b3f60d1227d9"},{url:"sw.js",revision:"293a071e394a07345012edf2909323cf"},{url:"tags/3d/index.html",revision:"5303f8db037876e07fcfd5e637fb8569"},{url:"tags/包管理系统/index.html",revision:"56c4344b87f41fcec84e3f607a233040"},{url:"tags/笔记/index.html",revision:"c2b3aba43de6b84da9bad65858249557"},{url:"tags/笔记/page/2/index.html",revision:"632a9c76e021c7be1537102cea83d838"},{url:"tags/传感器/index.html",revision:"07c0450731330213b36543b3c4023bcb"},{url:"tags/德国/index.html",revision:"f5377b5a7809119f33c1c9c4570154ac"},{url:"tags/电影/index.html",revision:"8eb6e78a86b15f8cc7a5f9ca4be9d74b"},{url:"tags/动画/index.html",revision:"514c494cc417f2744d4f17370f6e46b2"},{url:"tags/读书/index.html",revision:"cb197d6cefebd97f3e3100e01f03bd5d"},{url:"tags/番茄工作法/index.html",revision:"f650c30b154dfeb191b507154629d643"},{url:"tags/浮生六记/index.html",revision:"72c223e39b52464de4c13ac350fd3730"},{url:"tags/观点/index.html",revision:"0cc38a45f1bad672adb5c072456e491c"},{url:"tags/鸿蒙/index.html",revision:"170c1db9c9699d0caebcbcbf605ced94"},{url:"tags/火箭/index.html",revision:"6bf39e4ceb908556ecc609f572b4bd71"},{url:"tags/机器人/index.html",revision:"abc3c48b233f8ea080a9bf5cd7932969"},{url:"tags/机器学习/index.html",revision:"74e5bb4d72da217aaec8e7c450f1edde"},{url:"tags/计算机视觉/index.html",revision:"505e849afbb31180bc259fa262eb88b4"},{url:"tags/记事/index.html",revision:"bdef967b3da7456b8637c1d1ca6e4746"},{url:"tags/技术/index.html",revision:"a2d97d5ad9bd7cc40ef70ef0006e5d14"},{url:"tags/科幻/index.html",revision:"0abc46acf7a84d241b5540f2d89b15c0"},{url:"tags/扩展目标追踪/index.html",revision:"ba26ea8212f4d3d005c31c50f4b60cc5"},{url:"tags/理论/index.html",revision:"1ef8592a55210f4aa243e270687a6580"},{url:"tags/旅行/index.html",revision:"a9b7f93b1ade42bf8e9aef36a1271ddc"},{url:"tags/猫/index.html",revision:"67757636cf836630a94e5ca12b540bc3"},{url:"tags/其他项目/index.html",revision:"6150566322f0dd9dfe9b17e7f481ab63"},{url:"tags/前端/index.html",revision:"8fc4e57da7dea285eb0661383703f115"},{url:"tags/入门/index.html",revision:"1927cd3df736bf72aeb6c78f0b6cb237"},{url:"tags/软件/index.html",revision:"45337f35d19d4f076589018c85eafa3c"},{url:"tags/设计/index.html",revision:"1fc23968674d1bab8951508ff3afc2fe"},{url:"tags/摄影/index.html",revision:"f93e4aabb2bcc16c0408631388fdf346"},{url:"tags/生活/index.html",revision:"c71a5ad4a66220b8c276025ef5d2c13f"},{url:"tags/视频/index.html",revision:"ecb4b3d6041463cf6f54893c4197b8d0"},{url:"tags/手机/index.html",revision:"77d14eb529a98909855a5e7dba86fcef"},{url:"tags/书评/index.html",revision:"08bce3c3d9bd4986b84fd205b4c9591e"},{url:"tags/书影音/index.html",revision:"93ab5beb59406c71f04babc74bd54cee"},{url:"tags/数据可视化/index.html",revision:"afdc12f68040f5344242ef58943ef676"},{url:"tags/数据融合/index.html",revision:"4d1d49f45d65f48c9a2451ba3d17dbd4"},{url:"tags/说明/index.html",revision:"15b208bfdd87f36979e4cbbc2232ffb3"},{url:"tags/太空/index.html",revision:"f145f164fcc1388caeabc56efa4ce508"},{url:"tags/天文/index.html",revision:"a1f553fa18be35afa03ff8c8ebc522ca"},{url:"tags/吐槽/index.html",revision:"a6825018d93c78138dd8e12e8b662bd8"},{url:"tags/推荐/index.html",revision:"1083361f057ce65e8817215ac9033659"},{url:"tags/网站/index.html",revision:"2588ec6f83a6092b2bc003235e2decbf"},{url:"tags/未完成/index.html",revision:"1eeb066234b3febddbb3e2f75c02bb79"},{url:"tags/项目/index.html",revision:"a0e28aab065ce7a63a0bcbbf20e05825"},{url:"tags/小程序/index.html",revision:"d589bb67da711ac2e00f8b5f06512c6a"},{url:"tags/效率/index.html",revision:"31587860d73f558eb8fec98945f07bab"},{url:"tags/意大利/index.html",revision:"e9d10331b3ccf585b60ab5099bf4bf34"},{url:"tags/影评/index.html",revision:"87e4234114f6e52bbd8c694909e7d383"},{url:"tags/友链/index.html",revision:"95f22328732c292151114e252dc5cb38"},{url:"tags/运动规划/index.html",revision:"8530052ec0893301650e57f77e57bfb3"},{url:"tags/知识库/index.html",revision:"17dfcc6fc6730721bcabbacf31a65212"},{url:"tags/智能家居/index.html",revision:"def04256adeff00126741d91ffd83a4f"},{url:"tags/apt/index.html",revision:"4f930e655700fef430386906c4716be6"},{url:"tags/cg/index.html",revision:"b02925fadf6841759f04ad966ea493f9"},{url:"tags/hexo/index.html",revision:"d3bf616a30f094b65f8c5ded5b8ff711"},{url:"tags/index.html",revision:"3fd17c65b4d9c55e6d179167984d6ea1"},{url:"tags/js/index.html",revision:"40307fe4b32c6c0a0abeeac7dfb96a20"},{url:"tags/logo/index.html",revision:"b70e00f7ea344b7bb64d076bcb83b678"},{url:"tags/mac/index.html",revision:"4d55444dd08544a97442f6feb4807922"},{url:"tags/numpy/index.html",revision:"a8cb5c0b67cd0bf27dfed6f7ae632c25"},{url:"tags/python/index.html",revision:"048bfea14de031fcfc69f2f7981010f5"},{url:"tags/ros/index.html",revision:"d9b51cf26b30c399db383400638f7233"},{url:"tags/seaborn/index.html",revision:"fd60036504301b1d5dd2a0756069aebf"},{url:"tags/ui/index.html",revision:"b5e6759d4b3832ce36414eb5bdca8984"},{url:"tags/web/index.html",revision:"33175276270643d7aaa2d1a65a59c07a"},{url:"things/index.html",revision:"972fb3f53343d955ff08516e32dcdbfb"},{url:"travel/index.html",revision:"7908e1e771c47d498d35bcf4adedc16f"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
