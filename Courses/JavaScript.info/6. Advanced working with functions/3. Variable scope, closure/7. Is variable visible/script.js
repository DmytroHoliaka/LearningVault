let x = 1;

function func() {
  console.log(x); // Answer: Error

  let x = 2;
}

func();