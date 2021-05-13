const Manager = require("../lib/Manager")

answers = {
  name: "Bob",
  email: "bob@gmail.com",
  id: "4",
  officeNumber: "07593812550",
  teamName: "Great team"
}

const actual = new Manager(answers);

test("create new instance of Manager", () => {
  expect(actual).toBeInstanceOf(Manager);
})

test("attributes the values of passed in object as values to class keys", () => {
  expect(actual.name).toEqual(answers.name);
  expect(actual.email).toEqual(answers.email);
  expect(actual.id).toEqual(answers.id);
  expect(actual.officeNumber).toEqual(answers.officeNumber);
  expect(actual.teamName).toEqual(answers.teamName);
})

test("if values of passed in object to the constructor function are undefined, returns default values", () => {
  undefinedAnswers = {
    name: undefined,
    email: undefined,
    id: undefined,
    github: undefined,
  }

  const actual = new Manager(undefinedAnswers);

  expect(actual.name).toEqual("TBC");
  expect(actual.email).toEqual("Not yet set up");
  expect(actual.id).toEqual("TBC");
  expect(actual.officeNumber).toEqual("TBC");
  expect(actual.teamName).toEqual("Team");
})

test("getName method returns the value of name key", () => {
  expect(actual.getName()).toEqual(answers.name);
})

test("getEmail method returns the value of email key", () => {
  expect(actual.getEmail()).toEqual(answers.email);
})

test("getId method returns the value of id key", () => {
  expect(actual.getId()).toEqual(answers.id);
})

test("getOfficeNumber method returns the value of the officeNumber key", () => {
  expect(actual.getOfficeNumber()).toEqual(answers.officeNumber);
})

test("getRole method returns Manager", () => {
  expect(actual.getRole()).toEqual("Manager");
})

test("getTeamName method returns the value of teamName key", () => {
  expect(actual.getTeamName()).toEqual(answers.teamName);
})

