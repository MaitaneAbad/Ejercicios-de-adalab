'use strict';

const adalaber1 = {};
adalaber1.distance = '50';
adalaber1.run = phrase => `Estoy ${phrase}`;

adalaber1.verb1 = function run(){
return this.distance + ' km';
} 
console.log(adalaber1.run ('corriendo un maratón de ') + adalaber1.verb1());
//una cosa importante que debemos saber es que si queremos usar this en un método de un objeto tenemos que usar una función anónima y no una arrow function. Dicho de otro modo, tenemos que escribir la palabra function y no =>.
/*************************************************************************/
/*Diferente manera de hacer el ejercicio*/
const adalaber2 ={}
adalaber2.name = 'susana';
adalaber2.age = 34;
adalaber2.job = 'Journalist';
adalaber2.run = function (){
    console.log ('estoy corriendo');
}
adalaber2.run = () => console.log ('estoy corriendo');
adalaber2.run();

adalaber2.runMarathon = function (distance){
    console.log(`estoy corriendo un maratón de ${distance}`)
}

adalaber2.runMarathon = distance => console.log (`Estoy corriendo un maratón de ${distance}`)
adalaber2.runMarathon(50); 
adalaber2.runMarathon (30);