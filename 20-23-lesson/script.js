'use strict';

// условия


// 4 == 5 ? console.log('ok') : console.log('error');

// const hamburger = 5;
// const fries = 1;
// const cola = 0;

let a = (hamburger === 5 || cola === 1 && fries === 1) ? 'ok' : 'NOT';

// && и возвращает первое ложное значение 0 или последнее
// || или возвращает первое правдивое значение

console.log(a);
console.log(hamburger === 5 || cola === 1 && fries === 1);

console.log(NaN || 2 || undefined);
console.log(NaN && 2 && undefined);
console.log(1 && 2 && 3);
console.log(!1 && 2 || !3);
console.log(25 || null && !3);
console.log(NaN || null || !3 || undefined || 5);
console.log(NaN || null && !3 && undefined || 5);
console.log(5 === 5 && 3 > 1 || 5);


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!') }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}


// https://docs.google.com/document/d/1RDxwMg7pSI9QzhYU0sY59kyspI71r-3_hzJoSbHRk0I/edit?pli=1

function firstTask() {
   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
   const arr = [3, 5, 8, 16, 20, 23, 50];
   const result = [];
   // Пишем решение вот тут
   arr.forEach(item => result.push(item));
   // console.log(result);
   // Не трогаем
   return result;
}

console.log(firstTask())


// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

function secondTask() {
   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
   const data = [5, 10, 'Shopping', 20, 'Homework'];

   data.map((item, index) => {
      if (typeof (item) == "number") {
         console.log(item);
         data[index] = item * 2;
      }
      if (typeof (item) == "string") {
         console.log(item);
         data[index] += " - done";
      }
   });

   // Не трогаем
   return data;
}

console.log(secondTask())

// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

function thirdTask() {
   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
   const data = [5, 10, 'Shopping', 20, 'Homework'];
   const result = [];

   for(let i = data.length - 1; i >= 0; i--) {
      result.push(data[i])
   }

   return result;
}

console.log(thirdTask());
