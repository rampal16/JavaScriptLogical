const nums = [3,6,9,2,5]

nums.forEach(item => console.log(item))

Array.prototype.myForEach = function(cb) {
    const arr = this;
    
    for(let i=0; i<arr.length; i++) {
        cb(arr[i], i, arr)
    }
}

console.log("====================================")
nums.myForEach(item => console.log(item))

/*********************************************************************** */
Array.prototype.myMap = function(cb) {
    const arr = this;
    const result = [];
    
    for(let i=0; i<arr.length; i++) {
        result.push(cb(arr[i], i, arr))
    }
    return result;
}
console.log("====================================")
const zz = nums.myMap(item => item * 2)
console.log(zz)


/*********************************************************************** */

Array.prototype.myFilter = function(cb) {
    const arr = this;
    const result = [];
    
    for(let i=0; i<arr.length; i++) {
        if(cb(arr[i], i, arr)) {
            result.push(arr[i])
        }
    }
    return result;
}

console.log("====================================")
const filtered = nums.myFilter(item => item < 6)
console.log(filtered)


/*********************************************************************** */

Array.prototype.myReduce = function(cb, initialValue) {
    let acc = initialValue;
    const arr = this;
    
    for(let i=0; i<arr.length; i++) {
        acc = cb(acc, arr[i], i, arr)
    }
    return acc;
}

console.log("====================================")
const sum = nums.reduce((acc, current) => acc + current, 100)
console.log(sum)



