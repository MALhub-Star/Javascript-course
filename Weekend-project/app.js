const display = document.querySelector('.counter-preview');
const allBtns = document.querySelector('#allBtns');

allBtns.addEventListener('click', counter);

let value = 0;
function counter(e) {
    var btn = e.target.id;
    console.log(btn);
    if (btn === 'increment') {
        value += 1;
    } else if (btn === 'decrement') {
        value -= 1;
    } else {
        value = 0;
    }

    display.textContent = value;
}

