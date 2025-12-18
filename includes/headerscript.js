document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const subMenuParents = document.querySelectorAll(".has-submenu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Solo añadir eventos si existen elementos
  if (hamburger && navMenu) {
    // Toggle menú principal
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }

  // En móviles, abrir/cerrar submenús con clic
  if (subMenuParents.length > 0) {
    subMenuParents.forEach(item => {
      item.addEventListener("click", function (e) {
        if (window.innerWidth <= 1200) {
          e.preventDefault();
          this.classList.toggle("open");
        }
      });
    });
  }

  // Cerrar menú cuando se hace clic en un enlace
  if (navLinks.length > 0) {
    navLinks.forEach(link => {
      link.addEventListener("click", function () {
        if (window.innerWidth <= 1200 && hamburger && navMenu) {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
        }
      });
    });
  }
})