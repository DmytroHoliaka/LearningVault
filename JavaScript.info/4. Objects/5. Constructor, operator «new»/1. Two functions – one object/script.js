const globalInstance = {};

function A() {
  return globalInstance;
}

function B() {
  return globalInstance;
}

let a = new A();
let b = new B();

alert(a == b); // true