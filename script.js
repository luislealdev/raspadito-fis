var input = document.getElementById('Main-Input');
var button = document.getElementsByClassName('Main-Input-Button');

function evaluateInputState() {
    if (input.value === '') {
        console.log('V: '+input.value);
      button.style.display = 'none';
    } else {
        console.log('V: '+input.value);
      button.style.display = 'block';
    }
}