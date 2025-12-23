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
let expression = '';
let opClickedOrNot = false;

digitBtns.forEach(digitBtn => {
    digitBtn.addEventListener('click', (e) => {
        if (opClickedOrNot == false) {
            firstOperand += e.target.value;
        }
        else {
            secondOperand += e.target.value;
        }   

        const num = document.createElement('div');
        num.textContent = e.target.value;
        num.style.display = 'inline-block';
        display.appendChild(num);

    })
});

operatorBtns.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', (e) => {
        opClickedOrNot = true;
        const op = document.createElement('div');
        op.textContent = e.target.value;
        op.style.display = 'inline-block';
        display.appendChild(op);

        operator = e.target.value;
    })
});

equalBtn.addEventListener('click', function() {
    const result = document.createElement('div');
    result.textContent = operate(firstOperand, operator, secondOperand);
    display.innerHTML = '';
    display.appendChild(result);
})

clearBtn.addEventListener('click', function() {
    display.innerHTML = '';
    firstOperand = '';
    secondOperand = '';
    operator = '';
    opClickedOrNot = false;
})