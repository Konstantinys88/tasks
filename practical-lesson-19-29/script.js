
'use strict';

let number;

function start() {
    number = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (number == '' || number == null || isNaN(number)) {
        number = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: number,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
}

const lastMovieFunction = (dataBase) => {
    for (let i = 0; i < 2; i++) {
        const movie = prompt('Один из последних просмотренных фильмов?', '').trim();
        const value = +prompt('На сколько оцените его?', '');
        if (movie != null && value != null && movie != "" && value != "" && movie.length < 50) {
            dataBase.movies[movie] = value;
        } else {
            console.log("Ошибка введите данные снова");
            i--;
        }
    }

    if (dataBase.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (dataBase.count >= 10 && dataBase.count <= 30) {
        alert("вы класический зритель");
    } else if (dataBase.count > 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }

    return dataBase;
}

lastMovieFunction(personalMovieDB);


function writeYourGenre(dataBase) {
    for (let i = 0; i < 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
        if (genre != null && genre != '') {
            dataBase.genres.push(genre);
        } else {
            console.log("Ошибка введите данные снова");
            i--;
        }     
    }
}

writeYourGenre(personalMovieDB);

function showMyDB(dataBase) {
    if (dataBase.privat == false) {
        console.log("Данные закрыты");
    } else {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB);

// console.log(personalMovieDB);



