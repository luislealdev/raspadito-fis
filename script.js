var input = document.getElementById('Main-Input');
var button = document.getElementById('Main-Login-Button');
var playButton = document.getElementById('Play-Button');

playButton.addEventListener("click", ()=>{
  console.log('HAY QUE JUGAR');
  generateRandomGifts();
});
// var checkboxes = document.querySelectorAll('#Checkbox');
// let checksCounter = 0;
// let indexes = [1,2,3,4]
// let checkBoxes = [];

// checkboxes.forEach(function(checkbox) {
//     checkbox.addEventListener('change', function() {
//         checksCounter++;
//         checkBoxes.push(parseInt(checkbox.classList));
//         if(checksCounter === 3){
//             let notChecked = indexes.filter(index => !checkBoxes.includes(index));
//             checkBoxNotChecked = document.getElementsByClassName(notChecked);
//             console.log(checkBoxNotChecked);
//             //checkBoxNotChecked.style.display = 'none';
//         }
//     });
// });

// Login Button
let winner = true;

function evaluateInputState() {
  if (input.value === "") {
    button.style.display = "none";
  } else {
    button.style.display = "flex";
  }
}

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



