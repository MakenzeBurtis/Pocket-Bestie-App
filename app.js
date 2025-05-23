document.addEventListener("DOMContentLoaded", () => {
  const welcomeScreen = document.getElementById("welcome-screen");
  const mainMenu = document.getElementById("main-menu");
  const brandonSucksScreen = document.getElementById("brandon-sucks");
  const notImplementedScreen = document.getElementById("not-implemented");

  const questionContainer = document.getElementById("question-container");
  const responseEl = document.getElementById("response");
  const resetBtn = document.getElementById("reset-btn");
  const backToMenuBtn = document.getElementById("back-to-menu-btn");
  const backFromPlaceholderBtn = document.getElementById("back-from-placeholder-btn");

  // Questions and responses for Brandon Sucks quiz
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
    "He forgot our anniversary": "Brandon, are you trying to test if love is patient or just forgetful?",
    "He burnt dinner": "Looks like Brandon’s cooking skills need a little flame control!",
    "He lost his keys": "Lost keys again? Brandon, are you secretly training to be a magician?",
    "He tried to fix the sink and flooded the kitchen": "DIY disaster! Brandon, call a plumber next time!",
    "He blamed the dog": "Classic Brandon move—blame the dog for everything!",
    "He said it wasn’t his fault": "Passing the buck? Brandon’s favorite pastime!",
    "He tried to fix it again and made it worse": "Trying to fix it made it worse? At least he’s persistent!",
    "He just laughed it off": "Laughter is the best defense, huh Brandon?"
  };

  let currentQuestionIndex = 0;

  // Show element and hide others helper
  function showScreen(screen) {
    // Hide all main screens
    welcomeScreen.classList.add("hidden");
    mainMenu.classList.add("hidden");
    brandonSucksScreen.classList.add("hidden");
    notImplementedScreen.classList.add("hidden");

    // Show requested screen
    screen.classList.remove("hidden");
  }

  // Display current question
  function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionContainer.innerHTML = `<h3>${question.text}</h3>`;

    question.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.className = "menu-btn";
      btn.addEventListener("click", () => handleAnswer(option));
      questionContainer.appendChild(btn);
    });

    responseEl.textContent = "";
  }

  // Handle answer selection
  function handleAnswer(selectedOption) {
    responseEl.textContent = responses[selectedOption] || "No response found.";

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      // Show next question after a short delay so user can read response
      setTimeout(() => {
        showQuestion();
      }, 1500);
    } else {
      // Quiz finished
      questionContainer.innerHTML = "<p>Thanks for playing! You can restart or go back to menu.</p>";
    }
  }

  // Reset quiz
  function resetQuiz() {
    currentQuestionIndex = 0;
    showQuestion();
    responseEl.textContent = "";
  }

  // Event listeners

  // Start app by tapping anywhere on welcome screen
  welcomeScreen.addEventListener("click", () => {
    showScreen(mainMenu);
  });

  // Main menu buttons
  mainMenu.querySelectorAll(".menu-btn").forEach(button => {
    button.addEventListener("click", () => {
      const topic = button.getAttribute("data-topic");

      if (topic === "brandon-sucks") {
        currentQuestionIndex = 0;
        showScreen(brandonSucksScreen);
        showQuestion();
      } else {
        // For all others, show "not implemented" placeholder
        showScreen(notImplementedScreen);
      }
    });
  });

  // Reset button on Brandon Sucks screen
  resetBtn.addEventListener("click", resetQuiz);

  // Back to menu button on Brandon Sucks screen
  backToMenuBtn.addEventListener("click", () => {
    showScreen(mainMenu);
  });

  // Back button on Not Implemented placeholder screen
  backFromPlaceholderBtn.addEventListener("click", () => {
    showScreen(mainMenu);
  });

  // Initially show welcome screen
  showScreen(welcomeScreen);
});
