const user = {
    name: 'alex',
    surname: 'smith',
    birthday: '20.04.1993',
    showMuPublickData: function () {
        console.log(`${this.name} ${this.surname}`)
    }
}



// for (const i in user) {
//     console.log(user[i])
// }

// const arr = ['a', 'b', 'c'];

// for (const i of arr) {
//     console.log(i)
// }

const shops = [
    { rice: 500 },
    { oil: 200 },
    { bread: 50 },
];

const budjet = [1000, 2322, 54545]

const map = new Map([
    [{paper: 2323}, 213123]
]);

shops.forEach((item, index) => {
    map.set(item, budjet[index]);
});

console.log(map);

// map.delete(shops[2]);
console.log(map.get(shops[1]));
console.log(map.has(shops[2]));

// for(let key of map.keys()) {
//     console.log(key);
// }

// console.log(map.keys());

const goods = [];
for(let shop of map.keys()) {
    goods.push(Object.keys(shop)[0]);
}

// console.log(goods);

for (let price of map.entries()) {
    console.log(price);
}

