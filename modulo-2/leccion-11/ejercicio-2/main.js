
const input = document.querySelector('.js-input');
const button = document.querySelector('.js-button');



function getUrl (){
    let user = input.value;
    let url = "https://swapi.dev/api/people/?search=" + user;
    console.log(url)
    return url;
}
function clickButton(){
        let url = getUrl();
         const name = document.querySelector('.js-name'); 
         const gender = document.querySelector('.js-genre');
    fetch (url)
     .then(response => response.json())
     .then((data) => {
         console.log(data) 
         for (const item in data.results) {
             debugger;           
                      name.innerHTML+= `<li> ${data.results[item].name} </li>`;   
                      gender.innerHTML += `<li> ${data.results[item].gender} </li>`;
         }

    })       
}
 
 input.addEventListener("change", getUrl);
 button.addEventListener('click', clickButton);
