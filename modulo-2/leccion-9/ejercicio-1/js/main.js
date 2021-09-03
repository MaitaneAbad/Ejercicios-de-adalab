const lostNumbers = [4, 8, 15, 16, 23, 42];
const parNumbersArray = [];
const oddNumbersArray = [];

function parNumbers() {
    
    for (let i = 0; i < lostNumbers.length; i++) {
        if (lostNumbers[i] % 2 === 0) {
            parNumbersArray.push(lostNumbers[i]);
        }
    }
    console.log('Son pares ' + parNumbersArray);
    return parArray = parNumbersArray;
}
parNumbers();

function oddNumbers() {
    
    for (let i = 0; i < lostNumbers.length; i++) {
        if (lostNumbers[i] % 2 != 0) {
            oddNumbersArray.push(lostNumbers[i]);
        }
    }
    console.log('Son impares ' + oddNumbersArray);
}
oddNumbers();

function bestNumber(){
    console.log('Estos son los números ' + parNumbersArray.concat(oddNumbersArray))
}
bestNumber();
