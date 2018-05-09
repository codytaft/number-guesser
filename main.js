var randomNumber = parseInt(Math.floor(Math.random() * 100), 10);
var theGuess = document.querySelector('#guess');
var inputForm = document.querySelector('.theForm');
var prevGuess = document.querySelector('#lastGuess');
var guessBtn = document.querySelector('#guess-btn');
var clearBtn = document.querySelector('#clear-btn');
var resetBtn = document.querySelector('#reset');
var numResult = document.querySelector('#highLow');

theGuess.addEventListener('keydown', pressingEnter);
theGuess.addEventListener('keyup', toggleButton);
guessBtn.addEventListener('click', displayAnswer);
guessBtn.addEventListener('click', lastGuess);
clearBtn.addEventListener('click', clearInput);

resetBtn.addEventListener('click', function() {
  location.reload(true);
});

function clearInput () {
  theGuess.value='';
}

/displays last guess/
function lastGuess () {
  prevGuess.innerText = theGuess.value;
  event.preventDefault();
}

/displays correct or high or low value/
function displayAnswer () {
    if (randomNumber < theGuess.value) {
     numResult.innerHTML = 'That is too high';
  } else if (randomNumber > theGuess.value) {
     numResult.innerHTML = 'That is too low';
  } else {
     numResult.innerHTML = 'BOOM!';
  }
};

function pressingEnter(event) {
  if (event.keyCode === 13) {
    displayAnswer();
    lastGuess();
  }
}
function toggleButton () {
  if (theGuess.value === '') {
    guessBtn.disabled = true;
    clearBtn.disabled = true;
    resetBtn.disabled = true;
  } else {
    guessBtn.disabled = false;
    clearBtn.disabled = false;
    resetBtn.disabled = false;
  }
}





