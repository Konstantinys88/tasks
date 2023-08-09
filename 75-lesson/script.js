'use strict'

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`hello ${this.name}`)
    }
}

User.prototype.exit = function () {
    console.log(`${this.name} Exit`);
}

const ivan = new User('Ivan', 23);
const alex = new User('Alex', 22);

// console.log(ivan);
// console.log(alex);

// ivan.hello();
// alex.hello();

// ivan.exit();

// this 

// 1. Обычная функция: this= window,но если в строгом режиме то undefined 
// 2. Контекст у методов обьекта сам обьект
// 3. this в конструкторах и класах - это новый экземпляр обьекта
// 4. ручная привязка this: call, apple, bind

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'Vasia'
}

sayName.call(user, ' Vasich');
sayName.apply(user, [' Agr']);

function count(num) {
    return this * num;
}

const double = count.bind(2);
console.log(double(3))
console.log(double(13))


