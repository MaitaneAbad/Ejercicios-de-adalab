'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300' ;

let user = document.querySelector('.user__avatar');
console.log(user);

const newAvatar = userAvatar || DEFAULT_AVATAR;

user.src = userAvatar;
user.src = DEFAULT_AVATAR;
