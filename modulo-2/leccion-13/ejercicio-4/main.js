'use strict';
const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false },
];

const premium = users.filter((item) => item.isPremium); /* Más elegante*/
//const premium = users.filter((item) => item.isPremium === true);

// al ser atributo isPremium un boolean ya de por si, no se necesita igualar la funcion a 'true', aunque así tambien está bien!

console.log(premium);
