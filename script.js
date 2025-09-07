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

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

console.log(oneWord("Hello world"));
console.log(upperFirstWord("Hello world"));
