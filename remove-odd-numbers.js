// Remove odd numbers from a JavaScript array without creating a new array.

function removeOddNumbers(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] % 2 !== 0) {
        arr.splice(i, 1);
      }
  }
}

let nums = [5, 6, 9,1, 8];
removeOddNumbers(nums);
console.log(nums); // [1, 2, 3, 4]

/********************************************************************* */
function removeOddAndDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      arr.splice(i, 1);
      i--; 
      continue;
    }
    
    // Condition 2: Remove if Duplicate
    if (arr.indexOf(arr[i]) !== i) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let nums2 = [5, 6, 9,1,1,1,1, 8, 7, 4,4,4];
removeOddAndDuplicate(nums2);
console.log(nums2); // [1, 2, 3, 4]
