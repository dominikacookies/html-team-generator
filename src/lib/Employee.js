

class Employee {
  constructor({name, email, id}) {
    this.name = name || "TBC"
    this.email = email || "Not yet set up"
    this.id = id || "TBC"
  }
  
  getName ()  {
    return this.name
  }

  getEmail () {
    return this.email
  }
  getId () {
    return this.id
  }

  getRole () {
    return "Employee"
  }
}

module.exports = Employee