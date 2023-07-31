'use strict';


// Задача:
// У вас есть список учеников, которые хотят поиграть в игру:
// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
// Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.
// Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.
// Пример:

// sortStudentsByGroups(students)  =>

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi'
// ]
// Если убрать одно студента из списка, то результат будет:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: -'
// ]
// А если добавить одного, то:

// [
//   [ 'Andrew', 'Ann', 'Bernard' ],
//   [ 'Cris', 'Josh', 'Mark' ],
//   [ 'Peter', 'Sam', 'Sandra' ],
//   'Оставшиеся студенты: Takesi, Somebody'
// ]
// То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'asdfsdf', 'sadasd'];
const students2 = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris'];

function sortStudentsByGroups(arr) {
    if (arr.length < 8) {
        return "Не достатточно игроков"
    }
    arr.sort();

    let res = [];
    const team1 = arr.slice(0, 3);
    res.push(team1);
    const team2 = arr.slice(3, 6);
    res.push(team2);
    const team3 = arr.slice(6, 9);
    res.push(team3);
    let leavings = arr.slice(9, arr.length);


    let str =``;
    arr.length <= 9 ? str = `Оставшиеся студенты: -`: str = `Оставшиеся студенты: ${leavings.join(", ")}`;
    
    res.push(str);

    return res;

}


console.log(sortStudentsByGroups(students));
console.log(sortStudentsByGroups(students2));