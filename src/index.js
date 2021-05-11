const collectAllEmployees = require("./utils/collectAllEmployees")

const init = async () => {
  const employees = await collectAllEmployees()
  console.log(`here are the final ${employees}`)
  // const html = generateHtml(employees)
  // createFile(html)
}

init()
