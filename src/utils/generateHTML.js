const Manager = require("../lib/Manager")
const Engineer = require("../lib/Engineer")
const Intern = require("../lib/Intern")

const createManagerCard = (manager) => {
  return `
  <div class="d-flex justify-content-around flex-wrap m-4 manager">
    <div class="card text-center bg-warning text-dark" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${manager.getName()}</h5>
        <p class="card-text">${manager.getRole()} || ID: ${manager.getId()} </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          Email:
          <a href="mailto:${manager.getEmail()}" class="card-link"> ${manager.getEmail()}</a>
        </li>
        <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
      </ul>
    </div>
  </div>
  `
}

const createInternCard = (intern) => {
  return `
  <div class="d-flex justify-content-around flex-wrap">
    <div class="card text-center bg-dark m-2" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${intern.getName()}</h5>
        <p class="card-text"> ${intern.getRole()} || ID: ${intern.getId()} </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          Email:
          <a href="mailto:${intern.getEmail()}" class="card-link"> ${intern.getEmail()}</a>
        </li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
      </ul> 
    </div>
  </div>
  `
}

const createEngineerCard = (engineer) => {
  return `
  <div class="d-flex justify-content-around flex-wrap">
    <div class="card text-center bg-dark m-2" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${engineer.getName()}</h5>
        <p class="card-text"> ${engineer.getRole()} || ID: ${engineer.getId()} </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          Email:
          <a href="mailto:${engineer.getEmail()}" class="card-link"> ${engineer.getEmail()}</a>
        </li>
        <li class="list-group-item">
        Github:
        <a href="https://github.com/${engineer.getGithub()}"> ${engineer.getGithub()}</a>
        </li>
      </ul> 
    </div>
  </div>
  `
}

const generateHTML = (employees) => {
  const manager = employees[0]
  const managerCard = createManagerCard(manager)

  const createDirectReportCard = (directReport) => {
    if (directReport instanceof Intern) {
      return createInternCard(directReport);
    }
    if (directReport instanceof Engineer) {
      return createEngineerCard(directReport);
    }
  };
  const directReportCards = employees.map(createDirectReportCard);

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous"/>
        <link rel="stylesheet" type="text/css" href="./assets/style.css">
            <title>${manager.getTeamName()}</title>
      </head>
      <body>
        <header class="text-center p-4 mt-4 teamname">
          <h1>${manager.getTeamName()}</h1>
        </header>
        <main>
          ${managerCard}
          <div class="d-flex justify-content-around flex-wrap directreports-container">
            ${directReportCards.join("")}
          </div>
        </main>
      </body>
    </html>
`
};


module.exports = generateHTML