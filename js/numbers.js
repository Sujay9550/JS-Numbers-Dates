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

// The Remainder Operator %

console.log(5 % 2); // Result - 1
console.log(8 % 3); // Result - 2

// Function to check whether a number is even or odd
const checkEven = (number) => {
  return number % 2 === 0;
};

console.log(checkEven(4)); // Result - True
console.log(checkEven(3)); // Result - False

// Dates

const today = new Date();
console.log(today); // Result - Sun Jan 02 2022 12:36:48 GMT+0530 (India Standard Time)

// Passing Date as a string
console.log(new Date("Jan 2 2022")); // Result - Sun Jan 02 2022 00:00:00 GMT+0530 (India Standard Time)
console.log(new Date("Jan 2 2022 02:22:00")); // Result - Sun Jan 02 2022 02:22:00 GMT+0530 (India Standard Time)

// Date, Month, Day, Year
// Months: 0 - Jan, 1 - Feb, 2 - Mar and so on
// Days: 0 - Sun, 1 - Mon, 2 - Tue and so on
const nextdate = new Date(2022, 0, 3); // Format - YYYY/MM/DD
console.log(nextdate); // Result - Mon Jan 03 2022 00:00:00 GMT+0530 (India Standard Time)

const nextdate1 = new Date(2022, 0, 3, 10, 30, 22); // Format - YYYY/MM/DD HR:MN
console.log(nextdate1); // Result - Mon Jan 03 2022 00:00:00 GMT+0530 (India Standard Time)

const nextdate2 = new Date(2022, 0, 3, 10, 0); // Format - YYYY/MM/DD HR:MN
console.log(nextdate2); // Result - Mon Jan 03 2022 10:00:00 GMT+0530 (India Standard Time)

// Date - Methods

console.log(nextdate1.getFullYear()); // Result - 2022
console.log(nextdate1.getMonth()); // Result - 0 (0 - Jan)
console.log(nextdate1.getDate()); // Result - 3
console.log(nextdate1.getDay()); // Result - 1 (1 - Mon)
console.log(nextdate1.getHours()); // Result - 10
console.log(nextdate1.getMinutes()); // Result - 30
console.log(nextdate1.getSeconds()); // Result - 22
console.log(nextdate1.toISOString()); // Result - 2022-01-03T05:00:22.000Z
console.log(nextdate1.getTime()); // Result - 1641186022000 (To get the Timestamp)

// To get the now Timestamp
console.log(Date.now());

// Method to Mutate/Alter the Date
nextdate.setFullYear(2023);
console.log(nextdate); // Result - Tue Jan 03 2023 00:00:00 GMT+0530 (India Standard Time)

// Internationalizing Dates (Intl) - API (Formatting Dates)

const todayDate = new Date();
console.log(todayDate);

const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "long",
  year: "numeric",
  weekday: "long",
};

const formattedDate = new Intl.DateTimeFormat("en-IN", options).format(
  todayDate
);

console.log(formattedDate);

// To get the Date & Time format from the User Browser

const locale = navigator.language;
console.log(locale); // Result - en-US

// Internationalizing Numbers (Intl) - API (Formatting Numbers)

const num = 3243433.54;
const option1 = {
  style: "currency", // style = percent, style = currency
  unit: "mile-per-hour",
  currency: "EUR",
  // useGrouping: false,
};
console.log("US:", new Intl.NumberFormat("en-US", option1).format(num));
console.log("Germany:", new Intl.NumberFormat("de-DE", option1).format(num));
console.log("India:", new Intl.NumberFormat("hi-IN", option1).format(num));
console.log("locale:", new Intl.NumberFormat(locale, option1).format(num));

// Timers - setTimeout and setInterval

// setTimeout - This method uses a callback function and a time (in milliseconds)
// This method simply schedules a function to run after a certain time.

// The below method will execute the function after 3 seconds

setTimeout(() => {
  console.log("Your booking has been accepted");
}, 3000);

// Passing arguments in the setTimeout function

setTimeout(
  (carname, model, color) => {
    console.log(
      `Your booking for ${carname} with model ${model} and color ${color} has been confirmed`
    );
  },
  4000,
  "McLaren",
  2022,
  "Yellow"
);

// To clear a timeout based on certain conditions

const cars = ["Lamborghini", "McLaren", "Audi", "Koenigseggs", "Ferrari"];

const carList = setTimeout(
  (item1, item2, item3, item4, item5) => {
    console.log(
      `Here are the list of cars: ${item1}, ${item2}, ${item3}, ${item4}, ${item5}`
    );
  },
  5000,
  ...cars
);

if (cars.includes("Audi")) clearTimeout(carList); // The clearTimeout method clears the carList Timeout function

// setInterval - This method is used to run a function several times or repeatedly based on certain conditions

setInterval(() => {
  const now = new Date();
  console.log(now);
}, 1000);

setInterval(() => {
  const now = new Date();
  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  };

  const formattedDate = new Intl.DateTimeFormat("en-In", options).format(now);
  console.log(formattedDate);
}, 1000);
