const js = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            message: 'What is the name of your App?',
            name: 'repoName',
        },
        {
            message: 'Technology Used',
            name: 'tech',
        },
        {
            message: 'Description of the App:',
            name: 'description',
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
            message: 'GitHub Link',
            name: 'githubUrl',
        },
        {
            message: 'LinkedIn Link',
            name: 'linkedninUrl'
        }
    ])
    .then((response) =>{
        console.log(response)
    })
    const readMeTemp = `
    #${response.repoName}
    
    ## Table Of Content

    -[Technology Used]
    -[Project Description]
    -[Installation]
    -[Usage]
    -[License]
    -[Contributions]
    -[Test]
    -[Questions]

    ## Technology Used

    Technology Used
    Resource URL

    ${response.tech}

    ## Project Description

    ${response.description}

    ## Installation

    ${response.install}

    ## Usage

    ${response.usage}

    ## License

    ${response.license}

    ## Contributions

    ${response.contributing}

    ## Test

    ${response.test}

    ## Contact

    ${response.githubUrl}

    ${response.linkedinUrl}

    `
    js.writeFile('README.md', readMeTemp, function(err){
        if (err) {
            throw err;
        }
    })
