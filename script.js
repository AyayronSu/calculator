function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    let quotient = 0;
    if (b == 0) {
        alert("Zero-Division Error");

    }
    else {
        quotient = a / b;
        return quotient.toFixed(3);
    }
}

const display = document.querySelector('.display');
const digitBtns = document.querySelectorAll('.digit');
const operatorBtns = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('.equal');
const clearBtn = document.querySelector('.clear');
let firstOperand = '';
let secondOperand = '';
let operator = '';
let result = '';
let opClickedOrNot = false;

digitBtns.forEach(digitBtn => {
    digitBtn.addEventListener('click', (e) => {
        if (firstOperand.length > 0 && operator.length > 0) {
            secondOperand += e.target.value
            display.innerHTML = '';
        }
        else {
            firstOperand += e.target.value;
        }
        const digit = document.createElement('div');
        digit.textContent = e.target.value;
        digit.style.display = 'inline-block';
        display.appendChild(digit); 
        console.log(`first: ${firstOperand}`);
        console.log(`second: ${secondOperand}`);
    })
});

operatorBtns.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', (e) => {
        if (secondOperand.length > 0) {
            result = '';
            secondOperand = '';
        }

        operator = e.target.value;
        console.log(`op: ${operator}`);
    })
});

equalBtn.addEventListener('click', function() {

    display.innerHTML = '';
    const resultContainer = document.createElement('div');
    result = operate(firstOperand, operator, secondOperand);
    firstOperand = result.toString();
    resultContainer.textContent = result;
    display.appendChild(resultContainer);
    console.log(`result: ${result}`);
})

// Works fine
clearBtn.addEventListener('click', function() {
    display.innerHTML = '';
    firstOperand = '';
    secondOperand = '';
    operator = '';
    opClickedOrNot = false;
})

