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

/**
 * Encripta la contraseña y la compara con la encriptada del segundo parámetro
 * @param {string} contrasenya Contraseña escrita en el campo
 * @param {string} hashGuardado Contraseña guardada del usuario registrado
 * @returns {boolean} True si coincide ambas contraseñas, False en caso contrario
 */
function desencriptar(contrasenya, hashGuardado) {
    const contrasenyaBuffer = new TextEncoder().encode(contrasenya);
    const algoritmoHash = "SHA-256";

    return window.crypto.subtle.digest(algoritmoHash, contrasenyaBuffer).then(function (hashBuffer) {
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashHex = hashArray.map(function (a) {
                return a.toString(16).padStart(2, '0');
            }).join('');

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