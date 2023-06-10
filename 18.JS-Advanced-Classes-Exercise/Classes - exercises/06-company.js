let departments = {};
let companyArr = [];
class Company {
  constructor() {}

  addEmployee(name, salary, profesion, departmet) {
    if (name === undefined || name == "" || name == null) {
      throw new Error("Invalid input!");
    } else if (
      salary === undefined ||
      salary == "" ||
      salary == null ||
      salary == 0
    ) {
      throw new Error("Invalid input!");
    } else if (
      profesion === undefined ||
      profesion == "" ||
      profesion == null
    ) {
      throw new Error("Invalid input!");
    } else if (
      departmet === undefined ||
      departmet == "" ||
      departmet == null
    ) {
      throw new Error("Invalid input!");
    }
    companyArr.push(
      (departments = {
        name,
        salary,
        profesion,
        departmet,
      })
    );
  }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
// c.addEmployee("Stan", 2000, "architect", "Construction");
// c.addEmployee("Stanimir", 1200, "digital marketing manager","Marketing");
// c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
// c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(companyArr);
