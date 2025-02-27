"use strict";

// Initial code
/*
  function Rabbit() {}
  Rabbit.prototype = {
    eats: true
  };
  
  let rabbit = new Rabbit();
  
  alert( rabbit.eats ); // true
*/

// Step 1
/*
  function Rabbit() {}
  Rabbit.prototype = {
    eats: true
  };
  
  let rabbit = new Rabbit();
  
  Rabbit.prototype = {};
  
  alert( rabbit.eats ); // true
*/


// Step 2
/*  
  function Rabbit() {}
  Rabbit.prototype = {
    eats: true
  };
  
  let rabbit = new Rabbit();
  
  Rabbit.prototype.eats = false;
  
  alert( rabbit.eats ); // false
*/

// Step 3
/*
  function Rabbit() {}
  Rabbit.prototype = {
    eats: true
  };
  
  let rabbit = new Rabbit();
  
  delete rabbit.eats;
  
  alert( rabbit.eats ); // true ?
*/

// Step 4
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

alert( rabbit.eats ); // undefined