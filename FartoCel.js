// Celsius to Fahrenheit Converter

function temparatureConverter(celsius){
    let fahrenheit = (celsius * 1.8) + 32;
    return fahrenheit;
}
const totalCelsius = 20; //Enter your value
const fahrenheit = temparatureConverter(totalCelsius);
console.log(fahrenheit);

// Fahrenheit to Celsius converter

function temparatureConverter(fahrenheit){
    let celsius = fahrenheit - 32;
    let fahrenheitConverter = celsius * 5/9; 
    return fahrenheitConverter;
}
const totalFahrenheit = 68; //Enter your value
const fahrenheitConverter = temparatureConverter(totalFahrenheit);
console.log(fahrenheitConverter);