#! /usr/bin/env node
import inquirer from "inquirer";
let myList = [];
let condition = true;
while (condition) {
    let todoAnswer = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "What would you like to add in your list",
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "Want to add more?",
            default: "true"
        }
    ]);
    myList.push(todoAnswer.firstQuestion);
    console.log(myList);
    condition = todoAnswer.secondQuestion;
}
