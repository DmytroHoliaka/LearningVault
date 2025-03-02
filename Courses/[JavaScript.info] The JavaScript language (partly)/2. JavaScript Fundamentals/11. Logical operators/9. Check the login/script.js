const enteredLogin = prompt("Enter the login");

if (enteredLogin === "Admin") {
    const enteredPassword = prompt(`Enter the password for ${enteredLogin}`);

    if (enteredPassword === "TheMaster") {
        alert("Welcome!");
    } else if (!enteredPassword) {
        alert("Cancelled");
    } else {
        alert("I don't know you");
    }
} else if (!enteredLogin) {
    alert("Cancelled");
} else {
    alert("I don't know you");
}