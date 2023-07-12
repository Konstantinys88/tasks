'use strict';

// условия


// 4 == 5 ? console.log('ok') : console.log('error');

const hamburger = 5;
const fries = 1;
const cola = 0;

let a = (hamburger === 5 || cola === 1 && fries === 1)? 'ok' : 'NOT';

// && и возвращает первое ложное значение 0 или последнее
// || или возвращает первое правдивое значение

console.log(a);
console.log(hamburger === 5 || cola === 1 && fries === 1);
