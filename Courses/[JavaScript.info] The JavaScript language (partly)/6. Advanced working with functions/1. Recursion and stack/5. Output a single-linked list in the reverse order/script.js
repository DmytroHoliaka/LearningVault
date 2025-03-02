let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

printListWithRecursion(list);
console.log()
printListWithLoop(list);

function printListWithRecursion(list) {
  if (!list) {
    return;
  }

  printListWithRecursion(list.next);
  console.log(list.value);
}

function printListWithLoop(list) {
  const values = [];
  let currList = list;

  while (currList) {
    values.push(currList.value);
    currList = currList.next;
  }

  values.reverse().forEach(v => console.log(v));
}