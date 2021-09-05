
const input = document.querySelector('.js-input');
const button = document.querySelector('.js-button');



function getUrl (){
    let user = input.value;
    let url = "https://swapi.dev/api/people/" + user;
    return url;
}
function clickButton(){
        let url = getUrl();
        
    fetch (url)
     .then(response => response.json())
     .then((data) => {
        const name = document.querySelector('.js-name');
        name.innerHTML = data.name;
        const gender = document.querySelector('.js-genre');
        gender.innerHTML = data.gender;
      
    })       
}
 
 input.addEventListener("change", getUrl);
 button.addEventListener('click', clickButton)
