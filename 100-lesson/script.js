'use strict';

class User {
    constructor(name, age) {
        this.name = name;
        this._userAge = age;
    }
    #surname = 'sfsadfsdf';

    say() {
        console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this._userAge}`);
    }

    get age() {
        return this._userAge;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._userAge = age;
        } else {
            console.log('Не допустимые значения')
        }
    }
}

const ivan = new User('Ivan', 27);
ivan.age = 99;
console.log(ivan.surname)

ivan.say();


