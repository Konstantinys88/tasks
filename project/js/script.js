/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта) +

2) Изменить жанр фильма, поменять "комедия" на "драма" + 

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img. +
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против всех",
        // 'Пирожок',
        // 'ыыыыыыыыы',
        // 'AAAAAAAAAA',
    ]
};

const promo = document.querySelectorAll(`.promo__adv img`);
const genre = document.querySelector(`.promo__genre`);
const bg = document.querySelector(`.promo__bg`);
const listItem = document.querySelectorAll(`.promo__interactive-item`);
const movieList = document.querySelector('.promo__interactive-list');
const addForm = document.querySelector('form.add');
const addInput = addForm.querySelector('.adding__input');
const checkbox = addForm.querySelector('[type="checkbox"]');



function addMovies() {
    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newMovie = addInput.value;
        const favorite = checkbox.checked;

        if (newMovie) {
            movieDB.movies.push(newMovie);
            sort(movieDB.movies);
        }

        if (favorite) {
            alert('Любимый фильм');
        }

        createMovieList(movieDB, movieList);
        addForm.reset();
    })
}
addMovies();


const deleteAvd = (arr) => {
    arr.forEach(item => item.remove());
}
deleteAvd(promo);


const makeChanges = () => {
    genre.textContent = "Драма";
    bg.style.cssText = `background-image: url('img/bg.jpg')`;
}
makeChanges();


const sort = (arr) => {
    arr.sort();
}
sort(movieDB.movies);


function createMovieList(films, parent) {
    parent.innerHTML = ``;
    sort(films.movies);

    films.movies.forEach((item, index) => {
        parent.innerHTML += `
            <li class="promo__interactive-item">${index + 1 + ' '} ${item.length > 21 ? item.slice(0, 21) + '...' : item}
                <div class="delete"></div>
            </li>
        `
    });

    document.querySelectorAll('.delete').forEach((item, index) => {
        item.addEventListener('click', () => {
            item.parentElement.remove();
            films.movies.splice(index, 1);

            createMovieList(films, parent);
        })
    })
}
createMovieList(movieDB, movieList);









