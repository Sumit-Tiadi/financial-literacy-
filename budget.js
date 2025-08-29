function calculateBudget() {
  let income = parseFloat(document.getElementById("income").value);
  let expenses = parseFloat(document.getElementById("expenses").value);
  let result = document.getElementById("result");

  if(isNaN(income) || isNaN(expenses)) {
    result.innerText = "⚠️ Please enter valid numbers!";
    return;
  }

  let savings = income - expenses;
  if (savings >= 0) {
    result.innerText = `✅ You saved ₹${savings} this month!`;
  } else {
    result.innerText = `❌ You overspent by ₹${Math.abs(savings)}.`;
  }
}
