'use strict';

console.log('Запрос.....');

// const req = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log('Подготовка....');

//         const product = {
//             name: "TV",
//             proxe: 2000
//         }

//         resolve(product);
//     }, 2000);

// });

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';

//             resolve(product);
//             reject()
//         }, 2000);
//     });


// }).then(data => {
//     data.modifu = true;
//     return data;
    
// }).then((data) => {
//     console.log(data);
// }).catch (() => {
//     console.log('все пропало')
// }).finally(() => {
//     console.log("Finally")
// })

const test = (time) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time)
    });
};

// test(1000).then(() => console.log('1000'));
// test(2000).then(() => console.log('2000'));


Promise.all([test(1000), test(3000)]).then(() => {
    console
    .log('all')
})
Promise.race([test(1000), test(3000)]).then(() => {
    console.log('race')
})








