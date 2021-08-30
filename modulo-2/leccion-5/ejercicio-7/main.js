'use strict';

const button =document.querySelector('.js-button');

function changeColor(event){
    event.preventDefault();

    if(button.classList.contains('js-button')){
        button.classList.add('button');
    }
    else if (button.classList.toggle('button')){
    
    }
}

document.addEventListener('click', changeColor);

// IMPORTANTE no se pone en este caso el elemento background sino que se hace directamente sobre document