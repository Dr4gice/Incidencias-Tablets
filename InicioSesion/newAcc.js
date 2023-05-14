const contrasenya = document.getElementById("password");
const confirmarContrasenya = document.getElementById("ConfPassword");
const botonRegistro = document.getElementById("sendSingIn");
const errorConfirmarContrasenya = document.getElementById("confirmPasswordError");
const errorCamposVacios = document.getElementById("emptyFieldsError");

// Agregar un controlador de eventos de entrada al campo de contraseña
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

// Agregar un controlador de eventos de entrada al campo de confirmación de contraseña
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

botonRegistro.addEventListener('click', function () {
    if (document.getElementById("username").value === "" || document.getElementById("email").value === "" || document.getElementById("password").value === "" || document.getElementById("ConfPassword").value === "" || document.getElementById("clientType").value === "Elige") {
        errorCamposVacios.textContent = "Completa todos los campos requeridos";
    } else {
        location.href = '../paginaPrincipal/proyecto.html';
        errorCamposVacios.textContent = "";
    }
});