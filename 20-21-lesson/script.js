'use strict';

// условия


// 4 == 5 ? console.log('ok') : console.log('error');

// const hamburger = 5;
// const fries = 1;
// const cola = 0;

let a = (hamburger === 5 || cola === 1 && fries === 1)? 'ok' : 'NOT';

// && и возвращает первое ложное значение 0 или последнее
// || или возвращает первое правдивое значение

console.log(a);
console.log(hamburger === 5 || cola === 1 && fries === 1);

console.log( NaN || 2 || undefined );
console.log( NaN && 2 && undefined );
console.log( 1 && 2 && 3 );
console.log( !1 && 2 || !3 );
console.log( 25 || null && !3 );
console.log( NaN || null || !3 || undefined || 5);
console.log( NaN || null && !3 && undefined || 5);
console.log( 5 === 5 && 3 > 1 || 5);


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!') }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}


// https://docs.google.com/document/d/1RDxwMg7pSI9QzhYU0sY59kyspI71r-3_hzJoSbHRk0I/edit?pli=1
