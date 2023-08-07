'use strict';

const boxesQuery = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box');

boxesQuery.forEach(box => {
    if(box.matches('.this')) {
        console.log('jr')
    }
})


boxesQuery[0].remove();
boxesGet[0].remove();

console.log(boxesQuery);
console.log(boxesGet);

