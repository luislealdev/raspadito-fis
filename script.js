var input = document.getElementById("Main-Input");
var button = document.getElementById("Main-Input-Button");
let checksSelected = [];
// Login Button
let winner = true;
let playerName = "";

function evaluateInputState() {
  if (input.value === "") {
    button.style.display = "none";
  } else {
    button.style.display = "flex";
  }
}

window.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const giftImages = document.querySelectorAll(".Gift-Image");

  let selectedCount = 0;
  let zeroValueSelected = false;

  checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        selectedCount++;
        let giftValue = parseInt(this.getAttribute("data-valor"));
        if (giftValue === 0) {
          zeroValueSelected = true;
        }
        if (selectedCount === 3) {
          checkboxes.forEach((cb) => {
            if (!cb.checked) {
              cb.disabled = true;
              cb.style.border = "none";
            }
          });
          if (zeroValueSelected) {
            winner = false; // Cambiar a false si hay un valor de 0 marcado
          }
          showResults(); // Llamar a la función para mostrar los resultados
        }
      } else {
        selectedCount--;
        let giftValue = parseInt(this.getAttribute("data-valor"));
        if (giftValue === 0) {
          zeroValueSelected = false;
        }
        checkboxes.forEach((cb) => {
          cb.disabled = false;
        });
      }
    });
  });

  function showResults() {
    checkboxes.forEach((checkbox, index) => {
      let giftValue = parseInt(checkbox.getAttribute("data-valor"));

      if (checkbox.checked) {
        if (giftValue === 0) {
          giftImages[index].src = "./assets/christmas-tree_616662.png"; // Mostrar el árbol de Navidad
          giftImages[index].alt = "Árbol de Navidad";
        } else {
          giftImages[index].src = "./assets/christmas-cat.png"; // Mostrar el gatito
          giftImages[index].alt = "Gatito";
        }
      } else {
        checkbox.disabled = true; // Deshabilitar todos los checkboxes si pierde
      }
    });

    if (selectedCount === 3) {
      // Mostrar el mensaje correspondiente al resultado
      if (winner) {
        // Código si gana
        document.querySelector(".Loser-Title-Container").style.display = "none"; // Ocultar mensaje de perdedor
        document.querySelector(".Winner-Title-Container").style.display =
          "block"; // Mostrar mensaje de ganador
        document.getElementById("Coupon-Container").style.display = "flex"; // Mostrar cupón
        document.getElementById("winner-name").textContent =
          localStorage.getItem("playerName");
      } else {
        // Código si pierde
        document.querySelector(".Winner-Title-Container").style.display =
          "none"; // Ocultar mensaje de ganador
        document.querySelector(".Loser-Title-Container").style.display =
          "block"; // Mostrar mensaje de perdedor
        document.querySelector("Coupon-Container").style.display = "none";
      }
    }
  }

  function generateRandomGifts() {
    let giftsArray = [1, 1, 1, 1];
    let randPosition = Math.floor(Math.random() * 4);

    giftsArray[randPosition] = 0;

    checkboxes.forEach((checkbox, index) => {
      checkbox.setAttribute("data-valor", giftsArray[index]);
    });
  }

  // Llamar a la función para iniciar el juego
  generateRandomGifts();
});
