let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log(topSalary(salaries));

function topSalary(salaries) {
  if (Object.keys(salaries).length === 0) {
    return null;
  }

  let infoArray = Object.entries(salaries);
  let [richestPerson, largestSalary] = infoArray[0];

  for (const [person, salary] of infoArray.slice(1)) {
    if (salary > largestSalary) {
      [richestPerson, largestSalary] = [person, salary];
    }
  }

  return richestPerson;
}