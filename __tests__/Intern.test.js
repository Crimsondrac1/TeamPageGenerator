const Intern = require("../lib/Intern");

test("Check to see that name, ID, email and school return a value", () => {
  const intern = new Intern("Buster", "I-123", "nomail@nomail.com", "UofH");
  expect(intern.school).toEqual(expect.any(String));
  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(String));
  expect(intern.email).toEqual(expect.any(String));
  console.table(intern);
});

test("Check to see that Role returns Intern", () => {
  const intern = new Intern("Buster", "I-123", "nomail@nomail.com", "UofH");
  expect(intern.getRole()).toBe("Intern");
  console.log(intern.getRole());
});
