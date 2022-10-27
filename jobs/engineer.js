const employee = require('./employee.js');

class engineer extends employee {
    constructor(name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    };
    getJob() {
        return this.job;
    };
}

module.exports = engineer;