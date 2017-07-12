/* global $ hangmanModel hangmanView*/

var answerInput = $('#answerInput')
var answerButton = $('#answerButton')
var guessInput = $('#guessInput')
var guessButton = $('#guessButton')
var reset = $('#reset')
var boardSquare = $('<div class="boardSquare"></div>')
var boardSquareEmpty = $('<div class="boardSquareEmpty"></div>')
var wrongPip = $('<p>*</p>')
var winCondition = $('<div class="winCondition"><p>You win!</p></div>')

function resetPage () {
  window.location.reload(true)
}

function storeAnswer () {
  ansString = answerInput.val()
  var tempAnswer = ansString.toUpperCase()
  answer = tempAnswer.split('')
  answerInput.val('')
  numDiv = answer.length
}

function storeGuess () {
  guess = guessInput.val().toUpperCase()
  guessInput.val('')
  compareGuess ()
  checkForWin ()
}

function createBlankTile () {
  $('.wordarea').append(boardSquareEmpty.clone())
}
function createLetterTile () {
  $('.wordarea').append(boardSquare.clone())
}

function correctGuess (a) {
  console.log('correct guess')
  $('.boardSquare').eq(a).text(answer[a])
}

function wrongGuess () {
  var index = wrongGuesses.length
  console.log(index)
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
      $('.wordarea').text(`You lose! The phrase was ${ansString}.`)
      break
  }
}

function winNotice () {
  $('.hangman').replaceWith(winCondition)
}

function loseNotice () {
  console.log('lose')
}

answerButton.one('click', storeAnswer)
answerButton.one('click', createBoard)
guessButton.on('click', storeGuess)
reset.on('click', resetPage)
