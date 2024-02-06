import logo from './logo.svg';
import './App.css';
import {useState, useRef, useEffect, useCallback} from 'react';
import React from 'react';
// - 유저는 숫자를 입력할 수 있다.
// - 유저는 남은 기회를 볼 수 있다.
// - 유저는 로그를 볼 수 있다.
//  아래는 편의기능
// - 이미 제출한 값이라면 유저에게 알려주고 기회를 카운트하지 않는다.
// - 4글자까지만 입력제한을 둔다.
// - 페이지가 로딩될 시 input태그에 focus한다.
// - 제출 후에도 input태그에 focus한다.
function App() {
  useEffect(()=>{inputEl.current.focus()},[])

  const inputEl = React.useRef(null);
  const [chance, setChance] = useState(10);
  const [log, setLog] = useState([{
    number : '0123',
    result : 'out',
  }]);
  const [value, setValue] = useState('');
  const list = Array(10).fill(0).map((v,i)=>i);
  const answerList = [];
  for(let i=0; i<4; i++){
    const index = ~~(Math.random() * (list.length-1));
    answerList.push(list[index]);
    list.splice(index,1);
  }
  console.log('정답 : ',answerList);

  const submitNumber = useCallback((event) => {
    event.preventDefault();
    setLog([...log,{number: value}]);
  },[value])

  const onChangeInput = useCallback((e) => setValue(e.target.value), []);
  return (
    <>
    <div className='board'>
      <form onSubmit={submitNumber}>
        <input ref={inputEl} type="number" value={value} onChange={onChangeInput}/>
        <button>입력</button>
      </form>
      <div>{chance}</div>
      {log.map((submit)=>{
        return (
          <div className='log'>
            <div>{submit.number}</div>
            <div>{submit.result}</div>
          </div>
        )
      })}
    </div>
    </>
  );
}

export default App;
