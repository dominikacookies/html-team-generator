const employeeQuestions = [
  {
    type: "input",
    message: `What is the employee's name?`,
    name: "name",
  },
  {
    type: "input",
    message: `What is their email address?`,
    name: "email",
    validate: (email) => {
      emailValid = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email);
      if (emailValid === true) {
        return true
      } else {
        return 'Please enter a valid email address.';
      }
    }
  },
  {
    type: "input",
    message: `What is their ID number?`,
    name: "id",
    validate: (id) => {
      if (isNaN(id)) {
        return 'Please only use numbers to set the employee ID.';
      } else {
        return true;
      }
    }
  },
]

module.exports = employeeQuestions