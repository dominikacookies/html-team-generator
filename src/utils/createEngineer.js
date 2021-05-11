const employeeQuestions = require("./employeeQuestions")
const getEmployeeInformation = require("./getEmployeeInformation")
const Engineer = require("./Engineer");

const createEngineer = async () => {
  const managerQuestions = [
    ...employeeQuestions,
    {
      type: "input",
      message: "What is this engineer's Github username?",
      name: "github",
    },
  ];

  const answers = await getEmployeeInformation(managerQuestions);

  const manager = new Manager(answers);

  return manager;
}

module.exports = createEngineer; 