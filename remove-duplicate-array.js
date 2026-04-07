// Remove duplicates from a JavaScript array without creating a new array.

function removeDuplicateUsingSet(arr) {
  const seen = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i])) {
      arr.splice(i, 1);
      i--; // Adjust index
    } else {
      seen.add(arr[i]);
    }
  }
}

let sortedNums = [1, 1, 2, 2, 3, 4, 4];
removeDuplicateUsingSet(sortedNums);
console.log(sortedNums); // [1, 2, 3, 4]
