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

  console.log(list.value);
  printListWithRecursion(list.next);
}

function printListWithLoop(list) {
  let currList = list;
  
  while(currList){
    console.log(currList.value);
    currList = currList.next;
  }
}