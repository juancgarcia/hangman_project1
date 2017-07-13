/* global $ hangmanModel hangmanView phrases*/

var answerInput = $('#answerInput')
var answerButton = $('#answerButton')
var guessInput = $('#guessInput')
var guessButton = $('#guessButton')
var reset = $('#reset')
var boardSquare = $('<div class="boardSquare"></div>')
var boardSquareEmpty = $('<div class="boardSquareEmpty"></div>')
// var wrongPip = $('<p>*</p>')
var winCondition = $('<div class="winCondition"><p>You win!</p></div>')
var randomButton = $('#random')
var alphabet = []

// reload page to reset game
function resetPage () {
  window.location.reload(true)
}

// stores anwer in a variable and returns input form to empty
function storeAnswer () {
  answerValidation()
}

// stores a guess from the user
function storeGuess () {
  guessValidation()
}



//creates a blank (invisible) tile on gameboard
function createBlankTile () {
  $('.wordarea').append(boardSquareEmpty.clone())
}

// creates a tile on the gameboard for a letter
function createLetterTile () {
  $('.wordarea').append(boardSquare.clone())
}

// adds the letter to the gameboard after correct guess
function correctGuess (a) {
  $('.wordarea').find('div').eq(a).text(answer[a])
}

// advances hangman image after wrong answer
function wrongGuess () {
  var index = wrongGuesses.length
  switch (index) {
    case 1:
      $('.hangman').css('background-image', 'url("img/Hangman-1.png")')
      break
    case 2:
      $('.hangman').css('background-image', 'url("img/Hangman-2.png")')
      break
    case 3:
      $('.hangman').css('background-image', 'url("img/Hangman-3.png")')
      break
    case 4:
      $('.hangman').css('background-image', 'url("img/Hangman-4.png")')
      break
    case 5:
      $('.hangman').css('background-image', 'url("img/Hangman-5.png")')
      break
    case 6:
      $('.hangman').css('background-image', 'url("img/Hangman-6.png")')
      $('.wordarea').text(`You lose! The phrase was "${ansString}".`)
      break
  }
}

// alerts the player that they have won
function winNotice () {
  $('.hangman').replaceWith(winCondition)
}

//alerts the player they lost
// function loseNotice () {
//   $('.wordarea').text(`You lose! The phrase was ${ansString}.`)
// }

// loads a random phrase as the answer
function randomPhrase () {
  selectRandom()
}

function storeAnswerRandom (a) {
  ansString = a
  var tempAnswer = a.toUpperCase()
  answer = tempAnswer.split('')
  answerInput.val('')
  numDiv = answer.length
  createBoard()
}

// disables entering a new answer
function disableNewAnswer () {
  answerButton.off('click')
}

// disables the random phrase button
function disableNewRandom () {
  randomButton.off('click')
}

answerButton.on('click', storeAnswer)
answerButton.on('click', disableNewRandom)
randomButton.one('click', randomPhrase)
randomButton.one('click', disableNewAnswer)
guessButton.on('click', storeGuess)
reset.on('click', resetPage)
