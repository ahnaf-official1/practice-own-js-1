/*
Fibonacci formula (n) = (n-1) th term + (n-2) th term
*/
// Fibonacci term,
function fibonacci(n){
    if( n== 0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}
const fiboNumbers = fibonacci(6);
console.log(fiboNumbers);

// Series

function fibonacciSeries(n){
    if( n== 0){
        return [0];
    }
    if(n==1){
        return [0,1];
    }
    const fibo = fibonacciSeries(n-1);
    fibo[n]= fibo[n-1] + fibo[n-2];
    return fibo;
}
const fiboNumbers = fibonacciSeries(6);
console.log(fiboNumbers);