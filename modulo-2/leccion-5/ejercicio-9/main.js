const targetOne = document.querySelector('.teacher--isra');
const targetTwo = document.querySelector('.teacher--tuerto');
const targetThree = document.querySelector('.teacher--nasi');
const text =document.querySelector('.favourite');
function handleClick (event){
  const selectTarget =event.currentTarget;
 selectTarget.classList.toggle('teacher--selected')
//Solo hice la primera parte pq no se cambiar el texto dentro de un evetno, preguntar!!
} 



targetOne.addEventListener('click', handleClick);
targetTwo.addEventListener('click', handleClick);
targetThree.addEventListener('click', handleClick);