/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, playingGame, prevDice, maxScore;

var diceEl1 = document.getElementById('dice-1');
var diceEl2 = document.getElementById('dice-2');
var rollBtn = document.querySelector('.btn-roll');
var holdBtn = document.querySelector('.btn-hold');
var newGameBtn = document.querySelector('.btn-new');

newGame();

rollBtn.addEventListener('click', function () {
  if (playingGame) {
    
    var dice1 = Math.floor(Math.random() * 6 + 1);
    var dice2 = Math.floor(Math.random() * 6 + 1);
    if(dice1 === 6 && prevDice === dice1){
      swapTurns();
      return;
    }else{
      prevDice = dice1;
    }
    diceEl1.style.display = 'block';
    diceEl1.src = 'dice-' + dice1 + '.png';

    diceEl2.style.display = 'block';
    diceEl2.src = 'dice-' + dice2 + '.png';

    if (dice1 !== 1 && dice2 !=1) {
      roundScore += dice1 + dice2;
      document.getElementById(
        'current-' + activePlayer
      ).textContent = roundScore;
    } else {
      swapTurns();
    }
  }
});

holdBtn.addEventListener('click', function () {
  if (playingGame) {
    scores[activePlayer] += roundScore;
    document.getElementById('score-' + activePlayer).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 10) {
      endGame();
    } else {
      swapTurns();
    }
  }
});

newGameBtn.addEventListener('click', newGame);

function swapTurns() {
  roundScore = 0;
  prevDice = 0;
  document.getElementById('current-' + activePlayer).textContent = roundScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  diceEl1.style.display = 'none';
  diceEl2.style.display = 'none';
}

function endGame() {
  document.getElementById('name-' + activePlayer).textContent = 'Winner';
  diceEl1.style.display = 'none';
  diceEl2.style.display = 'none';
  document
    .querySelector('.player-' + activePlayer + '-panel')
    .classList.add('winner');

  playingGame = false;
}

function newGame() {
  playingGame = true;
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  prevDice = 0;
  maxScore = parseInt(document.getElementById('winningScore').value) || 100;
  document.getElementById('winningScore').value = maxScore;
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  diceEl1.style.display = 'none';
  diceEl2.style.display = 'none';

  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');

  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');

  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
}
