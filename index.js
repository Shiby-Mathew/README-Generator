const fs = require("fs");
const inquirer = require("inquirer");

//function to get the Badge for any license you selected
const generateLicenseBadge = (license) => {
  let licenseBadge = ``;
  switch (license) {
    case "Apache License":
      licenseBadge =
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;

    case "MIT License":
      licenseBadge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;

    case "Boost Software License":
      licenseBadge =
        "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;

    case "GNU General Public License":
      licenseBadge =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "Mozilla Public Licence":
      licenseBadge =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    default:
      licenseBadge = "No license selected";
      break;
  }
  return licenseBadge;
};

//main function
const main = () => {
  //prompt asking for user inputs
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
          "Apache License",
          "MIT License",
          "Boost Software License",
          "GNU General Public License",
          "Mozilla Public Licence",
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

    //Destructure the object
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
      const nameUpperCase = name.charAt(0).toUpperCase() + name.slice(1);
      //Readme body structure
      const generateReadme = `

#  ${nameUpperCase}

The link for my deployed wesite can viewed here:
https://shiby-mathew.github.io/README-Generator/

## Badge

${generateLicenseBadge(license)}

## Table of contents

- [Description](#description)
- [License](#license)
- [Usage](#usage)
- [Installation](#installation)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)


## Description

${description}

## Installation

The following necessary software/tools must be installed to run this application:

${installation}


## Usage

To use this application:

${usage}

![Screenshots](path)

## License

This application is covered by ${license} license.

## Contribution

${contribution}

## Tests

${test}

## Video Link

[![Walk through video](https://drive.google.com/file/d/1050yuz5ZPEHHlQT4kSLF1UTdgcfPjin_/view.png)](https://drive.google.com/file/d/1050yuz5ZPEHHlQT4kSLF1UTdgcfPjin_/view)

## Questions

Follow me on Github: [GitHub profile ](https://github.com/${github})
<br/>

More Questions: [How to reach me ](${email})
      `;
      //write readme file
      fs.writeFile("README.md", generateReadme, (err) => {
        err ? console.error(err) : console.log("readme generated");
      });
    });
};
main();
