const Employee = require("./Employee.js");


class Engineer extends Employee{
    constructor(name, email, id, github){
        super(name, email, id);
        this.github = github;
    }
    getRole(){
        return "Engineer"
    }
    getGithub() {
        return this.github
    }
    getRoleHtml(){
        return `<li>Github: <a href="https://github.com/${this.getGithub()}">${this.getGithub()}}</a></li>`;
    }
}
module.export = Engineer;

