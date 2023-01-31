const questions = require('./utils/questions')
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const template = require('./src/page-template')

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

const team = []

function writeToFile(filePath, data) {
    fs.writeFile(filePath, data, (error) => {
        if (error) {
            console.log(error);
        }
    });
}

function showOptions() {
    inquirer.prompt(questions.options)
        .then((selection) => {
            console.log(selection)
            if (selection.add_more === `Add an engineer`) {
                inquirer.prompt(questions.engineer_quetions).then((engineer_data) => {
                    console.log(engineer_data)
                    const new_engineer = new Engineer(engineer_data.engineer_name, engineer_data.engineer_id, engineer_data.engineer_email, engineer_data.engineer_github)
                    console.log(new_engineer.getName())
                    console.log(new_engineer.getRole())
                    console.log(new_engineer.getId())
                    console.log(new_engineer.getEmail())
                    console.log(new_engineer.getGithub())
                    team.push(new_engineer)
                    showOptions()
                })
            } else if (selection.add_more === `Add an intern`) {
                inquirer.prompt(questions.intern_questions).then((intern_data) => {
                    console.log(intern_data)
                    const new_intern = new Intern(intern_data.intern_name, intern_data.intern_id, intern_data.intern_email, intern_data.intern_school)
                    console.log(new_intern.getName())
                    console.log(new_intern.getRole())
                    console.log(new_intern.getId())
                    console.log(new_intern.getEmail())
                    console.log(new_intern.getSchool())
                    team.push(new_intern)
                    showOptions()
                })
            } else {
                const html = template(team)
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

            // console.log(new_manager.getName())
            // console.log(new_manager.getRole())
            // console.log(new_manager.getId())
            // console.log(new_manager.getEmail())
            // console.log(new_manager.getOfficeNumber())

            team.push(new_manager)


        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log(error)
            }
        });
}

init()