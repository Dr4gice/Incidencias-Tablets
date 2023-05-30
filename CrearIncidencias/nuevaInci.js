const tipoInci = document.getElementById("tipoInci");
const otrosProblemas = document.getElementById("otrosProblemas");
const botonIncidencia = document.getElementById("nuevaIncidencia");
const usuario = document.getElementById("NIFalumno");
const tipoIncidencia = document.getElementById("tipoInci");
const problema = document.getElementById("problema");
const errorCamposVacios = document.getElementById("emptyFieldsError");
const nav = document.querySelector('.menu-lateral');
const botonRegistro = document.getElementById('goSignIn');
const botonLogin = document.getElementById('goLogIn');

const principalArchivo = "adminInci.html";
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

botonIncidencia.addEventListener("click", function () {
    if (usuario.value === "" || tipoIncidencia.value === "" || problema.value === "") {
        errorCamposVacios.textContent = "Completa todos los campos";
        let listaRecuperada = JSON.parse(localStorage.getItem("listaIncidencias"));
        incidenciaDatos = listaRecuperada;
        console.log(incidenciaDatos);
    } else {
        // Comprobar formato DNI

        if (!comprobarNifBD(usuario.value)) {
            usuario.value = "";
            errorCamposVacios.textContent = "DNI incorrecto / No existe"
            return;
        }

        agregarIncidencia(usuario.value);

        location.href = principalArchivo;
        errorCamposVacios.textContent = "";
    }
})

/**
 * Campo adicional de la selección de problemas
 */
function mostrarCampoAdicional() {
    if (tipoInci.value === "Otro") {
        otrosProblemas.style.display = "block";
    } else {
        otrosProblemas.style.display = "none";
    }
}

/**
 * Añade a la lista de incidencias los datos de una nueva incidencia
 * @param {string} nif DNI del usuario
 */
function agregarIncidencia(nif) {
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

    usuarioEncontrado = usuarioDatos.find(usuario => usuario.nif === nif);

    const idIncidencia = generarId();
    const incidenciaJson = {
        nif: usuarioEncontrado.nif,
        incidencia: {
            id: idIncidencia,
            tipoIncidencia: tipoIncidencia.value,
            problema: problema.value
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
    let id = "" + idNumerico;

    return id;
}