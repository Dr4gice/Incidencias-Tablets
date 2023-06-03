//////////////////////////
//  Funciones Externas  //
//////////////////////////
/**
 * Genera un boolean aleatorio
 * @returns {boolean}
 */
function randomBoolean() {
    return Math.random() < 0.5
}

/**
 * Encripta la contraseña
 * @param {string} contrasenya Contraseña escrita en el campo
 * @returns {string} Contraseña encriptada
 */
function encriptar(contrasenya) {
    const contrasenyaBuffer = new TextEncoder().encode(contrasenya);
    const algoritmoHash = "SHA-256";

    return window.crypto.subtle.digest(algoritmoHash, contrasenyaBuffer).then(function (hashBuffer) {
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashHex = hashArray.map(function (b) {
                return b.toString(16).padStart(2, '0');
            }).join('');
            return hashHex;
        })
        .catch(function (error) {
            console.error(error);
        });
}

function iniciadoSesion() {
    if (isLoggedIn === 'true') {
        const rutaRelativa = location.pathname;
        const nombreArchivo = rutaRelativa.substring(rutaRelativa.lastIndexOf('/') + 1);
        if (nombreArchivo === "index.html") {
            const dniUsuarioLogged = localStorage.getItem("dniUsuarioLogged");
            const listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"));
            const usuarioJson = listaUsuarios.find(usuario => usuario.nif === dniUsuarioLogged);
            if (usuarioJson.tipoCliente === "Alumno") {
                icono.style.backgroundImage = 'url("Imagenes/Alumno.jpg")';
            } else if (usuarioJson.tipoCliente === "Profesor") {
                icono.style.backgroundImage = 'url("Imagenes/Profesor.png")';
            } else if (usuarioJson.tipoCliente === "Director") {
                icono.style.backgroundImage = 'url("Imagenes/Director.png")';
            } else if (usuarioJson.tipoCliente === "Admin") {
                icono.style.backgroundImage = 'url("Imagenes/Admin.png")';
            }
            nombreUsuario.textContent = usuarioJson.usuario;
            botonLogin.textContent = "";
            botonRegistro.textContent = "Cerrar Sesion";
        } else {
            const dniUsuarioLogged = localStorage.getItem("dniUsuarioLogged");
            const listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"));
            const usuarioJson = listaUsuarios.find(usuario => usuario.nif === dniUsuarioLogged);
            if (usuarioJson.tipoCliente === "Alumno") {
                icono.style.backgroundImage = 'url("../Imagenes/Alumno.jpg")';
            } else if (usuarioJson.tipoCliente === "Profesor") {
                icono.style.backgroundImage = 'url("../Imagenes/Profesor.png")';
            } else if (usuarioJson.tipoCliente === "Director") {
                icono.style.backgroundImage = 'url("../Imagenes/Director.png")';
            } else if (usuarioJson.tipoCliente === "Admin") {
                icono.style.backgroundImage = 'url("../Imagenes/Admin.png")';
            }
            nombreUsuario.textContent = usuarioJson.usuario;
            botonLogin.textContent = "";
            botonRegistro.textContent = "Cerrar Sesion";
        }
    }
}

/////////////////////////////
//  Funciones del Usuario  //
/////////////////////////////
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
 * Comprueba que el formato del email sea correcto
 * @param {string} email Email del usuario
 * @returns {boolean} True si es correcto, false en caso contrario
 */
function comprobarEmail(email) {
    const validar = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return validar.test(email);
}

/**
 * Comprueba que el DNI exista en la Base de Datos
 * @param {string} nif DNI del usuario
 * @returns {boolean}
 */
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

/**
 * Comprueba que la contraseña exista en la Base de Datos
 * @param {string} contrasenya Contraseña del usuario
 * @returns {boolean}
 */
function comprobarContrasenyaBD(dni, contrasenya) {
    try {
        let listaRecuperada = JSON.parse(localStorage.getItem("listaUsuarios"));
        let encontrado = false;

        listaRecuperada.forEach(usuario => {
            if (usuario.nif === dni && usuario.contrasenya === contrasenya) {
                encontrado = true;
            }
        });
    
        return encontrado;
    } catch (error) {
        return false;
    }
}