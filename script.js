"use strict";

// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 199) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking("LH123");
// createBooking("LH123", 1223);
// console.log(bookings);

// ----------------------------------

// const flight = "LH234";
// const jonas = {
//   name: "Jonas",
//   passport: 3434535,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH543";
//   passenger.name = "Mr. " + passenger.name;

//   if (passenger.passport === 3434535) {
//     alert("Cheched in");
//   } else {
//     alert("Wrong passport");
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// // console.log(oneWord("Hello world"));
// // console.log(upperFirstWord("Hello world"));

// const transformed = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
// };

// transformed("JavaScript is awsome!", upperFirstWord);
// transformed("JavaScript is awsome!", oneWord);

// ----------------------------------

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet("Hey");

// greeterHey("Jonas");
// greeterHey("Steven");

// greet("Hello")("Jonas");

// const greet = (greeting) => {
//   return (name) => {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet("hey");
// greeterHey("Steven");

// greeterHey("John");
// greet("Hello")("Alex");

// -----------------------------------

// const lufthausa = {
//   airline: "Lufthausa",
//   iataCode: "LH",
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthausa.book(239, "Jonas");
// lufthausa.book(5643, "John Smith");
// console.log(lufthausa);

// const eurowings = {
//   airline: "Eurowings",
//   iataCode: "EW",
//   bookings: [],
// };

// const book = lufthausa.book;

// book.call(eurowings, 23, "Sarah");

// // bind method

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthausa);

// bookEW(23, "Steven Williams");
// bookLH(87, "John Markusen");

// lufthausa.planes = 300;
// lufthausa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector(".buy")
//   .addEventListener("click", lufthausa.buyPlane.bind(lufthausa));

// const addTax = (rate, value) => value + value * rate;

// console.log(addTax(0.1, 200));

// function addTax(rate) {
//   return function (value) {
//     console.log(value + value * rate);
//   };
// }

// const other = addTax(0.2);

// other(200);

// addTax(0.1)(200);

// -------------------------------------------------------

// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const promptWindow = document.querySelector(".promptWindow");

const poll = {
  question: "What is your favorite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {},
};

for (let i = 0; i < poll.options.length; i++) {
  console.log(poll.options[i]);
  document.querySelector(`.option${i}`).textContent = poll.options[i];
}

const answerBtn = document.querySelector(".poll");
answerBtn.addEventListener("click", function () {
  promptWindow.classList.remove("hidden");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    promptWindow.classList.add("hidden");
  }
});

document.addEventListener("click", function (e) {
  if (!promptWindow.contains(e.target) && !answerBtn.contains(e.target)) {
    promptWindow.classList.add("hidden");
  }
});
