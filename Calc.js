import React, { useState } from 'react';
import './App.css';

function App() {
 const [result, setResult] = useState('');
 const [equation, setEquation] = useState('');

 const operators = ['+', '-', '*', '/'];

 const handleClick = (value) => {
    if (operators.includes(value)) {
      if (equation[equation.length - 1] !== value) {
        setEquation(equation + value);
      }
    } else if (value === '=') {
      try {
        const result = eval(equation);
        setResult(result);
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setEquation('');
      setResult('');
    } else {
      setEquation(equation + value);
    }
 };

 return (
    <div className="App">
      <input type="text" className="display" value={equation} readOnly />
      <input type="text" className="result" value={result} readOnly />
      <div className="buttons">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={()
