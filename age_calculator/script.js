document.addEventListener("DOMContentLoaded", function () {
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("age").setAttribute("max", today);
});
function calculateAge() {
  const dobInput = document.getElementById("age").value;
  const result = document.getElementById("result");
  if (!dobInput) {
    result.textContent = "Please enter your DOB to calculate your age.";
    result.style.color = "red";
    return;
  }
  const dob = new Date(dobInput);
  const today = new Date();
  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();
  if (months < 0) {
    years--;
    months += 12;
  }
  if (days < 0) {
    months--;
    const previousMonth = new Date(
      today.getFullYear(),
      today.getMonth - 1,
      0
    ).getDate();
  }
  result.textContent = `Your age is ${years} years, ${months} months and ${days} days`;
  result.style.color = "black";
}
