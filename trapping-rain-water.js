// Trapping Rain Water

var trap = function(arr) {
    if (!arr || arr.length === 0) return 0;

    let left = 0;
    let right = arr.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let totalWater = 0;

    while (left < right) {
        if (arr[left] < arr[right]) {
            // Update leftMax or calculate trapped water
            if (arr[left] >= leftMax) {
                leftMax = arr[left];
            } else {
                totalWater += leftMax - arr[left];
            }
            left++;
        } else {
            // Update rightMax or calculate trapped water
            if (arr[right] >= rightMax) {
                rightMax = arr[right];
            } else {
                totalWater += rightMax - arr[right];
            }
            right--;
        }
    }

    return totalWater;
};

const nums = [2, 1, 5, 3, 1, 0, 4];
console.log(trap(nums));
// Output: 9