
const btn = document.querySelector('.btn');
let timerId;
let iterator = 0;

function animation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if(pos == 300) {
            clearInterval();
        } else {
            pos++;
            elem.style.top = `${pos}px`;
            elem.style.left = `${pos}px`;
        }
    }
}

btn.addEventListener('click', animation);


