const btnAbrir = document.querySelector("#Abrir");
const btnCerrar = document.querySelector("#Cerrar");

// Elementos de la interfaz
const elementoSuperior = document.querySelector(".superior");
const elementoMensaje = document.querySelector(".mensaje");
const h1 = document.querySelector("h1");

// Configuramos la transición suave del título principal
h1.style.transition = "transform 0.65s ease-in-out";

// Acción al dar click en Abrir
btnAbrir.addEventListener("click", () => {
    elementoSuperior.classList.add("abrir-superior");
    elementoMensaje.classList.add("abrir-mensaje");
    h1.style.transform = "translateY(-140px)"; // Desplazamos el título hacia arriba para dar espacio
});

// Acción al dar click en Cerrar
btnCerrar.addEventListener("click", () => {
    elementoSuperior.classList.remove("abrir-superior");
    elementoMensaje.classList.remove("abrir-mensaje");
    h1.style.transform = "translateY(0px)"; // El título regresa a su posición original
});