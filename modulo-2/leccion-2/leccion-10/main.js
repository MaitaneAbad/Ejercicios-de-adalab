'use strict';

const age =document.querySelector('body');
const year = document.querySelector('p');
const time = 24;
const day = 365;






age.innerHTML = ((time*day)* parseInt(year.innerHTML));

