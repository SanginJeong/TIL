import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useState, useRef } from 'react';
function App() {
  const [num1, setNum1] = useState(~~(Math.random()*9));
  const [num2, setNum2] = useState(~~(Math.random()*9));
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');
  const inputEl = React.useRef(null);
  const submitAnswer = (event) => {
    event.preventDefault();
    const answer = num1*num2;
    if(Number(value) === answer){
      setResult('정답입니다.');
      setNum1(~~(Math.random()*9));
      setNum2(~~(Math.random()*9));
      setValue('');
      inputEl.current.focus();
    } 
    else{
      setResult('틀렸습니다.');
    }
  }
  return (
  <>
    <div>{num1}X{num2}는?</div>
    <form onSubmit={submitAnswer}>
      <input ref={inputEl} type="number" value={value} onChange={(event)=>{setValue(event.target.value)}}/>
      <button>입력</button>
    </form>
    <div>{result}</div>
  </>
  );
}

export default App;
