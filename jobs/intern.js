const employee = require('./employee.js');

class intern extends employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    };
    getJob() {
        return this.job;
    };
}

module.exports = intern;