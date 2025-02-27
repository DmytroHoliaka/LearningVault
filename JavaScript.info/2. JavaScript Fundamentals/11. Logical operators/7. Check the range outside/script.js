let age = 50;

// First version
if (age < 14 || age > 90) {
    alert("The age is out the rage");
}

// Second version
if (!(age >= 14 && age <= 90)) {
    alert("The age is out the rage");
}