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
        name:"installations",
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
])