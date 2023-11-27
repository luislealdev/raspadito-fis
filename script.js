var input = document.getElementById('Main-Input');
var button = document.getElementById('Main-Input-Button');

function evaluateInputState() {
    if (input.value === '') {
        button.style.display = 'none';
    } else {
        button.style.display = 'block';
    }
}