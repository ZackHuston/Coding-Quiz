var display = document.getElementById("time")
var timer = 60
var currentIndex = 0
var startBtn = document.querySelector("#start-btn").addEventListener("click", 

function startQuizTimer (){
    displayQuestions(currentIndex);
    
        setInterval(function(){
           if(timer > 0 ){
            timer--
           }
           document.getElementById("time").textContent =  timer;
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
        displayQuestions(currentIndex)
        if (currentIndex > questions[2]){
            
        }
    })
}

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