'use strict';

const button = document.querySelector('.js-button');

function handlerEventListener(event){
    event.preventDefault()
    console.log(handlerEventListener)
}


button.addEventListener('click', handlerEventListener)