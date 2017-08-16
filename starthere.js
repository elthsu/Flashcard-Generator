

var inquirer = require("inquirer");
var basic = require("./BasicCard.js");
var cloze = require("./ClozeCard.js");

var test = new basic("who is sitting to my left", "michael");


console.log(test.front);
console.log(test.back);
console.log(cloze.name);


inquirer.prompt([

  {
    type: "list",
    name: "choice",
    message: "What do you want to do?",
    choices: ["Make a Basic Card", "Make a Cloze Card",
    "Play a Basic Game", "Play a Cloze Game", "Exit"]
  }

]).then(function(response){

  selection = response.choice;

  switch (selection) {
      case "Make a Basic Card":
      basicMake();
      break;

      case "Make a Cloze Card":
      clozeMake();
      break;

      case "Play a Basic Game":
      basicPlay();
      break;

      case "Play a Cloze Game":
      clozePlay();
      break;

      case "Exit":
      console.log("\nSee you later!\n");
      process.exit();
      break;

  }



});
