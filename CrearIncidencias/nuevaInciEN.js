const tipoInci = document.getElementById("tipoInci");
const otrosProblemas = document.getElementById("otrosProblemas");
const botonIncidencia = document.getElementById("nuevaIncidencia");
const tipoIncidencia = document.getElementById("tipoInci");
const problema = document.getElementById("problema");
const errorCamposVacios = document.getElementById("emptyFieldsError");

const principalArchivo = "estadoIncidenciaEN.html";
const carpetaArchivo = "../EstadoIncidencias/";

botonIncidencia.addEventListener("click", function () {
    if (tipoIncidencia.value === "" || problema.value === "") {
        errorCamposVacios.textContent = "Fill all fields";
        let listaRecuperada = JSON.parse(localStorage.getItem("listaIncidencias"));
        incidenciaDatos = listaRecuperada;
        console.log(incidenciaDatos);
    } else {
        // Comprobar formato DNI

        if (agregarIncidencia()) {
            location.href = carpetaArchivo + principalArchivo;
            errorCamposVacios.textContent = "";
        } else {
            errorCamposVacios.textContent = "You already have an active ticket";
        }
    }
})

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

    let indiceIncidencias = 1;

    try {
        let indiceRecuperado = localStorage.getItem("indiceIncidencias");
        if (indiceRecuperado !== null) {
            indiceIncidencias = parseInt(indiceRecuperado);
        }
    } catch (error) {
        let indiceIncidencias = 1;
    }

    const dniUsuarioLogged = localStorage.getItem("dniUsuarioLogged");
    usuarioEncontrado = usuarioDatos.find(usuario => usuario.nif === dniUsuarioLogged);

    incidenciaEncontrada = incidenciaDatos.find(incidencia => incidencia.nif === dniUsuarioLogged);

    if (!incidenciaEncontrada) {
        const timestampActual = new Date().getTime();

        const idIncidencia = generarId(indiceIncidencias);
        const incidenciaJson = {
            nif: dniUsuarioLogged,
            incidencia: {
                id: idIncidencia,
                tipoIncidencia: tipoIncidencia.value.toLowerCase(),
                problema: problema.value,
                fecha: timestampActual
            }
        }
    
        indiceIncidencias += 1;
        incidenciaDatos.push(incidenciaJson);
        localStorage.setItem("listaIncidencias", JSON.stringify(incidenciaDatos));
        localStorage.setItem("indiceIncidencias", indiceIncidencias);

        return true;
    } else {
        return false;
    }
}