// Original
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

// First version
function checkAge1(age) {
  return age > 18 ? true : confirm('Did parents allow you?');
}


// Second version
function checkAge2(age) {
  return age > 18 || confirm('Did parents allow you?');
}