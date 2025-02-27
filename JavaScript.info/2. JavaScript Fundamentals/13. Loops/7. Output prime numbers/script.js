let lowerLimit = 2;
let upperLimit = 36;
let upperLimitSquareRoot = Math.floor(upperLimit);

for (let num = lowerLimit; num <= upperLimitSquareRoot; ++num) {
  let hasDivisors = false;

  for (let divisor = 2; divisor < num; ++divisor) {
    if (num % divisor === 0) {
      hasDivisors = true;
      break;
    }
  }

  if (!hasDivisors) {
    alert(num);
  }
}