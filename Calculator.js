// src/Calculator.js
import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input)); // Use eval with caution in production
    } catch (error) {
      setResult('Error');
    }
  };

  const calculateTrigonometric = (func) => {
    try {
      const value = parseFloat(input);
      let res;
      switch (func) {
        case 'sin':
          res = Math.sin(value);
          break;
        case 'cos':
          res = Math.cos(value);
          break;
        case 'tan':
          res = Math.tan(value);
          break;
        case 'sqrt':
          res = Math.sqrt(value);
          break;
        default:
          res = 'Error';
      }
      setResult(res);
      setInput('');
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator">
      <h1>Smart Calculator</h1>
      <input type="text" value={input} readOnly />
      <div>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
      </div>
      <div>
        <button onClick={clearInput}>C</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
      </div>
      <div>
        <button onClick={() => calculateTrigonometric('sin')}>sin</button>
        <button onClick={() => calculateTrigonometric('cos')}>cos</button>
        <button onClick={() => calculateTrigonometric('tan')}>tan</button>
        <button onClick={() => calculateTrigonometric('sqrt')}>√</button>
      </div>
      <h2>Result: {result}</h2>
    </div>
  );
};

export default Calculator;