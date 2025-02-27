// f1000 passes calls to f at maximum once per 1000 ms
let decorator = throttle(f, 500);

let counter = 0;
setInterval(() => {
  decorator(counter);
  counter += 1;
}, 100);

function f(a) {
  console.log(a);
}

function throttle(fn, timeout) {
  let latestArgs = undefined;
  
  throttle.configureInterval = () => {
    setInterval(function curr() {
      if (!latestArgs) {
        return;
      }

      fn.apply(this, latestArgs);
      latestArgs = null;
    }, timeout);
  };

  return function (...args) {
    if (latestArgs === undefined){
      fn.apply(this, args);
      throttle.configureInterval();
    }
    
    latestArgs = args;
  }
}