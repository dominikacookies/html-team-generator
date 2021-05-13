const Employee = require("../lib/Employee");

  test("object value attributes as values to class keys", () => {

    // use triple A methodology: arrange properties, act on properties, assert - check that the values are correct
    answers = {
      name: "Bob",
      email: "bob@gmail.com",
      id: "4"
    }
    
    const actual = new Employee(answers);

    expect(actual.name).toEqual(answers.name);
    expect(actual.email).toEqual(answers.email);
    expect(actual.id).toEqual(answers.id);
  })
