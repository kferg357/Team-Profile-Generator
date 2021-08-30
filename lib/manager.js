const Employee = require("./Employee.js");


class Manager extends Employee{
    constructor(name, email, id, officeNumber){
        super(name, email, id);
        this.office = officeNumber;
    }
    getRole(){
        return "Manager"
    }
    getOfficeNumber(){
        return this.officeNumber
    }
    // getRoleHtml(){
    //     return `<li>Office Number: ${this.getOfficeNumber()}</li>`
    // }
}

module.export = Manager;