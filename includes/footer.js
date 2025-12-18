document.addEventListener("DOMContentLoaded", function() {
  const extraMenu = document.querySelector(".footer-extra-menu ul");
  const navMenu = document.querySelector(".nav-menu");

  if (extraMenu && navMenu) {
    const clonedMenu = extraMenu.cloneNode(true);
    clonedMenu.classList.add("footer-clone-menu");
    navMenu.appendChild(clonedMenu);
  }
});