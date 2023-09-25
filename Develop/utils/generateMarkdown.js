// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}

  ## Table of Contents

  [Installation](#installation)

  [Usage Of App](#usage-of-application)

  [License](#license)

  [Contribution](#contributing)

  [Testing](#tests)
  
  [Questions](#questions)

  ## Installation
  How to install: ${data.install}

  ## Usage of Application
  This application is used for the following ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contribuition}

  ## Tests
  Instructions for running tests on this application are as follows: 
  ${data.tests}

  ## Questions
  Any further questions can be answered emailing me at ${data.email} or at my github account ${data.github}.

`;
}

module.exports = generateMarkdown;
