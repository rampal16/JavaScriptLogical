// Maximum Subarray
const maxSubArray = (arr) => {
    if(arr.length === 0) return 0;
    
    let currentMaxSum = arr[0];
    let globalMaxSum = arr[0];
    
    for(let i=0; i< arr.length; i++) {
        currentMaxSum = Math.max(arr[i], currentMaxSum + arr[i]);
        globalMaxSum = Math.max(currentMaxSum, globalMaxSum);
    }
    
    return globalMaxSum;
}

const nums1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums1)); 
// Output: 6 ([4, -1, 2, 1])

const nums2 = [2, 3, -8, 7, -1, 2, 3]
console.log(maxSubArray(nums2)); 
// Output: 11
// Explanation: The subarray [7, -1, 2, 3] has the largest sum 11.

const nums3 = [-2, -4]
console.log(maxSubArray(nums3)); 
// Output: -2
// Explanation: The subarray [-2] has the largest sum -2.
