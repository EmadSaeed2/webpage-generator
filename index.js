const questions = require('./utils/questions')
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

function showOptions() {
    inquirer.prompt(questions.options)
        .then((selection) => {
            console.log(selection)
            if (selection.add_more === `Add an engineer`) {
                inquirer.prompt(questions.engineer_quetions).then((engineer_data) => {
                    console.log(engineer_data)
                    showOptions()
                })
            } else if (selection.add_more === `Add an intern`) {
                inquirer.prompt(questions.intern_questions).then((intern_data) => {
                    console.log(intern_data)
                    showOptions()
                })
            }
        })
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions.manager_questions)
        .then((manager_data) => {
            console.log(manager_data)
            const new_manager = new Manager
            new_manager.name = manager_data.name
            new_manager.id = manager_data.id
            new_manager.email = manager_data.email
            new_manager.officeNumber = manager_data.officeNumber
            showOptions()
            // const md = generateMarkdown(answers)
            // const filePath = `./${answers.file_name}.md`
            // writeToFile(filePath, md)
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log(error)
            }
        });
}

init()