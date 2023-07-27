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


// Передача по ссылке или по значению, Spread оператор (ES6-ES9)

function copy(obj) {
    let copy = {};
    for (let key in obj) {
        copy[key] = obj[key];
    }
    return copy;
}

const egor = {
    name: "Egor",
    age: 12,
    adres: {
        city: 'moscow',
        streat: 'wildberis',
    }
}

// let egor2 = copy(egor);
// const egor3 = JSON.parse(JSON.stringify(egor));
// egor2.name = "Egor2";
// egor3.name = "Egor3";
// egor2.adres.city = "piter";
// egor3.adres.city = "piter";
// console.log(egor);
// console.log(egor2);
// console.log(egor3);

const add = {
    id: 145,
    e: "lo",
}

let a = Object.assign(egor, add);

console.log(egor)
console.log(a)

let egor4 = { ...egor }

console.log(egor4);



const egorTopor = {
    name: "Egor",
    weapon: "Topor",
    sayhello: function() {
        console.log("agr agr ");
    }
};

const egorTopor2 = Object.create(egorTopor);

// egorTopor2.__proto__ = egorTopor;

// Object.setPrototypeOf(egorTopor2, egorTopor)
// console.log(egorTopor2);
// console.log(egorTopor2.weapon);

egorTopor2.sayhello();
