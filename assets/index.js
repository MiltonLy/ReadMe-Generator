const js = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            message: 'What is the name of your App?',
            name: 'repoName',
        },
        {
            message: 'Description of the App:',
            name: 'description',
        },
        {
            message: 'Table of Contents',
            name: 'tob',
        },
        {
            message: ''
        }
    ])