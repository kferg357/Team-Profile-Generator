const Employee = require("./Employee.js");


class Intern extends Employee{
    constructor(name,email, id, schoolAttended){
        super(name, email, id);
        this.school = schoolAttended;
    }
    getRole(){
        return "Intern"
    }
}
module.export = Intern;