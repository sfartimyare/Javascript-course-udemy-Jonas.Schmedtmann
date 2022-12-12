'use strict';

/*  Declare Class Variables and pull from DOM */
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnShowModal = document.querySelectorAll('.show-modal');
const btnHideModal = document.querySelector('.close-modal');

/*  Create Functions to hide/show Modals
    Link Functions to Btn eventListeners */
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

/*  Create Button eventListeners: include for 
    for loop for three buttons */
for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal[i].addEventListener('click', openModal);

btnHideModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

/*  Add Esc EventListerner with an arguement;
    Chain If statements */

document.addEventListener('keydown', function (event) {
  console.log('any key has been clicked');

  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
