let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();
console.log(rabbit.full); // full
console.log(animal.full); // undefined

// Answer: `this`=`rabbit`, so the `rabbit` will have `full` property