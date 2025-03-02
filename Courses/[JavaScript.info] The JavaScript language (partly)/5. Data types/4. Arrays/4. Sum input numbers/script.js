const sum = sumInput();
console.log(`The sum equals ${sum}`);

function sumInput() {
  const numbers = [];
  let isLastIteration = false;

  while (!isLastIteration) {
    const number = prompt("Enter the number: ");

    if (!number || !isFinite(number) || number === '') {
      isLastIteration = true;
    } else {
      numbers.push(+number);
    }
  }

  return numbers.reduce(
      (partialSum, currentValue) => partialSum + currentValue, 0);
}