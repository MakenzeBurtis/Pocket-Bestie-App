const questionContainer = document.getElementById('question-container');
const responseEl = document.getElementById('response');
const resetBtn = document.getElementById('reset-btn');

let currentQuestionIndex = 0;
let selectedAnswers = [];

const questions = [
  {
    text: "What did Brandon say this time?",
    options: [
      "He forgot our anniversary",
      "He burnt dinner",
      "He lost his keys",
      "He tried to fix the sink and flooded the kitchen"
    ]
  },
  {
    text: "How did he react?",
    options: [
      "He blamed the dog",
      "He said it wasn’t his fault",
      "He tried to fix it again and made it worse",
      "He just laughed it off"
    ]
  }
];

const responses = {
  "He forgot our anniversary": "Brandon, are you trying to test if love is patient or just plain forgetful?",
  "He burnt dinner": "Congrats Brandon, Michelin star for charcoal cooking!",
  "He lost his keys": "If Brandon had a dollar for every lost key, he’d be richer than Bezos.",
  "He tried to fix the sink and flooded the kitchen": "Brandon’s plumbing skills: 10/10 disaster level.",
  "He blamed the dog": "Classic Brandon move — blame the innocent!",
  "He said it wasn’t his fault": "Denial is Brandon’s superpower.",
  "He tried to fix it again and made it worse": "Round two, Brandon? The sequel no one asked for.",
  "He just laughed it off": "Brandon’s motto: Laugh first, clean later."
};

function showQuestion(index) {
  questionContainer.innerHTML = ""; // clear previous question/buttons
  responseEl.textContent = ""; // clear previous response

  if (index < questions.length) {
    const question = questions[index];
    const questionEl = document.createElement('h3');
    questionEl.textContent = question.text;
    questionContainer.appendChild(questionEl);

    question.options.forEach(option => {
      const btn = document.createElement('button');
      btn.textContent = option;
      btn.addEventListener('click', () => {
        selectedAnswers.push(option);
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
      });
      questionContainer.appendChild(btn);
    });
  } else {
    // All questions answered, show roast response
    showResponse();
  }
}

function showResponse() {
  questionContainer.innerHTML = ""; // clear questions/buttons
  // Create the combined roast response based on selected answers
  let roast = "Here's what I think about Brandon:\n\n";
  selectedAnswers.forEach(answer => {
    roast += responses[answer] + "\n";
  });
  responseEl.textContent = roast;
}

function resetApp() {
  currentQuestionIndex = 0;
  selectedAnswers = [];
  responseEl.textContent = "";
  showQuestion(currentQuestionIndex);
}

// Attach reset button event
resetBtn.addEventListener('click', resetApp);

// Start the app
showQuestion(currentQuestionIndex);

document.getElementById("welcome-screen").addEventListener("click", () => {
  document.getElementById("welcome-screen").classList.add("hidden");
  document.getElementById("main-menu").classList.remove("hidden");
});

