// Campo adicional de la selección de problemas
function mostrarCampoAdicional() {
    var tipoInci = document.getElementById("tipoInci");
    var otrosProblemas = document.getElementById("otrosProblemas");
  
    if (tipoInci.value === "Otro") {
        otrosProblemas.style.display = "block";
    } else {
        otrosProblemas.style.display = "none";
    }
}

