`use strict`;

// Converting and Checking Numbers
// In Javascript Numbers are always in float

console.log(23 === 23.0); // Result - True

// Base 10 Numbers are from 0 to 9
// Base 2 Numbers are from 0 to 1

console.log(0.1 + 0.2); // Result - 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // Result - False

// Converting a String to Number
// General Method
console.log(Number("23")); // Result - 23

// Alternate Method
console.log(+"28"); // Result - 28 Here + indicates javascript converts by type coersion

// Parsing - Inorder to work, a string should always start with a Number

console.log(Number.parseInt("30px", 10)); // Result - 30
console.log(Number.parseInt("e45", 10)); // Result - NaN (Not a Number)
console.log(Number.parseInt("2.5rem")); // Result - 2 (As javascript will consider only the integer part)
console.log(Number.parseFloat("3.8rem")); // Result - 3.8

// To check if a value is NaN (Not a Number)
console.log(Number.isNaN(20)); // Result - False
console.log(Number.isNaN("30")); // Result - False
console.log(Number.isNaN(+"20x")); // Result - True
console.log(Number.isNaN(20 / 0)); // Result - False

// Better way to check if a value is a Number
console.log(Number.isFinite(20)); // Result - True
console.log(Number.isFinite("20")); // Result - False
console.log(Number.isFinite(+"30f")); // Result - False
console.log(Number.isFinite(20 / 0)); // Result - False (as 20 / 0 is Infinity)
console.log(Number.isFinite(20 / 4)); // Result - True

// To check if a value is an Integer
console.log(Number.isInteger(20)); // Result - True
console.log(Number.isInteger(30.0)); // Result - True
console.log(Number.isInteger(20 / 0)); // Result - False
console.log(Number.isInteger(20 / 4)); // Result - True

// Math & Rounding

// Square Root
console.log(Math.sqrt(25)); // Result - 5
console.log(25 ** (1 / 2)); // Result - 5 (using exponential format)
console.log(8 ** (1 / 3)); // Result - 2 (cubic root)

// Maximun & Minimum Value
console.log(Math.max(5, 2, 7, 1, 9)); // Result - 9 (Max Value)
console.log(Math.min(5, 2, 7, 1, 9)); // Result - 1 (Min Value)

// Creating A Random Number
console.log(Math.random()); // This will result in random number from 0 to 1

console.log(Math.trunc(Math.random() * 6) + 1); // This will result in random number from 1 to 6

// Example - Create a function to generate random number between specified conditions

const randomInteger = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min; // instead of trunc use floor for also using negative value

console.log(randomInteger(10, 20)); // Results in random value from 10 to 20

// Rounding Integers

console.log(Math.trunc(43.4)); // Result - 43 (removes the decimal part)

console.log(Math.round(43.3)); // Result - 43 (will round to the nearest integer)
console.log(Math.round(43.9)); // Result - 44

console.log(Math.ceil(43.3)); // Result - 44
console.log(Math.ceil(43.9)); // Result - 44

console.log(Math.floor(43.3)); // Result - 43
console.log(Math.floor(43.9)); // Result - 43
console.log(Math.floor(-43.3)); // Result - -44
console.log(Math.floor(-43.9)); // Result - -44

// Rounding Decimals
console.log((4.7).toFixed(0)); // Result will be a string - 5
console.log(+(4.7).toFixed(0)); // Result will be a number - 5 (as we have added the +)
console.log((4.7).toFixed(3)); // Result will be a string - 4.700 (will add decimal upto 3 digits)
console.log((4.345).toFixed(2)); // Result will be a string - 4.34 (will add decimal upto 2 digits)
