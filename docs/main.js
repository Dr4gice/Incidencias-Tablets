// Arbrir y Cerrar el Menú Lateral
let nav = document.querySelector('.menu-lateral');
document.querySelector('.boton').addEventListener('click', function () {
    nav.classList.toggle('active');
});

const carpetaLogin = "../InicioSesion/";
const registroArchivo = "newAcc.html";
const loginArchivo = "signIn.html";

// Botón de Registro, redirigir
const botonRegistro = document.querySelector('.boton-registro');
botonRegistro.addEventListener('click', function () {
    location.href = carpetaLogin + registroArchivo;
});

// Botón de Iniciar Sesión, redirigir
const botonLogin = document.querySelector('.boton-login');
botonLogin.addEventListener('click', function () {
    location.href = carpetaLogin + loginArchivo;
});