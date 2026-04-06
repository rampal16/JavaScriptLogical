const fibo = (n, cache={}) => {
    if(cache[n]) return cache[n];
    
    if(n <=1 ) return n;

    cache[n] = fibo(n -1, cache) + fibo(n - 2, cache);
    
    return cache[n];
}

console.log(fibo(4))
console.log(fibo(5))
console.log(fibo(6))
console.log(fibo(7))