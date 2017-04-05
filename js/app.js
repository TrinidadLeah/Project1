/*--variables---*/
var titles = ['Lolita', 'The Sound and the Fury','Dracula','Great Expectations',
'Hamlet','The Great Gatsby','Wuthering Heights'];
var chosenWord;

/*--event listeners---*/
document.querySelectorAll('ul')[0].addEventListener('click', handleClick)
document.getElementById('reset').addEventListener('click', init)


/*--functions---*/

function wordstoUnderscore(word) {
  var underscores = ""
  for (var i =0;  i < word.length; i++) {
    underscores += " _ "
  }
  return underscores
}


function renderUnderscores(str){
  document.querySelector(".chosenword").innerHTML = str
}


function handleClick(evt) {
  var currentLetter = evt.target.innerHTML
  var newUnderscores = isletterinChosenWord(currentLetter, chosenWord)
  console.log('newUnd', newUnderscores)
  document.querySelector('.chosenWord').innerHTML = newUnderscores

}


function isletterinChosenWord(letter,word) {
  var underScorified = ""

  if (word.indexOf(letter) !== -1) {
    for (var i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        underScorified+= word[i]
      } else {
        underScorified+= " _ "
      }
    }
  }

  return underScorified /*|| false*/

}


function init(){
  chosenWord =  titles[Math.floor(Math.random() * 7)].toLowerCase()
  render(chosenWord)
}


function render(chosenWord){
  chosenWord =  titles[Math.floor(Math.random() * 7)].toLowerCase()
  renderUnderscores(wordstoUnderscore(chosenWord))
}


init()











