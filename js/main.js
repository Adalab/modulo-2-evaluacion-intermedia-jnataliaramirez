'use strict';

const number = document.querySelector('.js_number');
const submit = document.querySelector('.js_submit');

// * Generar un numero aleatorio
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

//Variable del nuúmero aleatorio
let randomNumber = getRandomNumber(100);

console.log(`Mi número aleatorio es ${randomNumber}`);

// * Cojer value de la usuaria 
//función del listener
function getUserNumber() {
    let inputValue = number.value;
    console.log(inputValue)
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




