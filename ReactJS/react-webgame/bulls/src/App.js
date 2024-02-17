import logo from './logo.svg';
import './App.css';
import {useState, useRef, useEffect, useCallback} from 'react';
import React from 'react';


const generateAnswerList = () => {
  const list = Array(10).fill(0).map((v,i)=>i);
  const result = [];
  for(let i=0; i<4; i++){
    const index = ~~(Math.random() * (list.length-1));
    result.push(list[index]);
    list.splice(index,1);
  }
  return result;
}

function App() {
  useEffect(()=>{inputEl.current.focus()},[]);
  const inputEl = React.useRef(null);
  const [answer, setAnswer] = useState(generateAnswerList());
  const [chance, setChance] = useState(10);
  const [log, setLog] = useState([]);
  const [value, setValue] = useState('');
  const [isEnd, setIsEnd] = useState(false);

  useEffect(()=>{console.log(answer);},[answer]);

  const submitNumber = (event) => {
    event.preventDefault();
    if(chance < 1){
      return;
    }
    if(value.length < 4){
      alert('4자리수를 제출하세요')
      return
    }
    if(answer.join('') === value){
      setLog([...log,{number: value, result: '정답입니다.'}]);
      setIsEnd(true);
      return
    }

    let strike = 0;
    let ball = 0;
    const arr = value.split('').map(Number);
    for(let i=0; i<arr.length; i++){
      for(let j=0; j<answer.length; j++){
        if(i === j && arr[i] === answer[j]){
          strike++;
        }
        else if(arr[i] === answer[j]){
          ball++;
        }
      }
    }
    setLog([...log,{number: value, result: 
      (strike === 0 && ball === 0) ? `OUT` : `${strike}S ${ball}B`}]);
    setChance(chance-1);
    setValue('');
  }

  const reset = () => {
    setAnswer(generateAnswerList());
    setIsEnd(false);
    setLog([]);
    setChance(10);
    setValue('');
    inputEl.current.focus()
  }
  return (
    <>
    <div className='board'>
      <form onSubmit={submitNumber}>
        <input 
        onInput={(e) => {
          if (e.target.value.length > e.target.maxLength)
            e.target.value = e.target.value.slice(0, e.target.maxLength);
        }}
        ref={inputEl} 
        type="number" 
        value={value} 
        maxLength={4} 
        onChange={(e)=>{setValue(e.target.value)}}/>
        <button onClick={submitNumber}>입력</button>
      </form>
      <div>남은기회 : {chance}</div>
      {log.map((submit,i)=>{
        return (
          <div className='log'>
            <div>{`${i+1}차 시도`} {submit.number}</div>
            <div>{submit.result}</div>
          </div>
        )
      })}
      {isEnd || chance ===0 ? <button onClick={reset}>다시하기</button>: ''}
    </div>
    </>
  );
}

export default App;
