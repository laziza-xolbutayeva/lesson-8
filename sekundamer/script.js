'use strict'

let h1 = document.querySelector('.card h1');
let card = document.querySelector('.card');
let btn1 = document.getElementById('start')

let number = 0;

let time = setInterval(timer, 100)

function timer() {
    number++;
    h1.textContent = number;
}