const Employee = require("./Employee");

class Engineer extends Employee {
  constructor({github, ...rest }) {
    super(rest);

    this.github = officeNumber || "TBC"
  }
  getGithub () {

  }

  getRole () {
    return "Manager"
  }
}

module.exports = Manager