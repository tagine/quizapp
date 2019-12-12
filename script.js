// INTERVAL FUNCTION //

function integerAt(x) {
    var sum = 0;
    for(var i = 1; i <= x; i++)
        sum += i
}
console.log(sum)

}

integerAt(10);

var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 10;

// TIMER FUNCTION // 

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left for this question.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

//QUESTION OPTIONS//

const myQuestions = [
  {
    question: "Who produced Janet Jackson's first LP?",
    answers: {
      a: "Larry Levan",
      b: "Giorgio Moroder",
      c: "Prince"
    },
    correctAnswer: "b"
  },
  {
    question: "What was the name of Janet's first LP?",
    answers: {
      a: "Dream Street",
      b: "Control",
      c: "Janet"
    },
    correctAnswer: "a"
  },
  {
    question: "How many albums has Janet released",
    answers: {
      a: "4",
      b: "9",
      c: "11",
    },
    correctAnswer: "c"
  },
  {
    question: "Where is Janet from?",
    answers: {
      a: "Philadelphia, PA",
      b: "Skokie, IL",
      c: "Gary, IN",
    },
    correctAnswer: "c"
  },
  {
    question: "What movie soundtrack was Janet Jackson's music featured on?",
    answers: {
      a: "The Nutty Professor",
      b: "Die Hard",
      c: "Face Off",
    },
    correctAnswer: "a"
  }
];


// TIMER MESSAGE FUNCTION //

function sendMessage() {
  timeEl.textContent = " ";

  var imgEl = document.createElement("img");

  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}

setTime();

// JS DISPLAY HERE //

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

document.getElementById('quiz');

// QUIZ BUILDER //

function buildQuiz(){}

function showResults(){}

// DISPLAY QUIZ //
buildQuiz();

// SHOW RESULTS AFTER SUBMITTING
submitButton.addEventListener('click', showResults);