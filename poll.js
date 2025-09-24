"strict mode";

const poll = {
  question: "What is your favorite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    this.displayResults();
  },
  displayResults() {
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
      let strResult = this.answers.join(", ");
      console.log(`Poll results are: ${strResult}`);
      return;
    }
    console.error("Not an option!");
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
