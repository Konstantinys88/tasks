'use strict';

// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.
// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'
// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

// 2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.
// Пример:
// standardizeStrings(favoriteCities)  выведет в консоль
// lisbon
// rome
// milan
// dublin



const family = ['Peter', 'Ann', 'Alex', 'Linda'];
const family2 = [];

function showFamily(arr) {
    if(arr.length == 0) {
        return 'Семья пуста';
    }
    let res = ``;
    arr.forEach(item => {
        res += `${item} `
    })
    return `Семья состоит из: ${res}`;
}

console.log(showFamily(family));



const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(item => {
        console.log(item)
    })
}

standardizeStrings(favoriteCities)