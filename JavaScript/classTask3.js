const mixStringNumber = [
  1,
  "a",
  3,
  "b",
  true,
  99,
  50,
  "fifty",
  "ten",
  false,
  false,
];
const numbers = mixStringNumber.filter(
  (element) => typeof element === "number"
);
const strings = mixStringNumber.filter(
  (element) => typeof element === "string"
);
const bool = mixStringNumber.filter((element) => typeof element === "boolean");
console.log(
  `So the mixStringNumber has Numbers: ${numbers} Strings: ${strings} bool: ${bool}}}`
);
