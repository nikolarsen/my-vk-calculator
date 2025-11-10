// src/utils/calculatorEngine.js
export const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
        case '+':
            return firstValue + secondValue;
        case '−':
            return firstValue - secondValue;
        case '×':
            return firstValue * secondValue;
        case '÷':
            return firstValue / secondValue;
        default:
            return secondValue;
    }
};

export const isOperator = (value) => {
    return ['+', '−', '×', '÷'].includes(value);
};

export const formatDisplay = (value) => {
    // Ограничиваем длину числа для красивого отображения
    const num = parseFloat(value);
    if (isNaN(num)) return '0';

    if (Math.abs(num) > 999999999) {
        return num.toExponential(6);
    }

    return String(value);
};