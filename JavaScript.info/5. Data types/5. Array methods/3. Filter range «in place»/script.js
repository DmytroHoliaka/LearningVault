let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
alert(arr); // [3, 1]

function filterRangeInPlace(arr, a, b) {
  for (const item of arr) {
    if (item < a || item > b) {
      removeItem(arr, item);
    }
  }
}

function removeItem(arr, item){
  const idx = arr.indexOf(item);

  if (idx !== -1) {
    arr.splice(idx, 1);
  }
}