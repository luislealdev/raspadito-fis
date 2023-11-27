alert('OLA');
var input = document.getElementsByClassName('Main-Input');
var button = document.getElementById('Main-Input-Button');

if (input.value.trim() === '') {
  button.style.display = 'block';
} else {
  button.style.display = 'none';
}