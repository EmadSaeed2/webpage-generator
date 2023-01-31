const Employee = require("./Employee");

class Intern extends Employee {
    constructor(school) {
        super()
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return 'Intern'
    }
}

module.exports = Intern