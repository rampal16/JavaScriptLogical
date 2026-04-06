function MyNewPromise(cb){
    let value, error;
    let submitted=false, rejected=false, called=false;
    let onResolve, onReject;
    
    const resolve = (val) => {
        value = val;
        submitted = true;
        
        if(typeof onResolve === 'function' && !called) {
            onResolve(val);
            called = true;
        }
        
    }
    
    const reject = (err) => {
        error = err;
        rejected = true;
        
        if(typeof onReject === 'function' && !called) {
            onReject(err);
            called = true;
        }
    }
    
    this.then = function(thenHandler) {
        onResolve = thenHandler;
        
        if(submitted && !called) {
            onResolve(value);
            called = true;
        }
        return this;
    }
    
    this.catch = function(catchHandler) {
        onReject = catchHandler;
        
        if(rejected && !called) {
            onReject(error);
            called = true;
        }
        
        return this;
    }
    
    try {
        cb(resolve, reject);
    } catch(err) {
        reject(err)
    }
    
}

/*******************************************************************/

Promise.myAll = function(promises) {
    return new Promise((resolve, reject) => {
        let completedCount = 0;
        let result = [];
        
        if(promises.length === 0) resolve([])
        
        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(value => {
                result[index] = value;
                completedCount++;
                
                if(completedCount === promises.length) {
                    resolve(result);
                }
                
            })
            
        })
    })
}
