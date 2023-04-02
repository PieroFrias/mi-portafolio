const menuMovil = document.querySelector(".menu-movil");
let menu1 = document.querySelector(".menu-1");
let menu2 = document.querySelector(".menu-2");
let menu3 = document.querySelector(".menu-3");
let nav = document.querySelector(".navegacion");

// Animacion del menu móvil
menuMovil.addEventListener("click", () => {
    menu1.classList.toggle("animate-menu-1");
    menu2.classList.toggle("animate-menu-2");
    menu3.classList.toggle("animate-menu-3");

    nav.classList.toggle("mostrar_menu");
});