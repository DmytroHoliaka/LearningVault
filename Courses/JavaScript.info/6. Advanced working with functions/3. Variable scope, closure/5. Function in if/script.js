"use strict";

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi(); // Answer: "Hello, John" (default mode), Error (strict mode)
