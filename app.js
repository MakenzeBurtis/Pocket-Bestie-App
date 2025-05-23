// app.js - updated for exact response per button

const responses = {
  "Forgot something": "Brandon, you forgot again? Classic.",
  "Gave bad advice": "Brandon’s advice: 100% guaranteed to backfire.",
  "Argued silly": "Brandon arguing? Someone get the popcorn!"
};

const questionEl = document.getElementById('question');
const buttonsEl = document.getElementById('buttons');
const responseEl = document.getElementById('response');

const questions = [
  { 
    text: "What did Brandon do?", 
    options: ["Forgot something", "Gave bad advice", "Argued silly"] 
  }
];

function start() {
  showQuestion(0);
}

function showQuestion(index) {
  const q = questions[index];
  questionEl.textContent = q.text;
  buttonsEl.innerHTML = ''; // clear previous buttons

  q.options.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.onclick = () => showResponse(option);
    buttonsEl.appendChild(btn);
  });

  responseEl.textContent = ''; // clear previous response
}

function showResponse(key) {
  responseEl.textContent = responses[key] || "Hmm... Brandon must be quiet today.";
}

window.onload = start;
