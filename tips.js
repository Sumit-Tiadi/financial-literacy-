const tips = [
  "Track your expenses daily to know where your money goes.",
  "Save at least 20% of your income every month.",
  "Avoid using credit cards for unnecessary purchases.",
  "Invest early to benefit from compounding.",
  "Always keep an emergency fund ready."
];

function generateTip() {
  let tip = tips[Math.floor(Math.random() * tips.length)];
  document.getElementById("tip").innerText = tip;
}

// Load one tip by default
generateTip();
