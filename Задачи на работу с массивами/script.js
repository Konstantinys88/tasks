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
    if (arr.length == 0) {
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
        console.log(item.toLowerCase());
    })
}

standardizeStrings(favoriteCities);

// 3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.
// Пример:
// const someString = 'This is some strange string';
// reverse(someString) => 'gnirts egnarts emos si sihT'
// Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"


const someString = 'This is some strange string';

function reverse(str) {
    if (typeof (str) !== 'string') {
        return "Ошибка!";
    }
    let arr = str.split('');
    let res = ``;
    for (let i = arr.length - 1; i >= 0; i--) {
        res += arr[i];
    }

    return res;
}

console.log(reverse(someString));

// 4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах. Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.
// Пример:
// availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
// Вернет строку:
// Доступные валюты:
// UAH
// RUB
// Заметьте:
// - CNY (юань) исчез из списка валют, значит такая валюта закончилась
// - После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов
// - Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const additionalCurrencies2 = [];

function availableCurr(arr, missingCurr) {
    if(arr.length === 0) {
        return 'Нет доступных валют'
    }
    
    arr.forEach((item, index) => {
        if(item === missingCurr) {
            arr.splice(index, 1);
        }  
    })
    return "Доступные валюты:\n" + arr.join('\n') + '\n';
}


// console.log(availableCurr(additionalCurrencies2));
console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'RUB'));

