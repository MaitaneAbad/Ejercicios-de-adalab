"use strict";

const input = document.querySelector(".js-input");
const button = document.querySelector(".js-button");

function getUrl() {
  let user = input.value;
  let url = "https://api.github.com/users/" + user;
  console.log(url);
  return url;
}
function clickButton() {
  let url = getUrl();
  
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const name = document.querySelector(".js-name");
      name.innerHTML = data.login;
      const img = document.querySelector(".js-img");
      img.src = data.avatar_url;
      img.alt = "Avatar de " + name.innerHTML;
      const nRepos = document.querySelector(".js-repos");
      nRepos.innerHTML = data.public_repos;
    });
}

input.addEventListener("change", getUrl);
button.addEventListener("click", clickButton);
