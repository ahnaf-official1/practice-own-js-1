// // Finding largest number

function LargestelementInAArray(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}
const digits = [845,543,543,345];
const miniusdigits = LargestelementInAArray([-443, -45, -43, -33]); //Negative
const highest = LargestelementInAArray(digits); //positive
console.log('Largest number is' ,miniusdigits);


// Finding smallest number
function LargestelementInAArray(numbers){
    let smallest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element < smallest){
            smallest = element;
        }
    }
    return smallest;
}
const digits = [845,543,543,345];
const miniusdigits = LargestelementInAArray([-443, -45, -43, -33]); //Negative
const highest = LargestelementInAArray(digits); //positive
console.log('Smallest number is' ,miniusdigits);