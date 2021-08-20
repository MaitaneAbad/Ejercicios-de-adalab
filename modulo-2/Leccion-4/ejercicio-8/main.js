// modificamos una variable de ámbito global
let secretLetter = "y";
function mySecretLetter() {
  secretLetter = "x";
  return secretLetter;
}
console.log(secretLetter); // devuelve "y" porque está mostrando la contante sin modificar 
console.log(mySecretLetter()); // devuelve "x"

console.log(mySecretLetter()); // devuelve "x"
console.log(secretLetter); // devuelve "x"






