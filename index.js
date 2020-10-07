const inquire = require ("inquirer");
const fs = require ("fs");
const util = require ("util");
const { asap } = require("rxjs");

const writeFileAsync = util.promisify(fs.writeFile);

function rmQuestions(){
    return inquire.prompt([
    {
        type: "input",
        message:"What is your project title?",
        name:"projectTitle",
    },
    {
        type: "input",
        message:"Please add a discription for your project.",
        name:"description",
    },
    {
        type: "input",
        message:"Please add a table of context.",
        name:"tOfContent",
    },
    {
        type: "input",
        message:"What packages are needed to be install for this program?",
        name:"install",
    },
    {
        type: "input",
        message:"What is this project used for?",
        name:"usage",
    },
    {
        type: "list",
        message:"What license are you using?",
        choices:[
            "MIT",
            "ISC",
            "GNU",
            "Apache",
            "Academic",
            "Mozilla",
            "Open",
        ],
        name:"license",
    },
    {
        type: "input",
        message:"Please add a list of  the contibuters of this project.",
        name:"contributers",
    },
    {
        type: "input",
        message:"Are there any test in this program?",
        name:"test",
    },
    {
        type: "input",
        message:"What should the user do if they have any questions or issues?",
        name:"questions",
    }
]);
}

function generateRm(answers) {
    return `## Title: ${answers.projectTitle}

#### ************************************************************************************

### Description: ${answers.description}

#### ************************************************************************************

### Table of Contents: ${answers.tOfContent}

#### ************************************************************************************

### Instalations: ${answers.install}

#### ************************************************************************************

### Usage: ${answers.usage}

#### ************************************************************************************

### License: ${answers.license}

#### ************************************************************************************

### Contributers: ${answers.contributers}

### Tests: ${answers.test}

#### ************************************************************************************

### What should i do if i have any questions? ${answers.questions}

#### ************************************************************************************
`;
  }
  
rmQuestions()
.then(function(answers){
    const readMe = generateRm (answers);

    return writeFileAsync("README.md", readMe);
})
.then(function() {
    console.log("Successfully wrote");
  })
  .catch(function(err) {
    console.log(err);
  });

