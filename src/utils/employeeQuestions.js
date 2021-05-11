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
    validate: function (email) {
      return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
        email
      );
    }
  },
  {
    type: "input",
    message: `What is the employee's ID number?`,
    name: "id",
  },
]

module.exports = employeeQuestions