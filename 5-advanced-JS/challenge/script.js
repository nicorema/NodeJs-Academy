(function () {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  function Player(){
    this.score = 0;
  }
  Player.prototype.correctAnswer =  function(){
    this.score++;
  }
  Player.prototype.render = function(){
    console.log('Score: ' + this.score)
  }

  Question.prototype.render = function () {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; ++i) {
      console.log(i + 1 + ' - ' + this.answers[i]);
    }
  };

  Question.prototype.response = function (ans, player) {
    if (this.correct === ans) {
      console.log('Correct!');
      player.correctAnswer();
    } else {
      console.log('Incorrect');
    }
  };

  var bandQuestion = new Question(
    "Which is Nico's favorite band",
    ['Kiss', 'Iron Maiden', 'Megadeth', 'Slayer'],
    1
  );

  var writterQuestion = new Question(
    "Which is Nico's favorite writter",
    ['Stephen King', 'Gabriel Garcia Marquez', 'JK Rowling', 'Mario Mendoza'],
    3
  );

  var player = new Player();

  function nextQuestion() {
    var quizQuestions = [bandQuestion, writterQuestion];
    var questionNumber = Math.floor(Math.random() * quizQuestions.length);
    var question = quizQuestions[questionNumber];
    question.render();
    var result = prompt('Type correct number of answer');
    question.response(result - 1,player);
    player.render();
    if (questionNumber < quizQuestions.length) {
      questionNumber++;
    } else {
      questionNumber = 0;
    }
    if (result) {
      nextQuestion();
    }
  }
  nextQuestion();
})();
