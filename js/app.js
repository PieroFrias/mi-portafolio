const menuMovil = document.querySelector(".menu-movil");
let menu1 = document.querySelector(".menu-1");
let menu2 = document.querySelector(".menu-2");
let menu3 = document.querySelector(".menu-3");
let nav = document.querySelector(".navegacion");

let sobreMi = document.querySelector(".sobre-mi");
let imgSobreMi = document.querySelector(".img-sobre-mi");

let camposForm1 = document.querySelector(".campos-form-1");
let camposForm2 = document.querySelector(".campos-form-2");
let camposForm3 = document.querySelector(".campos-form-3");

let proyecto = document.querySelector(".proyecto");

const scrollUp = document.querySelector("#scroll-up");

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

            camposForm1.classList.remove("alinear-caja-linea");
            camposForm1.classList.add("separar-caja");
            camposForm2.classList.remove("alinear-caja-linea");
            camposForm2.classList.add("separar-caja");
            camposForm3.classList.remove("alinear-caja-linea");
            camposForm3.classList.add("separar-caja");

            proyecto.classList.remove("alinear-caja-linea");
            proyecto.classList.add("separar-caja");
        }
        if (window.innerWidth < 768) {
            imgSobreMi.classList.add("img-sobre-mi");

            sobreMi.classList.add("alinear-caja-linea");
            sobreMi.classList.remove("separar-caja");

            camposForm1.classList.add("alinear-caja-linea");
            camposForm1.classList.remove("separar-caja");
            camposForm2.classList.add("alinear-caja-linea");
            camposForm2.classList.remove("separar-caja");
            camposForm3.classList.add("alinear-caja-linea");
            camposForm3.classList.remove("separar-caja");

            proyecto.classList.add("alinear-caja-linea");
            proyecto.classList.remove("separar-caja");
        }
    }

    // Ejecutar la función al cargar la página
    ajustarTamanio();

    // Ejecutar la función en cada cambio de tamaño de la ventana
    window.addEventListener("resize", ajustarTamanio);
});

// Hacer scroll hasta el inicio
scrollUp.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
});