'use strict';

// const ans = prompt('Введите ваше имя');

// const reg = /\d/;
// console.log(ans.match(reg));

// \d цыфры
// \w буквы
// \s пробелы



// console.log(ans.search(reg));
// console.log(ans.match(reg));


// const pass = prompt('Password');

// console.log(pass.replace(/./g, "*"));
// console.log('12-12-54'.replace(/-/g, "+"));

// function b(x, y, a) {
//     arguments[2] = 10;
//     arguments[1] = 10;
//     arguments[0] = 10;

//     console.log(x, y, a)
// }
// b(1, 2, 3);

// const numbers = [1, 2, 3, 4, 5];
// const [y] = numbers;
// console.log(y);

const person = {
    name: 'alex',
    age: 25,

    get userAge() {
        return this.age;
    },
    set userAge(num) {
        this.age = num;
    },
};


person.userAge = 43
console.log(person.userAge)



