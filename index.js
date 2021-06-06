const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./Employee');
const Intern = require('./Intern');
const Manager = require('./Manager');
// const Path = require('Path');






inquirer
    .prompt(
        [
            {
                name: "Name",
                type: "input",
                message: "What is the team manager's name?",
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
            },
            {
                name: "Employee",
                type: "input",
                message: "What is your ID?",
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
            },
            
            {
                name: "Email",
                type: "input",
                message: "What is your Email?",
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
            },
            
            {
                name: "Title",
                type: "list",
                message: "What is your title?",
                choices: ['Manager', 'Engineer', 'Intern',],
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
            },
        ]    
    ).then()
