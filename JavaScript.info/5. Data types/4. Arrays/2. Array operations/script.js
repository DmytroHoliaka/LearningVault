// 1
const styles = ["Jazz", "Blues"];
console.log(`Step 1 -> ${styles}`);

// 2
styles.push("Rock-n-Roll");
console.log(`Step 2 -> ${styles}`);

// 3
const middleIndex = getMiddleIndex(styles.length);
styles[middleIndex] = "Classics";
console.log(`Step 3 -> ${styles}`);

function getMiddleIndex(length) {
  if (length === 0) {
    return 0;
  }

  return Math.floor((length - 1) / 2);
}

// 4
const firstItem = styles.shift();
console.log(`Deleted item: ${firstItem}`);
console.log(`Step 4 -> ${styles}`);

// 5
styles.unshift("Rap", "Reggae");
console.log(`Step 5 -> ${styles}`);