function f() {
  alert("Hello!");
}

Function.prototype.defer = function(timeout){
  setTimeout(this, timeout);
}

f.defer(1000); // shows "Hello!" after 1 second