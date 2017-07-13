/* global $ hangmanModel hangmanView phrases*/

var ansString = ''
var answer = []
var guess = []
var numDiv
var rightGuesses = []
var wrongGuesses = []

// determines if a tile should be empty or for a letter
function createBoard () {
  for (var i = 0; i < numDiv; i++) {
    if (answer[i] === ' ') {
      createBlankTile()
    } else {
      createLetterTile()
    }
  }
}

// determines if a guess is right or wrong
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
    wrongGuess()
    checkForLoss()
  }
}

// checks if the player has won
function checkForWin () {
  if (rightGuesses.length === answer.length) {
    winNotice()
  }
}

// checks if the player has lost
function checkForLoss () {
  if (wrongGuesses.length === 5) {
    loseNotice()
  }
}

//selects a random phrase as the answer 1394
function selectRandom () {
  var ind = Math.floor(Math.random() * 1392)
  var randomString = phrases[ind]
  console.log(randomString)
  storeAnswerRandom(randomString)
}
