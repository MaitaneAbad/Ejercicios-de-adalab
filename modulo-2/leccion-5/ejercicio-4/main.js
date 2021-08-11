'use strict';

const myWindow = document.querySelector('.box');

const ventana = document.defaultView;

// * Para poder usar la window hay que crearse un elemento ventana usando document.defaultView

function colorfulScroll() { 
    if(window.scrollY >= 250){
        console.log(`Se han superado 250px`);
        if(myWindow.classList.contains('text1')){
            myWindow.classList.remove('text1');
            myWindow.classList.add('text2');
        }   /* Aquí se está crenado una función que si la ventana hace scroll vertical y supera los 250pixeles, la consola aparece un mensaje y el 1º classlist comprueba si la clase entre paréntesis eciste en el elemento, el 2º classlist lo borra y el 3º lo añade( y cómo en el css tenemos puesto esa clase con otro color se modifica.). */ 
    }
    else{
        console.log(`Aun no se han llegado a 250px`);
        if(myWindow.classList.contains('text2')){
            myWindow.classList.remove('text2');
            myWindow.classList.add('text1');
        }/* y aquí pone; sino supera los 250 px pone eso en la consola y en el 1ª classlist comprueba si existe la clase, 2º classlist indica que lo elimine y el 3º classlist que vuelva a añadir el esa clase en mywindoy(que es la contante que hemos creado para traer el texto a JS desde HTML ) */
    }    
}

ventana.addEventListener('scroll', colorfulScroll);
/* Aquí estamo diciendo a la 1º constante creada que añada el evento cuando agamos scroll y que realice la función colorfulscroll */