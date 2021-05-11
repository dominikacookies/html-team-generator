const Employee = require("./Employee");

class Manager extends Employee {
  constructor({ teamName, officeNumber, ...rest }) {
    super(rest);

    this.officeNumber = officeNumber || "TBC"
    this.teamName = teamName || "Team"
  }
  getOfficeNumber () {
    return this.officeNumber
  }

  getRole () {
    return "Manager"
  }

  getTeamName () {
    return this.teamName
  }
}

module.exports = Manager