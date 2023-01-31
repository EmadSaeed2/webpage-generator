const questions = require('./utils/questions')
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

const render = require("./src/page-template.js");

const team = []
// function to write to index.html
function writeToFile(filePath, data) {
    fs.writeFile(filePath, data, (error) => {
        if (error) {
            console.log(error);
        }
    });
}

// function to shop inquirer options
function showOptions() {
    inquirer.prompt(questions.options)
        .then((selection) => {
            console.log(selection)
            if (selection.add_more === `Add an engineer`) {
                inquirer.prompt(questions.engineer_quetions).then((engineer_data) => {
                    console.log(engineer_data)
                    const new_engineer = new Engineer(engineer_data.engineer_name, engineer_data.engineer_id, engineer_data.engineer_email, engineer_data.engineer_github)
                    team.push(new_engineer)
                    showOptions()
                })
            } else if (selection.add_more === `Add an intern`) {
                inquirer.prompt(questions.intern_questions).then((intern_data) => {
                    console.log(intern_data)
                    const new_intern = new Intern(intern_data.intern_name, intern_data.intern_id, intern_data.intern_email, intern_data.intern_school)
                    team.push(new_intern)
                    showOptions()
                })
            } else {
                const html = render(team)
                console.log(html)
                writeToFile('./index.html', html)
            }
        })
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions.manager_questions)
        .then((manager_data) => {
            console.log(manager_data)
            const new_manager = new Manager(manager_data.manager_name, manager_data.manager_id, manager_data.manager_email, manager_data.manager_office_no)
            showOptions()
            team.push(new_manager)
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log(error)
            }
        });
}

init()