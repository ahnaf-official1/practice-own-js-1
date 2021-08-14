// SUm of array

const numbers = [76, 45, 54, 45, 56, 87, 65];
let sum = 0;
for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    sum = sum + element;
}
console.log(sum);

// Sum using function

function arrayTotal(numbers){
    let sum = 0;    
    for(let i = 0; i< numbers.length; i++){
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

const totalDigits = arrayTotal([45,5345,4534,534]);
console.log(totalDigits);