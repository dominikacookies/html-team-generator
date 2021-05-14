const employeeQuestions = require("./employeeQuestions")
const getEmployeeInformation = require("./getEmployeeInformation")
const Manager = require("../lib/Manager");

const createManager = async () => {
  const role = "Manager"
  const managerQuestions = [
    {
      type: "input",
      message: "What is the name of this Team?",
      name: "teamName",
    },
    {
      type: "input",
      message: `what is the manager's name?`,
      name: "name",
    },
    employeeQuestions[1],
    employeeQuestions[2],
    {
      type: "input",
      message: "What is the their office number?",
      name: "officeNumber",
      validate: (officeNumber) => {
        if (isNaN(officeNumber)) {
          return 'Please enter a valid office number.';
        } else {
          return true;
        }
      }
    },
  ];

  const answers = await getEmployeeInformation(managerQuestions);

  const manager = new Manager(answers);

  return manager;
}

module.exports = createManager; 