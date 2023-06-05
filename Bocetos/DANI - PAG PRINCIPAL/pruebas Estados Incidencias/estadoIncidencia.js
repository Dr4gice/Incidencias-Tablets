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

    const btnBorrar = document.getElementsByClassName("btnBorrar");
      for (let i = 0; i < btnBorrar.length; i++) {
        btnBorrar[i].addEventListener("click", function() {
          const filaAborrar = this.parentNode.parentNode;
          const tbody = filaAborrar.parentNode;

          const indice = Array.prototype.indexOf.call(tbody.children, filaAborrar);
          todasLasFilas.splice(indice, 1);

          localStorage.setItem("filas", JSON.stringify(todasLasFilas));

          tbody.removeChild(filaAborrar);
        });
      }

    function mostrarFilas(filas) {
        const tabla = document.getElementById("miTabla");
        const tbody = tabla.tBodies[0];

        tbody.innerHTML = "";

        for (let i = 0; i < filas.length; i++) {
            const fila = document.createElement("tr");
            const celdaidInci = document.createElement("td");
            const celdaTipoInci = document.createElement("td");
            const celdaFecha = document.createElement("td");
            const celdaAcciones = document.createElement("td");
            const btnBorrar = document.createElement("button");

            celdaidInci.textContent = filasGuardadas[i].numeroID;
            celdaTipoInci.textContent = filasGuardadas[i].tipoInciden;
            celdaFecha.textContent = filasGuardadas[i].fecha;
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
});