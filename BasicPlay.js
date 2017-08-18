var inquirer = require("inquirer");
var ques = require("./starthere.js");
var score = 0;
var i = 0;

var BasicPlay = function(basicArr) {


if ((i+1) <= basicArr.length) {

      var q = basicArr[i].front;
      var a = basicArr[i].back;

      inquirer.prompt([

        {
          type: "text",
          name: "question",
          message: q,
        }

      ]).then(function(ans) {

        console.log(ans.question);
        console.log(a);
        if (ans.question === a) {

          console.log("Correct!");
          score++;
          console.log("Score is " + score);



        } else {

          console.log("Sorry, wrong answer.");

        }

        i++;
        BasicPlay(basicArr);




      })




    }

    else {

      console.log("You've answered all the questions! You scored " + score
      + " out of " + basicArr.length + "!");
      console.log("Thanks for playing!");


    }



}


module.exports = BasicPlay;
