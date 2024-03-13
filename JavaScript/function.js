const sum = (num1, num2) => num1 + num2;
const prompt = require("prompt-sync")();
const num1 = parseFloat(prompt("Enter 1st number: "));
const num2 = parseFloat(prompt("Enter 2nd number: "));
if (!isNaN(num1) && !isNaN(num2)) {
  console.log(`Sum of ${num1} + ${num2} = ${sum(num1, num2)}`);
} else {
  console.log("Invalid input");
}
