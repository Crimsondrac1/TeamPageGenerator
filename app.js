function init() {
  const inquirer = require("inquirer");
  const pageGen = require("./util/page-temp");
  const fs = require("fs");
  const Engineer = require("./lib/Engineer");
  const Intern = require("./lib/Intern");
  const Manager = require("./lib/Manager");

  const dataArray = [];

  // Manager Info

  const qManager = () => {
    console.log(
      "You must first enter Manager information to create a new team."
    );
    return inquirer.prompt([
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
      },
      {
        type: "input",
        name: "offNum",
        message: "Please enter an office number for the manager.",
      },
    ]);
  };



  const qTeam = () => {
    
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Please select a role for the team member or select Done if if there are no more team members.',
            choices: [{name: "Engineer", value: 0}, {name: "Intern", value: 1}, {name: "Done", value: 2}]
        }
    ])
    .then(res => {
        if(res.role === 0) {
            return qIntern()
        } else if (res.role === 1) {
            return qEngineer()
        } else {
            pageGen(dataArray)
            .then(template => {
                fs.writeFile('index.html', template, err => {
                    if (err) return err
                })
        })

        }
})
  };

  const qIntern = () => {
    return inquirer.prompt([
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
      },
      {
        type: "input",
        name: "school",
        message: "Please enter what school the intern is enrolled in.",
      },
    ]);
  };
}

init();
