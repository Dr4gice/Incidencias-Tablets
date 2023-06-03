const nav = document.querySelector('.menu-lateral');
const botonRegistro = document.getElementById('goSignIn');
const botonLogin = document.getElementById('goLogIn');
const nombreUsuario = document.getElementById("nombreUsuario");
const icono = document.querySelector('.icon');
const isLoggedIn = localStorage.getItem('isLoggedIn');

const carpetaLogin = "InicioSesion/";
const registroArchivo = "newAcc.html";
const loginArchivo = "signIn.html";

// Abrir y Cerrar el Menú Lateral
document.querySelector('.boton').addEventListener('click', function () {
    if (isLoggedIn === 'true') {
        nav.classList.toggle('active');
    }
});

// Botón de Registro, redirigir
botonRegistro.addEventListener('click', function () {
    if (botonRegistro.textContent === "Crear Cuenta") {
        location.href = carpetaLogin + registroArchivo;
    } else {
        Location.href = "../index.html"
        localStorage.setItem("isLoggedIn", "false");
        localStorage.setItem("dniUsuarioLogged", "");
        nombreUsuario.textContent = "";
        botonLogin.textContent = "Iniciar Sesion";
        botonRegistro.textContent = "Crear Cuenta";
    }
});

// Botón de Iniciar Sesión, redirigir
botonLogin.addEventListener('click', function () {
    location.href = carpetaLogin + loginArchivo;
});

iniciadoSesion();