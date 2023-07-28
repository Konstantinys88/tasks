
'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    lastMovieFunction: (dataBase) => {
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
    },

    toggleVisibleMyDB: function (dataBase) {
        if (dataBase.privat) {
            dataBase.privat = false;
        } else {
            dataBase.privat = true;
        }
    },

    writeYourGenre: function (dataBase) {
        for (let i = 0; i < 3; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i + 1}`, '').trim();
            if (genre != null && genre != '') {
                dataBase.genres.push(genre);
            } else {
                console.log("Ошибка введите данные снова");
                i--;
            }
        }
        dataBase.genres.forEach((item, index) => {
            console.log(`Любимый жанр №${index + 1} ${item}`);
        })
    },

    showMyDB: function (dataBase) {
        if (dataBase.privat === false) {
            console.log("Данные закрыты");
        } else {
            console.log(personalMovieDB);
        }
    },
}

personalMovieDB.start();
personalMovieDB.lastMovieFunction(personalMovieDB);
personalMovieDB.writeYourGenre(personalMovieDB);

personalMovieDB.toggleVisibleMyDB(personalMovieDB);
personalMovieDB.showMyDB(personalMovieDB);





