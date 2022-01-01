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
