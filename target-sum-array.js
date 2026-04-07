// Target Sum

const targetSum = (arr, target) => {
    const seen = new Map();
    
    for(let i=0; i<arr.length; i++) {
        const complement = target - arr[i];
        if(seen.has(complement)) {
            return [seen.get(complement), i];
        }
        seen.set(arr[i], i);
    }
    return [];
}

const nums = [11, 15, 2, 7 ];
const target = 9;
console.log(targetSum(nums, target)); // Output: [0, 1] (because 2 + 7 = 9)
