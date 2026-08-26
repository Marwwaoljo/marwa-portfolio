/* =========================================
   PROJECT JS
   Safari + Chrome Safe Version
========================================= */

"use strict";

(function () {

    /* =========================================
       PROJECTS DATA
    ========================================= */

    const projects = {

        /* =========================================
           NEXO
        ========================================= */

        nexo: {
            category: "E-COMMERCE",
            title: "NEXO",
            subtitle: "Mobile Store",

            video: "https://res.cloudinary.com/jc28wib9/video/upload/v1787762153/nexo_qcud5t.mp4",

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


        /* =========================================
           ROQAN
        ========================================= */

        roqan: {
            category: "COFFEE BRAND",
            title: "Roqan",
            subtitle: "Coffee",

            video: "https://res.cloudinary.com/jc28wib9/video/upload/v1787762155/roqan_vycy0r.mp4",

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


        /* =========================================
           BURGER
        ========================================= */

        burger: {
            category: "RESTAURANT",
            title: "Hero",
            subtitle: "Burger",

            video: "https://res.cloudinary.com/jc28wib9/video/upload/v1787762150/burger_txskf0.mp4",

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


        /* =========================================
           ABAYA
        ========================================= */

        abaya: {
            category: "FASHION E-COMMERCE",
            title: "rahil",
            subtitle: "Abaya",

            video: "https://res.cloudinary.com/jc28wib9/video/upload/v1787762411/abaya_vkzcuw.mp4",

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
       LOAD PROJECT
    ========================================= */

    function loadProject() {

        try {

            /* -------------------------------------
               GET MAIN
            ------------------------------------- */

            const page =
                document.getElementById("projectPage");


            if (!page) {

                console.error(
                    "ERROR: #projectPage not found."
                );

                return;

            }


            /* -------------------------------------
               GET PROJECT FROM URL
            ------------------------------------- */

            let projectName = "nexo";

            const search =
                window.location.search || "";


            const match =
                search.match(/[?&]project=([^&]+)/i);


            if (match && match[1]) {

                try {

                    projectName =
                        decodeURIComponent(match[1]);

                } catch (decodeError) {

                    projectName = match[1];

                }

                projectName =
                    projectName
                        .trim()
                        .toLowerCase();

            }


            console.log(
                "Requested project:",
                projectName
            );


            /* -------------------------------------
               FIND PROJECT
            ------------------------------------- */

            const project =
                projects[projectName];


            /* -------------------------------------
               PROJECT NOT FOUND
            ------------------------------------- */

            if (!project) {

                page.innerHTML = `

                    <section class="project-detail">

                        <div class="project-detail-header">

                            <span class="project-category-detail">
                                PROJECT NOT FOUND
                            </span>

                            <h1>
                                المشروع
                                <span>
                                    غير موجود
                                </span>
                            </h1>

                            <p class="project-description">
                                عذرًا، لم يتم العثور على المشروع المطلوب.
                            </p>

                            <a
                                href="./index.html#projects"
                                class="next-project"
                            >
                                العودة للمشاريع
                            </a>

                        </div>

                    </section>

                `;

                return;

            }


            /* -------------------------------------
               PAGE TITLE
            ------------------------------------- */

            document.title =
                project.title +
                " " +
                project.subtitle +
                " | Marwa Hussin";


            /* -------------------------------------
               TECHNOLOGIES
            ------------------------------------- */

            let technologiesHTML = "";


            if (
                Array.isArray(project.technologies)
            ) {

                project.technologies.forEach(
                    function (technology) {

                        technologiesHTML += `

                            <span>
                                ${technology}
                            </span>

                        `;

                    }
                );

            }


            /* -------------------------------------
               FEATURES
            ------------------------------------- */

            let featuresHTML = "";


            if (
                Array.isArray(project.features)
            ) {

                project.features.forEach(
                    function (feature) {

                        featuresHTML += `

                            <div class="project-feature">
                                ${feature}
                            </div>

                        `;

                    }
                );

            }


            /* -------------------------------------
               CREATE PROJECT HTML
            ------------------------------------- */

            page.innerHTML = `

                <section class="project-detail">


                    <!-- HEADER -->

                    <div class="project-detail-header">

                        <span class="project-category-detail">

                            ${project.category}

                        </span>


                        <h1>

                            ${project.title}

                            <span>

                                ${project.subtitle}

                            </span>

                        </h1>


                        <p class="project-description">

                            ${project.description}

                        </p>

                    </div>


                    <!-- VIDEO -->

                    <div class="project-video-wrapper">

                        <video
                            class="project-main-video"
                            muted
                            loop
                            playsinline
                            webkit-playsinline
                            controls
                            preload="metadata"
                        >

                            <source
                                src="${project.video}"
                                type="video/mp4"
                            >

                            متصفحك لا يدعم تشغيل الفيديو.

                        </video>

                    </div>


                    <!-- INFORMATION -->

                    <div class="project-info-grid">


                        <!-- ABOUT -->

                        <div class="project-info-block">

                            <div class="project-number">

                                01 — PROJECT

                            </div>


                            <h2>

                                عن المشروع

                            </h2>


                            <p>

                                ${project.about}

                            </p>

                        </div>


                        <!-- ROLE -->

                        <div class="project-info-block">

                            <div class="project-number">

                                02 — MY ROLE

                            </div>


                            <h2>

                                دوري في المشروع

                            </h2>


                            <p>

                                ${project.role}

                            </p>

                        </div>


                        <!-- TECHNOLOGIES -->

                        <div class="project-info-block">

                            <div class="project-number">

                                03 — TECHNOLOGIES

                            </div>


                            <h2>

                                التقنيات

                            </h2>


                            <div class="project-technologies">

                                ${technologiesHTML}

                            </div>

                        </div>


                        <!-- FEATURES -->

                        <div class="project-info-block">

                            <div class="project-number">

                                04 — FEATURES

                            </div>


                            <h2>

                                المميزات

                            </h2>


                            <div class="project-features">

                                ${featuresHTML}

                            </div>

                        </div>


                    </div>


                    <!-- CONTACT -->

                    <div class="project-bottom">


                        <div>

                            <div class="project-number">

                                HAVE A PROJECT?

                            </div>


                            <h2>

                                مشروعك القادم؟

                                <span>

                                    لنبدأ.

                                </span>

                            </h2>

                        </div>


                        <a
                            href="./index.html#contact"
                            class="next-project"
                        >

                            تواصل معي

                            <span>

                                ↗

                            </span>

                        </a>


                    </div>


                </section>

            `;


            /* -------------------------------------
               GET VIDEO
            ------------------------------------- */

            const video =
                page.querySelector(
                    ".project-main-video"
                );


            if (video) {

                /* Safari settings */

                video.muted = true;

                video.defaultMuted = true;

                video.playsInline = true;


                /* WebKit / Safari */

                try {

                    video.setAttribute(
                        "playsinline",
                        ""
                    );

                    video.setAttribute(
                        "webkit-playsinline",
                        ""
                    );

                    video.setAttribute(
                        "muted",
                        ""
                    );

                } catch (attributeError) {

                    console.log(
                        "Video attribute warning:",
                        attributeError
                    );

                }


                /* --------------------------------
                   TRY AUTOPLAY
                -------------------------------- */

                try {

                    const playPromise =
                        video.play();


                    if (
                        playPromise &&
                        typeof playPromise.then === "function"
                    ) {

                        playPromise.catch(
                            function (error) {

                                console.log(
                                    "Autoplay prevented:",
                                    error
                                );

                            }
                        );

                    }

                } catch (playError) {

                    console.log(
                        "Video autoplay error:",
                        playError
                    );

                }

            }


            /* -------------------------------------
               FINISHED
            ------------------------------------- */

            console.log(
                "PROJECT LOADED SUCCESSFULLY:",
                projectName
            );


        } catch (error) {

            /* -------------------------------------
               SAFETY ERROR
            ------------------------------------- */

            console.error(
                "PROJECT JS ERROR:",
                error
            );


            const page =
                document.getElementById(
                    "projectPage"
                );


            if (page) {

                page.innerHTML = `

                    <section class="project-detail">

                        <div class="project-detail-header">

                            <span class="project-category-detail">
                                ERROR
                            </span>

                            <h1>
                                حدث خطأ
                                <span>
                                    أثناء تحميل المشروع
                                </span>
                            </h1>

                            <p class="project-description">
                                يرجى تحديث الصفحة والمحاولة مرة أخرى.
                            </p>

                            <a
                                href="./index.html#projects"
                                class="next-project"
                            >
                                العودة للمشاريع
                            </a>

                        </div>

                    </section>

                `;

            }

        }

    }


    /* =========================================
       START
    ========================================= */

    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            loadProject
        );

    } else {

        loadProject();

    }


    /* =========================================
       SAFARI BFCACHE
    ========================================= */

    window.addEventListener(
        "pageshow",
        function () {

            console.log(
                "Page restored successfully."
            );

        }
    );

})();