'use strict';

const text1 = document.querySelector('.text1'); /*estoy llamando al body del HTML*/

const adalaber1 = {};
adalaber1.name = 'Susana';
adalaber1.age = 34;
adalaber1.work = 'periodista';

text1.innerHTML = (`Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.work}`);

const text = document.querySelector('.text'); /*estoy llamando al body del HTML*/

const adalaber2 = {};
adalaber2.name = 'Rocío';
adalaber2.age = 25;
adalaber2.work = 'actriz';

text.innerHTML = (`Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.work}`);


/***********************************************************************/

const text3 = document.querySelector('.text3'); /*estoy llamando al body del HTML*/

/*const adalab = {
name = 'Rocío',
age = 25,
work = 'actriz'
};
text3.innerHTML = (` ${adalab.name} + ${adalab.age} + ${adalab.work}`);*/


/****************************************************************/
/otra manera de hacer Objetos*/
const text2 = document.querySelector('.text2');
const adalaber = {
    name: 'María',
    age: 31,
    isMarried: false,
    address: {
      street: 'Colegiata',
      number: 9
    }
  };

console.log(`La adalaber nº 8 se llama ${adalaber.name} y tiene ${adalaber.age} años y vivo en ${adalaber.address.street}, número ${adalaber.address.number}. `);

text2.innerHTML = (`La adalaber nº 8 se llama ${adalaber.name} y tiene ${adalaber.age} años y vivo en ${adalaber.address.street}, número ${adalaber.address.number}. `);