"use strict";

function sayHi() {
  alert(this.name);
}

sayHi.test = 5;

let bound = sayHi.bind({
  name: "John"
});

alert(bound.test); // what will be the output? why?

// Answer: "undefined" because `this` in `sayHi` refer to the new object