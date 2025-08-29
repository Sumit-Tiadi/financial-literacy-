let categories = [];
let amounts = [];

const ctx = document.getElementById("expenseChart").getContext("2d");
let chart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: categories,
    datasets: [{
      data: amounts,
      backgroundColor: ["#ff6384","#36a2eb","#ffce56","#8bc34a","#ff9800"]
    }]
  }
});

function addExpense() {
  let category = document.getElementById("category").value;
  let amount = parseFloat(document.getElementById("amount").value);

  if(category && !isNaN(amount)) {
    categories.push(category);
    amounts.push(amount);
    chart.update();
  }
}
