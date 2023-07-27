'use strict';

// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.
// Пример:
// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'
// Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.

const personalPlanPeter = {
    name: "Peter",
    age: "33",
    skills: {
        languages: ['ru', 'eng', 'ua'],
        programmingLangs: {
            js: '20%',
            php: '10%',
            // css: '12%',
        },
        exp: '1 month'
    },

    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;

        let res = ``;
        languages.forEach(item => {
            res += `${item} `.toUpperCase();
        })

        return `Мне ${age} и я владею языками: ${res}`;

    }
};


console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// задачи:
// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
// Пример:
// P.S. желательно использовать деструктуризацию, но не обязательно


function showExperience(plan) {
    const { exp } = plan.skills;
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
    let res = ``;
    let { programmingLangs } = plan.skills;
    for (let key in programmingLangs) {
        res += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }
    return res;
}


console.log(showProgrammingLangs(personalPlanPeter))



