"strict mode";

const testData1 = [5, 2, 3];
const testData2 = [1, 5, 3, 9, 6, 1];

const poll = {
  question: "What is your favorite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
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
      // this.displayResults(`string`);
      // this.displayResults(`array`);
      this.displayResults();
      return;
    }
    console.error("Not an option!");
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
  console.log(poll.options[i]);
  document.querySelector(`.option${i}`).textContent = poll.options[i];
}

// open and close functionalities

answerButton.addEventListener("click", function () {
  prompt.classList.remove("hidden");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    prompt.classList.add("hidden");
  }
});

document.addEventListener("click", function (e) {
  if (!prompt.contains(e.target) && !answerButton.contains(e.target)) {
    prompt.classList.add("hidden");
  }
});

// button #press

document
  .querySelector("#press")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

// Bonus task

// const objTest1 = {
//   answers: [5, 2, 3],
// };
// const objTest2 = {
//   answers: [1, 5, 3, 9, 6, 1],
// };

const arrayObj = [{ answers: [5, 2, 3] }, { answers: [1, 5, 3, 9, 6, 1] }];

const testDataArrays = poll.displayResults;

for (let key of arrayObj) {
  testDataArrays.call(key, `string`);
}
