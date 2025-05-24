document.addEventListener("DOMContentLoaded", () => {
  const welcomeScreen = document.getElementById("welcome-screen");
  const mainMenu = document.getElementById("main-menu");
  const brandonSucksScreen = document.getElementById("brandon-sucks-screen");

  const questionContainer = document.getElementById("question-container");
  const responseEl = document.getElementById("response");
  const resetBtn = document.getElementById("reset-btn");
  const backToMenuBtn = document.getElementById("back-to-menu-btn");

  let currentQuestionIndex = 0;

  const questions = [
    {
      text: "What did Brandon do?",
      options: [
        "Forgot your birthday",
        "Ate the last slice",
        "Left the seat up",
        "Lost the remote"
      ]
    },
    {
      text: "How did you react?",
      options: [
        "Screamed internally",
        "Sent 5 passive-aggressive texts",
        "Called your bestie",
        "Went for a walk"
      ]
    }
  ];

  const responses = {
    "Forgot your birthday": "Brandon, get it together.",
    "Ate the last slice": "How dare he.",
    "Left the seat up": "Unforgivable.",
    "Lost the remote": "He must pay.",
    "Screamed internally": "As one does.",
    "Sent 5 passive-aggressive texts": "We all know what those emojis meant.",
    "Called your bestie": "The ultimate therapy.",
    "Went for a walk": "Very mature. We love growth."
  };

  function showQuestion(index) {
    questionContainer.innerHTML = "";
    responseEl.textContent = "";
    const q = questions[index];
    const h3 = document.createElement("h3");
    h3.textContent = q.text;
    questionContainer.appendChild(h3);

    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.onclick = () => {
        responseEl.textContent = responses[option];
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
          setTimeout(() => showQuestion(currentQuestionIndex), 1000);
        }
      };
      questionContainer.appendChild(btn);
    });
  }

  welcomeScreen.addEventListener("click", () => {
    welcomeScreen.classList.add("hidden");
    mainMenu.classList.remove("hidden");
  });

  document.querySelector('[data-topic="brandon-sucks"]').addEventListener("click", () => {
    mainMenu.classList.add("hidden");
    brandonSucksScreen.classList.remove("hidden");
    currentQuestionIndex = 0;
    showQuestion(currentQuestionIndex);
  });

  backToMenuBtn.addEventListener("click", () => {
    brandonSucksScreen.classList.add("hidden");
    mainMenu.classList.remove("hidden");
  });

  resetBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    showQuestion(currentQuestionIndex);
  });
});
