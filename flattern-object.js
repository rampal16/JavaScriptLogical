// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const flattenObject = (obj, parentKey='') => {
    let final = {};
    
    for(const key in obj) {
        const newKey = parentKey ? `${parentKey}.${key}` : key;
        const value = obj[key];
        
        if(typeof value === 'object' && value !== null) {
          final = {...final, ...flattenObject(value, newKey)}
        } else {
            final[newKey] = value
        }
    }
    
    return final;
}

const nested = { a: 1, b: { c: 2, d: { e: 3 } } };
console.log(flattenObject(nested)); 
// Output: { "a": 1, "b.c": 2, "b.d.e": 3 }