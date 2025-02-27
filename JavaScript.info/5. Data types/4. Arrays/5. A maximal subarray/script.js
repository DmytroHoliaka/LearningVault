console.log(getMaxSubSum([-1, 2, 3, -9]) === 5);
console.log(getMaxSubSum([2, -1, 2, 3, -9]) === 6);
console.log(getMaxSubSum([-1, 2, 3, -9, 11]) === 11);
console.log(getMaxSubSum([-2, -1, 1, 2]) === 3);
console.log(getMaxSubSum([100, -9, 2, -3, 5]) === 100);
console.log(getMaxSubSum([1, 2, 3]) === 6);

function getMaxSubSum(array) {
  if (array.length === 0) {
    return 0;
  }

  let maxSubSum = 0;

  for (let delta = 0; delta < array.length; ++delta) {
    for (let i = 0; i + delta < array.length; ++i) {
      const subSum = getSum(array, i, i + delta);

      if (subSum > maxSubSum) {
        maxSubSum = subSum;
      }
    }
  }

  return maxSubSum;
}

function getSum(array, start, end) {
  if (start >= array.length ||
      end >= array.length ||
      end < start) {
    return 0;
  }

  let sum = 0;

  for (let i = start; i <= end; ++i) {
    sum += array[i];
  }

  return sum;
}