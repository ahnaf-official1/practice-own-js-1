var first = 4;
var second = 9;
console.log(first, second);

// First approach using swap
var temp = first;
first = second;
second= temp;
console.log(first, second);

// Destructuring

[first, second] = [second , first];
console.log(second, first);