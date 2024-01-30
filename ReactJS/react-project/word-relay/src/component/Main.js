import { render } from '@testing-library/react';
import React from 'react'
import { useState, useRef, useEffect } from 'react';

const Main = ({list}) => {
  const inputRef = React.useRef(null);
  const [word, setWord] = useState(''); // 입력
  const [renderWord, setRenderWord] = useState('') // 화면에 보여지는 word
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [resultMessage, setResultMessage] = useState('');
  const [isEnd, setIsEnd] = useState(false);
  useEffect(()=>{
    inputRef.current.focus();
  },[])

  const submitWord = (event) => {
    event.preventDefault();
    if(isEnd){
      return
    }
    setResultMessage('');
    if(word.length < 2){
      setResultMessage('한 글자 이상 입력해주세요');
      return
    }
    if(renderWord && renderWord.split('').pop() !== word.split('')[0]){
      setResultMessage(`${list[currentPlayer]}님이 패배하셨습니다.`)
      setIsEnd(true);
      return
    }
    
    setRenderWord(word);
    setWord('');
    setCurrentPlayer((currentPlayer+1)%list.length);
  }

  const reset = () => {
    setIsEnd(false);
    setResultMessage('');
    setCurrentPlayer(0);
    setWord('');
    setRenderWord('');
  }
  return (
    <>
      <div className='title'>
        <h2>제시어</h2>
        <h1>{renderWord}</h1>
      </div>
      <div className='turn'>
        <h2>{resultMessage || `${list[currentPlayer]}님 차례입니다.`}</h2>
        {isEnd ? <button onClick={reset}>다시하기</button>: ''}
      </div>
      <form onSubmit={submitWord}>
        <input value={word} onChange={(event)=>{setWord(event.target.value)}} ref={inputRef} type="text" placeholder='제시어 입력...'/>
        <button>완료</button>
      </form>
    </>
  )
}

export default Main