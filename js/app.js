const menuMovil = document.querySelector(".menu-movil");
let menu1 = document.querySelector(".menu-1");
let menu2 = document.querySelector(".menu-2");
let menu3 = document.querySelector(".menu-3");
let nav = document.querySelector(".navegacion");

let sobreMi = document.querySelector(".sobre-mi");
let imgSobreMi = document.querySelector(".img-sobre-mi");

// Animacion del menu móvil
menuMovil.addEventListener("click", () => {
    menu1.classList.toggle("animate-menu-1");
    menu2.classList.toggle("animate-menu-2");
    menu3.classList.toggle("animate-menu-3");

    nav.classList.toggle("mostrar_menu");
});

// Adaptando el contenido de Sobre Mi al tamaño de pantalla
document.addEventListener("DOMContentLoaded", function() {
    function ajustarTamanio() {
        if (window.innerWidth > 767) {
            imgSobreMi.classList.remove("img-sobre-mi");

            sobreMi.classList.remove("alinear-caja-linea");
            sobreMi.classList.add("separar-caja");
            sobreMi.classList.add("centrar-caja-h");
            sobreMi.classList.add("centrar-caja-v");
        }
        if (window.innerWidth < 768) {
            imgSobreMi.classList.add("img-sobre-mi");

            sobreMi.classList.add("alinear-caja-linea");
            sobreMi.classList.remove("separar-caja");
        }
    }

    // Ejecutar la función al cargar la página
    ajustarTamanio();

    // Ejecutar la función en cada cambio de tamaño de la ventana
    window.addEventListener("resize", ajustarTamanio);
});