const fs = require("fs");

const inquirer = require("inquirer");

const main = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the title of this application",
        name: "name",
      },
      {
        type: "list",
        message: "Select kind of license for this application",
        choices: "[]",
      },
      {
        type: "input",
        message: "What does this appliction do",
        name: "description",
      },
      {
        type: "input",
        message: "How do insatll this application",
        name: "installation",
      },

      {
        type: "input",
        message: "Github username",
        name: "github",
      },
      {
        type: "input",
        message: "Your e-mail",
        name: "email",
      },
    ])
    .then((data) => {
      console.log(data);
    });
};
main();
