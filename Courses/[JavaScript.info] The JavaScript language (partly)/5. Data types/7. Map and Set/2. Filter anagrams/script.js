let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert(aclean(arr)); // [ 'nap', 'teachers', 'ear' ]

function aclean(arr) {
  const cleanedArray = [];

  for (const item of arr) {
    if (!containsAnagram(cleanedArray, item)) {
      cleanedArray.push(item);
    }
  }
  
  return cleanedArray;
}

function containsAnagram(arr, str) {
  for (const item of arr) {
    if (isAnagram(item, str)) {
      return true;
    }
  }

  return false;
}

function isAnagram(original, candidate) {
  if (original.length !== candidate.length) {
    return false;
  }

  let originalLetters = convertToMap(original);
  let candidateLetters = convertToMap(candidate);

  if (originalLetters.length !== candidateLetters.length) {
    return false;
  }

  for (const [letter, count] of originalLetters) {
    if (candidateLetters.get(letter) !== count) {
      return false;
    }
  }

  return true;
}

function convertToMap(str) {
  str = str.toLowerCase();
  let letters = new Map();

  for (const letter of str) {
    if (letters.has(letter)) {
      letters.set(letter, letters.get(letter) + 1);
    } else {
      letters.set(letter, 1);
    }
  }

  return letters;
}