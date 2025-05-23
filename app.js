document.addEventListener("DOMContentLoaded", () => {
  const questionContainer = document.getElementById('question-container');
  const responseEl = document.getElementById('response');
  const resetBtn = document.getElementById('reset-btn');
  const welcomeScreen = document.getElementById("welcome-screen");
  const mainMenu = document.getElementById("main-menu");
  const brandonSucksScreen = document.getElementById("brandon-sucks-screen");
  const backToMenuBtn = document.getElementById("back-to-menu-btn");
  const brandonBtn = document.querySelector('.menu-btn:nth-child(1)');

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
    "He forgot our anniversary": "Brandon, are you trying to test if love is pati
