'use strict';

// Declare secretNumber Variable

let secretNum = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNum;

let score = 20;

let highScore = 0;

const messageValue = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //   Guess is Empty
  if (!guess) {
    messageValue('Put in a Number!');
    // Guess is Correct
  } else if (guess === secretNum) {
    messageValue('Guess is Correct!');
    document.querySelector('body').style.backgroundColor = 'Green';
    document.querySelector('.number').style.width = '30rem';
    if (guess > highScore) {
      highScore = document.querySelector('.highscore').textContent = score;
    }

    // Guess is Wrong/ user ran out of Score: Two Parts.
  } else if (guess !== secretNum) {
    messageValue(guess > secretNum ? 'Too High' : 'Too Low');
    score--;

    document.querySelector('.score').textContent = score;
  }
});

// Again Button/ reset game without Reloading page
document.querySelector('.again').addEventListener('click', function () {
  messageValue('Start guessing!!');
  document.querySelector('.guess').value = '';
  score = 20;
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});

console.log(secretNum);
