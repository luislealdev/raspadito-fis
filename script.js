var input = document.getElementById("Main-Input");

//Botón para iniciar el juego (message.html)
//var playButton = document.getElementById('Play-Button');

// playButton.addEventListener("click", ()=>{
//   console.log('HAY QUE JUGAR');
//   generateRandomGifts();
// });

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

// function generateRandomGifts() {
//   let giftsArray = [1, 1, 1, 1];
//   let randPosition = Math.floor(Math.random() * 4);

//   giftsArray[randPosition] = 0;

//   for (let i = 0; i < 4; i++) {
//     var giftBox = document.getElementById("Checkbox" + i);

//     giftBox.setAttribute("data-valor", giftsArray[i]);

//     giftBox.addEventListener("click", function () {
//       let giftValue = parseInt(this.getAttribute("data-valor"));

//       if (giftValue === 0) {
//         winner = false;
//         console.log("PERDISTE D:");
//       }
//     });
//   }
// }

window.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const giftImages = document.querySelectorAll(".Gift-Image");

  let selectedCount = 0;

  checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        selectedCount++;
        if (selectedCount === 3) {
          checkboxes.forEach((cb) => {
            if (!cb.checked) {
              cb.disabled = true;
            }
          });
          showResults(); // Llamar a la función para mostrar los resultados
        }
      } else {
        selectedCount--;
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
      }
    });
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

// document.addEventListener("DOMContentLoaded", function () {
//   const checkboxes = document.querySelectorAll('input[type="checkbox"]');
//   const giftImages = document.querySelectorAll(".Gift-Image");

//   let selectedCount = 0;

//   checkboxes.forEach((checkbox) => {
//     checkbox.addEventListener("change", function () {
//       if (this.checked) {
//         selectedCount++;
//         if (selectedCount === 3) {
//           checkboxes.forEach((cb) => {
//             if (!cb.checked) {
//               cb.disabled = true;
//             }
//           });
//         }
//       } else {
//         selectedCount--;
//         checkboxes.forEach((cb) => {
//           cb.disabled = false;
//         });
//       }
//     });
//   });

//   function generateRandomGifts() {
//     let giftsArray = [1, 1, 1, 1];
//     let randPosition = Math.floor(Math.random() * 4);

//     giftsArray[randPosition] = 0;

//     for (let i = 0; i < 4; i++) {
//       var giftBox = document.getElementById("Checkbox" + (i + 1));

//       giftBox.setAttribute("data-valor", giftsArray[i]);

//       giftBox.addEventListener("click", function () {
//         let giftValue = parseInt(this.getAttribute("data-valor"));

//         if (giftValue === 0) {
//           giftImages[i].src = "./assets/christmas-tree_616662.png"; // Mostrar el árbol de Navidad
//           giftImages[i].alt = "Árbol de Navidad";
//         } else {
//           giftImages[i].src = "./assets/christmas-cat.png"; // Mostrar el gatito
//           giftImages[i].alt = "Gatito";
//         }
//       });
//     }
//   }

//   // Llamar a la función para iniciar el juego
//   generateRandomGifts();
// });
