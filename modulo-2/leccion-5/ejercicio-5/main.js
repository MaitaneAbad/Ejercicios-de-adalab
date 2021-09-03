const background = document.querySelector('.body');

function handleButtonClick(event) {
    event.currentTarget()
    if (background.classList.contains('purple')){
        background.classList.remove('purple');
        background.classList.add('red');
    }
    else if (background.classList.contains('red')){
        background.classList.remove('red');
        background.classList.add('purple');
    }
}

document.addEventListener('keydown',  handleButtonClick);