const questions = [
  {
    q: "What is the best way to build savings?",
    options: ["Spend first, save later", "Save first, spend later", "Borrow money", "Ignore savings"],
    answer: 1
  },
  {
    q: "Which of these is a fixed expense?",
    options: ["Electricity bill", "Movie tickets", "House rent", "Shopping"],
    answer: 2
  },
  {
    q: "What does ROI stand for?",
    options: ["Rate of Investment", "Return on Investment", "Revenue on Income", "Risk of Interest"],
    answer: 1
  },
  {
    q: "Which is a good financial habit?",
    options: ["Not tracking expenses", "Impulse buying", "Making a monthly budget", "Spending all income"],
    answer: 2
  },
  {
    q: "What is compound interest?",
    options: ["Interest on principal only", "Interest on interest", "No interest", "Flat payment"],
    answer: 1
  },
  {
    q: "Which is a liability?",
    options: ["Loan", "Gold", "Shares", "Savings"],
    answer: 0
  },
  {
    q: "Why should you diversify investments?",
    options: ["To increase risk", "To reduce risk", "To avoid saving", "To spend more"],
    answer: 1
  },
  {
    q: "What is an emergency fund?",
    options: ["Money for fun", "Money kept aside for unexpected needs", "Money for shopping", "Money for parties"],
    answer: 1
  },
  {
    q: "Which one is a digital payment method?",
    options: ["UPI", "Cash", "Cheque", "Barter"],
    answer: 0
  },
  {
    q: "Which of these grows wealth over time?",
    options: ["Fixed Deposit", "Investments", "Spending", "Borrowing"],
    answer: 1
  }
];

let current = 0;
let score = 0;

function loadQuestion() {
  let q = questions[current];
  document.getElementById("question").innerText = `Q${current+1}. ${q.q}`;
  let optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  q.options.forEach((opt, i) => {
    optionsDiv.innerHTML += `<div><label><input type="radio" name="option" value="${i}"> ${opt}</label></div>`;
  });
}
loadQuestion();

function nextQuestion() {
  let selected = document.querySelector("input[name='option']:checked");
  if (selected && parseInt(selected.value) === questions[current].answer) {
    score++;
  }
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("question").innerText = "🎉 Quiz Completed!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("score").innerText = `✅ Your Score: ${score}/${questions.length}`;
  }
}
