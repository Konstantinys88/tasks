'use strict';

const obj = {
    name: 'test',
    with: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    },
    maketest: function () {
        console.log('test')
    }
};

// console.log(obj.name);
// delete obj.name;
// console.log(obj)

let counter = 0;
for (let key in obj) {
    if (typeof (obj[key]) === "object") {
        for (let i in obj[key]) {
            console.log(`Своййство ${i} имеет значение ${obj[key][i]}`);

        }
    } else {
        console.log(`Своййство ${key} имеет значение ${obj[key]}`);

    }
    counter++;
}

obj.maketest();

console.log(counter++);

console.log(Object.keys(obj).length);

const { border, bg } = obj.colors;
console.log(border);



//=========массивы
const arr = [1, 2, 3, 6, 8];

arr.pop();
arr.push(10);

arr.shift()
arr.unshift(10);

console.log(arr.sort((a, b) => a - b));

function modifu(arr) {
    return arr.map(item => item += 1)
}

console.log(modifu(arr));