// Arbrir y Cerrar el Menú Lateral
let nav = document.querySelector('.menu-lateral');
document.querySelector('.boton').addEventListener('click', function () {
    nav.classList.toggle('active');
});

// Botón de Registro, redirigir
const botonRegistro = document.querySelector('.boton-registro');
botonRegistro.addEventListener('click', function () {
    location.href = '../InicioSesion/newAcc.html';
});

// Botón de Iniciar Sesión, redirigir
const botonLogin = document.querySelector('.boton-login');
botonLogin.addEventListener('click', function () {
    location.href = '../InicioSesion/signIn.html';
});

// Función para encriptar una contraseña
function encriptar(contrasenya) {
    const contrasenyaBuffer = new TextEncoder().encode(contrasenya);

    return window.crypto.subtle.digest('SHA-256', contrasenyaBuffer).then(function (hashBuffer) {
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

// Función para desencriptar una contraseña
function desencriptar(contrasenya, hashGuardado) {
    const contrasenyaBuffer = new TextEncoder().encode(contrasenya);

    return window.crypto.subtle.digest('SHA-256', contrasenyaBuffer).then(function (hashBuffer) {
            // Convertimos el hash a una cadena de caracteres hexadecimal
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashHex = hashArray.map(function (a) {
                return a.toString(16).padStart(2, '0');
            }).join('');

            // Comparamos el hash generado con el hash almacenado en la base de datos
            if (hashHex === hashGuardado) {
                return true;
            } else {
                return false;
            }
        })
        .catch(function (error) {
            console.error(error);
        });
}