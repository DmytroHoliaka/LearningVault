const fibCache = new Map();

console.log(fibWithRecursion(3)); // 2
console.log(fibWithRecursion(7)); // 13
// console.log(fibWithRecursion(77)); // 5527939700884757

console.log(fibWithRecursionAndCaching(3)); // 2
console.log(fibWithRecursionAndCaching(7)); // 13
console.log(fibWithRecursionAndCaching(77)); // 5527939700884757

console.log(fibWithLoop(3)); // 2
console.log(fibWithLoop(7)); // 13
console.log(fibWithLoop(77)); // 5527939700884757

function fibWithRecursion(n) {
  if (n <= 0) {
    return NaN;
  } else if (n === 1 || n === 2) {
    return 1;
  }

  return fibWithRecursion(n - 1) + fibWithRecursion(n - 2);
}

function fibWithRecursionAndCaching(n) {
  if (n <= 0) {
    return NaN;
  } else if (n === 1 || n === 2) {
    return 1;
  }

  let firstFib = fibCache.get(n - 1);
  let secondFib = fibCache.get(n - 2);

  if (!firstFib) {
    firstFib = fibWithRecursionAndCaching(n - 1);
    fibCache.set(n - 1, firstFib);
  }

  if (!secondFib) {
    secondFib = fibWithRecursionAndCaching(n - 2)
    fibCache.set(n - 2, secondFib);
  }

  return firstFib + secondFib;
}

function fibWithLoop(n) {
  const fibNumbers = [1, 1];

  for (let i = 1; i < n; ++i) {
    fibNumbers.push(fibNumbers[i] + fibNumbers[i - 1]);
  }

  return fibNumbers[n - 1];
}