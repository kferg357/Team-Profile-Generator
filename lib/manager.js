const Employee = require("./Employee.js");


class Manager extends Employee{
    constructor(name, id, email,  officeNumber){
        super(name, id, email, );
        this.officeNumber = officeNumber;
    }
    getRole(){
        return "Manager"
    }
    getOfficeNumber(){
        return this.officeNumber
    }

    getId() {
        return this.id
    }
    // getRoleHtml(){
    //     return `<li>Office Number: ${this.getOfficeNumber()}</li>`
    // }
}

module.exports = Manager;