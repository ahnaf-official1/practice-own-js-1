// How to fins the largest number in different ways.


const buisness = 300;
const minister = 400;
const army = 650;

// using if else in two numbers
if (buisness > minister){
    console.log('Buisness is greater');
}
else{
    console.log('Minister is greater');
}

// Using if else in three numbers

if(buisness >minister && buisness > army){
    console.log('Buisness is greater');
}
else if(minister > buisness && minister > army){
    console.log('Minister is greater');
}
else{
    console.log('Army is greater');
}

// Using Math Jax

var max = Math.max(buisness , minister, army);
console.log('Largest number is',max);

// Using function in two numbers

function findTheLargest(firstnum, secondnum){
    if(firstnum > secondnum){
        return firstnum;
    }
    else{
        return secondnum;
    }
}
const numbers = findTheLargest( 454, 344);
console.log(numbers);

// Using function in three numbers

function findTheLargestInThree(firstnum, secondnum, thirdnum){
    if(firstnum > secondnum && firstnum>thirdnum){
        return firstnum;
    }
    else if(secondnum > firstnum && secondnum >thirdnum ){
        return secondnum;
    }
    else{
        return thirdnum;
    }
}
const larNumbers = findTheLargestInThree( 454, 344, 876);
console.log(larNumbers);

// Using Math Jax to find minimum number


var min = Math.min(buisness , minister, army);
console.log('Smallest number is',min);
