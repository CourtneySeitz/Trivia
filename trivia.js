$(document).ready(function(){

});

//Psuedo-Code:
//click start button (wishlist - possibly seperate categories)??
//first question box appears, multiple choice (checkbox)
//user clicks/selects answer and clicks 'next', question box disappears, next question box appears...
//wishlist - score is tabulated on screen with progress bar??
//wishlist - timer function? (during game)??
//wishlist - end of quiz display score and time??

//Total number of questions
var totalNumQuestions = $('.question').size();

//Display current question, sets it at first question
var currentQuestion = 0;

//jQuery variable
$question = $('.question');

//Hide all of the questions
$question.hide();

//Show the first question
$($question.get(currentQuestion)).fadeIn();

//Click listener to get next question...
$('.next').click(function() {

  //Current question disappears...
  $($question.get(currentQuestion)).fadeOut(function() {

    //Questions go up one by one
    currentQuestion = currentQuestion + 1;

    //Next question...
    $($question.get(currentQuestion)).fadeIn();



  });
  
});



//...Scoring...want this in jQuery, eventually...

var score = 0;

function Results() {
  if (document.getElementById("correct").checked === true) score++;
  else(console.log("incorrect"));
}



//...Scoring...
