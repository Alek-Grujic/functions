"use strict";

let isPromptOpen = false;

const poll = {
  question: "What is your favorite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    if (isPromptOpen) {
      const anw = document.querySelector("#inputBestLanguage").value;
      if (anw === "") {
        console.error("Pick a language!");
        return;
      }
      let numAnw = Number(anw);
      if (
        numAnw >= 0 &&
        numAnw < this.options.length &&
        Number.isInteger(numAnw)
      ) {
        this.answers[numAnw]++;
        this.displayResults(`string`);
        // this.displayResults(`array`);
        // this.displayResults();
        return;
      }
      console.error("Not an option!");
    }
    if (!isPromptOpen) {
      prompt.classList.remove("hidden");
      isPromptOpen = true;
      answerButton.disabled = true;
    }
  },
  displayResults(type = `array`) {
    if (type === `string`) {
      let strResult = this.answers.join(", ");
      console.log(`Poll results are: ${strResult}`);
    }
    if (type === `array`) {
      console.log(this.answers);
    }
  },
};

const answerButton = document.querySelector(".poll");
const prompt = document.querySelector(".promptWindow");

// show in browser

document.querySelector(".questionPoll").textContent = poll.question;

for (let i = 0; i < poll.options.length; i++) {
  document.querySelector(`.option${i}`).textContent = poll.options[i];
}

// Open and close functionalities

answerButton.addEventListener("click", poll.registerNewAnswer.bind(poll));

function closeFn() {
  prompt.classList.add("hidden");
  isPromptOpen = false;
  answerButton.disabled = false;
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeFn();
  }
});

document.addEventListener("click", function (e) {
  if (!prompt.contains(e.target) && !answerButton.contains(e.target)) {
    closeFn();
  }
});

// button #press

document
  .querySelector("#press")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

// Bonus task

const arrayObj = [{ answers: [5, 2, 3] }, { answers: [1, 5, 3, 9, 6, 1] }];

function bonus(objArray) {
  const testDataArrays = poll.displayResults;

  for (let key of objArray) {
    testDataArrays.call(key, "string");
  }
}

document
  .querySelector("#bonus")
  .addEventListener("click", bonus.bind(bonus, arrayObj));

answerButton.addEventListener("click", function () {
  window.prompt(this);
});

// example of IIFE function

(function () {
  console.log("blabla");
})();

(() => {
  console.log("blabla2");
})();

// example of clousure

function clousure() {
  let some = 2;

  return function square() {
    console.log(some * 2);
  };
}

let squareOfTwo = clousure();

squareOfTwo();

// second example

// const boardPassengers = function (n, wait) {
//   // const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);
//   console.log(`Will start boarding in ${wait} seconds`);
// };

// const perGroup = 1000;

// boardPassengers(180, 3);

// second exercise of Function section

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
