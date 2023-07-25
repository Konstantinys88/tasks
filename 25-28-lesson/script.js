'use strict';

// 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.
// Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"
// НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.
// Примеры:

function calculateVolumeAndArea(edge) {
    if (typeof (edge) == "string" || edge <= 0 || !Number.isInteger(edge)) {
        return console.log('При вычислении произошла ошибка');
    }

    let volume = edge * edge * edge;
    let square = 6 * (edge * edge);

    return console.log(`Объем куба: ${volume}, площадь всей поверхности: ${square}`);

}


calculateVolumeAndArea(5)
// => 'Объем куба: 125, площадь всей поверхности: 150'

calculateVolumeAndArea(15)
// => 'Объем куба: 3375, площадь всей поверхности: 1350'

calculateVolumeAndArea(15.5)
// => 'При вычислении произошла ошибка'

calculateVolumeAndArea('15')
// => 'При вычислении произошла ошибка'

calculateVolumeAndArea(-15)
//  => 'При вычислении произошла ошибка'

// 2) Постепенно переходим к более реалистичным задачам :) Вы обнаружите, что там используется все тоже самое.
// Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Наглядно:
// Функция принимает только целое число от 1 до 36.
// Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:
// "Ошибка. Проверьте правильность введенного номера места"
// Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

// Пример:

function getCoupeNumber(place) {
    if (typeof (place) != "number" || place < 0 || !Number.isInteger(place)) {
        return console.log('Ошибка. Проверьте правильность введенного номера места');
    }
    if (place == 0 || place > 36) {
        return console.log('Таких мест в вагоне не существует');
    }

    return console.log(Math.ceil(place / 4));

    // switch (place) {
    //     case 1:
    //     case 2:
    //     case 3:
    //     case 4:
    //         console.log(1);
    //         break;

    //     case 5:
    //     case 6:
    //     case 7:
    //     case 8:
    //         console.log(2);
    //         break;

    //     case 9:
    //     case 10:
    //     case 11:
    //     case 12:
    //         console.log(3);
    //         break;

    //     case 13:
    //     case 14:
    //     case 15:
    //     case 16:
    //         console.log(4);
    //         break;

    //     case 17:
    //     case 18:
    //     case 19:
    //     case 20:
    //         console.log(5);
    //         break;

    //     case 21:
    //     case 22:
    //     case 23:
    //     case 24:
    //         console.log(6);
    //         break;

    //     case 25:
    //     case 26:
    //     case 27:
    //     case 28:
    //         console.log(7);
    //         break;

    //     case 29:
    //     case 30:
    //     case 31:
    //     case 32:
    //         console.log(8);
    //         break;

    //     case 33:
    //     case 34:
    //     case 35:
    //     case 36:
    //         console.log(9);
    //         break;

    //     default:
    //         console.log('Таких мест в вагоне не существует');
    // }
}

getCoupeNumber(3)
getCoupeNumber(33)
// => 9
getCoupeNumber(7)
//  => 2
getCoupeNumber(300)
// => "Таких мест в вагоне не существует"
getCoupeNumber(0)
// => "Таких мест в вагоне не существует"
getCoupeNumber(7.7)
// => "Ошибка. Проверьте правильность введенного номера места"
getCoupeNumber(-10)
//  => "Ошибка. Проверьте правильность введенного номера места"
getCoupeNumber('Hello')
//  => "Ошибка. Проверьте правильность введенного номера места"

// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"
// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.
// Пример:

function getTimeFromMinutes(minuts) {
    if (typeof (minuts) != "number" || minuts < 0 || !Number.isInteger(minuts)) {
        return console.log('Ошибка, проверьте данные');
    }

    let a = Math.floor(minuts / 60);
    let b = minuts % 60;

    if (a == 1) {
        return console.log(`Это ${a} час и ${b} минут`);
    } else if (a == 2 || a == 3 || a == 4) {
        return console.log(`Это ${a} часа и ${b} минут`);
    } else {
        return console.log(`Это ${a} часов и ${b} минут`);
    }
}

getTimeFromMinutes(150)
// => "Это 2 часа и 30 минут"
getTimeFromMinutes(50)
// => "Это 0 часов и 50 минут"
getTimeFromMinutes(0)
// => "Это 0 часов и 0 минут"
getTimeFromMinutes(-150)
// => "Ошибка, проверьте данные"


// 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.
// Пример:

function findMaxNumber(...number) {
    let arr = number;

    if (arr.length < 4) {
        return 0;
    }

    for(let i = 0; i < arr.length; i++) {
       let a = arr[i];
       if(typeof(a) != 'number') {
        return 0;
       }
    }

    arr.sort((a, b) => a - b);
    let  res = arr[arr.length - 1];

    return res;
}

console.log(findMaxNumber(1, 5, '6', '10'));
console.log(findMaxNumber(1, 5, 6.6, 11, 5));
console.log(findMaxNumber(23, 1, 5, 6.6, 11, 5));
console.log(findMaxNumber(1, 5, 6.6));
console.log(findMaxNumber(1, 5, 6.6, 'adassfd'));

