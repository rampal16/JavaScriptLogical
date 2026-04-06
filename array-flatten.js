
const arr = [1, [2, [3, 4]]];
console.log(arr.flat(2)); // Output: [1, 2, 3, 4]

Array.prototype.myFlat = function(depth=1) {
    const flatten = (arr, currentDepth) => {
        if(currentDepth <=0) return arr.slice();
        
        return arr.reduce((acc, val) => {
            return acc.concat(Array.isArray(val) ? flatten(val, currentDepth -1) : val)
        },[])
        
    }
    return flatten(this, depth);
}

console.log(arr.myFlat(2)); // Output: [1, 2, 3, 4]
