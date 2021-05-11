const employeeQuestions = require("./employeeQuestions")
const getEmployeeInformation = require("./getEmployeeInformation")
const Manager = require("./Manager");

const createManager = async () => {
  const role = "Manager"
  const managerQuestions = [
    ...employeeQuestions,
    {
      type: "input",
      message: "What is the manager's office number?",
      name: "officeNumber",
    },
  ];

  const answers = await getEmployeeInformation(managerQuestions);
  answers.role = role

  const manager = new Manager(answers);

  return manager;
}

module.exports = createManager; 