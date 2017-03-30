#Pseudocode - Project 1

##Themed Hangman

1. Initially, on page load, we want the state to be the display of a word from an array of words, a keyboard and a gallow platform.

- The word will be hidden to the user except for letter spaces.
- The word will need to be selected randomly.


###UI Updates
****

- When a letter is selected, that letter will need to be checked against the length of the originally chosen word

5. If the letter is a match, the UI updates with the letter showing itself.
6. If the letter is not a match, a UI element is added to the hangman
7. Letters that have already been chosen change color on the UI.

###Win Conditions
---

8. If all the elements on the hangman are rendered ( 7 losing turns), a losing message is displayed to the user.
9. If all the elements on the chosen word are shown, a winning message is displayed to the user.
10. On button click, the "Start a New Game" button will reset the game and run initial function that chooses another randomized word.