'use strict';

const text = document.querySelector('div');
const title = document.querySelector('.title');
const paragraf = document.querySelector('.paragraf');

if (text.classList.contains('warning')){
    text.classList.remove('error');
    text.classList.remove('success');
    title.innerHTML = 'Aviso';
    paragraf.innerHTML = 'Tenga Cuidado';

} 
else if (text.classList.contains('error')){
    text.classList.remove('warning');
    text.classList.remove('success');
    title.innerHTML = 'Error';
    paragraf.innerHTML = 'Ha surgido un error';

}
else if (text.classList.contains('success')){
    text.classList.remove('error');
    title.innerHTML = 'Correcto';
    paragraf.innerHTML = 'Los datos son correctos';
}