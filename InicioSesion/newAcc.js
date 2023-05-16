const usuario = document.getElementById("username");
const email = document.getElementById("email");
const tipoCliente = document.getElementById("clientType");
const contrasenya = document.getElementById("password");
const confirmarContrasenya = document.getElementById("ConfPassword");
const botonRegistro = document.getElementById("sendSignIn");
const errorEmail = document.getElementById("emailError");
const errorConfirmarContrasenya = document.getElementById("confirmPasswordError");
const errorCamposVacios = document.getElementById("emptyFieldsError");

contrasenya.addEventListener("input", comprobarContrasenya);
confirmarContrasenya.addEventListener("input", comprobarContrasenya);

// Comprueba si los campos están vacíos. Si están vacíos muestra mensaje de error, en caso contrario se registra el usuario
botonRegistro.addEventListener('click', async function () {
    if (usuario.value === "" || email.value === "" || contrasenya.value === "" || confirmarContrasenya.value === "" || tipoCliente.value === "Elige") {
        errorCamposVacios.textContent = "Completa todos los campos requeridos";
    } else {
        if (!comprobarEmail(email.value)) {
            email.value = "";
            errorEmail.textContent = "Formato Email incorrecto"
            return;
        }
        let contrasenyaEncriptada = await encriptar(contrasenya.value);
        agregarUsuario(usuario.value, email.value, contrasenyaEncriptada, tipoCliente.value);

        location.href = '../paginaPrincipal/proyecto.html';
        errorCamposVacios.textContent = "";
    }
});

/**
 * Comprueba si el campo Contraseña coincide con el campo Confirmar Contraseña
 */
function comprobarContrasenya() {
    if (contrasenya.value === confirmarContrasenya.value) {
        // Habilitar el botón de registro si las contraseñas coinciden
        botonRegistro.removeAttribute("disabled");
        errorConfirmarContrasenya.textContent = "";
    } else {
        // Deshabilitar el botón de registro si las contraseñas no coinciden
        botonRegistro.setAttribute("disabled", true);
        errorConfirmarContrasenya.textContent = "Las contraseñas no coinciden";
    }
}

/**
 * Añade a la lista de usuarios los datos de un nuevo usuario
 * @param {string} nif DNI del usuario
 * @param {string} email Email del usuario
 * @param {string} contrasenya Contraseña del usuario
 * @param {string} tipoCliente Tipo de usuario
 */
function agregarUsuario(nif, email, contrasenya, tipoCliente) {
    let usuarioDatos = [];

    try {
        let usuarioDatos = [];
        let listaRecuperada = JSON.parse(localStorage.getItem("listaUsuarios"));
        usuarioDatos = listaRecuperada;
    } catch (error) {
        let usuarioDatos = [];
    }

    const nombreUsuario = generarNombre();
    const usuarioJson = {
        nif: nif,
        email: email,
        contrasenya: contrasenya,
        usuario: nombreUsuario,
        tipoCliente: tipoCliente
    }

    usuarioDatos.push(usuarioJson);
    localStorage.setItem("listaUsuarios", JSON.stringify(usuarioDatos));
    console.log(usuarioDatos);
}

/**
 * Genera un nombre de usuario aleatorio
 * @returns {string} Nombre del usuario
 */
function generarNombre() {
    const nombresUsuario = ["crazy", "lazy", "happy", "sunny", "cool", "funny", "mystery", "panda", "dragon", "tiger", "lion", "eagle", "phoenix", "wolf", "fox", "hawk", "unicorn", "wizard", "ghost"];
    const nombreAleatorio = nombresUsuario[Math.floor(Math.random() * nombresUsuario.length)];
    const numeroAleatorio = Math.floor(Math.random() * 10000);
    const nombreUsuario = nombreAleatorio + numeroAleatorio.toString();

    return nombreUsuario;
}

/**
 * Comprueba que el formato del email sea correcto
 * @param {string} email Email del usuario
 * @returns {boolean} True si es correcto, false en caso contrario
 */
function comprobarEmail(email) {
    const validar = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validar.test(email);
}

function comprobarNif(nif) {
    return false;
}