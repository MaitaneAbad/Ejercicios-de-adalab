'use strict';

const teacherMarks = document.querySelector('.js-marks');

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const helloNames = names.map(function (hello) {
  return 'hola ' + hello;
});
console.log(helloNames);

for (let eachNumber of helloNames) {
  const newItem = document.createElement('li');
  const newContent = document.createTextNode(eachNumber);
  newItem.appendChild(newContent);
  const items = document.querySelector('.items');
  items.appendChild(newItem);
}
