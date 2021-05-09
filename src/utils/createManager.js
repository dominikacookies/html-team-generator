class Employee {
  constructor(name, email, id, role) {
    this.name = name || "TBC",
    this.email = email || "Not yet set up."
    this.id = id || "TBC"
    this.role = role || "Employee"
  }
  getName () {
    console.log("name")
  }
  getEmail () {
    console.log("email is here")
    return "email X"
  }
  getId () {
    console.log("id")
  }

}

const createManager = () => {
  // class Rectangle extends Shape {
  //   constructor(sideA, sideB) {
  //     const area = sideA * sideB;
  //     const perimeter = 2 * (sideA + sideB);
  
  //     super(area, perimeter);
  
  //     this.sideA = sideA;
  //     this.sideB = sideB;
  //   }
  
  //   isSquare() {
  //     return this.sideA === this.sideB ? "YES" : "NO";
  //   }
  // }
  const newEmployee = new Employee()
  console.log(newEmployee)
  const emailHere = newEmployee.getEmail()
  console.log(emailHere)
}

module.exports = createManager; 