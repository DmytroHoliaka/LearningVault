printNumbers(1, 10);

// Approach with setInterval
// =================================
function printNumbers(from, to) {
  let current = from;

  const timerId = setInterval(() => {
    if (current <= to) {
      console.log(current);
      current += 1;
    } else {
      clearTimeout(timerId);
    }
  }, 1000);
}

// Approach with setTimeout
// =================================
// function printNumbers(from, to) {
//   let current = from;
//
//   setTimeout(function curr() {
//     if (current <= to) {
//       console.log(current);
//       current += 1;
//       setTimeout(curr, 1000);
//     }
//   })
// }