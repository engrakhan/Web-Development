let x = "";
const myObj = {
  name: "Ahmad",
  age: 23,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};
for (let i in myObj.cars) {
  console.log(myObj.cars[i].name);
  for (let j in myObj.cars[i].models) {
    console.log(myObj.cars[i].models[j]);
  }
}
