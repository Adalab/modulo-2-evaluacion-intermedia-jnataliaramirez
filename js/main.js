'use strict';

// * Variables
const number = document.querySelector('.js_number');
const submit = document.querySelector('.js_submit');
const clue = document.querySelector('.js_clue');
const tries = document.querySelector('.js_try');
let counter = 0;


// * Generar un numero aleatorio
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

// * Variable del nuúmero aleatorio
let randomNumber = getRandomNumber(100);

console.log(`Mi número aleatorio es ${randomNumber}`);


// * Identificar si es un número
function validNumber(number) {
    let varReturn;

    if (!isNaN(number)) {
        if (number > 0 && number <= 100) {
            if (number > randomNumber) {
                varReturn = 'Demasiado alto.'
            } else if (number < randomNumber) {
                varReturn = 'Demasiado bajo.'
            } else if (number === randomNumber) {
                varReturn = '¡Has ganado campeona!'
            }
        } else if (number <= 0 || number >= 100) {
            varReturn = 'El número debe estar entre 1 y 100.'
        } 
    } else {
        varReturn = 'No es valido ingresar texto'
    }

    return varReturn
}

// * Escribir en pantalla la pista 
function writeClue(something) {
    return clue.innerHTML = something;
}

// * Escribir en pantalla cuantos intentos va 
function writeTry(counter) {
    return tries.innerHTML = counter;
}

// * Juego 
function game(event) {
    let inputValue = parseInt(number.value);
    let clue = validNumber(inputValue);
    writeClue(clue);
    writeTry(counter++);
    event.preventDefault();
}

submit.addEventListener('click', game);
