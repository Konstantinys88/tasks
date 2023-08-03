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
        "Скотт Пилигрим против...",
        'Пирожок',
        'Ужик',
        'AAAAAAAAAA'
    ]
};

const promo = document.querySelectorAll(`.promo__adv img`);
promo.forEach(item => item.remove());

const genre = document.querySelector(`.promo__genre`);
genre.textContent = "Драма"

let bg = document.querySelector(`.promo__bg`);
bg.style.cssText = `background-image: url('img/bg.jpg')`;

let listItem = document.querySelectorAll(`.promo__interactive-item`);
console.log(listItem)

movieDB.movies.sort();

const movieList = document.querySelector('.promo__interactive-list');
movieList.innerHTML = ``;

movieDB.movies.forEach((item, index) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${index + 1 + ' '} ${item.length > 10 ? item.slice(0, 10) + `...` : item}
        <div class="delete"></div>
    </li>
    `
})

