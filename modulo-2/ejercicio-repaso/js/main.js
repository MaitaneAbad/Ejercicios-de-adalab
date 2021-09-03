'use strict';

const update = document.querySelector('.js-update');
const UpadateBackground = document.querySelector('.page');
const selectEl = document.querySelector('.js-select');
const headEl = document.querySelector('.js-head');
function numberGenerate(){
    const randomNumber = Math.round(Math.random()*100);
    return randomNumber;

}
function UpdateBackground(){
    const randomNumber = numberGenerate();
    const restNumber = randomNumber % 2;
    
   if (restNumber === 0){
       UpadateBackground.classList.add('background-y')
       UpadateBackground.classList.remove('background-O')
   }
   else{
       UpadateBackground.classList.remove('background-Y')
       UpadateBackground.classList.add('background-O')
   }
    }

function updateFace(){
    const selectValue = selectEl.value;
    headEl.innerHTML = selectValue;
}

function handleUpdateBtn(event){
    event.preventDefault()
    UpdateBackground();
    updateFace();
}

update.addEventListener('click', handleUpdateBtn);
