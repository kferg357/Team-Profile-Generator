const inquirer = require('inquirer');
const fs = require('fs');
// const Employee = require('./lib/employee\')
const Intern = require('./lib/intern')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const templateDir = "./templates/"
const employeeGen = require('./lib/engineer')
let addNewMember = ""

const renderManager = manager => {
    let template = fs.readFileSync(path.resolve(templateDir, "manager.htnl"), "utf8");
    var managerHTML = ""
    managerHTML = managerHTML + template.replace(/{{name}}/g, manager.getName())
    replace(/{{role}}/g, manager.getRole())
    replace(/{{email}}/g, manager.getEmail())
    replace(/{{id}}/g, manager.getId())
    replace(/{{officeNumber}}/g, manager.getofficeNumber())
    addNewMember = addNewMember + managerHTML;
    console.log(managerHTML)
};

const renderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(templateDir, "engineer.htnl"), "utf8");
    var engineerHTML = ""
    engineerHTML = engineerHTML + template.replace(/{{name}}/g, engineer.getName())
    replace(/{{role}}/g, engineer.getRole())
    replace(/{{email}}/g, engineer.getEmail())
    replace(/{{id}}/g, engineer.getId())
    replace(/{{officeNumber}}/g, engineer.getofficeNumber())
    addNewMember = addNewMember + engineerHTML;
    console.log(engineerHTML)
};

const renderIntern = intern => {
    let template = fs.readFileSync(path.resolve(templateDir, "intern.htnl"), "utf8");
    var internHTML = ""
    internHTML =internHTML + template.replace(/{{name}}/g, intern.getName())
    replace(/{{role}}/g, intern.getRole())
    replace(/{{email}}/g, intern.getEmail())
    replace(/{{id}}/g, intern.getId())
    replace(/{{officeNumber}}/g, manager.getofficeNumber())
    addNewMember = addNewMember + managerHTML;
    console.log(managerHTML)
};

function createManager(name, id, email, officeNumber) {
    const manager = new Manager(name, id, email, officeNumber)
    renderManager(manager)
}

function createEngineer(name, id, email, github) {
    const engineer = new Engineer(name, id, email, github)
    renderEngineer(engineer)
}

function createIntern(name, id, email, school) {
    const intern = new Intern(name, id, email, school)
    renderIntern(intern)
}

function renderMain() {
    let mainTemplate = fs.readFileSync(path.resolve(templateDir, "main.html"), "utf-8")
    var mainHtml = ""
    mainHtml = mainHtml + mainTemplate.replace(/{{team}}/g, addNewMember)
    let file = path.join(__dirname, 'output', "/index.html");
    console.log(file);
    fs.writeFile(file, mainHtml, function (err) {
        if (err) {
            throw new Error(err)
        }
        console.log('done writing file')
    })
}
    module.exports = {
        createManager: createManager,
        createEngineer: createEngineer,
        createIntern: createIntern,
        renderMain: renderMain

    }

