"strict mode";

const poll = {
  question: "What is your favorite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {},
  displayResults() {},
};

document.querySelector(".questionPoll").textContent = poll.question;

for (let i = 0; i < poll.options.length; i++) {
  console.log(poll.options[i]);
  document.querySelector(`.option${i}`).textContent = poll.options[i];
}

const answerButton = document.querySelector(".poll");
const prompt = document.querySelector(".promptWindow");

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
