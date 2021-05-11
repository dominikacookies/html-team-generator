const employeeQuestions = require("./employeeQuestions");
const getEmployeeInformation = require("./getEmployeeInformation");
const Employee = require("./createEmployee");

// class Rectangle extends Shape {
//   constructor(sideA, sideB) {
//     const area = sideA * sideB;
//     const perimeter = sideA * 2 + sideB * 2;

//     super(area, perimeter);
//     this.sideA = sideA;
//     this.sideB = sideB;
//   }
// }

class Manager extends Employee {
  constructor(...answers) {
  super()
  this.officeNumber = officeNumber || "TBC"
  }
  getOfficeNumber ()  {
  }
}

const createManager = async () => {
  const managerQuestions = [
    ...employeeQuestions,
    {
      type: "input",
      message: "What is the manager's office number?",
      name: "officeNumber",
    },
  ];

  const answers = await getEmployeeInformation(managerQuestions)
  console.log(answers)
  // const role = "manager"
  // const answers = 
  // const manager = new Manager(...answers)
}

module.exports = createManager; 