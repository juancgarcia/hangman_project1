Hangman Game

In Hangman, players can enter their own word or phrase for someone else to guess or use a random phrase to play on their own.  Correct letter guesses show up on the "game board", incorrect guesses cause the hangman to advance towards his hanging.

bronze:
take input phrase
store input phrase
take guesses
store guesses
represent correct guesses
represent wrong guesses

silver:
graphical representation of the hangman
reset button
play against computer (random phrase)

gold:
print guesses
time based scoring
aesthetics
themes? -> platinum?


user stories
any white boarding, unsolved problems

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
