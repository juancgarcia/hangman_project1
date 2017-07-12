/* global $ hangmanModel hangmanView*/

var ansString = ''
var answer = []
var guess = []
var numDiv
var rightGuesses = []
var wrongGuesses = []


function createBoard () {
  console.log('working')
  for (var i = 0; i < numDiv; i++) {
    if (answer[i] === ' ') {
      createBlankTile()
    } else {
      createLetterTitle()
    }
  }
}


function compareGuess () {
  if (answer.some(x => x === guess)) {
    for (var i = 0; i < answer.length; i++) {
      if (answer[i] === guess) {
        rightGuesses.push(guess)
        correctGuess (i)
      }
    }
  } else {
    wrongGuesses.push(guess)
    wrongGuess ()
  }
}
