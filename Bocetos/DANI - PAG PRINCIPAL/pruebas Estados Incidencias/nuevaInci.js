const tipoInci = document.getElementById("tipoInci");
const otrosProblemas = document.getElementById("otrosProblemas");
const botonIncidencia = document.getElementById("nuevaIncidencia");
const tipoIncidencia = document.getElementById("tipoInci");
const problema = document.getElementById("problema");
const errorCamposVacios = document.getElementById("emptyFieldsError");
const nav = document.querySelector('.menu-lateral');
const botonRegistro = document.getElementById('goSignIn');
const botonLogin = document.getElementById('goLogIn');
const nombreUsuario = document.getElementById("nombreUsuario");
const icono = document.querySelector('.icon');
const isLoggedIn = localStorage.getItem('isLoggedIn');

const principalArchivo = "estadoIncidencia.html";
const carpetaLogin = "../InicioSesion/";
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
        location.href = "../index.html"
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

//iniciadoSesion();

botonIncidencia.addEventListener("click", function () {
    if (tipoIncidencia.value === "" || problema.value === "") {
        errorCamposVacios.textContent = "Completa todos los campos";
        let listaRecuperada = JSON.parse(localStorage.getItem("listaIncidencias"));
        incidenciaDatos = listaRecuperada;
        console.log(incidenciaDatos);
    }
})


/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/**
 * Crear un estado de incidencias
 */
document.getElementById("crearInci").addEventListener("submit", function (event) {

        
        agregarIncidencia();

        event.preventDefault();

        const idInci = generarId();
        let tipoInci;
        const tipo = document.getElementById("tipoInci").value;

        switch (tipo) {
            case "Rendimiento":
                tipoInci = "Problemas de rendimiento";
                break;
            case "Carga":
                tipoInci = "Problemas de carga del dispositivo";
                break;
            case "Pantalla":
                tipoInci = "Problemas en la pantalla del dispositivo";
                break;
            case "Software":
                tipoInci = "Fallos en el software del sistema";
                break;
            case "Internet":
                tipoInci = "Problemas con la conexion a Internet";
                break;
            case "Reinicio":
                tipoInci = "El dispositivo se reinicia solo";
                break;
            case "Almacenamiento":
                tipoInci = "Problemas de almacenamiento del dispositivo";
                break;
            case "Otro":
                tipoInci = document.getElementById("OtrosProb").value;

        }

        const datos = {
            numeroID: idInci,
            tipoInciden: tipoInci,
            fecha: new Date().toLocaleString()
        };

        let filasGuardadas = localStorage.getItem("filas");

        if (filasGuardadas) {
            filasGuardadas = JSON.parse(filasGuardadas);
        } else {
            filasGuardadas = [];
        }

        filasGuardadas.push(datos);
        localStorage.setItem("filas", JSON.stringify(filasGuardadas));

        window.location.href = "estadoIncidencia.html";
    
});


/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */
/* --------------------------------------------------------------------- */

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

    const idIncidencia = generarId();
    const incidenciaJson = {
        nif: dniUsuarioLogged,
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