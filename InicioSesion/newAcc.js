const usuario = document.getElementById("username");
const email = document.getElementById("email");
const tipoCliente = document.getElementById("clientType");
const contrasenya = document.getElementById("password");
const confirmarContrasenya = document.getElementById("ConfPassword");
const botonRegistro = document.getElementById("sendSignIn");
const errorEmail = document.getElementById("emailError");
const errorConfirmarContrasenya = document.getElementById("confirmPasswordError");
const errorCamposVacios = document.getElementById("emptyFieldsError");

const principalArchivo = "../index.html";
contrasenya.addEventListener("input", comprobarContrasenya);
confirmarContrasenya.addEventListener("input", comprobarContrasenya);

// Comprueba si los campos están vacíos. Si están vacíos muestra mensaje de error, en caso contrario se registra el usuario
botonRegistro.addEventListener('click', async function () {
    if (usuario.value === "" || email.value === "" || contrasenya.value === "" || confirmarContrasenya.value === "" || tipoCliente.value === "Elige") {
        errorCamposVacios.textContent = "Completa todos los campos";
    } else {
        if (!comprobarDNI(usuario.value.toUpperCase())) {
            usuario.value = "";
            errorCamposVacios.textContent = "Formato DNI incorrecto"
            return;
        }

        if (!comprobarEmail(email.value)) {
            email.value = "";
            errorCamposVacios.textContent = "Formato Email incorrecto"
            return;
        }

        let contrasenyaEncriptada = await encriptar(contrasenya.value);
        agregarUsuario(usuario.value, email.value, contrasenyaEncriptada, tipoCliente.value);

        location.href = principalArchivo;
        errorCamposVacios.textContent = "";
    }
});

/**
 * Comprueba si el DNI está hecho de forma válida.
 * @param {string} dni DNI del usuario
 * @returns {boolean}
 */
function comprobarDNI(dni) {
    const expresion = /[0-9]{8}[A-Z]{1}/;
    if (expresion.test(dni)) {
        return comprobarDNIletra(dni);
    } else {
        return false;
    }
}

/**
 * Comprueba que la letra del DNI sea correcta
 * @param {string} dni DNI del usuario
 * @returns {boolean}
 */
function comprobarDNIletra(dni) {
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    let dniSinLetra = dni.substring(0,8);
    let letraDelDni = dni.charAt(8);
    let numero = dniSinLetra % 23;
    let letraTeorica = letras.charAt(numero);
    return letraDelDni == letraTeorica;  
}


/**
 * Comprueba si el campo Contraseña coincide con el campo Confirmar Contraseña
 */
function comprobarContrasenya() {
    if (contrasenya.value === confirmarContrasenya.value) {
        // Habilitar el botón de registro si las contraseñas coinciden
        botonRegistro.removeAttribute("disabled");
        errorCamposVacios.textContent = "";
    } else {
        // Deshabilitar el botón de registro si las contraseñas no coinciden
        botonRegistro.setAttribute("disabled", true);
        errorCamposVacios.textContent = "Contraseñas no coinciden";
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
        let listaRecuperada = JSON.parse(localStorage.getItem("listaUsuarios"));
        usuarioDatos = listaRecuperada;
    } catch (error) {
        let usuarioDatos = [];
    }

    const nombreUsuario = generarNombre();
    const idTablet = generarId();
    const marcaTablet = generarMarca();
    const usuarioJson = {
        nif: nif,
        email: email,
        contrasenya: contrasenya,
        usuario: nombreUsuario,
        tipoCliente: tipoCliente,
        tablet: {
            id: idTablet,
            marca: marcaTablet
        }
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
    let nombreAleatorio = nombresUsuario[Math.floor(Math.random() * nombresUsuario.length)];
    for (let i = 0; i < 4; i++) {
        const numeroAleatorio = Math.floor(Math.random() * 10)
        nombreAleatorio += numeroAleatorio;
    }

    return nombreAleatorio;
}

/**
 * Genera un id de tablet aleatorio
 * @returns {string} Id de la tablet
 */
function generarId() {
    let id = "";

    for (let i = 0; i < 8; i++) {
        const numeroAleatorio = Math.floor(Math.random() * 10);
        id += numeroAleatorio;
    }

    return id;
}

/**
 * Genera una marca alatoria
 * @returns {string} Marca de la tablet
 */
function generarMarca() {
    const nombresMarcas = ["Samsung", "Toshiba"];
    const marcaAleatoria = nombresMarcas[Math.floor(Math.random() * nombresMarcas.length)];

    return marcaAleatoria;
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