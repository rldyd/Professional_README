const fs = require("fs");
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "MIT") {
    return `[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://spdx.org/licenses/MIT.html)`;
  } else if (license == "GNU") {
    return `[![License](https://img.shields.io/badge/license-GPL-blue)](https://www.gnu.org/licenses/gpl-3.0-standalone.html)`;
  } else if (license == "Apache") {
    return `[![License](https://img.shields.io/badge/license-Apache-blue)](http://www.apache.org/licenses/LICENSE-2.0)`;
  } else if (license == "ISC") {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseLink) {
  if (licenseLink) {
    return `${licenseLink}`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `${license}`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  #Project Title
  ## ${data.name}  
  
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#test)
  - [License](#license)
  - [Questions](#questions)
  
  
  ## Description
  #### ${data.description}
  

  ## Installation 
  #### ${data.installation}
  
  ## Usage
  #### ${data.usage} 
  
  ## Contribution 
  #### ${data.contributing}
  
  ## Tests
  #### ${data.test}
  
  ## License 
  #### ${renderLicenseBadge(data.license)}
  #### ${renderLicenseSection(data.license)} 
  #### ${renderLicenseLink(data.licenseLink)} 
  
  ## Questions
  #### If you have additional questions or would like to get in touch with me, reach out using a method below
  #### Github UserName - @${data.github}
  #### [Email](${data.email})
`;
}

module.exports = generateMarkdown;
