console.log(sum(1)(2) == 3)
console.log(sum(1)(2)(3) == 6)
console.log(sum(5)(-1)(2) == 6)
console.log(sum(6)(-1)(-2)(-3) == 0)
console.log(sum(0)(1)(2)(3)(4)(5) == 15)

function sum(operand) {
  const operands = [operand];

  function fluentSum(innerOperand) {
    operands.push(innerOperand);
    return fluentSum;
  }

  fluentSum.toString = function () {
    return operands.reduce((partial, curr) => partial + curr, 0);
  }

  return fluentSum;
}