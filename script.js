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

// TIMER MESSAGE FUNCTION //

function sendMessage() {
  timeEl.textContent = " ";

  var imgEl = document.createElement("img");

  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}

setTime();