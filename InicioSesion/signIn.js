const nif = document.getElementById("LogDNI");
const contrasenya = document.getElementById("LogPasswd");
const botonLogin = document.getElementById("sendSignIn");
const errorContrasenyaIncorrecta = document.getElementById("wrongPasswordError");

const carpetaPaginaPrincipal = "../paginaPrincipal/";
const principalArchivo = "proyecto.html";

// Datos de ejemplo de almacenados al registrarse
nifGuardado = "74444420K";
contrasenyaHash = "59195c6c541c8307f1da2d1e768d6f2280c984df217ad5f4c64c3542b04111a4";

// Comprobaciones para el Inicio de Sesión del usuario
botonLogin.addEventListener("click", function () {
    if (nif.value === "" || contrasenya.value === "") { // Comprueba que los campos no estén vacíos
        errorContrasenyaIncorrecta.textContent = "Completa todos los campos requeridos";
    } else if (!(nif.value === nifGuardado)) { // Comprueba que el NIF coincida con alguno que esté guardado
        contrasenya.value = "";
        errorContrasenyaIncorrecta.textContent = "El DNI o la Contraseña son incorrectos";
    } else if (desencriptar(contrasenya.value, contrasenyaHash).then(function (esCorrecta) { // Comprueba que la Contraseña coincida con alguna que esté guardada
        if (esCorrecta) {
            location.href = carpetaPaginaPrincipal + principalArchivo;
        } else {
            contrasenya.value = "";
            errorContrasenyaIncorrecta.textContent = "El DNI o la Contraseña son incorrectos";
        }
    }));
});