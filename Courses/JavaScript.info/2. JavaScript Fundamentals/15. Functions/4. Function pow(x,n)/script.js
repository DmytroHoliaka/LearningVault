/*
  pow(3, 2) = 3 * 3 = 9
  pow(3, 3) = 3 * 3 * 3 = 27
  pow(1, 100) = 1 * 1 * ...* 1 = 1
*/

function pow(number, power) {
  if (power <= 0) {
    return;
  }

  return number ** power;
}

const number = +prompt("Enter the number:");
const power = +prompt("Enter the power:");
const result = pow(number, power);

if (result === undefined) {
  alert("The power has to be greater than zero");
} else {
  alert(`${number} ** ${power} = ${result}`);
}
