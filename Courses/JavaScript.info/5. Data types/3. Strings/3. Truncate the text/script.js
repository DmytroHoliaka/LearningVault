console.log(
    truncate("What I'd like to tell on this topic is:", 20) === "What I'd like to te…");
console.log(
    truncate("Hi everyone!", 20) === "Hi everyone!");

function truncate(str, maxLength) {
  if (str.length > maxLength){
    return str.slice(0, maxLength - 1) + '…';
  }
  
  return str;
}