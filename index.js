const inquirer = require('inquirer');
const fs = require('fs');
// 
const Employee = require("./lib/employee")
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
// const generateEngineer = renderFIle.createEngineer;
// const generateManager = renderFIle.createManager;
// const generateIntern = renderFIle.createIntern;
 let renderFIle = require ('./render');
 

// const Path = require('Path');




function memberQuestions() {

    inquirer
        .prompt(
            [
                {
                    name: "name",
                    type: "input",
                    message: "What is the team manager's name?",
                    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
                },
                {
                    name: "id",
                    type: "input",
                    message: "What is your ID?",
                    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
                },

                {
                    name: "email",
                    type: "input",
                    message: "What is your Email?",
                    validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
                },

                {
                    name: "title",
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
                                    name: "school",
                                    type: "input",
                                    message: "What school do you attend?"
                                }).then(
                                    function ({ school }) {
                                        generateIntern(name, id, email, school)
                                        addNewMember()
                                    }
                                )
                            break
                        case "Manager":
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
                }
            )
}
function generateManager () {
    addNewMember()
}
function generateEngineer (name, id, email, github) {
addNewMember()
}
function generateIntern() {
    addNewMember()
}


function addNewMember() {
    inquirer
        .prompt(
            {
                name: "addNewMember",
                type: "confirm",
                message: "Add New Members?",
                // choices: ['Yes', 'No',],
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } } 

            }
        ).then(
            function ({ addNewMember }) {
                console.log("add new members", addNewMember)
                if (addNewMember) {
                    memberQuestions()
                } else {
                    renderHTML()
                }
            }
        )
        .catch(err => {
            console.log("Error adding new members", err)
            throw err
        })
}
 memberQuestions()

