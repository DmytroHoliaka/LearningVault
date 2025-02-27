// Property approach
// ==========================
// function makeCounter() {
//   counter.count = 0;
//
//   function counter() {
//     counter.count += 1;
//     return counter.count;
//   }
//
//   counter.set = function (value) {
//     counter.count = value;
//     return counter.count;
//   }
//
//   counter.decrease = function (value) {
//     counter.count -= 1;
//     return counter.count;
//   }
//
//   return counter;
// }

// Closures approach
// ==========================
function makeCounter() {
  let count = 0;
  
  function counter() {
    count += 1;
    return count;
  }
  
  counter.set = function(value) {
    count = value;
    return count;
  }
  
  counter.decrease = function () {
    count -= 1;
    return count;
  }
  
  return counter;
}


let counter = makeCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
console.log(counter()); // 4

console.log(counter.set(100)); // 100

console.log(counter.decrease()); // 99
console.log(counter.decrease()); // 98
console.log(counter.decrease()); // 97
console.log(counter.decrease()); // 95