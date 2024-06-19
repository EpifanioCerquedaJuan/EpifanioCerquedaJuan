let currentInput = '';
let stack = [];

function clearDisplay() {
    currentInput = '';
    stack = [];
    updateDisplay();
}

function appendValue(value) {
    currentInput += value;
    updateDisplay();
}

function appendOperator(operator) {
    if (currentInput !== '') {
        stack.push(parseFloat(currentInput));
        stack.push(operator);
        currentInput = '';
        updateDisplay();
    }
}

function calculateResult() {
    if (currentInput !== '') {
        stack.push(parseFloat(currentInput));
    }

    let result = stack[0];
    for (let i = 1; i < stack.length; i += 2) {
        const operator = stack[i];
        const nextValue = stack[i + 1];

        if (operator === '+') {
            result += nextValue;
        } else if (operator === '-') {
            result -= nextValue;
        } else if (operator === '*') {
            result *= nextValue;
        } else if (operator === '/') {
            result /= nextValue;
        }
    }

    currentInput = result.toString();
    stack = [];
    updateDisplay();
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.value = currentInput;
}