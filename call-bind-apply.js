Function.prototype.myCall = function(context = {}, ...args) {
  if (typeof this !== 'function') {
    throw new Error(this + " is not callable");
  }
  // Create a unique property to avoid overwriting existing ones
  const fnSymbol = Symbol();
  context[fnSymbol] = this;
  
  // Execute the function with arguments and capture result
  const result = context[fnSymbol](...args);
  
  // Clean up the temporary property
  delete context[fnSymbol];
  
  return result;
};

/*********************************************************************** */
Function.prototype.myApply = function(context = {}, args = []) {
  if (typeof this !== 'function') {
    throw new Error(this + " is not callable");
  }
  if (!Array.isArray(args)) {
    throw new TypeError('CreateListFromArrayLike called on non-object');
  }

  const fnSymbol = Symbol();
  context[fnSymbol] = this;
  
  const result = context[fnSymbol](...args);
  
  delete context[fnSymbol];
  return result;
};

/************************************************************** */

Function.prototype.myBind = function(context, ...args) {
  if (typeof this !== 'function') {
    throw new Error(this + " cannot be bound as it's not callable");
  }
  const self = this;
  
  return function(...newArgs) {
    // Combine arguments from the bind call and the later invocation
    return self.apply(context, [...args, ...newArgs]);
  };
};

/************************************************************** */