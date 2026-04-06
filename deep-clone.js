
const deepClone = (obj) => {
    const final = {};
    if(typeof obj !== 'object' || obj == null || obj instanceof Date) {
        return obj;
    }
    
    for(const key in obj) {
        if(typeof obj[key] === 'object') {
            final[key] = deepClone(obj[key])
        } else {
            final[key] = obj[key]
        }
    }
    
    return final;
}

const original = { name: "Alice", details: { age: 30 }, date: new Date() };
const copy = deepClone(original);

console.log(original)
console.log(copy)