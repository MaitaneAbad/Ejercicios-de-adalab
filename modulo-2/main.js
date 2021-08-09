function math(a){
    const result =  a;
    const resultIVA = a*(21/100);
    const resultTotal =  result + resultIVA;

    return `Precio sin IVA: ${result}, IVA: ${resultIVA} y total ${resultTotal}`;
}

const total = math(10);
console.log(total)


const total1 = math(20);
console.log(total1)

const total2 = math(30);
console.log(total2)

