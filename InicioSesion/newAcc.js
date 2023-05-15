const contrasenya = document.getElementById("password");
const confirmarContrasenya = document.getElementById("ConfPassword");
const botonRegistro = document.getElementById("sendSignIn");
const errorConfirmarContrasenya = document.getElementById("confirmPasswordError");
const errorCamposVacios = document.getElementById("emptyFieldsError");

// Comprueba si el campo Contraseña coincide con el campo Confirmar Contraseña
contrasenya.addEventListener("input", function () {
    if (contrasenya.value === confirmarContrasenya.value) {
        // Habilitar el botón de registro si las contraseñas coinciden
        botonRegistro.removeAttribute("disabled");
        errorConfirmarContrasenya.textContent = "";
    } else {
        // Deshabilitar el botón de registro si las contraseñas no coinciden
        botonRegistro.setAttribute("disabled", true);
        errorConfirmarContrasenya.textContent = "Las contraseñas no coinciden";
    }
});

// Comprueba si el campo Confirmar Contraseña coincide con el de Contraseña
confirmarContrasenya.addEventListener("input", function () {
    if (contrasenya.value === confirmarContrasenya.value) {
        // Habilitar el botón de registro si las contraseñas coinciden
        botonRegistro.removeAttribute("disabled");
        errorConfirmarContrasenya.textContent = "";
    } else {
        // Deshabilitar el botón de registro si las contraseñas no coinciden
        botonRegistro.setAttribute("disabled", true);
        errorConfirmarContrasenya.textContent = "Las contraseñas no coinciden";
    }
});

// Comprueba si los campos están vacíos. Si están vacíos muestra mensaje de error, en caso contrario se registra el usuario
botonRegistro.addEventListener('click', function () {
    if (document.getElementById("username").value === "" || document.getElementById("email").value === "" || document.getElementById("password").value === "" || document.getElementById("ConfPassword").value === "" || document.getElementById("clientType").value === "Elige") {
        errorCamposVacios.textContent = "Completa todos los campos requeridos";
    } else {
        location.href = '../paginaPrincipal/proyecto.html';
        errorCamposVacios.textContent = "";
    }
});