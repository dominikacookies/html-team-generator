const employeeQuestions = require("./employeeQuestions")
const getEmployeeInformation = require("./getEmployeeInformation")
const Intern = require("../lib/Intern");

const createIntern = async () => {
  const internQuestions = [
    ...employeeQuestions,
    {
      type: "input",
      message: "Which school does this person attend?",
      name: "school",
    },
  ];

  const answers = await getEmployeeInformation(internQuestions);

  const intern = new Intern(answers);

  return intern;
}

module.exports = createIntern; 