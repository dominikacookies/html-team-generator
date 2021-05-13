const Employee = require("../lib/Employee");

answers = {
  name: "Bob",
  email: "bob@gmail.com",
  id: "4"
}

const actual = new Employee(answers);

test("create new instance of Employee", () => {
  expect(actual).toBeInstanceOf(Employee);
})

  test("attributes the values of passed in object as values to class keys", () => {
    expect(actual.name).toEqual(answers.name);
    expect(actual.email).toEqual(answers.email);
    expect(actual.id).toEqual(answers.id);
  })

  test("if values of passed in object to the constructor function are undefined, returns default values", () => {
    undefinedAnswers = {
      name: undefined,
      email: undefined,
      id: undefined,
    }

    const actual = new Employee(undefinedAnswers);

    expect(actual.name).toEqual("TBC");
    expect(actual.email).toEqual("Not yet set up");
    expect(actual.id).toEqual("TBC");
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

  test("getRole method returns Employee", () => {
    expect(actual.getRole()).toEqual("Employee");
  })