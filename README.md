Hangman Game

In Hangman, players can enter their own word or phrase for someone else to guess or use a random phrase to play on their own.  Correct letter guesses show up on the "game board", incorrect guesses cause the hangman to advance towards his hanging.

bronze:
take input phrase
store input phrase
take guesses
store guesses
represent correct guesses
represent wrong guesses

user stories:
1. as a player, i want to be able to enter a phrase so that i can play against a friend
2. as a player i want to be able to guess letters so that i can try to win


silver:
graphical representation of the hangman
reset button
play against computer (random phrase)

user stories:
1. as a player i want to see the hangman being hung so that i know how close i am to losing
2. as a player, i want to be able to play against a random phrase so i can play alone
3. as a player i want to be able to reset the game so that i can play multiple times

gold:
print guesses
aesthetics
themes?

user stories
1. as a player i want to see which letters i have guesses so that i dont repeat letters

unsolved problems: lines don't always break correctly in the game board.  Time based scoring.

inputs:
word/phrase to guess
guesses

buttons:
input phrase to guess
input guess
reset
optional: choose to play against the computer (random phrase)

html major elements:
top bar: word input and guess input
middle: progress of hangman
bottom: phrase guessing area
optional: right side: representation of which letters have been guessed
optional: timer upper right

logic:
check guess against the phrase
return correct guess as letters
return incorrect guesses as hangman


store answer as array
compare guess to array, return index of matches
change text of div with matching index to the letter
if wrong, change div for hangman-- probably should do
one pic that progresses, not different divs
