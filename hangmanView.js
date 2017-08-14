/* global $ hangmanModel hangmanView phrases*/

var answerInput = $('#answerInput')
var answerButton = $('#answerButton')
var guessInput = $('#guessInput')
var guessButton = $('#guessButton')
var reset = $('#reset')
var boardSquare = $('<div class="boardSquare"></div>')
var boardSquareEmpty = $('<div class="boardSquareEmpty"></div>')
var winCondition = $('<div class="winCondition"><p>You Win!</p></div>')
var loseCondition = $('<div class="loseCondition"><p>You Lose!</p></div>')
var randomButton = $('#random')
var alphabet = []
var printOfGuess = $('<div class="printGuess"></div>')
var guessArea = $('guessedLetters')
var instructions = $('.instructions')
var wordarea = $('<div class="wordarea"></div>')
var theme1 = $('#Theme1')
var theme2 = $('#Theme2')
var theme3 = $('#Theme3')
var theme4 = $('#Theme4')
var css = $('#sheetStyle')

// reload page to reset game
function resetPage () {
  window.location.reload(true)
}
//// Unnecessary wrapper function, just call answerValidation() directly
// stores anwer in a variable and returns input form to empty
// function storeAnswer () {
//   answerValidation()
// }

//// Unnecessary wrapper function, just call guessValidation() directly
// stores a guess from the user
// function storeGuess () {
//   guessValidation()
// }



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
  checkForWin()
}

// alerts the player that they have won
function winNotice () {
  $('.wordarea').replaceWith(winCondition)
  // winCondition.append(`<p class='winMessage'>The word was "${ansString}".</p>`)
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
      $('.wordarea').replaceWith(loseCondition)
      loseCondition.append(`<p class='loseMessage'>The answer was "${ansString}".</p>`)
      break
  }
}

//// Unnecessary wrapper function, just call selectRandom() directly
// loads a random phrase as the answer
// function randomPhrase () {
//   selectRandom()
// }

// stores random answer
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

// prints guesses letter
function printGuess () {
  var i = uniqueGuesses.join(' ')
  $('#letters').text(i)
}

// removes instructions that are 'covering' the gameboard
function removeInstructions () {
  instructions.replaceWith(wordarea)
}

// functions for changing the theme
function switchTheme1 () {
  // Setting a new numbered css file as the first color option
  $('#sheetStyle').attr('href', 'style1.css')
}

function switchTheme2 () {
  $('#sheetStyle').attr('href', 'style2.css')
}

function switchTheme3 () {
  $('#sheetStyle').attr('href', 'style3.css')
}

function switchTheme4 () {
  $('#sheetStyle').attr('href', 'style4.css')
}

// event listeners
answerButton.one('click', removeInstructions)
// Unnecessary wrapper function, just call answerValidation() directly
answerButton.one('click', /* storeAnswer */ answerValidation)
answerButton.one('click', disableNewRandom)

randomButton.one('click', removeInstructions)
// Unnecessary wrapper function, just call selectRandom() directly
randomButton.one('click', /* randomPhrase */ selectRandom)
randomButton.one('click', disableNewAnswer)

// Unnecessary wrapper function, just call guessValidation() directly
guessButton.on('click', /* storeGuess */ guessValidation)

reset.on('click', resetPage)

theme1.on('click', switchTheme1)
theme2.on('click', switchTheme2)
theme3.on('click', switchTheme3)
theme4.on('click', switchTheme4)
