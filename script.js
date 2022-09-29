var display = document.getElementById("time")
var questionsContainer = document.getElementById("questions-container")
var formContainer = document.querySelector(".form-container")
var viewScores = document.getElementById("view-scores")
var initials = document.getElementById("initials")
var timeLeft =  document.getElementById("time").textContent
var timer = 60
var currentIndex = 0
var startBtn = document.querySelector("#start-btn").addEventListener("click", 

function startQuizTimer (){
    displayQuestions(currentIndex);
    
      var timeId = setInterval(function(){
           if(timer > 0 ){
            timer--
           } else {
               endQuiz()
           }
           timeLeft =  timer;
        }, 1000)
    }
)
var questions = [
    {
       question: "HTTPS stands for witch of the following",
       answers: [
        "Hypertext Transfer Protocol Secure Server ", 
        "Hypertext Transfer Protocol Secure", 
        "Hyper Transfer Protocol Secure "
        ],
        correctAnswer: "Hypertext Transfer Protocol Secure" 
    },
    {
        question: "What does DOM stand for?",
        answers: [
            "Dominating Objecive Mountains", 
            "Downed Objective Model", 
            "Document Object Model"
        ],
        correctAnswer: "Document Object Model" 
    },
    {
        question: "Commonly used data types do NOT include?",
        answers: [
            "Strings", 
            "Bolean", 
            "Alert"
        ],
        correctAnswer: "Alert" 
    }

]


function displayQuestions(currentQuestionIndex){
    var currentQuestion = questions[currentQuestionIndex]
    var questionEl = document.querySelector("#question")
    console.log(currentQuestionIndex)
    questionEl.textContent = currentQuestion.question
    var answerOne = document.querySelector("#question-1")
    var answerTwo = document.querySelector("#question-2")
    var answerThree = document.querySelector("#question-3")
    answerOne.textContent = currentQuestion.answers[0]
    answerTwo.textContent = currentQuestion.answers[1]
    answerThree.textContent = currentQuestion.answers[2]
    
    
}

var answers = document.querySelectorAll(".answer");
for (var i = 0; i < answers.length; i++){
    answers[i].addEventListener("click", function(event){
        if ( event.target.textContent === questions[currentIndex].correctAnswer){
            timer = timer+10
        } else {
            timer = timer-10
        } 
        currentIndex++
        if (currentIndex >= questions.length){
            endQuiz()
        } else {
            displayQuestions(currentIndex)
        }
    })
}

function endQuiz (){
    questionsContainer.style.display = "none"
    formContainer.style.display = "block"

}

function saveScores (event){
    event.preventDefault();
    console.log(initials.value)
    //initials: 
    //score: 

}

viewScores.addEventListener('click', saveScores)

// GIVEN I am taking a code quiz

// WHEN I click the start button

// THEN a timer starts and I am presented with a question

// WHEN I answer a question

// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score