const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./Employee');
const Intern = require('./Intern');
const Manager = require('./Manager');
// const Path = require('Path');




function memberQuestions() {

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
            ]).then(
                function ({ name, id, email, title }) {
                    switch (title) {
                        case "Engineeer":
                            inquirer
                                .prompt({
                                    name: "github",
                                    type: "input",
                                    message: "What is your github username?"
                                }).then(
                                    function ({ github }) {
                                        generateEngineer(name, id, email, github)
                                        addNewMember()
                                    }
                                )
                            break
                        case "Intern":
                            inquirer
                                .prompt({
                                    name: "officeNumber",
                                    type: "input",
                                    message: "What is your office number?"
                                }).then(
                                    function ({ officeNumber }) {
                                        generateManager(name, id, email, officeNumber)
                                        addNewMember()
                                    }
                                )
                            break
                    }
                })
}
function addNewMember() {
    inquirer
        .prompt(
            {
                name: "addNewMember",
                type: "confirm",
                message: "Add New Members?",

            }
        ).then(
            function({addNewMember}) {
                console.log("add new members", addNewMember)
                
            }
        )
}

