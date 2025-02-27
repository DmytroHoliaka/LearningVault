function User() {
  this.name = "Dmytro";
  this.age = 20;
}

// Breaks obj.constructor();
User.prototype = {};

let user1 = new User();
console.log(user1);

let user2 = new user1.constructor();
console.log(user2);