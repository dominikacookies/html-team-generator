const employeeQuestions = require("./employeeQuestions")
const getEmployeeInformation = require("./getEmployeeInformation")
const Engineer = require("../lib/Engineer");

const createEngineer = async () => {
  const engineerQuestions = [
    ...employeeQuestions,
    {
      type: "input",
      message: "What is their Github username?",
      name: "github",
    },
  ];

  const answers = await getEmployeeInformation(engineerQuestions);

  const engineer = new Engineer(answers);

  return engineer;
}

module.exports = createEngineer; 