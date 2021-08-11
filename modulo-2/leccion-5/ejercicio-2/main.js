'use strict';

const name = document.querySelector('.name');
const button = document.querySelector('.button');

function hi (event){ /*Para que no se recargue la página cuando hay un formulario se pone en el argumento de la funcion (event) y la primera línea de la función (event.preventDefault()) */
    event.preventDefault();
    console.log(`Hola ${name.value}`)
}
button.addEventListener("click", hi);