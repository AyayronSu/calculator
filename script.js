function add(a, b) {
    return a + b;
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
let firstOperand = '';
let secondOperand = '';
let opClickedOrNot = false;

digitBtns.forEach(digitBtn => {
    digitBtn.addEventListener('click', (e) => {
        const num = document.createElement('div');
        num.textContent = e.target.value;
        num.style.display = 'inline-block';
        display.appendChild(num);

        if (opClickedOrNot == false) {
            firstOperand += e.target.value;
            console.log(firstOperand);
        }
        else {
            secondOperand += e.target.value;
            console.log(secondOperand);
        }   
    })
});

operatorBtns.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', (e) => {
        opClickedOrNot = true;
        const op = document.createElement('div');
        op.textContent = e.target.value;
        op.style.display = 'inline-block';
        display.appendChild(op);
    })
});



