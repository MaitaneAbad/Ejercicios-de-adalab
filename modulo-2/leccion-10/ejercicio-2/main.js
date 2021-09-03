'use strict';

const img = document.querySelector('.js-img');
const input = document.querySelector('.js-input');


  fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => response.json())
  .then ((infoJson) => {
    console.log(infoJson.message)
    img.src = infoJson.message

  });
  
  input.addEventListener('change', handleInput);

  function handleInput() {
    const inputValue = input.value;
    fetch(`https://dog.ceo/api/breed/${inputValue}/images/random`)
      .then((respuesta) => respuesta.json())
      .then((infoJson) => {
        console.log(infoJson.message);
        img.src = infoJson.message;
      });
  }
  input.addEventListener('change', handleInput);