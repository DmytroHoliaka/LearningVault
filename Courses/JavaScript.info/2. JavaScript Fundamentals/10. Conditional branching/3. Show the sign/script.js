const enteredNumber = +prompt("Enter the number to compare", 0);
let output;

if (enteredNumber > 1){
    output = 1
} else if (enteredNumber === 0) {
    output = 0
} else {
    output = -1;
}

alert(output);