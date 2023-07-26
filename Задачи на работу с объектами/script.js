'use strict';

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};

// задачи:
// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
// Пример:
// P.S. желательно использовать деструктуризацию, но не обязательно


function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}


console.log(showExperience(personalPlanPeter))
// => '1 month'

// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.
// Пример:
// showProgrammingLangs(personalPlanPeter)  =>
// "Язык js изучен на 20%'
// 'Язык php изучен на 10%"
// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.
// P.S. Для переноса строки используется \n в конце строки.

function showProgrammingLangs(plan) {

}

// let {programmingLangs} = personalPlanPeter.skills;
// for(let key in programmingLangs){
//     console.log(key)
// }




console.log(showProgrammingLangs(personalPlanPeter))

