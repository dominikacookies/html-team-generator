const inquirer = require("inquirer");

const Employee = require("./createEmployee")

const createManager = async () => {
  const managerBasicInformation = new Employee()
  console.log(managerBasicInformation)
  const employeeName = await managerBasicInformation.getName("manager")
  console.log(employeeName)
  const employeeEmail = await managerBasicInformation.getEmail(employeeName)
  console.log(employeeEmail)
}

module.exports = createManager; 