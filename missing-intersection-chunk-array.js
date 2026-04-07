// Missing number in an array
function findMissingNumber(arr) {
  const n = arr.length + 1; // Since one number is missing
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((acc, curr) => acc + curr, 0);
  
  return expectedSum - actualSum;
}

const nums = [1, 2, 4, 5, 6];
console.log(findMissingNumber(nums)); // Output: 3

/******************************************************************/
// Intersection of arrays 
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

const set2 = new Set(arr2);
const intersection = arr1.filter(item => set2.has(item));

/**********************************************************************/
// chunk array
function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

const data = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(chunkArray(data, 3)); // [[1, 2, 3], [4, 5, 6], [7, 8]]
