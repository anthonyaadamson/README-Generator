// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your Github Profile Link?',
      }, 
      {
        type: 'input',
        name: 'email',
        message: 'What is the email linked to your Github Profile?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter the description for your project.',
      },
      {
        type: 'input',
        name: 'install',
        message: 'Enter your installation instructions for your project',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter your application usage information.',
      },
      {
        type: 'input',
        name: 'contribuition',
        message: 'Enter your contribution guidelines.',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter the instructions for running tests on your application.',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What license do you want this project covered under?',
        choices: ['Mit License', 'GNU', 'Apache', 'BSD'],
      }
    ]);
  };




// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then((answers) => {
        const markdownContent = generateMarkdown(answers);

        fs.writeFile('README.md', markdownContent, (err) => 
        err ? console.log(err) : console.log('Successfully created your README.md for your application!')
        )
    }
)}

// Function call to initialize app
init();
