let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(strings)); // Hare, Krishna, :-O

function unique(arr) {
  return arr.filter((val, idx) => arr.indexOf(val) === idx);
}