/* Botones para la tabla */
const btnBuscar = document.getElementById("btnBuscar");
const btnBorrar = document.getElementsByClassName("btnBorrar");


let incidenciaDatos = [];

try {
    let listaRecuperada = JSON.parse(localStorage.getItem("listaIncidencias"));
    if (listaRecuperada !== null) {
        incidenciaDatos = listaRecuperada;
    }
} catch (error) {
    let incidenciaDatos = [];
}

let usuarioDatos = [];

try {
    let listaRecuperada = JSON.parse(localStorage.getItem("listaUsuarios"));
    if (listaRecuperada !== null) {
        usuarioDatos = listaRecuperada;
    }
} catch (error) {
    let usuarioDatos = [];
}

usuarioLogged = localStorage.getItem("dniUsuarioLogged");

mostrarFilas(incidenciaDatos);

// Botón de borrar una incidencia
for (let i = 0; i < btnBorrar.length; i++) {
    btnBorrar[i].addEventListener("click", function () {

        const fila = this.closest("tr");
        const idIncidencia = fila.querySelector("td:nth-child(1)").textContent.toLowerCase();
        incidenciaEncontrada = incidenciaDatos.find(incidencia => incidencia.incidencia.id === idIncidencia);
        nuevoIncidenciaDatos = incidenciaDatos.filter(function (incidencia) {
            return incidencia !== incidenciaEncontrada;
        });

        localStorage.setItem("listaIncidencias", JSON.stringify(nuevoIncidenciaDatos));
        location.reload();
    });
}


function mostrarFilas(listaIncidencias) {
    const tabla = document.getElementById("miTabla");
    const tbody = tabla.tBodies[0];

    tbody.innerHTML = "";
    usuarioEncontrado = usuarioDatos.find(usuario => usuario.nif === usuarioLogged);

    for (let i = 0; i < listaIncidencias.length; i++) {
        if (usuarioEncontrado.tipoCliente === "Admin" || usuarioEncontrado.tipoCliente === "Director") {
            const fila = document.createElement("tr");
            const celdaidInci = document.createElement("td");
            const celdaTipoInci = document.createElement("td");
            const celdaFecha = document.createElement("td");
            const celdaAcciones = document.createElement("td");
            const btnBorrar = document.createElement("button");
    
            celdaidInci.textContent = listaIncidencias[i].incidencia.id;
            celdaTipoInci.textContent = listaIncidencias[i].incidencia.tipoIncidencia;
            const fechaActual = new Date(listaIncidencias[i].incidencia.fecha);
            let dia = fechaActual.getDate().toString().padStart(2, '0');
            let mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
            let anyo = fechaActual.getFullYear();
            
            const fechaFormateada = dia + "/" + mes + "/" + anyo;
            celdaFecha.textContent = fechaFormateada;
            btnBorrar.textContent = "X";
    
            btnBorrar.classList.add("btnBorrar");
    
            fila.appendChild(celdaidInci);
            fila.appendChild(celdaTipoInci);
            fila.appendChild(celdaFecha);
            celdaAcciones.appendChild(btnBorrar);
            fila.appendChild(celdaAcciones);
            tbody.appendChild(fila);
        } else {
            incidenciaEncontrada = incidenciaDatos.find(incidencia => incidencia.nif === usuarioLogged);

            const fila = document.createElement("tr");
            const celdaidInci = document.createElement("td");
            const celdaTipoInci = document.createElement("td");
            const celdaFecha = document.createElement("td");
            const celdaAcciones = document.createElement("td");
            const btnBorrar = document.createElement("button");
    
            celdaidInci.textContent = incidenciaEncontrada.incidencia.id;
            celdaTipoInci.textContent = incidenciaEncontrada.incidencia.tipoIncidencia;
            const fechaActual = new Date(incidenciaEncontrada.incidencia.fecha);
            let dia = fechaActual.getDate().toString().padStart(2, '0');
            let mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
            let anyo = fechaActual.getFullYear();
            
            const fechaFormateada = dia + "/" + mes + "/" + anyo;
            celdaFecha.textContent = fechaFormateada;
            btnBorrar.textContent = "X";
    
            btnBorrar.classList.add("btnBorrar");
    
            fila.appendChild(celdaidInci);
            fila.appendChild(celdaTipoInci);
            fila.appendChild(celdaFecha);
            celdaAcciones.appendChild(btnBorrar);
            fila.appendChild(celdaAcciones);
            tbody.appendChild(fila);
            break;
        }
    }
}