const Employee = require("./Employee");

class Intern extends Employee {
  constructor({school, ...rest }) {
    super(rest);

    this.school = school || "TBC"
  }
  getSchool () {
    return this.school
  }

  getRole () {
    return "Intern"
  }
}

module.exports = Intern