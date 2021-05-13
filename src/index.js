const collectAllEmployees = require("./utils/collectAllEmployees")
const generateHtml = require("./utils/generateHTML")
const createHTMLFile = require("./utils/createHTMLfile")

const init = async () => {
  const employees = await collectAllEmployees()
  const html = generateHtml(employees)
  console.log(html)
  createHTMLFile(html)
}

init()
