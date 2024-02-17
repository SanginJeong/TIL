import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
function App() {
  const [message, setMessage] = useState('클릭해서 시작하세요');
  const [name, setName] = useState('yellow');
  const [result, setResult] = useState([]);
  const startTime = useRef(0);
  const endTime = useRef(0);
  const timeOut = useRef(null);

  const clickBox = () => {
    if(name === 'yellow'){
      setName('red');
      setMessage('초록색이 되면 클릭하세요');
      timeOut.current = setTimeout(()=>{
        setName('green');
        setMessage('지금!!');
        // 초록색으로 바뀐 즉시 startTime 을 잰다.
        startTime.current = new Date();
      }, ~~(Math.random()*3000));
    }
    else if(name === 'green'){
      endTime.current = new Date();
      setName('yellow');
      setMessage('클릭해서 시작하세요');
      setResult([...result, endTime.current - startTime.current]);
    }
    else if(name === 'red'){
      clearTimeout(timeOut.current);
      setMessage('성급해요. 초록색이 되면 클릭하세요');
      setName('yellow');
    }
  }
  useEffect(()=>{console.log(result);},[result])
  return (
    <>
    <div className={`box ${name}`} onClick={clickBox}>
      {message}
    </div>
    {result.map((v,i)=> <div>{`반응속도: ${v}ms`}</div>)}
    {result.length === 0
    ? null
    : <div>평균속도 : {result.reduce((a,c)=>a+c,0) / result.length}ms</div> }
    </>
  );
}

export default App;
