"use strict";

let animal = {
  jumps: null
};

let rabbit = {
  __proto__: animal,
  jumps: true
};

alert(rabbit.jumps); // Answer: "true" (1)

delete rabbit.jumps;

alert(rabbit.jumps); // Answer: "null" (2)

delete animal.jumps;

alert(rabbit.jumps); // Answer: "undefined" (3)