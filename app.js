const pro1 = new Promise((resolve, reject) => resolve("Hellow"))
pro1.then(res => console.log(res))

function MyNewPromise(cb){
    debugger;
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

const pro2 = new MyNewPromise((resolve, reject) => resolve("My Hello"))
pro2.then(res => console.log(res))