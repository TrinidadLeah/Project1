/*--variables---*/

var titles = ['Lolita', 'The Sound and the Fury','Dracula','Great Expectations',
'Hamlet','The Great Gatsby','Wuthering Heights'];



/*--event listeners---*/





/*--functions---*/






function wordstoUnderscore(word) {
var underscores = "";
for (var i =0;  i < word.length; i++) {
underscores += " _ "
}
return underscores
};


function renderUnderscores(str){
document.querySelector(".chosenword").innerHTML = str

}

function render(){
  var i = Math.floor(Math.random() * 7);

renderUnderscores(wordstoUnderscore(titles[i]));

}


render();
