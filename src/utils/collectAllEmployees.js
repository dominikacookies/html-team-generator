const inquirer = require("inquirer");

const createManager = require("./createManager")
let employees = []

const chooseHowToProgress = async () => {
  let progressOptions = {}
  if (employees.length >2) {
    progressOptions = 
    {
      type: "list",
      message: "Select what you'd like to do next",
      name: "nextStep",
      choices: [
        {
          name: "Add an Engineer",
          value: "Engineer",
        },
        {
          name: "Add an Intern",
          value: "Intern",
        },
      ]
    }
  } else {
      progressOptions = 
    {
      type: "list",
      message: "Select what you'd like to do next",
      name: "nextStep",
      choices: [
        {
          name: "Add an Engineer",
          value: "Engineer",
        },
        {
          name: "Add an Intern",
          value: "Intern",
        },
        {
          name: "Exit",
          value: "Exit",
        },
      ]
    }
  }
  const confirmNextStep = async (progressOptions) => inquirer.prompt(progressOptions);
  const answer = await confirmNextStep(progressOptions)

  return answer.nextStep
}

const collectAllEmployees = async () => {
  const manager = await createManager()
  employees.push(manager);
  console.log(employees)

  let inProgress = true;

  while (inProgress) {
    const nextStep = await chooseHowToProgress();

    if (nextStep === "Exit") {
      inProgress = false;

    } else {
      if (nextStep === "Engineer") {
        console.log("engineer")

      }

      if (nextStep === "Intern") {
        console.log("intern")

      }
    }
  }
  return employees
}

module.exports = collectAllEmployees