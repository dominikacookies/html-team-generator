const Intern = require("../lib/Intern")

answers = {
  name: "Bob",
  email: "bob@gmail.com",
  id: "4",
  school: "great school",
}

const actual = new Intern(answers);

test("create new instance of Intern", () => {
  expect(actual).toBeInstanceOf(Intern);
})

test("attributes the values of passed in object as values to class keys", () => {
  expect(actual.name).toEqual(answers.name);
  expect(actual.email).toEqual(answers.email);
  expect(actual.id).toEqual(answers.id);
  expect(actual.school).toEqual(answers.school);
})

test("if values of passed in object to the constructor function are undefined, returns default values", () => {
  undefinedAnswers = {
    name: undefined,
    email: undefined,
    id: undefined,
    school: undefined,
  }

  const actual = new Intern(undefinedAnswers);

  expect(actual.name).toEqual("TBC");
  expect(actual.email).toEqual("Not yet set up");
  expect(actual.id).toEqual("TBC");
  expect(actual.school).toEqual("TBC");
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

test("getSchool method returns the value of the school key", () => {
  expect(actual.getSchool()).toEqual(answers.school);
})

test("getRole method returns Intern", () => {
  expect(actual.getRole()).toEqual("Intern");
})

