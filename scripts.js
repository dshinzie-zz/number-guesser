var randomNumber = generateNumber();
var userInput = document.getElementById('user-input');
var guess = document.getElementById('guess');
var clear = document.getElementById('clear');
var resultsText = document.getElementById('results-text');

function generateNumber() {
  return Math.floor((Math.random() * 100) + 1);
}

guess.addEventListener('click', function() {
  checkGuess();
});

function checkGuess() {
  return resultsText.innerText = 'Correct!';
}
