#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random number 
// 2) user input for guessing number 
// 3) compare user input with computer generated number and show result
const randomnumber = Math.floor(Math.random() * 10 + 1);
//console.log(randomnumber);
const answers = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "please guess a number between 1-10:",
    }
]);
if (answers.userguessednumber === randomnumber) {
    console.log("you win");
}
else {
    console.log("you lose");
}
