const paragraph = document.querySelector('.js-paragraph');
const button = document.querySelector('.js-button');
const button2 = document.querySelector('.js-button2');

function colorInput(ev){
    debugger;
    if (ev.target){
        paragraph.classList.contains('darkSelector')
        paragraph.classList.remove('darkSelector');
        paragraph.classList.add('lightSelector');
            
    }else{
        paragraph.classList.add('lightSelector');
        paragraph.classList.remove('darkSelector');
        }
        
} 


function colorInput2(ev){
    
    if (ev.target){
    paragraph.classList.contains('lightSelector');
            paragraph.classList.remove('lightSelector');
            paragraph.classList.add('darkSelector');
            
    } else{
            paragraph.classList.add('darkSelector');
            paragraph.classList.remove('lightSelector');
        }
        
}


const info = localStorage.setItem('colorInput', 'Light')
const info2 = localStorage.setItem('colorInput2', 'Dark')
const shave = localStorage.getItem('info')

button.addEventListener('change',colorInput);
button2.addEventListener('change', colorInput2)

