'use strict';

// Declare secretNumber Variable
const secretNumber = Math.trunc(Math.random() * 20) + 1;
// Create Score Variable
let score = 20;

document.querySelector('.number').textContent = secretNumber;
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //When there's no input!
  if (!guess) {
    document.querySelector('.message').textContent = 'Put in a number';

    // when the Player wins!
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!!';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    //when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too HIGH!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = score = 0;
    }
    // When guess is too low!
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too LOW!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';

      document.querySelector('.score').textContent = score = 0;
    }
  }
});
