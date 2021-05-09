const Employee = require("./createEmployee")

const createManager = () => {
  const newEmployee = new Employee()
  console.log(newEmployee)
  const emailHere = newEmployee.getEmail()
  console.log(emailHere)
}

module.exports = createManager; 