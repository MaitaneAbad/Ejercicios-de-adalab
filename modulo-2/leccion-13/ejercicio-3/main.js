const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false },
];
const helloNames = users.map(function (hello) {
  const stringAux = 'Bienvenida ' + hello.name;
  if (hello.isPremium) {
    console.log(stringAux.concat('. ', 'Gracias por confiar en nosotros.'));
  } else {
    console.log(stringAux);
  }
});
// cómo puedo hacer que me imprima el array automaticamente, ya que solo me coge los string
