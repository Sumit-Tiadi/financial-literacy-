function trackSavings() {
  let goal = parseFloat(document.getElementById("goal").value);
  let saved = parseFloat(document.getElementById("saved").value);
  let progress = document.getElementById("progress");

  if(isNaN(goal) || isNaN(saved)) {
    progress.innerText = "⚠️ Please enter valid numbers!";
    return;
  }

  let percent = Math.min((saved / goal) * 100, 100);
  progress.innerHTML = `💰 You saved ₹${saved} of ₹${goal} (${percent.toFixed(1)}%)`;

  if (percent >= 100) {
    progress.innerHTML += "<br>🎉 Goal Achieved!";
  }
}
