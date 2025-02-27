const messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

const timedMessages = new WeakMap();

timedMessages.set(messages[0], Date());
timedMessages.set(messages[0], Date());
timedMessages.set(messages[1], Date());
timedMessages.set(messages[1], Date());
timedMessages.set(messages[2], Date());

console.log(timedMessages.get(messages[0]));
console.log(timedMessages.get(messages[1]));
console.log(timedMessages.get(messages[2]));