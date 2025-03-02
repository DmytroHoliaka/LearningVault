let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false

// First version
function isEmpty(object) {
  let propertyCount = 0;

  for (const key in object) {
    propertyCount += 1;
  }

  return propertyCount === 0;
}

// Second version (optimized)
function isEmpty(object) {
  for (const key in object) {
    return false;
  }

  return true;
}