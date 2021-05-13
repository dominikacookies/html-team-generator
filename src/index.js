const collectAllEmployees = require("./utils/collectAllEmployees")
const generateHtml = require("./utils/generateHTML")


const init = async () => {
  const employees = await collectAllEmployees()
  const html = generateHtml(employees)
  // createFile(html)
}

init()
