var readlineSync = require("readline-sync");
var highScores = [
  {
    name: "Manan",
    score: 3,
  },
  {
    name: "Vivek",
    score: 2,
  },
]
var score = 0;
var questions = [{
  question: "Where do I live? ",
  answer: "Vapi"
},
{
  question: "My favorite programming language would be? ",
  answer: "Python"
},
{
  question: "What is my age? ",
  answer: "22"
},
{
  question: "Am I a dog person or cat person? ",
  answer: "Dog"
},
{
  question : "Do I play Valorant or CS:GO? ",
  answer: "Valorant"
},
{
  question: "What will I prefer in my neog LevelOne Interview JS or React? ",
  answer: "JS"
}];
function welcome() {
 var userName = readlineSync.question("What is your name? ");

  console.log("Welcome "+ userName + " to the Dhruvin quiz");
}
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() === answer.toLowerCase()) 
  { 
    console.log("Correct!");
    score = score + 1;
  } else {
    console.log("Nuh uh! Wrong!");
  }
  console.log("Score : ", score);
  console.log("_______________")
}
function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}
function showScores() {
  console.log("Final Score: ", score);
  console.log("These are the high score till now!");
  highScores.map(score => console.log(score.name, " : ", score.score))
  for(var i=0; i<highScores.length; i++) {
    if(score>highScores[i].score){
      console.log("Congrats! It looks like you have a highscore. Please send a screenshot to me so I can update the array with your name!");
      break;
    }
  }
}
welcome();
game();
showScores();