'use strict';

function box (borderBox, width, padding, borderSize){
    if (borderBox){
        console.log(`Como el elemento es border-box su ancho será ${width}(px) y el ancho total será ${width} (px) también.`);
    }
    else {
        console.log(`Como el elemento es content-box su ancho será ${width} (px) y el ancho total será ${width + 2 * padding + 2 * borderSize}(px).`);
    }
}

console.log(box(true, 100, 40, 5));
console.log(box(false, 100, 40, 5));
    
