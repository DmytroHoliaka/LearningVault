let calculator = {
  a: null,
  b: null,

  read() {
    this.a = +prompt("Enter the first number:");
    this.b = +prompt("Enter the second number:");
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());