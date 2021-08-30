'use strict';

const buttonOne =document.querySelector('.js-button-1');
const buttonTwo =document.querySelector('.js-button-2');

function changeColor (event){
    event.preventDefault();
    const selectButton = event.currentTarget;

    selectButton.classList.toggle('button');
}

buttonOne.addEventListener('click', changeColor);
buttonTwo.addEventListener('click', changeColor)
