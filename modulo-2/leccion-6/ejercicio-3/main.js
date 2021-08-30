'use strict';

const adalaber2 = {};
adalaber2.name = 'María ';
adalaber2.age = 34 ;
adalaber2.work = 'periodista ';
adalaber2.run = phrase =>`${phrase}`;

adalaber2.verb1 = function showBio(){
return this.name + 'tengo ' + this.age + ' años ' +'y soy '+ this.work;
} 
console.log(adalaber2.run ('Mi nombre es ') + adalaber2.verb1());