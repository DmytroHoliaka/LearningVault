let user = {
  name: "John Smith",
  age: 35
};

const userJson = JSON.stringify(user);
console.log(userJson);

const userObj = JSON.parse(userJson);
console.log(userObj);