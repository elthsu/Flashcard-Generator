var inquirer = require("inquirer");
var BasicCard = require("./BasicCard.js");
var BasicPlay = require("./BasicPlay.js");
var ClozeCard = require("./ClozeCard.js");
var ClozePlay = require("./ClozePlay.js");
var basicArr = [];
var clozeArr = [];
var clozeWordArr = [];


var question = function() {

  inquirer.prompt([

  {
  type: "list",
  name: "choice",
  message: "What do you want to do?",
  choices: ["Make a Basic Card", "Play a Basic Game",
    "Make a Cloze Card", "Play a Cloze Game", "Exit"
  ]}

]).then(function(response){

  selection = response.choice;

  switch (selection) {
      case "Make a Basic Card":

      makeBasic();

      break;

      case "Make a Cloze Card":
      makeCloze();
      break;

      case "Play a Basic Game":
      if (basicArr[0] !== undefined) {
      BasicPlay(basicArr);
      }
      else {
      console.log("Please make some Basic Cards first!")
      question();

      }
      break;

      case "Play a Cloze Game":
      if (clozeArr[0] !== undefined) {
      ClozePlay(clozeArr);
      }
      else {
      console.log("Please make some Cloze Cards first!")
      question();

      };
      break;

      case "Exit":
      console.log("\nSee you later!\n");
      process.exit();
      break;

  }



  });

}


function makeBasic (){
    inquirer.prompt([
      {
        type: "text",
        name: "basicFront",
        message: "What is the question?",
      },
      {
        type: "text",
        name: "basicBack",
        message: "What is the answer?",
      }
    ]).then(function(response){
      var basicQuestions = new BasicCard(response.basicFront, response.basicBack);
      basicArr.push(basicQuestions);
      inquirer.prompt([
          {
            type: "list",
            name: "repeat",
            message: "Do you want to make any more Basic Cards?",
            choices: ["Yes", "No"]
          }
      ]).then(function(ans){
          if (ans.repeat === "Yes") {
            makeBasic();
          }
          else {
            question();
          }
      })
    })
}


function makeCloze (){
    inquirer.prompt([
      {
        type: "text",
        name: "fullText",
        message: "What is the full sentence?",
      }
    ]).then(function(response){

      clozeWordArr = response.fullText.split(" ");

      inquirer.prompt([
          {
            type: "list",
            name: "clozeText",
            message: "What do you want to remove?",
            choices: clozeWordArr
          }
        ]).then(function(response2){

      var clozeQuestions = new ClozeCard(response.fullText, response2.clozeText);
      clozeArr.push(clozeQuestions);

      console.log(clozeArr);

      inquirer.prompt([
          {
            type: "list",
            name: "repeat",
            message: "Do you want to make any more Cloze Cards?",
            choices: ["Yes", "No"]
          }
      ]).then(function(ans){
          if (ans.repeat === "Yes") {
            makeCloze();
          }
          else {
            question();
          }
      })
    })
    })
}


question();

module.exports = question;
