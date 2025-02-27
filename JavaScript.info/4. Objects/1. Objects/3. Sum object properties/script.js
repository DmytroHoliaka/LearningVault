let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const sum = countSalaries(salaries);
alert(sum);

function countSalaries(salaries) {
  let salariesSum = 0;

  for (const key in salaries) {
    salariesSum += salaries[key];
  }

  return salariesSum;
}