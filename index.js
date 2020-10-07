const inquire = require ("inquirer");
const fs = require ("fs");
const util = require ("util");

const writeFileAsync = util.promisify(fs.writeFile);

inquire.prompt([
    {
        type: "input",
        message:"What is your project title?",
        name:"projectTitle",
    },
    {
        type: "input",
        message:"What is your project title?",
        name:"projectTitle",
    },
    {
        type: "input",
        message:"What is your project title?",
        name:"projectTitle",
    },
    {
        type: "input",
        message:"What is your project title?",
        name:"projectTitle",
    },
    {
        type: "input",
        message:"What is your project title?",
        name:"projectTitle",
    },
    {
        type: "input",
        message:"What is your project title?",
        name:"projectTitle",
    },
    {
        type: "input",
        message:"What is your project title?",
        name:"projectTitle",
    },
    {
        type: "input",
        message:"What is your project title?",
        name:"projectTitle",
    },
    {
        type: "input",
        message:"What is your project title?",
        name:"projectTitle",
    },
])