
    var currentTarjetaIndex = 1;

    function changeTarjeta(n) {
      var tarjeta1 = document.getElementById("tarjeta1");
      var tarjeta2 = document.getElementById("tarjeta2");
      

      // Ocultar tarjeta actual
      if (currentTarjetaIndex === 1) {
        tarjeta1.style.display = "none";
      } else {
        tarjeta2.style.display = "none";
      }

      // Calcular nuevo índice de tarjeta
      currentTarjetaIndex += n;

      // Comprobar si se alcanzó el límite de tarjetas
      if (currentTarjetaIndex > 2) {
        currentTarjetaIndex = 1;
      } else if (currentTarjetaIndex < 1) {
        currentTarjetaIndex = 2;
      }

     // Mostrar nueva tarjeta
     if (currentTarjetaIndex === 1) {
      tarjeta1.style.display = "flex";
    } else {
      tarjeta2.style.display = "flex";
    }
    }