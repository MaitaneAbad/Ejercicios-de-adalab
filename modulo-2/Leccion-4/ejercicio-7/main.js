const note = getEl(".pepino");

function getEl(selector) {
    const const1 = document.querySelector(selector);
    if (!const1) {
        console.error(`No existe ningún elemento con clase, id o tag llamado ${selector}`);
    }
    return const1;
}


function number(numResult) {
    if (numResult % 2 === 0) {
    console.log(`El número ${numResult} es par`);
    }
    else {
    console.log(`El número ${numResult} es impar`); 
    }
 }


const myNumber = getEl('.paragraph');

console.log(`Tu número: ${myNumber.innerHTML}`);

let myNewNumber = parseInt(myNumber.innerHTML, 10);

console.log(number(myNewNumber));