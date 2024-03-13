const testArray = [
  {
    id: 0,
    name: "Kashif",
    adress: {
      city: "Lahore",
      country: "PK",
    },
    street: {
      homeAddress: "home address 0",
      fillStreetAdress: "full street address 0 ",
    },
    job: {
      designation: {
        title: "clerk",
      },
      salary: {
        monthly: 25000,
      },
    },
  },
  {
    id: 1,
    name: "Usman",
    adress: {
      city: "Rawalpindi",
      country: "PK",
    },
    street: {
      homeAddress: "home address 1",
      fillStreetAdress: "full street address 1 ",
    },
    job: {
      designation: {
        title: "clerk2",
      },
      salary: {
        monthly: 35000,
      },
    },
  },
  {
    id: 2,
    name: "Asad",
    adress: {
      city: "Karachi",
      country: "PK",
    },
    street: {
      homeAddress: "home address 2",
      fillStreetAdress: "full street address 2 ",
    },
    job: {
      designation: {
        title: "clerk3",
      },
      salary: {
        monthly: 45000,
      },
    },
  },
  {
    id: 4,
    name: "Hanan",
    adress: {
      city: "GujarKhan",
      country: "PK",
    },
    street: {
      homeAddress: "home address 4",
      fillStreetAdress: "full street address 4 ",
    },
    job: {
      designation: {
        title: "clerk4",
      },
      salary: {
        monthly: 55000,
      },
    },
  },
  {
    id: 5,
    name: "Rehman",
    adress: {
      city: "Peshawar",
      country: "PK",
    },
    street: {
      homeAddress: "home address 5",
      fillStreetAdress: "full street address 5 ",
    },
    job: {
      designation: {
        title: "clerk5",
      },
      salary: {
        monthly: 65000,
      },
    },
  },
];
//console.log(testArray.find((element) => element.job.salary.monthly === 25000));
//console.log(testArray.filter((element) => element.job.salary.monthly >= 25000));

const taxAble = testArray.filter(
  (element) => element.job.salary.monthly >= 25000
);
const taxInfo = taxAble.map((element) => {
  return {
    name: element.name,
    salary: element.job.salary.monthly,
  };
});
console.log(taxInfo);
const texAmount = taxAble.map(
  (element) => (element.job.salary.monthly * 17) / 100
);
console.log(texAmount);
