'use strict'

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`hello ${this.name}`)
    }
}

User.prototype.exit = function() {
    console.log(`${this.name} Exit`);
}

const ivan = new User('Ivan', 23);
const alex = new User('Alex', 22);

console.log(ivan);
console.log(alex);

ivan.hello();
alex.hello();

ivan.exit();


