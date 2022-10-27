//packages
const Inquirer = require("inquirer");
const Jest = require("jest");
const fs = require("fs");

// jobs
const Manager = require("./jobs/manager.js");
const Engineer = require("./jobs/engineer.js");
const Intern = requre("./jobs/intern.js");
const employee = require("./jobs/employee.js");
const { default: inquirer } = require("inquirer");

const jobsArray = [];

// adds the employees for the team
const addManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the name of the team manager.",
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log(error + "Please enter the name of the team manager.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Please enter their ID.",
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log(error + "Please enter their ID.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the email of the team manager.",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log(error + "Please enter the email of the team manager.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "officeNum",
            message: "Please enter the office number.",
            validate: officeNum => {
                if (officeNum) {
                    return true;
                } else {
                    console.log(error + "Please enter the office number.");
                    return false;
                }
            }
        },
        {
            type: "confirm",
            name: "addNewJob",
            message: "Confirm weather or not you want to add another manager",
            choices: ["yes", "no"],
        },
    ])
    .then(choices => {
        const {
            name, id, email, officeNum
        } = choices;
        const manager = new Manager(name, id, email, officeNum);

        jobsArray.push(manager);
        console.log(manager);
    })

};
const addEngie = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the name of the engineer.",
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log(error + "Please enter the name of the engineer.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Please enter their ID.",
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log(error + "Please enter their ID.");
                    return false;
                }
            }
            
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the email of the selected engineer.",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log(error + "Please enter the email of the selected engineer.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "Please enter the github username of the engineer.",
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log(error + "Please enter the github username of the engineer.");
                    return false;
                }
            }
        },
        {
            type: "confirm",
            name: "addNewJob",
            message: "Confirm weather or not you want to add another engineer",
            choices: ["yes", "no"],
        },
    ])
    .then(selection => {
        if (selection.role === "engineer") {
            const {
                name, id, email, github
            } = selection;
            const engineer = new Engineer (name, id, email, github);
            jobsArray.push(engineer);
        };
    })
};
const addInt = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter the name of the intern",
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log(error + "Please enter the name of the intern.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "Please enter their ID.",
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log(error + "Please enter their ID.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the email of the selected intern.",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log(error + "Please enter the email of the selected intern.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "school",
            message: "Please enter the name of the school that the intern attends.",
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log(error + "Please enter the name of the school that the intern attends.");
                    return false;
                }
            }
        },
        {
            type: "confirm",
            name: "addNewJob",
            message: "Confirm weather or not you want to add another intern",
            choices: ["yes", "no"],
        },
    ])
    .then(selection => {
        if (selection.role === "intern") {
            const {
                name, id, email, school
            } = selection;
            const intern = new Intern (name, id, email, school);
            jobsArray.push(intern);
        };
    })
};

