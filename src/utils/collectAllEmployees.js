const createManager = require("./createManager")

const collectAllEmployees = async () => {
  employees = []
  const manager = await createManager()
  employees.push(manager);
  console.log(employees)
}

module.exports = collectAllEmployees