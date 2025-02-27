console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));
console.log(factorial(10));

function factorial(n) {
  if (n < 0) {
    return NaN;
  } else if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}