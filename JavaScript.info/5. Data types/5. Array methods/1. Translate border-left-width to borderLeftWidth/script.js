console.log(camelize("background-color") === 'backgroundColor');
console.log(camelize("list-style-image") === 'listStyleImage');
console.log(camelize("-webkit-transition") === 'WebkitTransition');

function camelize(str) {
  const words = str.split('-');
  const modifiedWords = words.map((word, index) => {
    if (index !== 0){
      return word[0].toUpperCase() + word.slice(1);
    }
    
    return word;
  });
  
  return modifiedWords.join('');
}