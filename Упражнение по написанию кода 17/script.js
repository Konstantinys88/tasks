'use strict';

// Задание:
// В каждой книге есть n страниц с номерами страниц от 1 до n.Написать функцию amountOfPages, аргумент которой summary составляется путем сложения количества цифр всех номеров ст
// Пример:
// Если на входе функции summary = 25, то на результат должен быть 17. Всего в числах от 1 до 17 содержится 25 цифр: 123456789 1011121314151617
// Функция на вход как раз принимает это общее количество цифр, а возвращает конечное число, то есть последнюю страницу книги.
//     amountOfPages(5) => 5
// amountOfPages(25) => 17
// amountOfPages(1095) => 401
// amountOfPages(185) => 97

function amountOfPages(summary) {
    let result = '';
    let n = 0;

    for (let i = 1; i <= summary; i++) {
        result += i;
        if (result.length === summary) {
            n = i;
        }
    }

    return n;

}


;
// console.log(amountOfPages(5));
console.log(amountOfPages(25));
console.log(amountOfPages(185));
