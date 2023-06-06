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
        errorCamposVacios.textContent = "Rellena todos los campos";
    } else {
        if (!comprobarDNI(usuario.value.toUpperCase())) {
            usuario.value = "";
            errorCamposVacios.textContent = "Formato DNI incorrecto";
            return;
        }

        if (comprobarNifBD(usuario.value)) {
            usuario.value = "";
            errorCamposVacios.textContent = "Usuario ya existe";
            return;
        }

        if (!comprobarEmail(email.value)) {
            email.value = "";
            errorCamposVacios.textContent = "Formato EMAIL incorrecto";
            return;
        }

        let contrasenyaEncriptada = await encriptar(contrasenya.value);
        agregarUsuario(usuario.value.toUpperCase(), email.value, contrasenyaEncriptada, tipoCliente.value);

        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("dniUsuarioLogged", usuario.value.toUpperCase());
        location.href = principalArchivo;
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
        errorCamposVacios.textContent = "";
    } else {
        // Deshabilitar el botón de registro si las contraseñas no coinciden
        botonRegistro.setAttribute("disabled", true);
        errorCamposVacios.textContent = "Contaseñas no coinciden";
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
        if (listaRecuperada !== null) {
            usuarioDatos = listaRecuperada;
        }
    } catch (error) {
        let usuarioDatos = [];
    }

    let indiceTablet = 1;

    try {
        let indiceRecuperado = localStorage.getItem("indiceTablet");
        if (indiceRecuperado !== null) {
            indiceTablet = parseInt(indiceRecuperado);
        }
    } catch (error) {
        let indiceTablet = 1;
    }

    const nombreUsuario = generarNombre();
    const idTablet = generarId(indiceTablet);
    const marcaTablet = generarMarca();
    const usuarioJson = {
        nif: nif,
        email: email,
        contrasenya: contrasenya,
        usuario: nombreUsuario,
        tipoCliente: tipoCliente,
        tablet: {
            id: idTablet,
            marca: marcaTablet,
            accesorios: {
                cargador: randomBoolean(),
                funda: randomBoolean(),
                protectorDePantalla: randomBoolean()
            }
        }
    }

    indiceTablet += 1;
    usuarioDatos.push(usuarioJson);
    localStorage.setItem("listaUsuarios", JSON.stringify(usuarioDatos));
    localStorage.setItem("indiceTablet", indiceTablet);
}