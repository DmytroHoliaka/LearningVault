Function.prototype.defer = function (timeout) {
  let func = this;
  return function (...args) {
    setTimeout(() => func.apply(this, args), timeout);
  }
}

function f(a, b) {
  alert(a + b);
}

f.defer(1000)(1, 2); // shows 3 after 1 second