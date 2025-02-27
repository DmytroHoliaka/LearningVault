let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values


function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = () => {
    this.value += +prompt("Enter the number to add to the accumulated value: ");
  }
}