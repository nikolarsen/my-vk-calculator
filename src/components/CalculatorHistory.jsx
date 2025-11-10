// src/components/CalculatorHistory.jsx
import React from 'react';

const CalculatorHistory = ({ history, onSelect }) => {
    return (
        <div className="calculator-history">
            {history.length === 0 ? (
                <div className="history-placeholder">Удерживайте AC после нажатия чтобы очистить историю </div>
            ) : (
                history.map((item, index) => (
                    <div
                        key={index}
                        className="history-item"
                        onClick={() => onSelect(item)}
                    >
                        {item}
                    </div>
                ))
            )}
        </div>
    );
};

export default CalculatorHistory;