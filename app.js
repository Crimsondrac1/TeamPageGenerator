function init() {
  const fs = require("fs");
  const inquirer = require("inquirer");
  const genHTML = require("./util/page-temp");
  const Engineer = require("./lib/Engineer");
  const Intern = require("./lib/Intern");
  const Manager = require("./lib/Manager");
  const validator = require("email-validator");

  const dataArray = [];

  // Manager Info

  const qManager = () => {
    console.log(
      "You must first enter Manager information to create a new team."
    );
    return inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Please enter the name of the manager.",
          validate: (mName) => {
            if (mName) {
              return true;
            } else {
              console.log("Please enter a name.");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "id",
          message: "Please enter an ID for the manager.",
          validate: (mID) => {
            if (mID) {
              return true;
            } else {
              console.log("Please enter an ID.");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "Please enter an email for the manager.",
          validate: (mEmail) => {
            if (validator.validate(mEmail)) {
              return true;
            } else {
              console.log("Please enter a valid email.");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "officeNumber",
          message: "Please enter an office number for the manager.",
        },
      ])
      .then((res) => {
        let manager = new Manager(
          res.name,
          res.id,
          res.email,
          res.officeNumber,
          "Manager"
        );

        dataArray.push(manager);
      })
      .then(qTeam);
  };

  const qTeam = () => {
    inquirer
      .prompt([
        {
          type: "list",
          name: "role",
          message:
            "Please select a role for the team member or select Complete when you are done.",
          choices: [
            { name: "Engineer", value: 0 },
            { name: "Intern", value: 1 },
            { name: "Complete", value: 2 },
          ],
        },
      ])
      .then((res) => {
        if (res.role === 0) {
          return qEngineer();
        } else if (res.role === 1) {
          return qIntern();
        } else {
          let template = genHTML(dataArray);
          // console.log(template)
          fs.writeFile("./output/index.html", template, (err) => {
            if (err) return err;
          });
          fs.copyFile("./css/style.css", "./output/style.css", (err) => {
            if (err) return err;
          });
          console.log(
            "Your index.html file had been written to the ./output folder. Don't forget the css stylesheet."
          );
        }
      });
  };

  const qIntern = () => {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Please enter the Intern's name.",
          validate: (iName) => {
            if (iName) {
              return true;
            } else {
              console.log("Please enter a name.");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "id",
          message: "Please enter an ID for the intern.",
          validate: (iID) => {
            if (iID) {
              return true;
            } else {
              console.log("Please enter an ID.");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "Please enter an email for the intern.",
          validate: (iEmail) => {
            if (validator.validate(iEmail)) {
              return true;
            } else {
              console.log("Please enter a valid email.");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "school",
          message: "Please enter what school the intern is enrolled in.",
        },
      ])
      .then((res) => {
        let intern = new Intern(
          res.name,
          res.id,
          res.email,
          res.school,
          "Intern"
        );
        dataArray.push(intern);
      })
      .then(qTeam);
  };

  const qEngineer = () => {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Please enter a name for this Engineer.",
          validate: (eName) => {
            if (eName) {
              return true;
            } else {
              console.log("Please enter a name.");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "id",
          message: "Please enter an ID for this engineer.",
          validate: (eID) => {
            if (eID) {
              return true;
            } else {
              console.log("Please enter an ID.");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "Please enter an email for this engineer.",
          validate: (eEmail) => {
            if (validator.validate(eEmail)) {
              return true;
            } else {
              console.log("Please enter a valid email.");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "github",
          message: "Please enter the github username for this engineer.",
        },
      ])
      .then((res) => {
        let engineer = new Engineer(
          res.name,
          res.id,
          res.email,
          res.github,
          "Engineer"
        );
        dataArray.push(engineer);
      })
      .then(qTeam);
  };

  qManager();
}

init();
