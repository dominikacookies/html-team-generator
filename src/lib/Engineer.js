const Employee = require("./Employee");

class Engineer extends Employee {
  constructor({github, ...rest }) {
    super(rest);

    this.github = github || "TBC"
  }
  getGithub () {
    return this.github
  }

  getRole () {
    return "Engineer"
  }
}

module.exports = Engineer