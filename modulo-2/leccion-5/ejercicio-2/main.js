'use strict';

const button = document.querySelector('.button');

function hi (){
    const name = document.querySelector('.name').value;
    console.log(`Hola ${name}`)
}
button.addEventListener("click", hi);