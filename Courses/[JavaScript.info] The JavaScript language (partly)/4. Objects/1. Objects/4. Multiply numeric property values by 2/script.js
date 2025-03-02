// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);
console.log(menu);

function multiplyNumeric(menuObject) {
  for (const key in menuObject) {
    if (typeof menuObject[key] === "number"){
      menuObject[key] *= 2;
    }
  }
}

