/* =========================================
   PROJECT JS - SAFARI DIAGNOSTIC VERSION
========================================= */

"use strict";


/* =========================================
   DIAGNOSTIC BOX
========================================= */

function showDiagnostic(message, type) {

    var box = document.getElementById("safariDiagnostic");

    if (!box) {

        box = document.createElement("div");

        box.id = "safariDiagnostic";

        box.style.position = "fixed";
        box.style.top = "15px";
        box.style.left = "15px";
        box.style.right = "15px";
        box.style.zIndex = "999999";
        box.style.background = "#111";
        box.style.color = "#fff";
        box.style.padding = "18px";
        box.style.borderRadius = "12px";
        box.style.fontFamily = "Arial, sans-serif";
        box.style.fontSize = "14px";
        box.style.lineHeight = "1.7";
        box.style.direction = "ltr";
        box.style.textAlign = "left";
        box.style.boxShadow = "0 10px 40px rgba(0,0,0,.4)";
        box.style.maxHeight = "70vh";
        box.style.overflow = "auto";

        document.body.appendChild(box);
    }


    var line = document.createElement("div");

    line.style.padding = "4px 0";
    line.style.borderBottom = "1px solid rgba(255,255,255,.1)";

    if (type === "error") {

        line.style.color = "#ff6b6b";

    } else if (type === "success") {

        line.style.color = "#7cff9b";

    } else {

        line.style.color = "#ffffff";

    }

    line.textContent = message;

    box.appendChild(line);
}


/* =========================================
   GLOBAL ERROR
========================================= */

window.onerror = function (
    message,
    source,
    lineno,
    colno
) {

    showDiagnostic(
        "❌ JAVASCRIPT ERROR: " +
        message +
        " | Line: " +
        lineno +
        " | Column: " +
        colno,
        "error"
    );

    return false;
};


/* =========================================
   SCRIPT START
========================================= */

showDiagnostic(
    "1️⃣ project.js تم تحميله بنجاح",
    "success"
);


/* =========================================
   INIT
========================================= */

