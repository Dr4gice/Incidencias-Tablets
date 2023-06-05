const tipoInci = document.getElementById("tipoInci");
const otrosProblemas = document.getElementById("otrosProblemas");
const botonIncidencia = document.getElementById("nuevaIncidencia");
const tipoIncidencia = document.getElementById("tipoInci");
const problema = document.getElementById("problema");
const errorCamposVacios = document.getElementById("emptyFieldsError");
const nav = document.querySelector('.menu-lateral');
const boton = document.querySelector('.boton');
const botonRegistro = document.getElementById('goSignIn');
const botonLogin = document.getElementById('goLogIn');
const nombreUsuario = document.querySelector(".userName");
const icono = document.querySelector('.icon');
const isLoggedIn = localStorage.getItem('isLoggedIn');

const principalArchivo = "estadoIncidencia.html";
const carpetaArchivo = "../EstadoIncidencias/"
const carpetaLogin = "../InicioSesion/";
const registroArchivo = "newAcc.html";
const loginArchivo = "signIn.html";

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

botonIncidencia.addEventListener("click", function () {
    if (tipoIncidencia.value === "" || problema.value === "") {
        errorCamposVacios.textContent = "Completa todos los campos";
        let listaRecuperada = JSON.parse(localStorage.getItem("listaIncidencias"));
        incidenciaDatos = listaRecuperada;
        console.log(incidenciaDatos);
    } else {
        // Comprobar formato DNI

        agregarIncidencia();

        location.href = carpetaArchivo + principalArchivo;
        errorCamposVacios.textContent = "";
    }
})

/**
 * Campo adicional de la selección de problemas
 */
// function mostrarCampoAdicional() {
//     if (tipoInci.value === "Otro") {
//         otrosProblemas.style.display = "block";
//     } else {
//         otrosProblemas.style.display = "none";
//     }
// }

/**
 * Añade a la lista de incidencias los datos de una nueva incidencia
 */
function agregarIncidencia() {
    let usuarioDatos = [];

    try {
        let listaRecuperada = JSON.parse(localStorage.getItem("listaUsuarios"));
        if (listaRecuperada !== null) {
            usuarioDatos = listaRecuperada;
        }
    } catch (error) {
        let usuarioDatos = [];
    }

    let incidenciaDatos = [];

    try {
        let listaRecuperada = JSON.parse(localStorage.getItem("listaIncidencias"));
        if (listaRecuperada !== null) {
            incidenciaDatos = listaRecuperada;
        }
    } catch (error) {
        let incidenciaDatos = [];
    }

    const dniUsuarioLogged = localStorage.getItem("dniUsuarioLogged");
    usuarioEncontrado = usuarioDatos.find(usuario => usuario.nif === dniUsuarioLogged);

    const timestampActual = new Date().getTime();
    // const fechaActual = new Date(timestampActual);
    // const dia = fechaActual.getDate();
    // const mes = fechaActual.getMonth() + 1;
    // const anyo = fechaActual.getFullYear();
    
    // const fechaFormateada = dia + "/" + mes + "/" + anyo;

    const idIncidencia = generarId();
    const incidenciaJson = {
        nif: dniUsuarioLogged,
        incidencia: {
            id: idIncidencia,
            tipoIncidencia: tipoIncidencia.value.toLowerCase(),
            problema: problema.value,
            fecha: timestampActual
        }
    }

    incidenciaDatos.push(incidenciaJson);
    localStorage.setItem("listaIncidencias", JSON.stringify(incidenciaDatos));
}

/**
 * Genera un id de tablet aleatorio
 * @returns {string} Id de la tablet
 */
function generarId() {
    let incidenciaDatos = [];

    try {
        let listaRecuperada = JSON.parse(localStorage.getItem("listaIncidencias"));
        if (listaRecuperada !== null) {
            incidenciaDatos = listaRecuperada;
        }
    } catch (error) {
        let incidenciaDatos = [];
    }

    const idNumerico = parseInt(incidenciaDatos.length + 1);
    let id = "";
    for (let i = 0; i < 6-idNumerico.toString().length; i++) {
        id += 0;
    }
    id += idNumerico;

    return id;
}