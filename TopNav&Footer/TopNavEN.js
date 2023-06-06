//////////////////////////////////
//  Funciones Barra Navegación  //
//////////////////////////////////
const nav = document.querySelector('.menu-lateral');
const boton = document.querySelector('.boton');
const botonLineas = document.querySelectorAll('.boton .linea');
const botonRegistro = document.getElementById('goSignIn');
const botonLogin = document.getElementById('goLogIn');
const nombreUsuario = document.querySelector(".userName");
const icono = document.querySelector('.icon');
const isLoggedIn = localStorage.getItem('isLoggedIn');
const rutaRelativa = location.pathname;
const nombreArchivo = rutaRelativa.substring(rutaRelativa.lastIndexOf('/') + 1);

const carpetaLogin = "../InicioSesion/";
const carpetaLoginIndex = "InicioSesion/";
const registroArchivo = "newAccEN.html";
const loginArchivo = "signInEN.html";

if (nombreArchivo === "indexEN.html") {
    // Abrir y Cerrar el Menú Lateral
    boton.addEventListener('click', function () {
        if (isLoggedIn === 'true') {
            nav.classList.toggle('active');
        }
    });

    // Botón de Registro, redirigir
    botonRegistro.addEventListener('click', function () {
        cerradoSesion();
    });

    // Botón de Iniciar Sesión, redirigir
    botonLogin.addEventListener('click', function () {
        location.href = carpetaLoginIndex + loginArchivo;
    });

    iniciadoSesion();
} else {
    // Abrir y Cerrar el Menú Lateral
    boton.addEventListener('click', function () {
        if (isLoggedIn === 'true') {
            nav.classList.toggle('active');
        }
    });

    // Botón de Registro, redirigir
    botonRegistro.addEventListener('click', function () {
        cerradoSesion();
    });

    // Botón de Iniciar Sesión, redirigir
    botonLogin.addEventListener('click', function () {
        location.href = carpetaLogin + loginArchivo;
    });

    iniciadoSesion();
}


/**
 * Conjunto de acciones para cuando esté iniciado sesión o no
 */
function iniciadoSesion() {
    if (isLoggedIn === 'true') {
        const rutaRelativa = location.pathname;
        const nombreArchivo = rutaRelativa.substring(rutaRelativa.lastIndexOf('/') + 1);
        if (nombreArchivo === "indexEN.html") {
            const dniUsuarioLogged = localStorage.getItem("dniUsuarioLogged");
            const listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"));
            const usuarioJson = listaUsuarios.find(usuario => usuario.nif === dniUsuarioLogged);
            if (usuarioJson.tipoCliente === "Alumno") {
                icono.style.backgroundImage = 'url("Imagenes/Alumno.jpg")';
            } else if (usuarioJson.tipoCliente === "Profesor") {
                icono.style.backgroundImage = 'url("Imagenes/Profesor.png")';
            } else if (usuarioJson.tipoCliente === "Director") {
                icono.style.backgroundImage = 'url("Imagenes/Director.png")';
            } else if (usuarioJson.tipoCliente === "Admin") {
                icono.style.backgroundImage = 'url("Imagenes/Admin.png")';
            }
            nombreUsuario.textContent = usuarioJson.usuario;
            botonLogin.textContent = "";
            botonRegistro.textContent = "Log Off";
        } else {
            const dniUsuarioLogged = localStorage.getItem("dniUsuarioLogged");
            const listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"));
            const usuarioJson = listaUsuarios.find(usuario => usuario.nif === dniUsuarioLogged);
            if (usuarioJson.tipoCliente === "Alumno") {
                icono.style.backgroundImage = 'url("../Imagenes/Alumno.jpg")';
            } else if (usuarioJson.tipoCliente === "Profesor") {
                icono.style.backgroundImage = 'url("../Imagenes/Profesor.png")';
            } else if (usuarioJson.tipoCliente === "Director") {
                icono.style.backgroundImage = 'url("../Imagenes/Director.png")';
            } else if (usuarioJson.tipoCliente === "Admin") {
                icono.style.backgroundImage = 'url("../Imagenes/Admin.png")';
            }
            nombreUsuario.textContent = usuarioJson.usuario;
            botonLogin.textContent = "";
            botonRegistro.textContent = "Log Off";
        }
    } else {
        nombreUsuario.textContent = "";
        icono.style.backgroundImage = 'url("")';
        icono.style.borderColor = "transparent";
        botonLogin.textContent = "Log In";
        botonRegistro.textContent = "Sign In";
        botonLineas.forEach(linea => {
            linea.style.height = "0px";
            linea.style.width = "0px";
        });
    }
}

/**
 * Conjunto de acciones para cuando el usuario cierra sesión
 */
function cerradoSesion() {
    if (nombreArchivo === "indexEN.html") {
        if (botonRegistro.textContent === "Sign In") {
            location.href = carpetaLoginIndex + registroArchivo;
        } else {
            const rutaRelativa = location.pathname;
            const nombreArchivo = rutaRelativa.substring(rutaRelativa.lastIndexOf('/') + 1);
            localStorage.setItem("isLoggedIn", "false");
            localStorage.setItem("dniUsuarioLogged", "");
            if (nombreArchivo === "indexEN.html") {
                location.reload();
            } else {
                location.href = "../indexEN.html";
            }
        }
    } else {
        if (botonRegistro.textContent === "Sign In") {
            location.href = carpetaLogin + registroArchivo;
        } else {
            const rutaRelativa = location.pathname;
            const nombreArchivo = rutaRelativa.substring(rutaRelativa.lastIndexOf('/') + 1);
            localStorage.setItem("isLoggedIn", "false");
            localStorage.setItem("dniUsuarioLogged", "");
            if (nombreArchivo === "indexEN.html") {
                location.reload();
            } else {
                location.href = "../indexEN.html";
            }
        }
    }
}