var input = document.getElementById("Main-Input");
var button = document.getElementById("Main-Input-Button");

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

button.addEventListener("click", function (e) {
  e.preventDefault();
  playerName = input.value;
  localStorage.setItem("playerName", playerName);
  window.location.href = "/message.html";
});

function generateRandomGifts() {
  let giftsArray = [1, 1, 1, 1];
  let randPosition = Math.floor(Math.random() * 4);

  giftsArray[randPosition] = 0;

  for (let i = 0; i < 4; i++) {
    var giftBox = document.getElementById("Checkbox" + i);

    giftBox.setAttribute("data-valor", giftsArray[i]);

    giftBox.addEventListener("click", function () {
      let giftValue = parseInt(this.getAttribute("data-valor"));

      if (giftValue === 0) {
        winner = false;
        console.log("PERDISTE D:");
      }
    });
  }
}
