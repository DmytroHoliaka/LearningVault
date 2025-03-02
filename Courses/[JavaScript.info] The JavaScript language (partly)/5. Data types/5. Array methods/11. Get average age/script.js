let john = {name: "John", age: 25};
let pete = {name: "Pete", age: 30};
let mary = {name: "Mary", age: 29};

let arr = [john, pete, mary];

alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

function getAverageAge(users) {
  const ageSum = arr.reduce((partialSum, currUser) => partialSum + currUser.age, 0); 
  return ageSum / users.length;
}