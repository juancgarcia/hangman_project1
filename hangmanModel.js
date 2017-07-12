/* global $ hangmanModel hangmanView*/

var ansString = ''
var answer = []
var guess = []
var numDiv


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
  for (var i = 0; i < answer.length; i++) {
    if (answer[i] === guess) {
      correctGuess (i)
    } else {
      wrongGuess ()
    }
  }
}
