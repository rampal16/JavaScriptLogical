const throttle = (func, interval) => {
    let throttled = false;
    return function(...args) {
       if(!throttled) {
           func.apply(this, args);
           throttled = true;
           
           setTimeout(() => {
               throttled = false;
           }, interval)
       }
    }
}

/********************************************************* */

const debou = (func, delay) => {
    let timeout;
    
    return function(...args) {
        if(timeout) clearTimeout(timeout);
        
        timeout = setTimeout(() => {
            func.apply(this, args)
        }, delay)
        
    }
}
