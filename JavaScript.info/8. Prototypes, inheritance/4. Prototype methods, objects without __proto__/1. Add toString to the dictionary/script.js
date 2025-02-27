let dictionary = Object.create(null);

Object.defineProperty(dictionary, "toString", {
  value: () => this.keys().join(", "),
  writable: false,
  enumerable: false,
  configurable: false,
})

// add some data
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__ is a regular property key here

// only apple and __proto__ are in the loop
for(let key in dictionary) {
  alert(key); // "apple", then "__proto__"
}

// your toString in action
alert(dictionary); // "apple,__proto__"