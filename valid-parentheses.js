
const isValid = (str) => {
    const stack = [];
    if(str.length % 2 !== 0) return false;
    
    const map = {
        "{": "}",
        "(": ")",
        "[": "]",
    }
    
    for(const char of str) {
        if (map[char]) {
           stack.push(map[char])
        } else {
            const top = stack.pop();
            if(top !== char) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}


console.log(isValid("()[]{}")); // true
console.log(isValid("([{}])")); // true
console.log(isValid("(]"));     // false
console.log(isValid("([)]"));   // false