/* Botones para la tabla */
const btnBuscar = document.getElementById("btnBuscar");
const btnBorrar = document.getElementsByClassName("btnBorrar");


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

usuarioLogged = localStorage.getItem("dniUsuarioLogged");
mostrarFilas(usuarioDatos);


function mostrarFilas(listaUsuarios) {
    const tabla = document.getElementById("miTabla");
    const tbody = tabla.tBodies[0];

    tbody.innerHTML = "";
    usuarioEncontrado = usuarioDatos.find(usuario => usuario.nif === usuarioLogged);

    for (let i = 0; i < listaUsuarios.length; i++) {
        if (usuarioEncontrado.tipoCliente === "Admin" || usuarioEncontrado.tipoCliente === "Director") {
            const fila = document.createElement("tr");
            const celdaDniUser = document.createElement("td");
            const celdaIdTablet = document.createElement("td");
            const celdaMarcaTablet = document.createElement("td");
            const celdaCargadorTablet = document.createElement("td");
            const celdaFundaTablet = document.createElement("td");
            const celdaProtectorTablet = document.createElement("td");
            const estadoTablet = document.createElement("td");
    
            celdaDniUser.textContent = listaUsuarios[i].nif;
            celdaDniUser.style.padding = "5px";
            celdaIdTablet.textContent = listaUsuarios[i].tablet.id;
            celdaIdTablet.style.padding = "5px";
            celdaMarcaTablet.textContent = listaUsuarios[i].tablet.marca;
            celdaMarcaTablet.style.padding = "5px";
    
            if (listaUsuarios[i].tablet.accesorios.cargador === true) {
                celdaCargadorTablet.style.backgroundColor = "rgb(117, 214, 72)";
            } else {
                celdaCargadorTablet.style.backgroundColor = "rgb(238, 67, 67)";
            }
    
            if (listaUsuarios[i].tablet.accesorios.funda === true) {
                celdaFundaTablet.style.backgroundColor = "rgb(117, 214, 72)";
            } else {
                celdaFundaTablet.style.backgroundColor = "rgb(238, 67, 67)";
            }
    
            if (listaUsuarios[i].tablet.accesorios.protectorDePantalla === true) {
                celdaProtectorTablet.style.backgroundColor = "rgb(117, 214, 72)";
            } else {
                celdaProtectorTablet.style.backgroundColor = "rgb(238, 67, 67)";
            }
    
            const incidenciaEncontrada = incidenciaDatos.find(incidencia => incidencia.nif === celdaDniUser.textContent);
            if (incidenciaEncontrada) {
                estadoTablet.style.backgroundColor = "rgb(238, 67, 67)";
            } else {
                estadoTablet.style.backgroundColor = "rgb(117, 214, 72)";
            }
    
            fila.appendChild(celdaDniUser);
            fila.appendChild(celdaIdTablet);
            fila.appendChild(celdaMarcaTablet);
            fila.appendChild(celdaCargadorTablet);
            fila.appendChild(celdaFundaTablet);
            fila.appendChild(celdaProtectorTablet);
            fila.appendChild(estadoTablet);
            tbody.appendChild(fila);
        } else {
            const fila = document.createElement("tr");
            const celdaDniUser = document.createElement("td");
            const celdaIdTablet = document.createElement("td");
            const celdaMarcaTablet = document.createElement("td");
            const celdaCargadorTablet = document.createElement("td");
            const celdaFundaTablet = document.createElement("td");
            const celdaProtectorTablet = document.createElement("td");
            const estadoTablet = document.createElement("td");
    
            celdaDniUser.textContent = listaUsuarios[i].nif;
            celdaDniUser.style.padding = "5px";
            celdaIdTablet.textContent = listaUsuarios[i].tablet.id;
            celdaIdTablet.style.padding = "5px";
            celdaMarcaTablet.textContent = listaUsuarios[i].tablet.marca;
            celdaMarcaTablet.style.padding = "5px";
    
            if (listaUsuarios[i].tablet.accesorios.cargador === true) {
                celdaCargadorTablet.style.backgroundColor = "rgb(117, 214, 72)";
            } else {
                celdaCargadorTablet.style.backgroundColor = "rgb(238, 67, 67)";
            }
    
            if (listaUsuarios[i].tablet.accesorios.funda === true) {
                celdaFundaTablet.style.backgroundColor = "rgb(117, 214, 72)";
            } else {
                celdaFundaTablet.style.backgroundColor = "rgb(238, 67, 67)";
            }
    
            if (listaUsuarios[i].tablet.accesorios.protectorDePantalla === true) {
                celdaProtectorTablet.style.backgroundColor = "rgb(117, 214, 72)";
            } else {
                celdaProtectorTablet.style.backgroundColor = "rgb(238, 67, 67)";
            }
    
            const incidenciaEncontrada = incidenciaDatos.find(incidencia => incidencia.nif === celdaDniUser.textContent);
            if (incidenciaEncontrada) {
                estadoTablet.style.backgroundColor = "rgb(238, 67, 67)";
            } else {
                estadoTablet.style.backgroundColor = "rgb(117, 214, 72)";
            }
    
            fila.appendChild(celdaDniUser);
            fila.appendChild(celdaIdTablet);
            fila.appendChild(celdaMarcaTablet);
            fila.appendChild(celdaCargadorTablet);
            fila.appendChild(celdaFundaTablet);
            fila.appendChild(celdaProtectorTablet);
            fila.appendChild(estadoTablet);
            tbody.appendChild(fila);
            break;
        }
    }
}