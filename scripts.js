var randomNumber = generateNumber();
var userInput = document.getElementById('user-input');
var guess = document.getElementById('guess');
var clear = document.getElementById('clear');
var reset = document.getElementById('reset');
var resultsText = document.getElementById('results-text');

guess.addEventListener('click', function() {
  checkGuess();
});

clear.addEventListener('click', function() {
  clearInput();
});

reset.addEventListener('click', function() {
  resetAll();
});

function generateNumber() {
  return Math.floor((Math.random() * 100) + 1);
}

function clearInput() {
  userInput.value = '';
}

function resetAll() {
  clearInput();
  randomNumber = generateNumber();
  return resultsText.innerText = 'Guess a number!';
}

function checkGuess() {
  var inputValue = parseInt(userInput.value);

  if(inputValue > 100 || inputValue < 0) {
    return resultsText.innerText = 'Select number between 0 and 100!';
  }
  if (inputValue < randomNumber - 5) {
    return resultsText.innerText = 'Way too low!';
  }
  if (inputValue > randomNumber + 5) {
    return resultsText.innerText = 'Way too high!';
  }
  if (inputValue < randomNumber) {
    return resultsText.innerText = 'Too low!';
  }
  if (inputValue > randomNumber) {
    return resultsText.innerText = 'Too high!';
  }
  if (inputValue == randomNumber) {
    return resultsText.innerText = 'Correct!';
  }
}
