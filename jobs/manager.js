const employee = require('./employee.js');

class manager extends employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
    }
    getOfficeNum() {
        return this.officeNum;
    };
    getJob() {
        return this.getJob;
    };
}

module.exports = manager;