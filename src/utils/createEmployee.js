const inquirer = require("inquirer");

class Employee {
  constructor(name, email, id, role) {
    this.name = name || "TBC",
    this.email = email || "Not yet set up."
    this.id = id || "TBC"
    this.role = role || "Employee"
  }
  async getName (role)  {
    const question = 
    {
      type: "input",
      message: `what is the ${role}'s name?`,
      name: "nameInput",
    }

    const name = await inquirer.prompt(question)
    return name.nameInput
  }

  async getEmail (name) {
    const question = 
    {
      type: "input",
      message: `What is your ${name}'s address?`,
      name: "emailInput",
      validate: function (email) {
        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
          email
        );
      },
    }

    const email = await inquirer.prompt(question)
    return email.emailInput
  }
  getId () {
    console.log("id")
  }
}

module.exports = Employee