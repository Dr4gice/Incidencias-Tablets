const nif = document.getElementById("LogDNI");
const contrasenya = document.getElementById("LogPasswd");
const botonLogin = document.getElementById("sendSignIn");
const errorContrasenyaIncorrecta = document.getElementById("wrongPasswordError");

const principalArchivo = "../index.html";
const msgContrasenyaIncorrecta = "DNI o Contraseña incorrectos";

// Comprobaciones para el Inicio de Sesión del usuario
botonLogin.addEventListener("click", async function () {
    if (nif.value === "" || contrasenya.value === "") { // Comprueba que los campos no estén vacíos
        errorContrasenyaIncorrecta.textContent = "Completa todos los campos";
        let listaRecuperada = JSON.parse(localStorage.getItem("listaUsuarios"));
        usuarioDatos = listaRecuperada;
        console.log(usuarioDatos);
    } else if (!(await comprobarNifBD(nif.value))) { // Comprueba que el NIF coincida con alguno que esté guardado
        contrasenya.value = "";
        errorContrasenyaIncorrecta.textContent = msgContrasenyaIncorrecta;
    } else { // Comprueba que la Contraseña coincida con alguna que esté guardada
        if (await comprobarContrasenyaBD(nif.value, await encriptar(contrasenya.value))) {
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("dniUsuarioLogged", nif.value.toUpperCase());
            location.href = principalArchivo;
        } else {
            contrasenya.value = "";
            errorContrasenyaIncorrecta.textContent = msgContrasenyaIncorrecta;
        }
    }
});