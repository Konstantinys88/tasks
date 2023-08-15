'use strict';

//filter

const names = ['ivan', 'ann', 'ksenia', 'voldemar'];

const shortNames = names.filter((item) => {
    return item.length < 5;
});
console.log(shortNames);

//map

let answers = ['ivaV', 'anN', 'kseNia', 'voldEmar'];
answers = answers.map(item => {
    return item.toUpperCase();
});
console.log(answers);

// every/some 

const some = [-4, 'qwq', 'adasd12ws'];
console.log(some.some(item => {
    return item < 0;
}));

//reduice

const arr = [4, 5, 1, 3, 2, 6];

const res2 = arr.reduce((sum, current) => sum + current, 3);
console.log(res2);



const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animals',
    cat: 'animals',
};

const newArr = Object.entries(obj)
.filter((item) => {
    return item[1] === 'persone'
})
.map(item => {
    return item[0]
});

console.log(newArr);



