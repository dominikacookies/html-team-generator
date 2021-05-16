# HTML Team Generator

## Table of Contents
  - [Description](#description)
  - [Key features](#key-features)
  - [Demo video](#demo-video)
  - [Technologies used](#technologies-used)
  - [Installation](#installation)

## Description
This is a command line application which allows the user to create a html page with their team information. 
This application utilises Javascript classes to create new instances of Managers, Engineers and Employees based on the user's answers to a series of questions prompted using Inquirer. The new instances are stored in an array and later used to build html cards for each employee using template literals.
The application has been built with modular programming top of mind thus, relies on several small javascript files to run.

## Key Features
- the application prompts the user with a series of questions, specific to the employee type they have chosen to add, using the inquirer package
- answers to the questions regarding employee email address, id and phone number are validated against formatting and data type requirements using regular expressions and built in Javascript properties
- every time a new employee is added a new instance of the Manager, Engineer or Intern class is created. All of which are extensions of the base Employee class.
- once the user has finished adding all of the team members a html file is built. The individual employee cards are built using separate functions, depending on the instance of which class they are.
  
## Demo Video
[Click here to view](./assets/demo/html-generator-demo.mov)

## Technologies Used
- Javascript
- jQuery
- Inquirer
- Jest

## Installation 
- Clone the GitHub project onto your local machine
``` 
git clone https://github.com/dominikacookies/readme-generator.git
```
- Navigate into the project
- Open the project in VSCode
- Open the integrated terminal
- In the terminal, enter: 
  ```
  node index.js. 
  ``` 
  Ensure that you have installed node.