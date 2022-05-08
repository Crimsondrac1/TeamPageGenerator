const Engineer = require("../lib/Engineer");

test("Check to see that name, ID, email and github return a value", () => {
    const engineer = new Engineer('Buster', 'E-123', 'nomail@nomail.com', 'GithubUser');
  expect(engineer.github).toEqual(expect.any(String));
  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(String));
  expect(engineer.email).toEqual(expect.any(String));
  console.table(engineer)
});

test("Check to see that Role returns Engineer", () => {
  const engineer = new Engineer('Buster', 'E-123', 'nomail@nomail.com', 'GithubUser');
  expect(engineer.getRole()).toBe("Engineer");
  console.log(engineer.getRole())
});

