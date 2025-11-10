// src/components/CalculatorButton.jsx
import React, { useState } from 'react';

const CalculatorButton = ({
    label,
    type,
    onClick,
    onTouchStart,
    onTouchEnd,
    onMouseDown,
    onMouseUp,
    onMouseLeave
}) => {
    const [isLongPressing, setIsLongPressing] = useState(false);

    const handleTouchStart = (e) => {
        setIsLongPressing(true);
        if (onTouchStart) onTouchStart(e);
    };

    const handleTouchEnd = (e) => {
        setIsLongPressing(false);
        if (onTouchEnd) onTouchEnd(e);
    };

    const handleMouseDown = (e) => {
        setIsLongPressing(true);
        if (onMouseDown) onMouseDown(e);
    };

    const handleMouseUp = (e) => {
        setIsLongPressing(false);
        if (onMouseUp) onMouseUp(e);
    };

    const handleMouseLeave = (e) => {
        setIsLongPressing(false);
        if (onMouseLeave) onMouseLeave(e);
    };

    return (
        <button
            className={`
        calculator-button 
        calculator-button--${type}
        ${isLongPressing ? 'long-press' : ''}
      `}
            onClick={onClick}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
        >
            {label}
        </button>
    );
};

export default CalculatorButton;