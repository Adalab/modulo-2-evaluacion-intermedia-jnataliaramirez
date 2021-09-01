'use strict';

// * Variables
const number = document.querySelector('.js_number');
const submit = document.querySelector('.js_submit');
const clue = document.querySelector('.js_clue');
const tries = document.querySelector('.js_try');
let counter = 1;


// * Generar un numero aleatorio
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

//Variable del nuúmero aleatorio
let randomNumber = getRandomNumber(100);

console.log(`Mi número aleatorio es ${randomNumber}`);

// * Contador
function count() {
    return counter++
}


// * Cojer value de la usuaria 
//función del listener
function getUserNumber() {
    let inputValue = number.value;
    count()
    return inputValue;
}

// Listener
submit.addEventListener('click', getUserNumber);

//Variable del número introducido
// let userNumber = getUserNumber();

// * Identificar si es un número
function isANumber(number) {
    if (!isNaN(number)) {
        if (number > 0 && number <= 100) {
            return true
        } else {
            return 'El número debe estar entre 1 y 100.'
        }
    } else {
        return 'El valor a ingresar debe ser un número';
    }
}


// * Identificar si es el número ingresado es mayor o menor al número aleatorio
function getMajorOrMinor(number) {
    if (number > randomNumber ) {
        return 'Demasiado alto.' 
    } else if (number < randomNumber){
        return 'Demasiado bajo.'
    } else {
        return 'Has ganado campeona'
    }
}

// * Escribir en pantalla la pista 
function writeClue() {
    let majorOrMinor = getMajorOrMinor()
    return clue.innerHTML = majorOrMinor
}

// * Escribir en pantalla cuantos intentos va 
function writeTry() {
    let triesCount = count()
    return tries.innerHTML = triesCount
}







