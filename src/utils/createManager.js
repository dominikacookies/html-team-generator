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
    ...employeeQuestions,
    {
      type: "input",
      message: "What is the manager's office number?",
      name: "officeNumber",
    },
  ];

  const answers = await getEmployeeInformation(managerQuestions);

  const manager = new Manager(answers);

  return manager;
}

module.exports = createManager; 