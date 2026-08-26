/* =========================================
   LOADER
========================================= */

(function () {

    const loader = document.getElementById("loader");

    if (!loader) return;

    function hideLoader() {
        loader.classList.add("hide");

        // إزالة الـLoader نهائيًا بعد انتهاء الأنيميشن
        setTimeout(() => {
            loader.style.display = "none";
        }, 900);
    }

    // إخفاء الـLoader بعد تحميل الصفحة
    if (document.readyState === "complete") {

        setTimeout(hideLoader, 1200);

    } else {

        window.addEventListener("load", () => {

            setTimeout(hideLoader, 1200);

        }, { once: true });

    }

    // حماية إضافية لـ Safari
    setTimeout(hideLoader, 4000);

})();


/* =========================================
   NAVBAR
========================================= */

const navbar = document.getElementById("navbar");

if (navbar) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });

}


/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileClose = document.getElementById("mobileClose");


if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.add("open");
    });

}


if (mobileClose && mobileMenu) {

    mobileClose.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
    });

}


document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        if (mobileMenu) {
            mobileMenu.classList.remove("open");
        }

    });

});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");


if (sections.length && navLinks.length) {

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                current =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${current}`
            ) {

                link.classList.add("active");

            }

        });

    });

}


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".service-card, .project-card, .about-text, .about-image, .skill-item, .process-item"
);


revealElements.forEach(element => {

    element.classList.add("reveal");

});


if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry, index) => {

                if (entry.isIntersecting) {

                    setTimeout(() => {

                        entry.target.classList.add("show");

                    }, index * 80);

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

} else {

    // دعم Safari القديم والمتصفحات التي لا تدعم Observer

    revealElements.forEach(element => {

        element.classList.add("show");

    });

}


/* =========================================
   PROJECT HOVER
========================================= */

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach(card => {

    const image =
        card.querySelector(".project-image");


    if (!image) return;


    card.addEventListener("mousemove", (e) => {

        if (window.innerWidth <= 800) return;

        const rect =
            card.getBoundingClientRect();


        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;


        const rotateX =
            ((y / rect.height) - 0.5) * -3;

        const rotateY =
            ((x / rect.width) - 0.5) * 3;


        image.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.01)`;

    });


    card.addEventListener("mouseleave", () => {

        image.style.transform =
            "perspective(900px) rotateX(0) rotateY(0) scale(1)";

    });

});


/* =========================================
   HERO PARALLAX
========================================= */

const heroVisual =
    document.querySelector(".hero-visual");


if (heroVisual) {

    window.addEventListener("mousemove", (e) => {

        if (window.innerWidth <= 800) return;


        const x =
            (window.innerWidth / 2 - e.clientX) / 70;

        const y =
            (window.innerHeight / 2 - e.clientY) / 70;


        heroVisual.style.transform =
            `translate(${x}px, ${y}px)`;

    });

}


/* =========================================
   SMOOTH ANCHOR
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const targetId =
            this.getAttribute("href");


        if (
            !targetId ||
            targetId === "#"
        ) return;


        const target =
            document.querySelector(targetId);


        if (!target) return;


        e.preventDefault();


        target.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });

});


/* =========================================
   SKILLS ANIMATION
========================================= */

const skillBars =
    document.querySelectorAll(".skill-bar span");


if ("IntersectionObserver" in window) {

    const skillObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        const finalWidth =
                            entry.target.style.width;


                        entry.target.style.width =
                            "0%";


                        setTimeout(() => {

                            entry.target.style.transition =
                                "width 1.4s ease";

                            entry.target.style.width =
                                finalWidth;

                        }, 100);


                        skillObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.4
            }
        );


    skillBars.forEach(bar => {

        skillObserver.observe(bar);

    });

}


/* =========================================
   CURSOR GLOW
========================================= */

const cursorGlow =
    document.createElement("div");


cursorGlow.style.position = "fixed";
cursorGlow.style.width = "180px";
cursorGlow.style.height = "180px";
cursorGlow.style.borderRadius = "50%";
cursorGlow.style.pointerEvents = "none";
cursorGlow.style.zIndex = "999";
cursorGlow.style.background =
    "radial-gradient(circle, rgba(214,184,120,.06), transparent 70%)";
cursorGlow.style.transform =
    "translate(-50%, -50%)";


document.body.appendChild(cursorGlow);


window.addEventListener("mousemove", (e) => {

    cursorGlow.style.left =
        `${e.clientX}px`;

    cursorGlow.style.top =
        `${e.clientY}px`;

});


/* =========================================
   SAFARI / MOBILE SAFETY
========================================= */

window.addEventListener("pageshow", () => {

    const loader =
        document.getElementById("loader");


    if (loader) {

        setTimeout(() => {

            loader.classList.add("hide");

            setTimeout(() => {

                loader.style.display = "none";

            }, 900);

        }, 100);

    }

});