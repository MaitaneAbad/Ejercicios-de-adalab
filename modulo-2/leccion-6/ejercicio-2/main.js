'use strict';

const adalaber1 = {};
adalaber1.distance = '50';
adalaber1.verb = phrase => `Estoy ${phrase}`;

adalaber1.verb1 = function(){
return this.distance + ' km';
} 
console.log(adalaber1.verb ('corriendo un maratón de ') + adalaber1.verb1());
//una cosa importante que debemos saber es que si queremos usar this en un método de un objeto tenemos que usar una función anónima y no una arrow function. Dicho de otro modo, tenemos que escribir la palabra function y no =>.
