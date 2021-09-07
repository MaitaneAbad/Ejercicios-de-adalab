'use strict';

const teacherMarks = document.querySelector('.js-marks');

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const helloNames = names.map(function (hello) {
  return (teacherMarks.innerHTML = 'hola ' + hello);
});
console.log(helloNames);
