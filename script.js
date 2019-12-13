// INTERVAL FUNCTION //

function integerAt(x) {
  var sum = 0;
  for (var i = 1; i <= x; i++)
    sum += i
}

var questCounter = 0;

// $(document).ready(function() {


$("#begin").on("click", function () {
  $("#imgcontainer").empty();
  $("#begin").remove();
  renderQuestion();
  setTime();
});

if (questCounter === 5) {
  $("#quiz").empty();
}


// $(document).on("click", "button", function () {
//   console.log("hello");
//   if (questCounter < 5) {
//     renderQuestion();
//     questCounter++;
//   } else {
//     console.log("Game over!!!");
//   }
// });

// IF BUTTON VALUE INDEX IS A PARTICULAR ONE OF AN ARRAY, THEN YOU ADD POINTS TO TIMER. IF NOT, DEDUCT POINTS//

$(document).on("click", "button.answers", function (event) {
  debugger
  var button = event.target.innerText;
  if (myQuestions[questCounter].correctAnswer === button) {
    // increment the score
    score = score + 15
  } else {
    // subtract from the time
    secondsLeft = secondsLeft - 15
  }
  questCounter++
  renderQuestion()
})
  // IF ON LAST PAGE, DISPLAY RESULTS ON NEW PAGE //

  if (questCounter === 5) {
    (this.questCounter)
  };

  //RENDER QUESTIONS ON PAGE//

  function renderQuestion() {
    $("#quiz").html(`
      <h5>Question: </h5><p>${myQuestions[questCounter].question}</p>
      <p><button class="answers">${myQuestions[questCounter].answers.a}</button></p>
      <p><button class="answers">${myQuestions[questCounter].answers.b}</button></p>
      <p><button class="answers">${myQuestions[questCounter].answers.c}</button></p>
    `)
  }

  //CREATE OPTIONS FOR ALL//

  // integerAt(10);

  var timeEl = document.querySelector(".time");
  // var mainEl = document.getElementById("main");

  // INTERVAL FUNCTION //
  //alert("connected")
  var sum = 0;
  var counterStarter = 60;
  var secondsLeft = 30;
  var score = 0;

  console.log(counterStarter);

  // // TIMER FUNCTION // 

  function setTime() {
    var timerInterval = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left for this question.";

      if (secondsLeft === 0) {
        clearInterval(timerInterval);
      }
      console.log(setTime)
      console.log(timeEl)

    }, 1000);
  }

  // localStorage.clickcount = 1;

  // //QUESTION OPTIONS//

  const myQuestions = [
    {
      question: "Who produced Janet Jackson's first LP?",
      answers: {
        a: "Larry Levan",
        b: "Giorgio Moroder",
        c: "Prince"
      },
      correctAnswer: "Giorgio Moroder"
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
    },
  ];

  

  console.log(myQuestions);
  console.log(myQuestions.correctAnswer);


  // // TIMER MESSAGE FUNCTION //

  // function sendMessage() {
  //   timeEl.textContent = " ";

  //   var imgEl = document.createElement("img");

  //   imgEl.setAttribute("src", "images/image_1.jpg");
  //   mainEl.appendChild(imgEl);

  // }

  // setTime();

  // // JS DISPLAY HERE //

  // const quizContainer = document.getElementById('quiz');
  // const resultsContainer = document.getElementById('results');
  // const submitButton = document.getElementById('submit');

  // startQuiz.addEventListener('click', showResults);
  // document.getElementById('quiz');

  // // QUIZ BUILDER //

  // function buildQuiz(){}

  // function showResults(){}

  // // DISPLAY QUIZ //
  // buildQuiz();

  // // SHOW RESULTS AFTER SUBMITTING
  // submitButton.addEventListener('click', showResults);
