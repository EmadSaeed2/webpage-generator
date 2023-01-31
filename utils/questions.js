const questions = {

    manager_questions: [
        {
            name: `manager_name`,
            message: `What is the team manager's name?`,
        },
        {
            name: `manager_id`,
            message: `What is the team manager's id?`
        },
        {
            name: `manager_email`,
            message: `What is the team manager's email address?`
        },
        {
            name: `manager_office_no`,
            message: `What is the team manager's office number?`
        },

    ],
    engineer_quetions: [
        {
            name: `engineer_name`,
            message: `What's the engineer's name`
        },
        {
            name: `engineer_id`,
            message: `What's the engineer's id`
        },
        {
            name: `engineer_email`,
            message: `What's the engineer's email`
        },
        {
            name: `engineer_github`,
            message: `What's the engineer's GitHub username`
        },
    ],
    intern_questions: [
        {
            name: `intern_name`,
            message: `What's the intern's name`
        },
        {
            name: `intern_id`,
            message: `What's the intern's id`
        },
        {
            name: `intern_email`,
            message: `What's the intern's email`
        },
        {
            name: `intern_school`,
            message: `What's the intern's school`
        },
    ],
    options: [
        {
            type: `list`,
            name: `add_more`,
            message: `Please select an option`,
            choices: [`Add an engineer`, `Add an intern`, `Finish building the team`]
        }
    ]
}

module.exports = questions;