var input = document.getElementById("Main-Input");
var button = document.getElementById("Main-Input-Button");

function evaluateInputState() {
  if (input.value === "") {
    button.style.display = "none";
  } else {
    button.style.display = "flex";
  }
}

function generateRandomGifts() {
  // Generar arreglo inicial
  let giftsArray = [1, 1, 1, 1];

  // Generar un número aleatorio entre 0 y 3
  let randPosition = Math.floor(Math.random() * 4);

  // En la posición del número aleatorio colocar un 0 para simular que no hay un regalo ahí
  giftsArray[randPosition] = 0;

  // Mostrar los regalos en la pantalla
  for (let i = 0; i < 4; i++) {
    var giftBox = document.getElementById("regalo" + i);

    // Añadir un atributo para identificar si es un regalo válido (1) o no (0)
    giftBox.setAttribute("data-valor", giftsArray[i]);

    // Agregar un evento de clic a cada regalo
    giftBox.addEventListener("click", function () {
      // Obtener el valor del regalo al hacer clic
      let giftValue = parseInt(this.getAttribute("data-valor"));

      // Verificar si el regalo es válido (1) o no (0)
      if (giftValue === 1) {
        console.log("Encontraste un regalo válido!");
        // Realizar alguna acción cuando se encuentre un regalo válido
      } else {
        console.log("Elegiste un regalo vacío, ¡perdiste!");
        // Realizar alguna acción cuando se elija un regalo vacío
      }
    });
  }
}
