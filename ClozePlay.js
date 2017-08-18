var inquirer = require("inquirer");
var ques = require("./starthere.js");
var score = 0;
var i = 0;

var ClozePlay = function(clozeArr) {


if ((i+1) <= clozeArr.length) {

      var q = clozeArr[i].partial;
      var a = clozeArr[i].cloze;

      inquirer.prompt([

        {
          type: "text",
          name: "answer",
          message: q,
        }

      ]).then(function(ans) {

        console.log("You answered: " + ans.answer);
        console.log("The correct answer is: " + a);

        if (ans.answer == a) {

          console.log("Correct!");
          score++;
          console.log("Score is " + score);



        } else {

          console.log("Sorry, wrong answer.");
          console.log("The correct answer is " + a)

        }

        i++;
        ClozePlay(clozeArr);




      })




    }

    else {

      console.log("You've answered all the questions! You scored " + score
      + " out of " + clozeArr.length + "!");
      console.log("Thanks for playing!");


    }



}


module.exports = ClozePlay;
