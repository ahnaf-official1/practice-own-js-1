/*
Fibonacci formula (n) = (n-1) th term + (n-2) th term
*/
// Using for loop
const fibo = [0, 1];
for (let i = 2; i <= 10; i++){
        fibo[i] = fibo [i-1] + fibo[i-2];
}
console.log(fibo);

// Using function

function fibonacciSeries(number){
    if(typeof num != 'number'){
        return 'Please give a number';
    }
    if(num < 2){
        return 'Please give a positive value greater than 1';
    }
    const fibo = [0,1];
    for(let i =2; i <= number; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
const fiboSeries = fibonacciSeries(20);
console.log(fiboSeries);