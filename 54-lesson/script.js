'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block)

const user = {
    name:"dasda",
    skils: 100,
    say: function() {
        console.log('123fsdgf')
    }
}

user.say?.();
