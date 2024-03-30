#! /usr/bin/env node

import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";

const answer = await inquirer.prompt([
    {message: "Enter first number", type: "number", name: "firstNumber" },
    {message: "Enter second number", type: "number", name: "secondNumber"},
    {
     message:"Select one of the operators to perform operations",
     type:"list",
     name:"operator",
     choices:["Addition","Substraction","Multiplication","Division"],
         
    },
]);
console.log(answer)

// Conditional Statement
if(answer.operator === "Addition"){
    console.log(answer.firstNumber + answer.secondNumber);
}else if(answer.operator === "Substraction"){
    console.log(answer.firstNumber - answer.secondNumber);
}else if(answer.operator === "Multiplication"){ 
       console.log(answer.firstNumber * answer.secondNumber);
}else if(answer.operator === "Division"){
    console.log(answer.firstNumber / answer.secondNumber);
}else{
    console.log("Please select valid operator")
}






