console.log(readNumber());

function readNumber() {
  let number;
  let exit = false;

  do {
    number = prompt("Enter the number: ");

    if (number === '' || number === 'Cancel') {
      exit = true;
      number = null;
    } else if (isFinite(number)) {
      exit = true;
      number = +number;
    }
  } while (!exit);

  return number;
}