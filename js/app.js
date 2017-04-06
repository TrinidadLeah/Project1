/*--variables---*/
var titles = ['Lolita', 'The Sound and the Fury', 'Dracula', 'Great Expectations',
  'Hamlet', 'The Great Gatsby', 'Wuthering Heights'
];
var images = [
  "images/begin state (2).png",
  "images/Turn 2 (2).png",
  "images/Turn 3 (2).png",
  "images/Turn 4 (2).png",
  "images/Turn 5 (2).png",
  "images/Turn 6 (2).png",
  "images/Lose state 2.png"

];

var chosen, guessed, badGuesses, message, gameOver;


/*--cached dom elements---*/
var guessedEl = document.querySelector('.guess');
var messageEl = document.getElementById('message');

/*--event listeners---*/
document.querySelector('ul').addEventListener('click', handleLetterClick);
document.getElementById('reset').addEventListener('click', newGame);


/*--functions---*/

function getUnderscores() {
  var underscores = "";
  for (var i = 0; i < chosen.length; i++) {
    underscores += chosen[i] === " " ? " " : "_";
  }
  return underscores;
}


function handleLetterClick(evt) {
  var letter = evt.target.textContent;
  if (badGuesses.includes(letter) || guessed.includes(letter)) return;
  evt.target.className = "used-letter";
  if (chosen.includes(letter)) {
    var chosenArr = chosen.split("");
    var guessArr = guessed.split("");
    chosenArr.forEach(function (char, idx) {
      if (letter === char) guessArr[idx] = letter;
    });
    guessed = guessArr.join("");
  }
  else {
    badGuesses.push(letter);
  }
  if (guessed === chosen) {
    message = "You win!";
    gameOver = true;
  }
  else if (badGuesses.length === 6) {
    message = "You lose.";
    gameOver = true;
  }



  render();
}


function isletterinChosenWord(letter, word) {
  var underScorified = ""

  if (word.indexOf(letter) !== -1) {
    for (var i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        underScorified += word[i]
      }
      else {
        underScorified += " _ "
      }
    }
  }

  return underScorified || false

}


function newGame() {
  chosen = titles[Math.floor(Math.random() * titles.length)].toLowerCase();
  guessed = getUnderscores();
  badGuesses = [];
  message = " ";
  gameOver = false;
  var els = document.querySelectorAll('.alphabet li');
  for (li of els) {
    li.classList.remove('used-letter');
  }
  render();
}


function render() {
  guessedEl.innerHTML = guessed;
  messageEl.innerHTML = message;
  document.getElementById('man').setAttribute("src", images[badGuesses.length]);
  document.querySelector('.alphabet').style.display = gameOver ? "none" : "";
}


newGame();











