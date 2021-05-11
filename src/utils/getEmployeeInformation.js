const inquirer = require("inquirer");

const getEmployeeInformation = async (questions) => inquirer.prompt(questions);

module.exports = getEmployeeInformation;