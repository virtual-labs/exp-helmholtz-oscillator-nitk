importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"53b8e50f782f63519dc05b76bd1d9c49","url":"assets/css/toast.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"1eb55c09b5d84050d497a664520d2255","url":"assets/js/assessment_v2.js"},{"revision":"31ecd36dd9f2e26b04f3795097445547","url":"assets/js/assessment.js"},{"revision":"5000362f34eee7667adb9dbd883f2217","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"18611dcf562fabba7870059505c2d17d","url":"contributors.html"},{"revision":"44c6e02364ff3fc4e485dae3315946e3","url":"feedback.html"},{"revision":"b3e6ac81ad2a04b8dbb1bdb3aa0357e3","url":"images/resonator.png"},{"revision":"d12cdc2c6ddceff36f7cc9d079a8101b","url":"images/setup.png"},{"revision":"77f7ec40293a7417a29a5b1b5b5f516d","url":"index.html"},{"revision":"1f6b8be619995f9657db6b4ad53b99e2","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"a1200fe2378ef2e1dac29bf160f3471b","url":"posttest.html"},{"revision":"53a1e2d2612c1fa67b92ab5347587307","url":"posttest.json"},{"revision":"ca906dda74c1171f4f6ef8c56a41715e","url":"pretest.html"},{"revision":"935e78ce5a23d22afeaa3961ca98256b","url":"pretest.json"},{"revision":"2baf220368d8bf5c344f00edf6691165","url":"procedure.html"},{"revision":"6e3e35bda31d825f5b7cd414e183cfde","url":"references.html"},{"revision":"df45ea7c84f979376e90f3d9e7a37414","url":"simulation.html"},{"revision":"6d3b9e53f0fa6d5b39233c8c0eb8dfc8","url":"simulation/css/general.css"},{"revision":"3e795b8e5867cd06a70b638f3d58d4fa","url":"simulation/css/jquery-ui.css"},{"revision":"f140da385e936d722d6b7533ba7fe535","url":"simulation/css/query.css"},{"revision":"8d28a39884e96da23f6bcc2035998ef7","url":"simulation/css/style.css"},{"revision":"6d5d54688e2db71375b9156a25bbb0ff","url":"simulation/images/1.png"},{"revision":"efb88e4bb5d1119bcb962fcfae16a40f","url":"simulation/images/2.png"},{"revision":"54ef713db74bb738276d7651bfb09aa7","url":"simulation/images/3.png"},{"revision":"8e3a78b1db55793f706aaeb760b5130b","url":"simulation/images/4.png"},{"revision":"1255ed414d1aee435f9c2a0f508aa02d","url":"simulation/images/apparatus.png"},{"revision":"0ebeead78e2a26366c9365202fad85fb","url":"simulation/images/bluecwdull.svg"},{"revision":"116ff0c83783b139a47ae193ba2cfe29","url":"simulation/images/ccdcamera1.png"},{"revision":"710f76692071b24261da67ca41c87bdf","url":"simulation/images/controls-wt.png"},{"revision":"44da5491e76fd4d0e65629f45f241e1e","url":"simulation/images/controls.png"},{"revision":"6cf46e57ab25e02917830ba095dd54c3","url":"simulation/images/help.svg"},{"revision":"46fbe2bacabd952fb96e2e9a3292e895","url":"simulation/images/help1.png"},{"revision":"343a6c55c14ad6d13d5e3767adae5702","url":"simulation/images/img1.jpg"},{"revision":"d58e3f46edd7b87151a3688b4127cb78","url":"simulation/images/img2.jpg"},{"revision":"6acf5797805fd062d1775eb3018398d1","url":"simulation/images/imgA.jpg"},{"revision":"994fcd5a5f7807833f04bfd523b744a6","url":"simulation/images/imgB 1.jpg"},{"revision":"cbb8d3be039da8d154368b1927647b4c","url":"simulation/images/imgB 2.jpg"},{"revision":"3a36d956009bff054842992ccb5d1f79","url":"simulation/images/imgB 3.jpg"},{"revision":"b53fb22ae62ad09c52528997c4a34f87","url":"simulation/images/imgB 4.jpg"},{"revision":"fe2d0ef4127f96b71c120bf9d4a2c8d0","url":"simulation/images/imgC 1.jpg"},{"revision":"c7809cd42109059661f2fb6997102048","url":"simulation/images/imgC 2.jpg"},{"revision":"fb4b21938f27f52745283085160fd5a7","url":"simulation/images/imgC 3.jpg"},{"revision":"d52f1473a5c4da88d6ab8ca6e09a3390","url":"simulation/images/imgC 4.jpg"},{"revision":"5c04e3d06401f7111ec234947faf4aa2","url":"simulation/images/imgD 1.jpg"},{"revision":"3f58576af6425637cbe1a584b50b769c","url":"simulation/images/imgD 2.jpg"},{"revision":"051ddbb7e4139e64199b295202346f92","url":"simulation/images/imgD 3.jpg"},{"revision":"11b7e5e375aaa644e9f5bef4d12ef110","url":"simulation/images/imgD 4.jpg"},{"revision":"051fbb733b7f4afa5820f232a6a91351","url":"simulation/images/imgE 1.jpg"},{"revision":"44be473c06bcda2da6e74eaf8e87232e","url":"simulation/images/imgE 2.jpg"},{"revision":"a7a383fdfe68d250dd6c4e4c3ee7aab3","url":"simulation/images/imgE 3.jpg"},{"revision":"eeabe7999fa051b7147c53e3272f9acc","url":"simulation/images/imgF.jpg"},{"revision":"14585792eacc76f8b467c3234ca1968c","url":"simulation/images/logo_nitk.png"},{"revision":"21f1a48c0819c739dad7b85718bb5ceb","url":"simulation/images/objective.png"},{"revision":"c8670bae2abfa80c48ba35a0a71be8e3","url":"simulation/images/result-wt.png"},{"revision":"b83ae2b606853d44fed7887c7da21eb3","url":"simulation/images/results.png"},{"revision":"02b3856455113dbe967bd95f04df94f7","url":"simulation/images/slider_handles.png"},{"revision":"a605d206cda0e7fd00ccd1d57c2ec380","url":"simulation/images/solution.png"},{"revision":"b7f459c34e6443007c6898dd860c3c3e","url":"simulation/images/stiff.png"},{"revision":"5187dca480082a77464b78592d2cc210","url":"simulation/images/vibrated.png"},{"revision":"b1f4071892f306d9750dd2e739d1f6ab","url":"simulation/index.html"},{"revision":"fac5ea4e9d603af31c159cfad189ed37","url":"simulation/js/jquery-3.6.0 copy.js"},{"revision":"84ca747eb5f076445ff836de49608628","url":"simulation/js/jquery-3.6.0.js"},{"revision":"5da2fa2a91f7059b60e7fd508be63d02","url":"simulation/js/jquery-ui copy.js"},{"revision":"50caf56fd10873097041b240dfbc3c41","url":"simulation/js/jquery-ui.css"},{"revision":"5da2fa2a91f7059b60e7fd508be63d02","url":"simulation/js/jquery-ui.js"},{"revision":"08a481084856867d371586cbf8e835ef","url":"simulation/js/jquery.ui.touch-punch copy.js"},{"revision":"08a481084856867d371586cbf8e835ef","url":"simulation/js/jquery.ui.touch-punch.js"},{"revision":"9b9e5df5ef16f8fdd3e65c14e2149f1f","url":"simulation/js/jquery.ui.touch-punch.min copy.js"},{"revision":"9b9e5df5ef16f8fdd3e65c14e2149f1f","url":"simulation/js/jquery.ui.touch-punch.min.js"},{"revision":"13d4c8038c948ad68c0e3b578a11cefb","url":"simulation/js/script.js"},{"revision":"aaba7c5586d67f08cd4641a357e79d3f","url":"theory.html"},{"revision":"16ccc61ee3d67bd917b9c0f28d95c0cc","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );