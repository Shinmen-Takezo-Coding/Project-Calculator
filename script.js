// Calculator operation variables

let firstNumber;
let operator;
let secondNumber;

// 4 main functions

function add (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract (firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply (firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide (firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

// Operate function

function operate (operator, firstNumber, SecondNumber, callback) {
    let computedValue = callback(firstNumber, SecondNumber);
    return `${firstNumber} ${operator} ${secondNumber} = ${computedValue}`;
}