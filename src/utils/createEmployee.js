class Employee {
  constructor(name, email, id, role) {
    this.name = name || "TBC",
    this.email = email || "Not yet set up."
    this.id = id || "TBC"
    this.role = role || "Employee"
  }
  getName () {
    console.log("name")
  }
  getEmail () {
    console.log("email is here")
    return "email X"
  }
  getId () {
    console.log("id")
  }

}

module.exports = Employee