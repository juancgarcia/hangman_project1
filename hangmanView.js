/* global $ hangmanModel hangmanView*/

var answerInput = $('#answerInput')
var answerButton = $('#answerButton')
var guessInput = $('#guessInput')
var guessButton = $('#guessButton')
var reset = $('#reset')
var boardSquare = $('<div class="boardSquare"></div>')
var boardSquareEmpty = $('<div class="boardSquareEmpty"></div>')

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
}

function  createBlankTile () {
  $('.wordarea').append(boardSquareEmpty.clone())
}
function createLetterTitle() {
  $('.wordarea').append(boardSquare.clone())
}

function correctGuess (a) {
  $('.boardSquare').eq(a).text(answer[a])
}

answerButton.one('click', storeAnswer)
answerButton.one('click', createBoard)
guessButton.on('click', storeGuess)
reset.on('click', resetPage)
