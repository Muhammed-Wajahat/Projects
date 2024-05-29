#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
console.log("Wellcome to TODO APP");

for (let i = 0; condition; i++) {
  let answer = await inquirer.prompt([
    {
      name: "operations",
      type: "list",
      message: "Please Select a operation?",
      choices: ["Add", "Read", "Delete", "Rename", "Totle"],
    },
  ]);
  if (answer.operations) {
    if (answer.operations === "Add") {
      let addTodo = await inquirer.prompt([
        {
          name: "question1",
          type: "input",
          message: "What would you like to add in you todos?",
        },
        {
          name: "question2",
          type: "confirm",
          message: "Would you like to add more in your todos?",
        },
      ]);
      if (addTodo.question1) {
        todos.push(addTodo.question1);
        console.log(`Successfully add your todo "Please check Read opection"`);
      }
    } else if (answer.operations === "Read") {
      if(todos.length >= 1){
        console.log(todos);
      }else{
        console.log("Sorry Todo is empty");
        
      }
    }else if(answer.operations === "Delete"){
      if(todos.length >= 1){
        let deleteNum = await inquirer.prompt([{
          name : "d1",
          type : "input",
          message : "Please enter a Serial Number?"
        }])
        let index = deleteNum.d1;
        index = index - 1;
        todos.splice(index , 1)
        console.log(`Successfully Delete "please check a Read opection"`);
      }else{
        console.log("Sorry Todo is empty");
      }
    }else if(answer.operations === "Rename"){
      if(todos.length >= 1){
        let renamenum = await inquirer.prompt([{
          name : "r1",
          type : "input",
          message : "Please enter a Serial Number?"
        },
        {
          name : "r2",
          type : "input",
          message : "fill a Currect Todo"
        }
      ])
      let reIndex = renamenum.r1;
      reIndex = reIndex - 1;
      let changeValue = renamenum.r2
      todos.splice(reIndex , 1 , changeValue)
      console.log("Successfully Rename your Todo");
      }else{
        console.log("Sorry Todo is empty");
      }
    }else if(answer.operations === "Totle"){
      console.log(`Totle item is :${todos.length}`);
    }
  } else {
    console.log("Please Select a operation?");
  }
}
