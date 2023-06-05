const nav = document.querySelector('.menu-lateral');
const boton = document.querySelector('.boton');
const botonRegistro = document.getElementById('goSignIn');
const botonLogin = document.getElementById('goLogIn');
const nombreUsuario = document.querySelector(".userName");
const icono = document.querySelector('.icon');
const isLoggedIn = localStorage.getItem('isLoggedIn');

/* Botones para la tabla */
const btnBuscar = document.getElementById("btnBuscar");
const btnBorrar = document.getElementsByClassName("btnBorrar");

const carpetaLogin = "InicioSesion/";
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


// Mostrar las filas en la tabla
document.addEventListener("DOMContentLoaded", function () {
    let filasGuardadas = localStorage.getItem("filas");
    let todasLasFilas;

    if (filasGuardadas) {
        filasGuardadas = JSON.parse(filasGuardadas);
        todasLasFilas = filasGuardadas;
        mostrarFilas(filasGuardadas);
    }

    // Botón de buscar un problema
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


    // Botón de borrar una incidencia
    for (let i = 0; i < btnBorrar.length; i++) {
        btnBorrar[i].addEventListener("click", function () {
            const filaAborrar = this.parentNode.parentNode;
            const tbody = filaAborrar.parentNode;

            const indice = Array.prototype.indexOf.call(tbody.children, filaAborrar);
            todasLasFilas.splice(indice, 1);

            localStorage.setItem("filas", JSON.stringify(todasLasFilas));

            tbody.removeChild(filaAborrar);
        });
    }

    // Función que muestra las filas de la tabla
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