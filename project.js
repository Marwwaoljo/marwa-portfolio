/* =========================================
   PROJECT JS
   Safari + Chrome Safe Version
========================================= */

"use strict";


/* =========================================
   START APPLICATION
========================================= */


    function initProjectPage() {

        console.log("PROJECT JS STARTED");


        /* =========================================
           PROJECTS DATA
        ========================================= */

        var projects = {

            nexo: {

                category: "E-COMMERCE",

                title: "NEXO",

                subtitle: "Mobile Store",

                video:
                    "https://res.cloudinary.com/jc28wib9/video/upload/v1787762153/nexo_qcud5t.mp4",

                description:
                    "متجر إلكتروني عصري لبيع الأجهزة والهواتف بتجربة مستخدم حديثة وتصميم متجاوب.",

                about:
                    "NEXO هو متجر إلكتروني متخصص في الأجهزة والهواتف، تم تصميمه بأسلوب عصري يركز على إبراز المنتجات وتسهيل عملية التصفح والشراء.",

                role:
                    "تصميم وتطوير الواجهة الأمامية، بناء تجربة المستخدم، تنظيم المنتجات وإضافة العناصر التفاعلية وتجهيز التصميم للجوال.",

                technologies: [
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "Firebase",
                    "Responsive Design"
                ],

                features: [
                    "تصميم متجاوب",
                    "صفحة منتجات",
                    "سلة مشتريات",
                    "قائمة مفضلة",
                    "فلترة المنتجات",
                    "ترتيب المنتجات"
                ]

            },


            roqan: {

                category: "COFFEE BRAND",

                title: "Roqan",

                subtitle: "Coffee",

                video:
                    "https://res.cloudinary.com/jc28wib9/video/upload/v1787762155/roqan_vycy0r.mp4",

                description:
                    "تجربة رقمية سينمائية لعلامة قهوة فاخرة تجمع بين الهوية السعودية والتصميم العصري.",

                about:
                    "تم تصميم الموقع بأسلوب بصري فاخر يعتمد على الألوان الداكنة والإضاءة الدافئة والحركة لإيصال شخصية العلامة التجارية.",

                role:
                    "تصميم وتطوير الواجهة، بناء التجربة البصرية، إضافة الحركات والتفاعلات وتجهيز التصميم لمختلف الشاشات.",

                technologies: [
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "Animation",
                    "Responsive Design"
                ],

                features: [
                    "Hero سينمائي",
                    "حركات انتقالية",
                    "تصميم فاخر",
                    "تجربة تفاعلية",
                    "تصميم متجاوب"
                ]

            },


            burger: {

                category: "RESTAURANT",

                title: "Hero",

                subtitle: "Burger",

                video:
                    "https://res.cloudinary.com/jc28wib9/video/upload/v1787762150/burger_txskf0.mp4",

                description:
                    "موقع مطعم تفاعلي بتجربة بصرية جذابة يركز على إبراز المنتجات وتشجيع المستخدم على الطلب.",

                about:
                    "تم تصميم الموقع ليقدم تجربة ممتعة منذ اللحظة الأولى، مع التركيز على الصور والحركة وسهولة الوصول إلى المنتجات.",

                role:
                    "تصميم وتطوير الواجهة، بناء أقسام المنتجات، إضافة الحركات والتفاعلات وتجهيز الموقع للجوال.",

                technologies: [
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "Animation",
                    "Responsive Design"
                ],

                features: [
                    "Hero تفاعلي",
                    "عرض المنتجات",
                    "Animations",
                    "تصميم للجوال",
                    "واجهة سهلة الاستخدام"
                ]

            },


            abaya: {

                category: "FASHION E-COMMERCE",

                title: "rahil",

                subtitle: "Abaya",

                video:
                    "https://res.cloudinary.com/jc28wib9/video/upload/v1787762411/abaya_vkzcuw.mp4",

                description:
                    "تجربة متجر إلكتروني لعلامة أزياء خليجية فاخرة تجمع بين البساطة والفخامة.",

                about:
                    "تم تصميم التجربة لتعكس الفخامة والبساطة، مع إبراز تفاصيل المنتجات وتسهيل عملية تصفح العبايات.",

                role:
                    "تصميم الواجهة، تجربة المستخدم، صفحات المنتجات، التفاعلات وتجهيز الموقع لمختلف الشاشات.",

                technologies: [
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "E-Commerce",
                    "Responsive Design"
                ],

                features: [
                    "صفحة منتجات",
                    "صور متعددة",
                    "Wishlist",
                    "Cart",
                    "فلترة المنتجات",
                    "تصميم متجاوب"
                ]

            }

        };


        /* =========================================
           GET PROJECT PAGE
        ========================================= */

        var page =
            document.getElementById("projectPage");


        if (!page) {

            console.error(
                "ERROR: #projectPage NOT FOUND"
            );

            return;
        }


        console.log(
            "projectPage FOUND"
        );


        /* =========================================
           GET PROJECT NAME
           Safari Safe
        ========================================= */
/* =========================================
   GET PROJECT NAME (Safari Safe)
========================================= */
var projectName = "nexo";
var urlParams = new URLSearchParams(window.location.search);

if (urlParams.has("project")) {
    projectName = urlParams.get("project").toLowerCase().trim();
}
}

        /* =========================================
           FIND PROJECT
        ========================================= */

        var project =
            projects[projectName];


        /* =========================================
           PROJECT NOT FOUND
        ========================================= */

        if (!project) {

            console.warn(
                "PROJECT NOT FOUND:",
                projectName
            );


            page.innerHTML =

                '<section class="project-detail">' +

                    '<div class="project-detail-header">' +

                        '<span class="project-category-detail">' +

                            'PROJECT NOT FOUND' +

                        '</span>' +

                        '<h1>' +

                            'المشروع' +

                            '<span>' +

                                'غير موجود' +

                            '</span>' +

                        '</h1>' +

                        '<p class="project-description">' +

                            'عذرًا، لم يتم العثور على المشروع المطلوب.' +

                        '</p>' +

                        '<a href="./index.html#projects" class="next-project">' +

                            'العودة للمشاريع' +

                        '</a>' +

                    '</div>' +

                '</section>';

            return;

        }

        /* =========================================
           DOCUMENT TITLE
        ========================================= */

        document.title =
            project.title +
            " " +
            project.subtitle +
            " | Marwa Hussin";


        /* =========================================
           TECHNOLOGIES
        ========================================= */

        var technologiesHTML = "";


        for (
            var i = 0;
            i < project.technologies.length;
            i++
        ) {

            technologiesHTML +=

                '<span>' +

                    project.technologies[i] +

                '</span>';

        }


        /* =========================================
           FEATURES
        ========================================= */

        var featuresHTML = "";


        for (
            var j = 0;
            j < project.features.length;
            j++
        ) {

            featuresHTML +=

                '<div class="project-feature">' +

                    project.features[j] +

                '</div>';

        }


        /* =========================================
           CREATE PROJECT HTML
        ========================================= */

        page.innerHTML =

            '<section class="project-detail">' +


                /* HEADER */

                '<div class="project-detail-header">' +

                    '<span class="project-category-detail">' +

                        project.category +

                    '</span>' +


                    '<h1>' +

                        project.title +

                        '<span>' +

                            project.subtitle +

                        '</span>' +

                    '</h1>' +


                    '<p class="project-description">' +

                        project.description +

                    '</p>' +

                '</div>' +


                /* VIDEO */

                '<div class="project-video-wrapper">' +

                    '<video ' +

                        'class="project-main-video" ' +

                        'autoplay ' +

                        'muted ' +

                        'loop ' +

                        'playsinline ' +

                        'webkit-playsinline ' +

                        'controls ' +

                        'preload="metadata" ' +

                    '>' +

                        '<source ' +

                            'src="' +

                                project.video +

                            '" ' +

                            'type="video/mp4"' +

                        '>' +

                        'متصفحك لا يدعم تشغيل الفيديو.' +

                    '</video>' +

                '</div>' +


                /* INFORMATION */

                '<div class="project-info-grid">' +


                    /* ABOUT */

                    '<div class="project-info-block">' +

                        '<div class="project-number">' +

                            '01 — PROJECT' +

                        '</div>' +

                        '<h2>' +

                            'عن المشروع' +

                        '</h2>' +

                        '<p>' +

                            project.about +

                        '</p>' +

                    '</div>' +


                    /* ROLE */

                    '<div class="project-info-block">' +

                        '<div class="project-number">' +

                            '02 — MY ROLE' +

                        '</div>' +

                        '<h2>' +

                            'دوري في المشروع' +

                        '</h2>' +

                        '<p>' +

                            project.role +

                        '</p>' +

                    '</div>' +


                    /* TECHNOLOGIES */

                    '<div class="project-info-block">' +

                        '<div class="project-number">' +

                            '03 — TECHNOLOGIES' +

                        '</div>' +

                        '<h2>' +

                            'التقنيات' +

                        '</h2>' +

                        '<div class="project-technologies">' +

                            technologiesHTML +

                        '</div>' +

                    '</div>' +


                    /* FEATURES */

                    '<div class="project-info-block">' +

                        '<div class="project-number">' +

                            '04 — FEATURES' +

                        '</div>' +

                        '<h2>' +

                            'المميزات' +

                        '</h2>' +

                        '<div class="project-features">' +

                            featuresHTML +

                        '</div>' +

                    '</div>' +


                '</div>' +


                /* CONTACT */

                '<div class="project-bottom">' +

                    '<div>' +

                        '<div class="project-number">' +

                            'HAVE A PROJECT?' +

                        '</div>' +

                        '<h2>' +

                            'مشروعك القادم؟ ' +

                            '<span>' +

                                'لنبدأ.' +

                            '</span>' +

                        '</h2>' +

                    '</div>' +


                    '<a ' +

                        'href="./index.html#contact" ' +

                        'class="next-project"' +

                    '>' +

                        'تواصل معي ' +

                        '<span>↗</span>' +

                    '</a>' +

                '</div>' +


            '</section>';


        /* =========================================
           CHECK PROJECT DISPLAY
        ========================================= */

        console.log(
            "PROJECT HTML INSERTED"
        );


        console.log(
            "PROJECT PAGE CONTENT:",
            page.innerHTML.length
        );


        /* =========================================
           GET VIDEO
        ========================================= */

        var video =
            page.querySelector(
                ".project-main-video"
            );


        if (!video) {

            console.warn(
                "VIDEO NOT FOUND"
            );

            return;

        }


        /* =========================================
           SAFARI VIDEO SETTINGS
        ========================================= */

        video.muted = true;

        video.defaultMuted = true;

        video.autoplay = true;

        video.loop = true;

        video.playsInline = true;


        try {

            video.setAttribute(
                "muted",
                ""
            );

            video.setAttribute(
                "autoplay",
                ""
            );

            video.setAttribute(
                "loop",
                ""
            );

            video.setAttribute(
                "playsinline",
                ""
            );

            video.setAttribute(
                "webkit-playsinline",
                ""
            );

        } catch (error) {

            console.warn(
                "VIDEO ATTRIBUTE ERROR:",
                error
            );

        }


        /* =========================================
           VIDEO LOAD
        ========================================= */

        video.load();


        /* =========================================
           VIDEO EVENTS
        ========================================= */

        video.addEventListener(
            "loadedmetadata",
            function () {

                console.log(
                    "VIDEO METADATA LOADED"
                );

            }
        );


        video.addEventListener(
            "canplay",
            function () {

                console.log(
                    "VIDEO CAN PLAY"
                );

            }
        );


        video.addEventListener(
            "error",
            function () {

                console.error(
                    "VIDEO ERROR:",
                    video.error
                );

            }
        );


        /* =========================================
           AUTOPLAY
        ========================================= */

        try {

            var playPromise =
                video.play();


            if (
                playPromise &&
                typeof playPromise.then === "function"
            ) {

                playPromise
                    .then(function () {

                        console.log(
                            "VIDEO PLAYING"
                        );

                    })
                    .catch(function (error) {

                        console.warn(
                            "AUTOPLAY BLOCKED:",
                            error
                        );

                    });

            }

        } catch (error) {

            console.warn(
                "VIDEO PLAY ERROR:",
                error
            );

        }


        /* =========================================
           SAFARI PAGESHOW
        ========================================= */

        window.addEventListener(
            "pageshow",
            function () {

                console.log(
                    "SAFARI PAGESHOW:",
                    projectName
                );


                if (video) {

                    try {

                        video.load();

                        var retry =
                            video.play();


                        if (
                            retry &&
                            typeof retry.catch === "function"
                        ) {

                            retry.catch(
                                function () {}
                            );

                        }

                    } catch (error) {

                        console.warn(
                            "SAFARI VIDEO RETRY ERROR:",
                            error
                        );

                    }

                }

            }
        );


        /* =========================================
           FINISHED
        ========================================= */

        console.log(
            "================================="
        );

        console.log(
            "PROJECT LOADED SUCCESSFULLY"
        );

        console.log(
            "PROJECT:",
            projectName
        );

        console.log(
            "TITLE:",
            project.title
        );

        console.log(
            "================================="
        );

    }


    /* =========================================
       DOM READY
    ========================================= */

    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initProjectPage
        );

    } else {

        initProjectPage();

    }
