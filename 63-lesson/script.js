const btns = document.querySelectorAll('button');
const btnsBlock = document.querySelector('.btn-block');

// console.log(btnsBlock);

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
// console.log(btns[0].classList.add('red'));
// console.log(btns[0].classList.remove('red'));
// console.log(btns[0].classList.toggle('red'));

// btns[0].addEventListener('click', () => {
//     btns[1].classList.toggle('red');
// })

// btns.forEach(item => {
//     item.addEventListener('click', (e) => {
//         item.classList.toggle('red');
//     })
// })

btnsBlock.addEventListener('click', (e) => {
    if(e.target.tagName == "BUTTON") {
        console.log(e.target)
        e.target.classList.toggle('red');
    }
})