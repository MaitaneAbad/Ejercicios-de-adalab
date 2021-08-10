
function getEl(selector) {
    const const1 = document.querySelector(selector);
    return const1;
}

const note =getEl('.pepino');
console.log(note);
if (note === null) {
    console.error('No existe ningún elemento con clase, id o tag llamado selector');
} else
console.log('hay un elemento llamado title')



