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
    if (b == 0) {
        alert("Zero-Division Error");
    }
    else {
        return a / b;
    }
}

function operate(first, op, second) {
    let result = 0;

    if (op == "+") {
        result = add(first, second)
    }
    else if (op == "-") {
        result = subtract(first, second);
    }
    else if (op == "*") {
        result = multiply(first, second);
    }
    else if (op == "/") {
        result = divide(first, second);
    }
    else {
        return "Invalid operator";
    }

    return result;
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
            firstOperand = result;
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
    firstOperand = result;
    secondOperand = '';
    operator = '';
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