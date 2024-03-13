const arrayone = [
  {
    id: "Mern1",
    name: "indexOne",
    role: "Admin",
    isActive: true,
  },

  {
    id: "Mern2",
    name: "indexTwo",
    role: "user",
    isactive: true,
  },
];

const objectMiddle = {
  id: "Mern",
  name: "IndexThree",
  role: "user",
  isActive: false,
};

const objectone = {
  name: "Javascript",
  isActive: true,
  isDeleted: false,
  version: "Es9",
};

const objectEnd = {
  name: "End",
  isActive: false,
  isDeleted: true,
};
arrayone.unshift(objectone);
arrayone.splice(2, 0, objectMiddle);
arrayone.push(objectEnd);
for (let i = 0; i < arrayone.length; i++) {
  console.log(arrayone[i]);
}
