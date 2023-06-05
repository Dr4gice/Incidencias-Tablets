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

mostrarFilas(usuarioDatos);

// Botón de borrar una incidencia
for (let i = 0; i < btnBorrar.length; i++) {
    btnBorrar[i].addEventListener("click", function () {

        const fila = this.closest("tr");
        const idIncidencia = fila.querySelector("td:nth-child(1)").textContent.toLowerCase();
        usuarioEncontrado = usuarioDatos.find(usuario => usuario.nif === idIncidencia);
        nuevoIncidenciaDatos = incidenciaDatos.filter(function (incidencia) {
            return incidencia !== incidenciaEncontrada;
        });

        localStorage.setItem("listaUsuarios", JSON.stringify(nuevoIncidenciaDatos));
        location.reload();
    });
}


function mostrarFilas(listaUsuarios) {
    const tabla = document.getElementById("miTabla");
    const tbody = tabla.tBodies[0];

    tbody.innerHTML = "";

    for (let i = 0; i < listaUsuarios.length; i++) {
        const fila = document.createElement("tr");
        const celdaidInci = document.createElement("td");
        const celdaTipoInci = document.createElement("td");
        const celdaFecha = document.createElement("td");
        const celdaAcciones = document.createElement("td");
        const btnBorrar = document.createElement("button");

        celdaidInci.textContent = listaUsuarios[i].incidencia.id;
        celdaTipoInci.textContent = listaUsuarios[i].incidencia.tipoIncidencia;
        celdaFecha.textContent = listaUsuarios[i].incidencia.fecha;
        btnBorrar.textContent = "Borrar";

        btnBorrar.classList.add("btnBorrar");

        fila.appendChild(celdaidInci);
        fila.appendChild(celdaTipoInci);
        fila.appendChild(celdaFecha);
        celdaAcciones.appendChild(btnBorrar);
        fila.appendChild(celdaAcciones);
        tbody.appendChild(fila);
    }
}