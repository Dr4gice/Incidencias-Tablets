const nif = document.getElementById("LogDNI");
const contrasenya = document.getElementById("LogPasswd");
const botonLogin = document.getElementById("sendSignIn");
const errorContrasenyaIncorrecta = document.getElementById("wrongPasswordError");

const carpetaPaginaPrincipal = "../docs/";
const principalArchivo = "proyecto.html";
const msgContrasenyaIncorrecta = "DNI o Contraseña incorrectos";

// Comprobaciones para el Inicio de Sesión del usuario
botonLogin.addEventListener("click", async function () {
    if (nif.value === "" || contrasenya.value === "") { // Comprueba que los campos no estén vacíos
        errorContrasenyaIncorrecta.textContent = "Completa todos los campos";
    } else if (!(await comprobarNifBD(nif.value))) { // Comprueba que el NIF coincida con alguno que esté guardado
        contrasenya.value = "";
        errorContrasenyaIncorrecta.textContent = msgContrasenyaIncorrecta;
    } else { // Comprueba que la Contraseña coincida con alguna que esté guardada
        if (await comprobarContrasenyaBD(await encriptar(contrasenya.value))) {
            location.href = carpetaPaginaPrincipal + principalArchivo;
        } else {
            contrasenya.value = "";
            errorContrasenyaIncorrecta.textContent = msgContrasenyaIncorrecta;
        }
    }
});

function comprobarNifBD(nif) {
    try {
        let listaRecuperada = JSON.parse(localStorage.getItem("listaUsuarios"));
        let encontrado = false;

        listaRecuperada.forEach(usuario => {
            if (usuario.nif === nif) {
                encontrado = true;
            }
        });
    
        return encontrado;
    } catch (error) {
        return false;
    }
}

function comprobarContrasenyaBD(contrasenya) {
    try {
        let listaRecuperada = JSON.parse(localStorage.getItem("listaUsuarios"));
        let encontrado = false;

        listaRecuperada.forEach(usuario => {
            if (usuario.contrasenya === contrasenya) {
                encontrado = true;
            }
        });
    
        return encontrado;
    } catch (error) {
        return false;
    }
}