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

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");

greeterHey("Jonas");
greeterHey("Steven");

greet("Hello")("Jonas");

const greet = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("hey");
greeterHey("Steven");

greeterHey("John");
greet("Hello")("Alex");
