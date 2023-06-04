const btnBuscar = document.getElementById("btnBuscar");
const btnMostrarTodos = document.getElementById("btnMostrarTodos");
const botonBorrar = document.getElementById("borrarDatos");


document.addEventListener("DOMContentLoaded", function () {
    let filasGuardadas = localStorage.getItem("filas");
    let todasLasFilas;

    if (filasGuardadas) {
        filasGuardadas = JSON.parse(filasGuardadas);
        todasLasFilas = filasGuardadas;
        mostrarFilas(filasGuardadas);
    }

    btnBuscar.addEventListener("click", function () {
        const problemaBusqueda = document.getElementById("problemaBusqueda").value.toLowerCase();
        const filas = document.querySelectorAll("#miTabla tbody tr");

        filas.forEach(function (fila) {
            const tipoProblem = fila.querySelector("td:nth-child(2)").textContent.toLowerCase();

            if (tipoProblem.includes(problemaBusqueda)) {
                fila.style.display = "table-row";
            } else {
                fila.style.display = "none";
            }
        });
    });

    btnMostrarTodos.addEventListener("click", function () {
        mostrarFilas(todasLasFilas);
    });

    botonBorrar.addEventListener("click", function () {
        localStorage.removeItem("listaIncidencias");
        localStorage.removeItem("filas");
        location.reload();
    });

    function mostrarFilas(filas) {
        const tabla = document.getElementById("miTabla");
        const tbody = tabla.tBodies[0];

        tbody.innerHTML = "";

        for (let i = 0; i < filas.length; i++) {
            const fila = document.createElement("tr");
            const celdaidInci = document.createElement("td");
            const celdaTipoInci = document.createElement("td");
            const celdaEstado = document.createElement("td");
            const celdaFecha = document.createElement("td");

            celdaidInci.textContent = filasGuardadas[i].numeroID;
            celdaTipoInci.textContent = filasGuardadas[i].tipoInciden;
            celdaEstado.textContent = filasGuardadas[i].estado;
            celdaFecha.textContent = filasGuardadas[i].fecha;

            fila.appendChild(celdaidInci);
            fila.appendChild(celdaTipoInci);
            fila.appendChild(celdaEstado);
            fila.appendChild(celdaFecha);
            tbody.appendChild(fila);
        }
    }
});