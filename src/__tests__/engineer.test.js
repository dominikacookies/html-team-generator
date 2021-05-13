const Engineer = require("../lib/Engineer")

answers = {
  name: "Bob",
  email: "bob@gmail.com",
  id: "4",
  github: "bobgitprofile",
}

const actual = new Engineer(answers);

test("create new instance of Engineer", () => {
  expect(actual).toBeInstanceOf(Engineer);
})

test("attributes the values of passed in object as values to class keys", () => {
  expect(actual.name).toEqual(answers.name);
  expect(actual.email).toEqual(answers.email);
  expect(actual.id).toEqual(answers.id);
  expect(actual.github).toEqual(answers.github);
})

test("if values of passed in object to the constructor function are undefined, returns default values", () => {
  undefinedAnswers = {
    name: undefined,
    email: undefined,
    id: undefined,
    github: undefined,
  }

  const actual = new Engineer(undefinedAnswers);

  expect(actual.name).toEqual("TBC");
  expect(actual.email).toEqual("Not yet set up");
  expect(actual.id).toEqual("TBC");
  expect(actual.github).toEqual("TBC");
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

test("getGithub method returns the value of the github key", () => {
  expect(actual.getGithub()).toEqual(answers.github);
})

test("getRole method returns Engineer", () => {
  expect(actual.getRole()).toEqual("Engineer");
})

