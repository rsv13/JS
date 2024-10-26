//Based on how the data is saved in memory and the way used to access the same, the datatype is differentiated into two types primitive and non-primitive

// In short, whether the data is retrieved using callByValue or CallByReference.

//Primitive DataType - There are 7 datatypes (CallByValue) - When the value is copied rather than the original reference where the data is stored.
// 1. String
// 2.Number
// 3. Boolean
// 4. null
// 5. undefined
// 6. Symbol
// 7. BigInt


const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

//const bigNumber = 231312423849273123862837123n;


//Non-Primitive Datatype (CallByReference) - 
// 1. Array
// 2. Objects
// 3. Functions

// Javascript is dynamically type programming language

//Array
const heroes = ["Shaktiman", "Superman", "Spiderman"];

//Object
let Obj = {
    name : "Rohit",
    age: 31,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);

console.log(typeof Obj)



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack, Heap - Types of Memory

// Primitive datatypes use Stack Memory

// Non-Primitive datatypes use Heap Memory.

let mySurvey = "SWSWBSSurveydotcom"
