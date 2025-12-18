  const menuIcon = document.getElementById("menu-icon");
const botones = document.getElementById("botones");

menuIcon.addEventListener("click", () => {
    botones.classList.toggle("active");
});
