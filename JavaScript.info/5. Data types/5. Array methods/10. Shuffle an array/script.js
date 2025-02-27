let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}

for (let key in count) {
  alert(`${key}: ${count[key]}`);
}

function shuffle(array) {
  const clone = array.slice();

  for (let i = 0; i < array.length; ++i) {
    const randomIdx = getRandom(0, clone.length - 1);
    array[i] = clone[randomIdx];
    clone.splice(randomIdx, 1);
  }
}

function getRandom(min, max) {
  min -= 0.5;
  max += 0.5;
  return Math.round(Math.random() * (max - min) + min);
}