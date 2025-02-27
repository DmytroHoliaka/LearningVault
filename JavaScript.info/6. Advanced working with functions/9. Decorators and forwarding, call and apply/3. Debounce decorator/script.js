let f = debounce(console.log, 1000);

f("a");
setTimeout(() => f("b"), 200);
setTimeout(() => f("c"), 500);

// debounced function waits 1000ms after the last call and then runs: alert("c")

function debounce(fn, threshold) {
  let latestTimerId;
  
  return function (...args) {
    clearTimeout(latestTimerId);
    latestTimerId = setTimeout(() => fn.apply(this, args), threshold);
  }
}