'use strict';

function getEl(selector) {
    const const1 = document.querySelector(selector);
    return const1;
}

const title = getEl ('.title');
console.log(title);

const div =getEl ('.div');
console.log(div);

const p =getEl ('.p1');
console.log(p);
