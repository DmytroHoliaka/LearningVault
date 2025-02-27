let john = {name: "John", surname: "Smith", id: 1};
let pete = {name: "Pete", surname: "Hunt", id: 2};
let mary = {name: "Mary", surname: "Key", id: 3};

let users = [john, pete, mary];

let usersMapped = users.map(u => ({
  id: u.id,
  fullName: `${u.name} ${u.surname}`,
}));

alert(usersMapped[0].id) // 1
alert(usersMapped[0].fullName) // John Smith