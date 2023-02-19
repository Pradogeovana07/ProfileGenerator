const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")

const fs = require("fs");
let inquirer = require("inquirer");

let team = [];
managerQuestions()
function managerQuestions(){
    inquirer.prompt([
        {
            type: "input", 
            message: "What is your name?",
            name: "name"
        },
        {
            type: "input", 
            message: "What is your id?",
            name: "id"
        },
        {
            type: "input", 
            message: "What is your email?",
            name: "email"
        },
        {
            type: "input", 
            message: "What is your office number?",
            name: "officeNumber"
        },
    ]).then(mq=> {
        let employee = new Manager(mq.name, mq.id, mq.email, mq.officeNumber)
        employee.s = mq.officeNumber
        team.push(employee)
        doNextQuestions()
    })
}
function engineerQuestions(){
    inquirer.prompt([
        {
            type: "input", 
            message: "What is your name?",
            name: "name"
        },
        {
            type: "input", 
            message: "What is your id?",
            name: "id"
        },
        {
            type: "input", 
            message: "What is your email?",
            name: "email"
        },
        {
            type: "input", 
            message: "What is your Github username?",
            name: "github"
        },
    ]).then(mq=> {
        let employee = new Engineer(mq.name, mq.id, mq.email, mq.github)
        employee.s = mq.github
        team.push(employee)
        doNextQuestions()
    })
}
function internQuestions(){
    inquirer.prompt([
        {
            type: "input", 
            message: "What is your name?",
            name: "name"
        },
        {
            type: "input", 
            message: "What is your id?",
            name: "id"
        },
        {
            type: "input", 
            message: "What is your email?",
            name: "email"
        },
        {
            type: "input", 
            message: "What is your school?",
            name: "school"
        },
    ]).then(mq=> {
        let employee = new Intern(mq.name, mq.id, mq.email, mq.school)
        employee.s = mq.school
        team.push(employee)
        doNextQuestions()
    })
}
function doNextQuestions(){
    inquirer.prompt([
        {
            type: "list", 
            message: "What would you like to do next?",
            name: "listItems", 
            choices: ["addIntern", "addEngineer", "finish"]
        },
    ]).then(doNext => {
        if(doNext.listItems === "addIntern"){
            return internQuestions()
        } else if(doNext.listItems === "addEngineer"){
            return engineerQuestions()
        }else{
            buildTeam()
        }
    })
}
function buildTeam(){
    fs.writeFileSync("./dist/team.html", `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    ` )
    for (let i = 0; i < team.length; i++) {
       fs.appendFileSync("./dist/team.html", `
       ${team[i].name}
       ${team[i].id}
       ${team[i].email}
       ${team[i].s}
       `)
        
    }
    fs.appendFileSync("./dist/team.html", `
    </body>
    </html>
    `)
}