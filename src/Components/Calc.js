import React, { useState } from 'react';
import '../Components/calc.css';

function Calc() {
    const [currentValue, setCurrentValue] = useState('0');
    const [prevValue, setPrevValue] = useState('');
    const [operator, setOperator] = useState(null);
  
    const handleDigit = (digit) => {
      setCurrentValue(currentValue === '0' ? digit : currentValue + digit);
    };
  
    const handleOperator = (op) => {
      setOperator(op);
      setPrevValue(currentValue + ' ' + op);
      setCurrentValue('0');
    };
  
    const handleEqual = () => {
      const current = parseFloat(currentValue);
      const previous = parseFloat(prevValue);
      let result;
  
      switch (operator) {
        case '+':
          result = previous + current;
          break;
        case '-':
          result = previous - current;
          break;
        case '*':
          result = previous * current;
          break;
        case '/':
          result = previous / current;
          break;
        default:
          return;
      }
  
      setCurrentValue(result.toString());
      setPrevValue('');
      setOperator(null);
    };
  
    const handleClear = () => {
      setCurrentValue('0');
      setPrevValue('');
      setOperator(null);
    };
  
    return (
      <div className="calculator">
      <h1>Calculator App</h1>
        <div className="display">
          <div className="prev-value">{prevValue}</div>
          <div className="current-value">{currentValue}</div>
        </div>
        <div className="buttons">
          <button onClick={() => handleDigit('7')}>7</button>
          <button onClick={() => handleDigit('8')}>8</button>
          <button onClick={() => handleDigit('9')}>9</button>
          <button className="operator" onClick={() => handleOperator('+')}>+</button>
          <button onClick={() => handleDigit('4')}>4</button>
          <button onClick={() => handleDigit('5')}>5</button>
          <button onClick={() => handleDigit('6')}>6</button>
          <button className="operator" onClick={() => handleOperator('-')}>-</button>
          <button onClick={() => handleDigit('1')}>1</button>
          <button onClick={() => handleDigit('2')}>2</button>
          <button onClick={() => handleDigit('3')}>3</button>
          <button className="operator" onClick={() => handleOperator('*')}>*</button>
          <button onClick={() => handleDigit('0')}>0</button>
          <button onClick={handleClear}>C</button>
          <button onClick={handleEqual}>=</button>
          <button className="operator" onClick={() => handleOperator('/')}>/</button>
        </div>
      </div>
    );
  }
export default Calc;