var randomNumber = parseInt(Math.floor(Math.random() * 100), 10);
var theGuess = document.querySelector('#guess');
var inputForm = document.querySelector('.theForm');
var prevGuess = document.querySelector('#lastGuess');
var guessBtn = document.querySelector('#guess-btn');
var clearBtn = document.querySelector('#clear-btn');
var resetBtn = document.querySelector('#reset');
var numResult = document.querySelector('#highLow');


theGuess.addEventListener('keyup', toggleButton);
guessBtn.addEventListener('click', displayAnswer);

function displayAnswer () {
    if (randomNumber < theGuess.value) {
     numResult.innerHTML = 'That is too high';
  }  else if (randomNumber > theGuess.value) {
     numResult.innerHTML = 'That is too low';
  } else {
     numResult.innerHTML = 'BOOM!';
  }
};

guessBtn.addEventListener('click', function () {
  prevGuess.innerHTML = theGuess.value;
});

resetBtn.addEventListener('click', function() {
  location.reload(true);
});

clearBtn.addEventListener('click', function () {
  var theGuess = document.querySelector('#guess').value;
  document.querySelector('#lastGuess').innerText = theGuess;
  theGuess = document.querySelector('#guess').value='';
  document.querySelector('#highLow').innerText = '';
});


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





