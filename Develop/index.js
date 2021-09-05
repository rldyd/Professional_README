// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: "What is your project title? (Required)",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                }
                else {
                    console.log("Please enter your project title!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'description of the project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                }
                else {
                    console.log("You need to enter a project description!");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'table',
            message: 'Would you like to add a table of contents to make it easy? (Optional)',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development enviroment runnig. (Required)',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. Include screenhosts as needed. (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'How did you test this project? (Required)',
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'If your project is licesened, please select the appropriate option (Optional)',
            choices: ['Apache', 'GNU', 'MIT', 'ISC', 'Other']
        },
        {
            type: 'input',
            name: 'licenseLink',
            messgae: 'Please enter your licese link '
        },
        {
            type: 'input',
            name: 'gitusername',
            message: 'Waht is your github username? (Required)',
            validate: gitusernameInput => {
                if (gitusernameInput) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error) {
            return console.log(error);
        } else {
            console.log("Your README file has been generated");
        }
    })

};


// TODO: Create a function to initialize app
function init() {
    questions()
        .then(userAns => {

            let markdown = generateMarkdown(userAns);
            console.log(markdown);
            writeToFile("./readme-guide.md", markdown);
        })
}

// Function call to initialize app
init();