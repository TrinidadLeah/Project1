#Pseudocode - Project 1

## Themed Hangman

1. Initially, on page load, we want the state to be the display of a word from an array of words, a keyboard and a gallow platform.

- The word will be hidden to the user except for letter spaces.
- The word will need to be selected randomly.


### Game Play
****

- Using an array, when a letter is selected, that letter will need to be checked against the length of the secret chosen word.
- Then, in a separate array a set of values will be set to null.
- If the letter selected matches any in the secret chosen word, a null value in the array is replaced with that letter.

5. If the letter is a match, the display is rendered with the letter showing itself.
6. If the letter is not a match, a UI element is added to the hangman.

### Win Conditions
---

8. The looping continues through all the user choices.
9. If all letters in the null array are chosen, a winning message is displayed to the user.
10. If the user has made 7 unsuccessful guesses against the null array, a losing message is triggered.
10. On button click, the "Start a New Game" button will reset the game and run initial function that chooses another randomized word.
