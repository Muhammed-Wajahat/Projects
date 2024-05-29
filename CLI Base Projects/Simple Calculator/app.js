#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select valid operator to perform action",
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"],
    },
]);
if (answer.operator === "+") {
    console.log("Your value is:", answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "-") {
    console.log("Your value is:", answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "*") {
    console.log("Your value is:", answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "/") {
    console.log("Your value is:", answer.firstNumber / answer.secondNumber);
}
