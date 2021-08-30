'use strict';

const button =document.querySelector('.js-button');

function changeColor (event){
    event.preventDefault();
   const select = event.currentTarget;

   select.classList.toggle('button');
}

button.addEventListener('click', changeColor);
