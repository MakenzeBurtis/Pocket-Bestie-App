// Global variables
let currentQuestionIndex = 0;
let selectedAnswers = [];

// Questions array (keep adding or edit these later)
const questions = [
  {
    text: "What did Brandon do?",
    options: ["Forgot something", "Gave bad advice", "Argued silly"]
  },
  {
    text: "How bad was it?",
    options: ["Mild", "Pretty bad", "Nuclear"]
  },
  {
    text: "How did he respond?",
    options: ["Defensive", "Denied it", "Tried to joke", "Apologized poorly"]
  }
];

// Roast responses keyed by combined answers
const responses = {
  "Forgot something|Mild|Defensive": "Ah yes, Brandon *forgot* and somehow made it your fault. Classic.",
  "Gave bad advice|Pretty bad|Denied it": "Brandon giving advice then pretending he didn’t say it? A mystery for the FBI.",
  "Argued silly|Nuclear|Tried to joke": "When in doubt, joke it out… but you’re still wrong, Brandon.",
  "Gave bad advice|Nuclear|Apologized poorly": "Brandon’s apology was so weak, I actually got mad for you.",
  "Forgot something|Pretty bad|Tried to joke": "Brandon joked? Cool. Tell him he’s also sleeping on the couch tonight.",
  "Argued silly|Mild|Defensive": "Imagine being *loud and wrong.* Now imagine being Brandon."
};

// Grab HTML elements once
const questionContainer = document.getElementById("question-container");
const responseEl = document.getElementById("response");
const resetBtn = document.getElementById("reset-btn");

// Start function resets and begins quiz
function start() {
  currentQuestionIndex = 0;
  selectedAnswers = [];
  responseEl.textContent = "";
  showNextQuestion();
}

// Show question or final roast
function showNextQuestion() {
  questionContainer.innerHTML = "";
  responseEl.textContent = "";

  if (currentQuestionIndex < questions.length) {
    const currentQuestion = questions[currentQuestionIndex];
    const questionEl = document.createElement("div");
    questionEl.textContent = currentQuestion.text;

    currentQuestion.options.forEach(option => {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", () => {
        selectedAnswers.push(option);
        currentQuestionIndex++;
        showNextQuestion();
      });
      questionEl.appendChild(button);
    });

    questionContainer.appendChild(questionEl);
  } else {
    // Show roast based on answers
    const key = selectedAnswers.join('|');
    const roast = responses[key] || "Brandon's chaos is beyond this app. Just roast him manually. 🔥";
    responseEl.textContent = roast;
  }
}

// Reset button event listener
resetBtn.addEventListener("click", () => {
  start();
});

// Initialize the quiz on page load
start();
