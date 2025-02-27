let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert(sumSalaries(salaries)); // 650

// function sumSalaries(salaries) {
//   let salarySum = 0;
//  
//   for (const salary of Object.values(salaries)) {
//     salarySum += salary;
//   }
//  
//   return salarySum;
// }

function sumSalaries(salaries) {
  return Object.values(salaries)
      .reduce((partial, curr) => partial + curr, 0);
}