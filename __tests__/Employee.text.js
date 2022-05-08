const Employee = require("../lib/Employee");

test("Checks to see if there is an employee name, ID and email", () => {
  const employee = new Employee("Buster", "E-123", "nomail@nomail.com");
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(String));
  expect(employee.email).toEqual(expect.any(String));
  console.log(employee);
});

test("Checks to see if the employee role has been assigned", () => {
  const employee = new Employee("Buster", "E-123", "nomail@nomail.com");
  expect(employee.getRole()).toBe("Employee");
  console.log(employee.getRole());
});
