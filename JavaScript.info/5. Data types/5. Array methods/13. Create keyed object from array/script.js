let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);
console.log(usersById);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

// The solution for global array:
// function groupById(arr) {
//   return arr.reduce((partial, curr) => [...partial, {[curr.id]: curr}], []);
// }

function groupById(array) {
  return array.reduce((globalObj, currentUsr) => 
      ({...globalObj, [currentUsr.id]: currentUsr}), {});
}