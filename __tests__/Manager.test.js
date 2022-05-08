const Manager = require("../lib/Manager");

test("Check to see that name, ID, email and Office Number return a value", () => {
  const manager = new Manager("Buster", "M-123", "nomail@nomail.com", 101);
  expect(manager.officeNumber).toEqual(expect.any(Number));
  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(String));
  expect(manager.email).toEqual(expect.any(String));
  console.log("Manager values:");
  console.table(manager);
});

test("Check to see that Role returns Manager", () => {
  const manager = new Manager("Buster", "M-123", "nomail@nomail.com", 101);
  expect(manager.getRole()).toBe("Manager");
  console.log(manager.getRole());
});