function initProjectPage() {

    showDiagnostic(
        "2️⃣ initProjectPage() اشتغلت",
        "success"
    );


    /* =========================================
       PROJECT DATA
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


    showDiagnostic(
        "3️⃣ بيانات المشاريع تم تحميلها",
        "success"
    );


    /* =========================================
       GET PROJECT PAGE
    ========================================= */

    var page =
        document.getElementById("projectPage");


    if (!page) {

        showDiagnostic(
            "❌ 4️⃣ لم يتم العثور على #projectPage",
            "error"
        );

        return;
    }


    showDiagnostic(
        "4️⃣ تم العثور على #projectPage",
        "success"
    );


    /* =========================================
       GET URL
    ========================================= */

    var projectName = "nexo";


    try {

        var search =
            window.location.search || "";


        showDiagnostic(
            "5️⃣ URL Search: " + search
        );


        var match =
            search.match(
                /[?&]project=([^&]+)/i
            );


        if (match && match[1]) {

            projectName =
                decodeURIComponent(
                    match[1]
                )
                .trim()
                .toLowerCase();

        }


        showDiagnostic(
            "6️⃣ اسم المشروع: " +
            projectName,
            "success"
        );

    } catch (error) {

        showDiagnostic(
            "❌ خطأ أثناء قراءة الرابط: " +
            error.message,
            "error"
        );

    }


    /* =========================================
       FIND PROJECT
    ========================================= */

    var project =
        projects[projectName];


    if (!project) {

        showDiagnostic(
            "❌ المشروع غير موجود داخل projects: " +
            projectName,
            "error"
        );

        return;
    }


    showDiagnostic(
        "7️⃣ تم العثور على المشروع: " +
        project.title,
        "success"
    );


    /* =========================================
       CREATE HTML
    ========================================= */

    try {

        page.innerHTML =

            '<section class="project-detail">' +

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


                '<div class="project-video-wrapper">' +

                    '<video ' +
                        'class="project-main-video" ' +
                        'autoplay ' +
                        'muted ' +
                        'loop ' +
                        'playsinline ' +
                        'webkit-playsinline ' +
                        'controls ' +
                        'preload="metadata"' +
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


                '<div class="project-info-grid">' +

                    '<div class="project-info-block">' +

                        '<div class="project-number">' +
                            '01 — PROJECT' +
                        '</div>' +

                        '<h2>عن المشروع</h2>' +

                        '<p>' +
                            project.about +
                        '</p>' +

                    '</div>' +


                    '<div class="project-info-block">' +

                        '<div class="project-number">' +
                            '02 — MY ROLE' +
                        '</div>' +

                        '<h2>دوري في المشروع</h2>' +

                        '<p>' +
                            project.role +
                        '</p>' +

                    '</div>' +


                    '<div class="project-info-block">' +

                        '<div class="project-number">' +
                            '03 — TECHNOLOGIES' +
                        '</div>' +

                        '<h2>التقنيات</h2>' +

                        '<div class="project-technologies">' +

                            project.technologies
                                .map(function (tech) {
                                    return '<span>' + tech + '</span>';
                                })
                                .join("") +

                        '</div>' +

                    '</div>' +


                    '<div class="project-info-block">' +

                        '<div class="project-number">' +
                            '04 — FEATURES' +
                        '</div>' +

                        '<h2>المميزات</h2>' +

                        '<div class="project-features">' +

                            project.features
                                .map(function (feature) {
                                    return '<div class="project-feature">' +
                                        feature +
                                    '</div>';
                                })
                                .join("") +

                        '</div>' +

                    '</div>' +

                '</div>' +


                '<div class="project-bottom">' +

                    '<div>' +

                        '<div class="project-number">' +
                            'HAVE A PROJECT?' +
                        '</div>' +

                        '<h2>' +
                            'مشروعك القادم؟ ' +
                            '<span>لنبدأ.</span>' +
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


        showDiagnostic(
            "8️⃣ تم إنشاء HTML للمشروع بنجاح",
            "success"
        );


    } catch (error) {

        showDiagnostic(
            "❌ خطأ أثناء إنشاء HTML: " +
            error.message,
            "error"
        );

        return;
    }


    /* =========================================
       VIDEO
    ========================================= */

    var video =
        page.querySelector(
            ".project-main-video"
        );


    if (!video) {

        showDiagnostic(
            "❌ لم يتم العثور على الفيديو",
            "error"
        );

        return;
    }


    showDiagnostic(
        "9️⃣ تم العثور على عنصر الفيديو",
        "success"
    );


    /* =========================================
       VIDEO SETTINGS
    ========================================= */

    video.muted = true;

    video.defaultMuted = true;

    video.autoplay = true;

    video.loop = true;

    video.playsInline = true;


    showDiagnostic(
        "🔟 إعدادات الفيديو تم تطبيقها",
        "success"
    );


    /* =========================================
       VIDEO EVENTS
    ========================================= */

    video.addEventListener(
        "loadedmetadata",
        function () {

            showDiagnostic(
                "🎬 VIDEO: metadata loaded",
                "success"
            );

        }
    );


    video.addEventListener(
        "canplay",
        function () {

            showDiagnostic(
                "🎬 VIDEO: canplay",
                "success"
            );

        }
    );


    video.addEventListener(
        "error",
        function () {

            showDiagnostic(
                "❌ VIDEO ERROR",
                "error"
            );

        }
    );


    /* =========================================
       PLAY VIDEO
    ========================================= */

    try {

        var playPromise =
            video.play();


        if (
            playPromise &&
            typeof playPromise.catch === "function"
        ) {

            playPromise.catch(
                function (error) {

                    showDiagnostic(
                        "⚠️ Autoplay blocked: " +
                        error.message,
                        "error"
                    );

                }
            );

        }

    } catch (error) {

        showDiagnostic(
            "❌ Video play error: " +
            error.message,
            "error"
        );

    }


    /* =========================================
       SUCCESS
    ========================================= */

    showDiagnostic(
        "✅ PROJECT JS انتهى بدون خطأ",
        "success"
    );

}


/* =========================================
   DOM READY
========================================= */

if (
    document.readyState === "loading"
) {

    showDiagnostic(
        "⏳ انتظار DOMContentLoaded..."
    );


    document.addEventListener(
        "DOMContentLoaded",
        initProjectPage
    );

} else {

    showDiagnostic(
        "⚡ DOM جاهز، تشغيل المشروع..."
    );


    initProjectPage();

}