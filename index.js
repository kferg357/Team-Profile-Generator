const inquirer = require('inquirer');
const fs = require('fs');
// 
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generatedHtmlFilePath = './dist/TeamProfile.html';
// let addNewMembers = [];
// let addNewMember = [];


// const generateEngineer = renderFIle.createEngineer;
// const generateManager = renderFIle.createManager;
// const generateIntern = renderFIle.createIntern;
//  let manager = new Manager("Kenneth", "5", "kennethferguson90@gmail.com"),







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
                        case "Engineer":
                            inquirer
                                .prompt({
                                    name: "github",
                                    type: "input",
                                    message: "What is your github username?"
                                }).then(
                                    function ({ github }) {
                                        generateEngineer(name, id, email, github)

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

                                    }
                                )
                            break
                        case "Manager":
                            inquirer
                                .prompt({
                                    name: "officeNumber",
                                    type: "input",
                                    message: "What is your office number?"
                                }).then(answers => {
                                    const manager = new Manager(answers.officeNumber)
                                    // create html text for new manager
                                    // add this new manager to generate initial Html
                                    function ({ officeNumber }) {
                                        generateManager(name, id, email, officeNumber)

                                    }
                                }

                                )
                            break
                    }
                }
            )
}
function generateManager() {
    addNewMember()
}
function generateEngineer() {
    addNewMember()
}
function generateIntern() {
    addNewMember()
}


function addNewMember() {
    inquirer
        .prompt(
            {
                name: "addOtherMembers",
                type: "confirm",
                message: "Add New Members?",
                // choices: ['Yes', 'No',],
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } }

            }
        ).then(
            function ({ addOtherMembers }) {
                console.log("add other members", addOtherMembers)
                if (addOtherMembers) {
                    memberQuestions()
                } else {
                    generateHTML()
                }
            }
        )

        .catch(err => {
            console.log("Error adding new members", err)
            throw err
        })
}

let generateInitialHTML =
    `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    
    <body>
        <div class="teamNavBar">
            <h class="navBarTitle">My team</h>
        </div>
        <div class="cardBody">`;


function generateaddNewMemberHtml(addNewMember){
return `<div class="addNewMemberCard">
            <div class="addNewMemberTitle">
                <h3>${addNewMember.getName()} - ${addNewMember.getRole()}</h3>
            </div>
            <div class="addNewMemberBody">
                <ul>
                    <li>ID:${addNewMember.getID()}</li>

                    <li>email: <a href="mailto:${addNewMember.getEmail()}">${addNewMember.get.email()}</a></li>${addNewMember.getRoleHtml()}
                </ul>
            </div>
        </div>`;
}

const generateFinalHtml = ` </div>
</body>
</html>`;



function generateHTML() {
    // fs.writeFileSync(generatedHtmlFilePath, "");
    generateInitialHTML += generateFinalHtml;
    fs.writeFileSync(generatedHtmlFilePath, generateInitialHTML);
}
memberQuestions()

