'use strict';
const title = document.querySelector('.title');
const names = 'Irene';
const apellido = 'Bioque';
const total = names.length  +  apellido.length;/*para que no me cuente el espacio como un caracter hemos declardo una constatne para en nombre y otra para el apellido, así la suma solo son el nombre y el apellido*/
console.log (title)

title.innerHTML = `El nombre de mi compi es ${names} ${apellido}  ${total}`;