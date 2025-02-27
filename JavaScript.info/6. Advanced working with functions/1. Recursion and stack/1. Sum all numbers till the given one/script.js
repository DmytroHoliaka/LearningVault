/*
  sumTo(1) = 1
  sumTo(2) = 2 + 1 = 3
  sumTo(3) = 3 + 2 + 1 = 6
  sumTo(4) = 4 + 3 + 2 + 1 = 10
  ...
  sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
*/

console.log(sumToWithRecursion(1));
console.log(sumToWithRecursion(4));
console.log(sumToWithRecursion(100));
console.log(sumToWithRecursion(201));
// console.log(sumToWithRecursion(100000));

console.log(sumToWithLoop(1));
console.log(sumToWithLoop(4));
console.log(sumToWithLoop(100));
console.log(sumToWithLoop(201));
console.log(sumToWithLoop(100000));

console.log(sumToWithArithmeticProgression(1));
console.log(sumToWithArithmeticProgression(4));
console.log(sumToWithArithmeticProgression(100));
console.log(sumToWithArithmeticProgression(201));
console.log(sumToWithArithmeticProgression(100000));

function sumToWithRecursion(n) {
  if (n < 1) {
    return NaN;
  } else if (n === 1) {
    return n;
  }

  return n + sumToWithRecursion(n - 1);
}

function sumToWithLoop(n) {
  if (n < 1) {
    return NaN;
  }

  let sum = 1;

  for (let num = n; num >= 2; --num) {
    sum += num;
  }

  return sum;
}

function sumToWithArithmeticProgression(n) {
  if (n < 1) {
    return NaN;
  }
  
  return (n + 1) * (n / 2);
}