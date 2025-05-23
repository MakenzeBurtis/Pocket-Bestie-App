document.addEventListener("DOMContentLoaded", () => {
  // Grab elements by their IDs
  const welcomeScreen = document.getElementById("welcome-screen");
  const mainMenu = document.getElementById("main-menu");
  const brandonSucksScreen = document.getElementById("brandon-sucks");
  const questionContainer = document.getElementById("question-container");
  const responseEl = document.getElementById("response");
  const resetBtn = document.getElementById("reset-btn");
  const backToMenuBtn = document.getElementById("back-to-menu-btn"); // We’ll add this in a sec

  // Since the "Back to Menu" button does not have an id in your HTML, 
  // let’s grab it manually here (for now)
  // This targets the Back to Menu button inside the brandonSucksScreen
  const backBtn = brandonSucksScreen.querySelector("button[onclick='goBackToMenu()']");

  let currentQuestionIndex = 0;
  let selectedAnswers = [];

  // Example questions for "Brandon Sucks" topic
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

  // Sample responses mapped to answers
  const responses = {
    "He forgot our anniversary": "Brandon, are you trying to test if love is patient?",
    "He burnt dinner": "Well, charred food builds character!",
    "He lost his keys": "Classic Brandon move — always keeps life interesting.",
    "He tried to fix the sink and flooded the kitchen": "Plumbing is clearly not his calling!",
    "He blamed the dog": "Poor dog’s reputation is on the line here.",
    "He said it wasn’t his fault": "Ah, the classic denial strategy.",
    "He tried to fix it again and made it worse": "At least he’s persistent!",
    "He just laughed it off": "Sometimes laughter is the best medicine."
  };

  // Show the first question with options as buttons
  function showQuestion() {
    // Clear previous content
    questionContainer.innerHTML = "";
    responseEl.textContent = "";

    // Show question container and response area, hide reset button for now
    questionContainer.classList.remove("hidden");
    responseEl.classList.remove("hidden");
    resetBtn.classList.add("hidden");

    // Get current question
    const question = questions[currentQuestionIndex];

    // Create and add question text
    const questionTitle = document.createElement("h3");
    questionTitle.textContent = question.text;
    questionContainer.appendChild(questionTitle);

    // Create buttons for each option
    question.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.classList.add("menu-btn");
      btn.addEventListener("click", () => selectAnswer(option));
      questionContainer.appendChild(btn);
    });
  }

  // Handle answer selection
  function selectAnswer(answer) {
    selectedAnswers.push(answer);

    // Show the response for that answer
    responseEl.textContent = responses[answer] || "Hmm... no witty response yet!";

    currentQuestionIndex++;

    // If more questions left, show next question after delay
    if (currentQuestionIndex < questions.length) {
      setTimeout(showQuestion, 1500);
    } else {
      // No more questions, show reset button
      questionContainer.classList.add("hidden");
      resetBtn.classList.remove("hidden");
    }
  }

  // Reset quiz to beginning
  function resetQuiz() {
    currentQuestionIndex = 0;
    selectedAnswers = [];
    responseEl.textContent = "";
    resetBtn.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();
  }

  // Function to switch to main menu screen
  function showMainMenu() {
    welcomeScreen.classList.add("hidden");
    brandonSucksScreen.classList.add("hidden");
    questionContainer.classList.add("hidden");
    responseEl.classList.add("hidden");
    resetBtn.classList.add("hidden");

    mainMenu.classList.remove("hidden");
  }

  // Function to switch to Brandon Sucks screen
  function showBrandonSucks() {
    welcomeScreen.classList.add("hidden");
    mainMenu.classList.add("hidden");

    brandonSucksScreen.classList.remove("hidden");
    questionContainer.classList.remove("hidden");
    responseEl.classList.remove("hidden");

    resetBtn.classList.add("hidden");

    currentQuestionIndex = 0;
    selectedAnswers = [];
    showQuestion();
  }

  // When user taps anywhere on welcome screen, show main menu
  welcomeScreen.addEventListener("click", () => {
    welcomeScreen.classList.add("hidden");
    mainMenu.classList.remove("hidden");
  });

  // Listen for clicks on main menu buttons
  mainMenu.addEventListener("click", (e) => {
    if (e.target.classList.contains("menu-btn")) {
      const topic = e.target.getAttribute("data-topic");
      if (topic === "brandon-sucks") {
        showBrandonSucks();
      } else {
        alert("This topic is not implemented yet.");
      }
    }
  });

  // Listen for reset button click
  resetBtn.addEventListener("click", resetQuiz);

  // Listen for back to menu button click
  backBtn.addEventListener("click", showMainMenu);

  // Expose goBackToMenu function globally since your button uses onclick attribute
