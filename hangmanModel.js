/* global $ hangmanModel hangmanView phrases*/

var ansString = ''
var answer = []
var guess = []
var numDiv
var rightGuesses = []
var wrongGuesses = []
var allGuesses = []
var uniqueGuesses

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
// if (uniqueGuesses.some(x => x === guess) || (guess.length === 1))
// determines if a guess is right or wrong
function compareGuess () {
  allGuesses.push(guess)
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
  }
}

// checks if the player has won
function checkForWin () {
  var answerWin = answer.join(' ')
  if (rightGuesses.length === answer.length) {
    winNotice()
  }
}


//selects a random phrase as the answer 1394
function selectRandom () {
  var ind = Math.floor(Math.random() * 1392)
  var randomString = phrases[ind]
  console.log(randomString)
  storeAnswerRandom(randomString)
}

// validates entry is letts or spaces
function entryValidation (a) {
   var letters = /^[A-Za-z\s]+$/
   return a.match(letters) ? true : false
}

// validates the guess entries
function guessValidation () {
  if (answer.length !== 0) {
    guess = guessInput.val().toUpperCase()
    guessInput.val('')
    guessLength()
  }
}

function guessLength () {
  if (guess.length !== 1) {
    return alert('One letter only, please.')
  } else if (entryValidation(guess) === true){
    uniqueLetter()
  } else if (entryValidation(guess) === false){
    return alert('One letter only, please.')
  }
}

function uniqueLetter () {
  uniqueGuesses = allGuesses.filter((v, i, a) => a.indexOf(v) === i)
  if (uniqueGuesses.find(a => a === guess) !== guess) {
    allGuesses.push(guess)
    uniqueGuesses.push(guess)
    compareGuess()
    printGuess()
    checkForWin()
  }
}
//   var unqiueGuesses = allGuesses.filter((v, i, a) => a.indexOf(v) === i)
//   if (answer.length !== 0) {
//     guess = guessInput.val().toUpperCase()
//     if (entryValidation(guess) === true && guess.length === 1 && uniqueGuess() === true) {
//       guessInput.val('')
//       compareGuess()
//       checkForWin()
//     } else {
//       return alert('One letter only, please.')
//     }
//   }
// }
//
// function uniqueGuess () {
//   var uniqueGuesses = allGuesses.filter((v, i, a) => a.indexOf(v) === i)
//   if (uniqueGuesses.some(i => i !== guess)) {
//     return true
//   }
// }

// validates the answer entries
function answerValidation () {
  ansString = answerInput.val()
    if (answer.length === 0) {
    if (entryValidation(ansString) === true) {
      var tempAnswer = ansString.toUpperCase()
      answer = tempAnswer.split('')
      answerInput.val('')
      numDiv = answer.length
      createBoard()
    } else {
      return alert('Letters and spaces only, please.')
    }
  }
}
