/*==================================================
    MOI AGENCY - PATROCINIOS
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==========================================
        ANIMACIONES AL HACER SCROLL
    ==========================================*/

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.15

    });

    // Elementos individuales
    document.querySelectorAll(
        ".section-title, .package-card, .benefits li, .cta .container"
    ).forEach(el => {

        observer.observe(el);

    });





    /*==========================================
        APARICIÓN ESCALONADA TARJETAS
    ==========================================*/

    const cards = document.querySelectorAll(".package-card");

    cards.forEach((card, index) => {

        card.style.transitionDelay = `${index * 0.15}s`;

    });





    /*==========================================
        APARICIÓN ESCALONADA BENEFICIOS
    ==========================================*/

    const benefits = document.querySelectorAll(".benefits li");

    benefits.forEach((item, index) => {

        item.style.transitionDelay = `${index * 0.08}s`;

    });





    /*==========================================
        EFECTO SUAVE EN LA MASCOTA
    ==========================================*/

    const mascot = document.querySelector(".hero-image img");

    if (mascot && window.innerWidth > 992) {

        document.addEventListener("mousemove", (e) => {

            const x = (window.innerWidth / 2 - e.clientX) / 60;
            const y = (window.innerHeight / 2 - e.clientY) / 60;

            mascot.style.transform =
                `translate(${x}px, ${y}px)`;

        });

    }





    /*==========================================
        BOTONES
    ==========================================*/

    document.querySelectorAll(".btn-package").forEach(button => {

        button.addEventListener("click", function (e) {

            // Si aún no has definido enlaces, evita que recargue
            if (this.getAttribute("href") === "#") {

                e.preventDefault();

            }

        });

    });





    /*==========================================
        PARALLAX HERO
    ==========================================*/

    const hero = document.querySelector(".hero");

    if (hero) {

        window.addEventListener("scroll", () => {

            let offset = window.pageYOffset;

            hero.style.backgroundPositionY = `${offset * 0.35}px`;

        });

    }

});