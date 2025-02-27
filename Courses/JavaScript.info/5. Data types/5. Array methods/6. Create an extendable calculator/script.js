function Calculator() {
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  }

  this.calculate = (str) => {
    const components = str.split(' ');

    if (components.length !== 3) {
      return NaN;
    }

    const firstOperand = +components[0];
    const operation = components[1];
    const secondOperand = +components[2];

    return this.methods[operation]?.(firstOperand, secondOperand);
  }

  this.addMethod = (name, func) => {
    this.methods[name] = func;
  }
}


let calc = new Calculator();
alert(calc.calculate("3 + 7")); // 10

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert(result); // 8