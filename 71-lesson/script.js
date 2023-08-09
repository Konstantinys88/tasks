'use strict';

const box = document.querySelector('.box');
const width = box.clientWidth;
const height = box.scrollHeight;

console.log(width, height);
console.log(box.getBoundingClientRect());


