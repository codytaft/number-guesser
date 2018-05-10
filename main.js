var randomNumber = Math.floor(Math.random() * 100);
var theGuess = document.querySelector('#guess');
var theGuessValue = parseInt(theGuess.value);
var inputForm = document.querySelector('theForm');
var prevGuess = document.querySelector('#lastGuess');
var guessBtn = document.querySelector('#guess-btn');
var clearBtn = document.querySelector('#clear-btn');
var resetBtn = document.querySelector('#reset');
var numResult = document.querySelector('#highLow');
var textChange = document.querySelector('#yourLast');
var wrongRange = document.querySelector('#out-range');
var submitBtn = document.querySelector('#submitRange');
var userMin = document.querySelector('#min');
var userMax = document.querySelector('#max');
var max = 100;
var min = 0;

userMin.addEventListener('keypress', toggleButtonSubmit)
userMax.addEventListener('keypress', toggleButtonSubmit)
submitRange.addEventListener('click', placeHolder);
submitRange.addEventListener('click', userField);
theGuess.addEventListener('keydown', pressingEnter);
theGuess.addEventListener('keyup', toggleButton);
theGuess.addEventListener('keydown', onlyNumbers);
theGuess.addEventListener('keyup', outRange);
guessBtn.addEventListener('click', displayAnswer);
guessBtn.addEventListener('click', lastGuess);
clearBtn.addEventListener('click', clearInput);
resetBtn.addEventListener('click', function() {
  location.reload(true);
});

function placeHolder () {
  theGuess.placeholder='Enter a number between ' + userMin.value + ' and ' + userMax.value;
}

function outRange () {
  if (parseInt(theGuess.value) > parseInt(userMax.value) || parseInt(theGuess.value) < parseInt(userMin.value)) {
    wrongRange.innerText = 'That is out of the range';
  } else {
    wrongRange.innerText = '';
  }
}

function userField () {
  max = parseInt(userMax.value);
  min = parseInt(userMin.value);
  randomNumber = parseInt(Math.random() * (max - min) + min);
}


function onlyNumbers (event) {
  var charCode = (event.which) ? event.which : event.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    theGuess.value = ''
    wrongRange.innerText = 'That is not a number, Hal!';
  }
}

function clearInput () {
  theGuess.value='';
  wrongRange.innerText = '';
}

/displays last guess/
function lastGuess () {
  event.preventDefault();
  textChange.innerText = 'Your last guess was';
  prevGuess.innerText = theGuess.value;
} 

/displays correct or high or low value/
function displayAnswer () {
    if (randomNumber < theGuess.value) {
     numResult.innerText = 'That is too high';
  } else if (randomNumber > theGuess.value) {
     numResult.innerText = 'That is too low';
  } else {
     numResult.innerText = 'BOOM!';
  }
};

function pressingEnter(event) {
  if (event.keyCode === 13) {
    displayAnswer();
    lastGuess();
  }
}
function toggleButton () {
  if (theGuess.value === '')  {
    guessBtn.disabled = true;
    clearBtn.disabled = true;
    resetBtn.disabled = true;
  } else {
    guessBtn.disabled = false;
    clearBtn.disabled = false;
    resetBtn.disabled = false;
  }
}

function toggleButtonSubmit () {
  if ((userMin.value === '') && (userMax.value === '')) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
}

