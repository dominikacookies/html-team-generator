const collectAllEmployees = require("./utils/collectAllEmployees")
const generateHtml = require("./utils/generateHTML")
const createHTMLFile = require("./utils/createHTMLfile")

const init = async () => {
  const employees = await collectAllEmployees()
  const html = generateHtml(employees)
  createHTMLFile(html)
}

init()
