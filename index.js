const fs = require("fs");
const inquirer = require("inquirer");

const generateLicenseBadge = (license) => {
  let licenseBadge = ``;
  switch (license) {
    case "Apache License 2.0":
      licenseBadge =
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "MIT License":
      licenseBadge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
  }
  return licenseBadge;
};

const main = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the title of this application ?",
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
        message: "What does this application do ?",
        name: "description",
      },
      {
        type: "input",
        message: "How do I install this application ?",
        name: "installation",
      },

      {
        type: "input",
        message: "How do I Contribute to this application ?",
        name: "contribution",
      },
      {
        type: "input",
        message: "How do I use this application ?",
        name: "usage",
      },

      {
        type: "input",
        message: "How do I tests this application ?",
        name: "test",
      },

      {
        type: "input",
        message: "User name of Your GitHub",
        name: "github",
      },
      {
        type: "input",
        message: "What is your email-id for contact ?",
        name: "email",
      },
    ])
    .then((data) => {
      console.log(data);
      const {
        description,
        license,
        name,
        installation,
        contribution,
        usage,
        test,
        github,
        email,
      } = data;
      const generateReadme = `
      
#  ${name}


## Badge

${generateLicenseBadge(license)}

## Table of contents

- [Description](#description)
- [License](#license)
- [Usage](#usage)
- [Installation](#installation)
- [Tests](#tests)
- [Questions](#questions)


## Description

${description}

## Installation

${installation}


## Usage

${usage}

![Screenshots](path)

## License

This application is covered by ${license} license.


## How to Contribute

${contribution}

## Tests

${test}

### Questions ?

Follow me on Github: [GitHub profile ](https://github.com/${github})
<br/>

More Questions: [How to reach me ](${email})
      `;
      //(https://github.com/${github})
      fs.writeFile("README.md", generateReadme, (err) => {
        err ? console.error(err) : console.log("readme generated");
      });
    });
};
main();
