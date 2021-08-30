'use strict';

const text = document.querySelector('.text');
const paragraph = document.querySelector('.paragraph');

function handleKey(event) {
   
paragraph.innerHTML= event.currentTarget.value;
console.log( event.currentTarget.value)
}


text.addEventListener('keyup', handleKey)