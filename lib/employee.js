 const inquirer = require('inquirer')
class Employee {
    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
    }

    getName() {
        return this.name 
    }
    getID() {
        return this.id
    }
    getRole() {
        return "Employee"
    }
        getEmail() {
            return this.email
        }
    }


module.exports = Employee;