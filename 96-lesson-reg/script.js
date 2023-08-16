'use strict';

const ans = prompt('Введите ваше имя');

const reg = /\d/;
console.log(ans.match(reg));

// \d цыфры
// \w буквы
// \s пробелы



// console.log(ans.search(reg));
// console.log(ans.match(reg));


// const pass = prompt('Password');

// console.log(pass.replace(/./g, "*"));
// console.log('12-12-54'.replace(/-/g, "+"));



