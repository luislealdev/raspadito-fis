var input = document.getElementById('Main-Input');
var button = document.getElementById('Main-Input-Button');
var checkboxes = document.querySelectorAll('#Checkbox');
let checksCounter = 0;
let indexes = [1,2,3,4]
let checkBoxes = [];

checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        checksCounter++;
        checkBoxes.push(parseInt(checkbox.classList));
        if(checksCounter === 3){
            let notChecked = indexes.filter(index => !checkBoxes.includes(index));
            checkBoxNotChecked = document.getElementsByClassName(notChecked);
            console.log(checkBoxNotChecked);
            //checkBoxNotChecked.style.display = 'none';
        }
    });
});

function evaluateInputState() {
    if (input.value === '') {
        button.style.display = 'none';
    } else {
        button.style.display = 'flex';
    }
}