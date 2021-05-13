const {employees} = require("./collectAllEmployees");

const employeeQuestions = [
  {
    type: "input",
    message: `what is the employee's name?`,
    name: "name",
  },
  {
    type: "input",
    message: `What is their email address?`,
    name: "email",
  },
  {
    type: "input",
    message: `What is the employee's ID number?`,
    name: "id",
    validate: (answer) => {
      if (answer) {
        return true
      } else {
        return "Please enter a valid ID"
      }
    }
  },
]

module.exports = employeeQuestions