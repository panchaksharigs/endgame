 var readlinesync = require("readline-sync");
var score=0;
// var userName = readlinesync.question("what is ur name?");

// console.log("welcome " +userName+"!");
function welcome() {
 var userName = readlinesync.question("What's your name?");

  console.log("Welcome "+ userName + " to DO YOU KNOW panchakshari?");
}
function play(question, answer) {
  var userAnswer = readlinesync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
     score = score + 1;
     console.log("-------------")
  } else {
    console.log("wrong!");
   
  }

   console.log("current score: ", score);
 //  console.log("-------------")
}
function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");
}
welcome();
play(" where do i live  ","dasarahalli");
play(" am i good person  ","no");
showScores();