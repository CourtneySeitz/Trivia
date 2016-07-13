$(document).ready(function(){
  console.log("Ready!");
  //question array starts at zero/beginning
  var currentQuestion = 0;
  //score starts at zero
  var score = 0;
  //hides intro text, leaves 'start' button visible
  $(".intro").hide();
  //reveals intro text on click event, calls function for running game, fill value of button with 'start game'
  $("#startGame").on("click", beginGame); {
  $("#startGame").val("Start Game");
  currentQuestion++;
  }

  //function for event listener, shows intro text, starts game
  function beginGame() {
    $(".intro").fadeIn("slow");
    if (currentQuestion < triviaQuestions.length) {
      $("#startGame").val("Next Question")
      $("#questionBox").remove();
      $(".optionsList").remove();
        $("p.questions").after('<p id="questionBox">' + triviaQuestions[currentQuestion].question + '</p>');
        $("p.options").after("<form id='quizForm'>");
var selections = triviaQuestions[currentQuestion].selection;
      //  console.log(selections);
        for (var i = 0; i < selections.length; i++) {
        //  console.log("looping");
        $("#quizForm").after("<label><div class='optionsList'><input type='radio' name='" + selections[i] +"'/>" + selections[i] + '<br /></div></label>');
        }
        $("#startGame").before("</form>");

        currentQuestion++;
      }
      else {
        $("p.questions").remove();
        $("p.options").remove();
        $("#questionBox").remove();
        $(".optionsList").remove();
      }
    }

    //put in function here to have button show 'Play Again' text when quiz ends

  //question/answer array of an array stored in a variable
  var triviaQuestions = [

    {
      question: "Where did bananas originate?",
      selection: ["Southeast Asia", "The Caribbean", "The Grocery Store", "Morocco" ],
      correctSelection: 0
    },
    {
      question: "How is the banana plant classified botanically?",
      selection: ["Shrubbery", "Herb", "Tree", "Delicious"],
      correctSelection: 1
    },
    {
      question: "What do agriculturists call bananas growing together on a single stem?",
      selection: ["Fingerlings", "Toes", "Hands", "Legs"],
      correctSelection: 2
    },
    {
      question: "Into which of the following sub-categories does the banana fruit best fit?",
      selection: ["Nut", "Legume", "Sundae", "Berry"],
      correctSelection: 3
    },

  ];


});
