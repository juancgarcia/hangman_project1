/* global $ hangmanModel hangmanView*/

var answerInput = $('#answerInput')
var answerButton = $('#answerButton')
var guessInput = $('#guessInput')
var guessButton = $('#guessButton')
var reset = $('#reset')

var ansString = ''
var answer = []
var guess = []

function resetPage () {
  window.location.reload(true)
}

function storeAnswer () {
  ansString = answerInput.val()
  answer = ansString.split('')
  answerInput.val('')
}

function storeGuess () {
  guess = guessInput.val()
  guessInput.val('')
  compareGuess ()
}

function compareGuess() {
  var answer2 = answer.map(a => a === guess ? answer.indexOf(a) : '')
  console.log(answer2)
}

answerButton.one('click', storeAnswer)
guessButton.on('click', storeGuess)
reset.on('click', resetPage)
