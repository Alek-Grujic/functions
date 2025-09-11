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

const lufthausa = {
  airline: "Lufthausa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthausa.book(239, "Jonas");
lufthausa.book(5643, "John Smith");
console.log(lufthausa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthausa.book;

book.call(eurowings, 23, "Sarah");

// bind method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthausa);

bookEW(23, "Steven Williams");
bookLH(87, "John Markusen");

lufthausa.planes = 300;
lufthausa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthausa.buyPlane.bind(lufthausa));

// const addTax = (rate, value) => value + value * rate;

// console.log(addTax(0.1, 200));

function addTax(rate) {
  return function (value) {
    console.log(value + value * rate);
  };
}

const other = addTax(0.2);

other(200);

addTax(0.1)(200);
