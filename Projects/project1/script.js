const calculateBtn = document.getElementById("calculateBtn");
const principleInput = document.getElementById("principle");
const interestRateInput = document.getElementById("interest_rate");
const tenureInput = document.getElementById("tenure");
const resultText = document.getElementById("result");

calculateBtn.addEventListener("click", function () {
  // Get values from inputs
  const principle = parseFloat(principleInput.value);
  const interestRate = parseFloat(interestRateInput.value) / 100; // convert to decimal
  const tenure = parseFloat(tenureInput.value);

  // Calculate maturity amount (assuming simple interest)
  const maturityAmount = principle * (1 + interestRate * tenure);

  // Display the result
  resultText.textContent = `Maturity Amount: ₹ ${maturityAmount.toFixed(2)}`;
});
