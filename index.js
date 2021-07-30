var readlineSync = require('readline-sync');
const chalk = require('chalk');
var score = 0;
var userName = readlineSync.question(chalk.cyanBright.bold("What is your name? "));
console.log(chalk.magenta.bold("Welcome " + userName + " this is a quiz to find out how well do you know Devraj?"));
console.log(chalk.yellow.bold("To register your answer please type only a, b, or c from the options given below."))
console.log("Let's begin!");


function play(question,answer) {
  var userAnswer = readlineSync.question(question);
  
  if (userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log(chalk.green.bold("Right! answer"));
    score = score + 1;
  } else {
    console.log(chalk.red.bold("Wrong! answer"));
    score = score;
  }
}


var questions = [{
  question: `Where does Devraj live? 
  a : Guwahati
  b : Itanagar
  c : Aizwal

  `,
  answer:"a"
}, {
  question: `What is Devraj's favourite fastfood? 
  a : Burger
  b : Pizza
  c : Momo

  `,
  answer:"b"
}, {
  question: `Which game does Devraj play most? 
  a : Mobile Legend
  b : Pubg
  c : SimCity

  `,
  answer:"a"
},
{
  question: `Which brand phone does Devraj have?
  a : Oneplus
  b : iPhone
  c : Samsung

  `,
  answer:"c"
},
{
  question: `Who is Devraj's programming teacher?
  a: Javed Jaffrey
  b: Tanay Pratap
  c: Gulshan Grover
  
  `,
  answer: "b"
}
]


for (var i = 0; i < questions.length; i++)
{
var currentQuestion = questions[i];
play(currentQuestion.question, currentQuestion.answer)
console.log(chalk.bgMagenta("Current Score", score));
console.log("-------------------");
}
console.log(chalk.yellow.bold("YAY! you scored:", score));



