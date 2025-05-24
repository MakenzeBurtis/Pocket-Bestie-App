document.addEventListener("DOMContentLoaded", () => {
  // Get all necessary elements
  const welcomeScreen = document.getElementById("welcome-screen");
  const startBtn = document.getElementById("start-btn");
  const mainMenu = document.getElementById("main-menu");
  const brandonSucksScreen = document.getElementById("brandon-sucks");

  const questionContainer = document.getElementById("question-container");
  const responseEl = document.getElementById("response");
  const resetBtn = document.getElementById("reset-btn");
  const backToMenuBtn = brandonSucksScreen.querySelector("button:last-of-type");

  // Questions & answers for Brandon Sucks section
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
    "He forgot our anniversary": "Brandon, are you trying to test if love is patient or just really bad at remembering?",
    "He burnt dinner": "Burnt dinner? Classic Brandon, making a meal out of charcoal!",
    "He lost his keys": "Lost his keys again? Maybe he should start attaching them to his forehead.",
    "He tried to fix the sink and flooded the kitchen": "Leave the plumbing to the pros, Brandon. The kitchen isn’t a water park!",
    "He blamed the dog": "Poor dog, always the scapegoat.",
    "He said it wasn’t his fault": "Classic Brandon, passing the buck like a pro.",
    "He tried to fix it again and made it worse": "Double trouble! Brandon’s repair skills are legendary — for disaster.",
    "He just laughed it off": "At least he’s got a sense of humor!"
  };

  let currentQuestionIndex = 0;

  // Show a screen, hide others
  function showScreen(screen) {
    [welcomeScreen, mainMenu, brandonSucksScreen].forEach(s => {
      if (s === screen) {
        s.classList.remove("hidden");
      } else {
        s.classList.add("hidden");
      }
    });
  }

  // Display current question
  function displayQuestion() {
    questionContainer.innerHTML = "";
    responseEl.textContent = "";

    const currentQuestion = questions[currentQuestionIndex];
    const questionTitle = document.createElement("h3");
    questionTitle.textContent = currentQuestion.text;
    questionContainer.appendChild(questionTitle);

    currentQuestion.options.forEach(optionText => {
      const btn = document.createElement("button");
      btn.textContent = optionText;
      btn.addEventListener("click", () => {
        showResponse(optionText);
      });
      questionContainer.appendChild(btn);
    });
  }

  // Show response for selected answer
  function showResponse(answer) {
    responseEl.textContent = responses[answer] || "Hmm, interesting...";
    resetBtn.style.display = "inline-block";
    questionContainer.style.display = "none";
  }

  // Reset question/response to first question
  function resetQuiz() {
    currentQuestionIndex = 0;
    resetBtn.style.display = "none";
    responseEl.textContent = "";
    questionContainer.style.display = "block";
    displayQuestion();
  }

  // Event listeners

  // Start button on welcome screen
  startBtn.addEventListener("click", () => {
    showScreen(mainMenu);
  });

  // Main menu buttons
  mainMenu.addEventListener("click", (e) => {
    if (e.target.classList.contains("menu-btn")) {
      const topic = e.target.getAttribute("data-topic");
      if (topic === "brandon-sucks") {
        showScreen(brandonSucksScreen);
        resetQuiz();
      } else {
        alert("This section is not implemented yet!");
      }
    }
  });

  // Reset button on Brandon Sucks screen
  resetBtn.addEventListener("click", resetQuiz);

  // Back to menu button
  backToMenuBtn.addEventListener("click", () => {
    showScreen(mainMenu);
  });

  // Initial setup
  resetBtn.style.display = "none";
  showScreen(welcomeScreen);
});
