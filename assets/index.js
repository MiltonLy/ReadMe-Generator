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
            message: 'installation instructions',
            name: 'install',
        },
        {
            message: 'Usage',
            name: 'usage',
        },
        {
            message: 'License',
            name: 'license',
        },
        {
            message: 'Contributing',
            name: 'contributing',
        },
        {
            message: 'Tests',
            name: 'tests',
        },
        {
            message: 'Questions?',
            name: 'question',
        },
    ])