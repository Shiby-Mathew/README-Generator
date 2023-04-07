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
        message: "Select which kind of license for this application",
        name: "license",
        choices: [
          "None",
          "Apache License 2.0",
          "GNU General Public License v3.0",
          "MIT License",
          "Boost Software License 1.0",
          "Eclipse Publi License 2.0",
          "Creative Commons Zero v1.0 Universal",
          "GNU Affero GeneralPublic License v3.0 ",
          "GNU General Public License v2.0",
          "GNU Lesser General Public License v2.1",
        ],
      },
      {
        type: "input",
        message: "What does this appliction do",
        name: "description",
      },
      {
        type: "input",
        message: "How do I insatll this application",
        name: "installation",
      },

      {
        type: "input",
        message: "Link of Your GitHub",
        name: "github",
      },
      {
        type: "input",
        message: "Your email id for contact",
        name: "email",
      },
    ])
    .then((data) => {
      console.log(data);
      const { description, license, name, installation, github, email } = data;
      const generateReadme = `# README-Generator
      ${name}

      ## Description

      ${description}
      
      ## Table of contents
    
      
      ## License
      ${license}
      
      ## Usage
      
      ## Installation
      ${installation}
      
      ### Reach me
      ${github}
      ${email}

      `;

      fs.appendFile("README.md", generateReadme, (err) => {
        err ? console.error(err) : console.log("readme genrated");
      });
    });
};
main();
