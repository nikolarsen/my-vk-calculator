// src/components/CalculatorDisplay.jsx
import React from 'react';

const CalculatorDisplay = ({ expression, error }) => {
    // Форматирование отображаемого значения
    const formatDisplayValue = (value) => {
        if (!value || value === '0') return '0';

        // Если это не число (выражение), не форматируем
        if (/[+−×÷%]/.test(value)) {
            return value;
        }

        try {
            const num = parseFloat(value);
            if (isNaN(num)) return value;

            const absNum = Math.abs(num);
            const strNum = value.toString();

            // Если число слишком длинное
            if (strNum.length > 12) {
                // Очень большие числа
                if (absNum >= 1e12) {
                    return num.toExponential(6).replace('e', 'E');
                }

                // Очень маленькие числа
                if (absNum > 0 && absNum < 1e-6) {
                    return num.toExponential(6).replace('e', 'E');
                }

                // Числа с длинной дробной частью
                if (strNum.includes('.')) {
                    const [integer, decimal] = strNum.split('.');
                    if (integer.length > 8) {
                        return num.toExponential(6).replace('e', 'E');
                    }
                    // Ограничиваем дробную часть
                    if (decimal.length > 8) {
                        return parseFloat(num.toFixed(8)).toString();
                    }
                }

                // Обычные длинные числа - округляем
                return parseFloat(num.toFixed(10)).toString();
            }

            return value;
        } catch (error) {
            return value;
        }
    };

    const displayValue = formatDisplayValue(expression);

    return (
        <div className={`calculator-display ${error ? 'error' : ''}`}>
            <div className="calculator-display-value">
                {error ? 'Ошибка' : displayValue}
            </div>
        </div>
    );
};

export default CalculatorDisplay;