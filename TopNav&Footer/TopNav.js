const nav = document.querySelector('.menu-lateral');
const botonRegistro = document.querySelector('.boton-registro');
const botonLogin = document.querySelector('.boton-login');

const carpetaLogin = "InicioSesion/";
const registroArchivo = "newAcc.html";
const loginArchivo = "signIn.html";

// Abrir y Cerrar el Menú Lateral
document.querySelector('.boton').addEventListener('click', function () {
    nav.classList.toggle('active');
});

// Botón de Registro, redirigir
botonRegistro.addEventListener('click', function () {
    location.href = carpetaLogin + registroArchivo;
});

// Botón de Iniciar Sesión, redirigir
botonLogin.addEventListener('click', function () {
    location.href = carpetaLogin + loginArchivo;
});