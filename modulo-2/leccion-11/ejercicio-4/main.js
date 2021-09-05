const input = document.querySelector('.js-input');
const paragraph = document.querySelector('.js-paragraph');

function getName(){
paragraph.innerHTML = input.value
}
const name = localStorage.setItem('getName', 'Maitane')
input.addEventListener('keyup', getName)