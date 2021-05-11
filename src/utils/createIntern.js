const employeeQuestions = require("./employeeQuestions")
const getEmployeeInformation = require("./getEmployeeInformation")
const Intern = require("./Intern");

const createIntern = async () => {
  const internQuestions = [
    ...employeeQuestions,
    {
      type: "input",
      message: "Which school does the intern attend?",
      name: "school",
    },
  ];

  const answers = await getEmployeeInformation(internQuestions);

  const intern = new Intern(answers);

  return intern;
}

module.exports = createIntern; 