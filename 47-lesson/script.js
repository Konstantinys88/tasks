'use strict';

// const pow = (a, b) => {
//     let res = 1;
//     for (let i = 0; i < b; i++) {
//         res *= a;
//     }
//     return res;
// }


// const pow = (a, b) => {
//     if (b === 1) {
//         return a;
//     } else {
//         return a * pow(a, b - 1);
//     }


// }

// console.log(pow(2, 2));
// console.log(pow(2, 3));
// console.log(pow(2, 4));


function factorial(a) {
    if (a >= 1) {
        return a * factorial(a - 1);
    } else {
        return 1;
    }
}

// console.log(factorial(5));
// console.log(factorial(1));
// console.log(factorial(4));


let students = {
    js: [{
        name: 'john',
        progress: 100,
    }, {
        name: 'john2',
        progress: 60,
    }],
    
    html: {
        basic: [{
            name: 'john3',
            progress: 20,
        }, {
            name: 'john4',
            progress: 18,
        }],
        pro: [{
            name: 'john5',
            progress: 10,
        }]
    }
}

function getTotal(data) {
    let total = 0;
    let students = 0;
    for(let course of Object.values(data)) {
        if(Array.isArray(course)) {
            students += course.length;
            for(let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }

        } else {
            for(let subCourse of Object.values(course)) {
                students += subCourse.length;

                for(let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;
                }
            }
        }
    } 


    console.log(students);
    console.log(total);
    return total / students;
}

console.log(getTotal(students))