console.log(sum(1)(2));   // 3
console.log(sum(5)(-1));  // 4

function sum (firstOperand) {
  return function (secondOperand) {
    return firstOperand + secondOperand;
  }
}