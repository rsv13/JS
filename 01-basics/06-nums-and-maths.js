const score = 90;
// console.log(score);

const balance = new Number (400);
// console.log(balance); //returns a new object with the datatype mentioned

// console.log(balance.toFixed(2)); //gives decimals upto the number mentioned in parameter

const price = 23.89955
// console.log(price.toPrecision(2)); //Gives precision value starting from index 0


const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN')); //usually follows US standards



//+++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); //Changes negative to positive value and not the other way around

// console.log(Math.round(4.6)); //Rounds of the number 

// console.log(Math.ceil(4.2)); // chooses the top value and rounds of to the next number

// console.log(Math.floor(6.1)); //chooses the base value and displays the main decimal unit even if the value is bigger than 5 after decimal

// console.log(Math.min(4,3,6,9)); //helps to find minimum value
// console.log(Math.max(4,3,8,9)); //helps to find maximum value

// console.log(Math.random());
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min))





