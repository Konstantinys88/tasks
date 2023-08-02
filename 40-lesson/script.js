'use strict';


function createCounter() {
    let counter = 0;

    const myFunction = function() {
        counter = counter + 1;
        return counter;
    }

    return myFunction;
}

const incr = createCounter();

console.log(incr);

const c1 = incr();
console.log(c1);
const c2 = incr();
console.log(c2);
const c3 = incr();
console.log(c3);
