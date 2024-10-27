const name = "Rohit";

const repoCount = 2;

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}` )

const gameName = new String('Counter-Strike-Global-Offensive');

// console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.length)

console.log(gameName.indexOf('O'));


const newString = gameName.substring(0,10);
console.log(newString)

const anotherString = gameName.slice(-28,15);
console.log(anotherString);


const newStringOne = "    Rohit    ";
console.log(newStringOne)
console.log(newStringOne.trim());

const url = "https://swswbs-survey.com/take%20survey";
console.log(url.replace('%20','-'));

console.log(url.includes('usw'));

console.log(gameName.split('-'));






