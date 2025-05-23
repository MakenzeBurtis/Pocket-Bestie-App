document.addEventListener("DOMContentLoaded", () => {
  const welcomeScreen = document.getElementById("welcome-screen");
  const mainMenu = document.getElementById("main-menu");
  const brandonSucksScreen = document.getElementById("brandon-sucks");
  const questionContainer = document.getElementById('question-container');
  const responseEl = document.getElementById('response');
  const resetBtn = document.getElementById('reset-btn');

  // Questions for Brandon Sucks
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

  let currentQuestionIndex = 0;

  // Function to show question and options
  function showQuestion(index) {
    questionContainer.innerHTML = "";
    responseEl.textContent = "";

    if (index >= questions.length) {
      // Show final response after last question
      responseEl.textContent = "Thanks for venting! Tap Reset to start over.";
      resetBtn.style.display = "inline-block";
      return;
    }

    const question = questions[index];

    // Show question text
    const qText = document.createElement("h3");
    qText.textContent = question.text;
    questionContainer.appendChild(qText);

    // Create buttons for each option
    question.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.classList.add("menu-btn");
      btn.addEventListener("click", () => {
        // Show response for selected answer
        responseEl.textContent = responses[option] || "No response found.";
        currentQuestionIndex++;
        // Delay before showing next question
        setTimeout(() => {
          showQuestion(currentQuestionIndex);
        }, 2000);
      });
      questionContainer.appendChild(btn);
    });
  }

  // Reset quiz state
  function resetQuiz() {
    currentQuestionIndex = 0;
    resetBtn.style.display = "none";
    responseEl.textContent = "";
    showQuestion(currentQuestionIndex);
  }

  // Show main menu
  function showMainMenu() {
    welcomeScreen.classList.add("hidden");
    brandonSucksScreen.classList.add("hidden");
    resetBtn.style.display = "none";
    responseEl.textContent = "";
    questionContainer.innerHTML = "";
    mainMenu.classList.remove("hidden");
  }

  // Show Brandon Sucks screen and start quiz
  function showBrandonSucks() {
    mainMenu.classList.add("hidden");
    welcomeScreen.classList.add("hidden");
    brandonSucksScreen.classList.remove("hidden");
    resetQuiz();
  }

  // Event listener for tap anywhere on welcome screen
  welcomeScreen.addEventListener("click", () => {
    showMainMenu();
  });

  // Add event listeners to menu buttons
  document.querySelectorAll(".menu-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const topic = e.target.getAttribute("data-topic");
      if (topic === "brandon-sucks") {
        showBrandonSucks();
      } else {
        alert("This topic is not implemented yet.");
      }
    });
  });

  // Reset button event
  resetBtn.addEventListener("click", () => {
    resetQuiz();
  });

  // Add Back to Menu button handler
  const backToMenuBtn = brandonSucksScreen.querySelector("button[onclick='goBackToMenu()']");
  backToMenuBtn.addEventListener("click", () => {
    showMainMenu();
  });
});
