'use strict';

const box = document.getElementById(`box`);
// box.style.background = '#ad158c';
// box.style.border = '10px solid black';

box.style.cssText = `width: 300px;
                    border: 10px solid black;
                    background: #ad158c`;


const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHearts = document.querySelector('.heart');

console.dir(box);

btns[1].style.borderRadius = '100%';

const div = document.createElement('div');
div.className = 'createDiv';

div.style.cssText = `
max-width: 200px;
width:100%;
height: 100px;
background: #ad158c;
text-align: center;

`;

document.body.append(div);
div.innerHTML = `<h1>Heloloo</h1>`;
div.insertAdjacentHTML('beforebegin',`<h1>Heloloo</h1>`)
div.insertAdjacentHTML('afterbegin',`<h1>Heloloo</h1>`)
div.insertAdjacentHTML('afterend',`<h1>Heloloo</h1>`)
div.insertAdjacentHTML('beforeend',`<h1>Heloloo</h1>`)
// box.replaceWith(div);




console.log(div)




