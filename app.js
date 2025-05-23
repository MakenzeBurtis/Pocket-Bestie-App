// app.js - basic logic for Pocket Bestie Roasting App

// Responses database keyed by scenario
const responses = {
  forgotSomething: [
    "Brandon, you forgot again? Classic.",
    "Did Brandon leave his brain at home today?",
    "Honestly, Brandon’s memory is like a sieve.",
  ],
  badAdvice: [
    "Brandon’s advice: 100% guaranteed to backfire.",
    "Trust Brandon? Nope, not today.",
    "Brandon giving advice is peak comedy gold.",
  ],
  sillyArgue: [
    "Brandon arguing? Someone get the popcorn!",
    "He’s wrong and he knows it, but still argues.",
    "Brandon, the king of dumb debates.",
  ]
};

// Elements
const questionEl = document.getElementById('question');
const buttonsEl = document.getElementById('buttons');
const responseEl = document.getElementById('response');

// Current question index and keys for scenarios
const questions = [
  { text: "What did Brandon do?", key: 'forgotSomething', options: ["Forgot something", "Gave bad advice", "Argued silly"] }
];

// Start app
function start() {
  showQuestion(0);
}

function showQuestion(index) {
  const q = questions[index];
  questionEl.textContent = q.text;
  buttonsEl.innerHTML = ''; // clear old buttons

  q.options.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.onclick = () => showResponse(q.key);
    buttonsEl.appendChild(btn);
  });
}

function showResponse(key) {
  const arr = responses[key];
  const randomIndex = Math.floor(Math.random() * arr.length);
  responseEl.textContent = arr[randomIndex];
}

// Initialize app when page loads
window.onload = start;
