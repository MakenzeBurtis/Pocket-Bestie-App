document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const welcomeScreen = document.getElementById("welcome-screen");
  const mainMenu = document.getElementById("main-menu");
  const brandonSucksScreen = document.getElementById("brandon-sucks");
  const questionContainer = document.getElementById('question-container');
  const responseEl = document.getElementById('response');
  const resetBtn = document.getElementById('reset-btn');

  // Variables
  let currentQuestionIndex = 0;
  let selectedAnswers = [];

  // Questions and answers for Brandon Sucks quiz
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

  // Responses for answers
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

  // Show a question by index
  function showQuestion(index) {
    questionContainer.innerHTML = ""; // clear previous question/buttons
    responseEl.textContent = ""; // clear previous response
