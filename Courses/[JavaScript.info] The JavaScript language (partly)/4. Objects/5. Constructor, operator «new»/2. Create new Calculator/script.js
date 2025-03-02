let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

function Calculator() {
  this.read = () => {
    this.a = +prompt("Enter the first number: ");
    this.b = +prompt("Enter the first number: ");  
  }
  
  this.sum = () => {
    return this.a + this.b;
  }
  
  this.mul = () => {
    return this.a * this.b;
  }
}