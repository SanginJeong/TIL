import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Box from './component/Box';

function App() {
  const count = useSelector(state=>state.count) // useSelector로 store에 저장된 state객체 가져옴
  const dispatch = useDispatch();
  const id = useSelector(state=>state.id);
  const pw = useSelector(state=>state.pw);

  const increaseCount = () => {
    dispatch({type:'increase',})
  }
  const decreaseCount = () => {
    dispatch({type:'decrease',})
  }
  const login = () => {
    dispatch({type:'login',payload: {id: 'SanginJeong', pw:'1234124'}})
  }
  return (
   <> 
    <h3>{count}</h3>
    <button onClick={increaseCount}>증가</button>
    <button onClick={decreaseCount}>감소</button>
    <button onClick={login}>로그인</button>
    <Box></Box>
    <h3>{id}</h3>
    <h3>{pw}</h3>
   </>
  );
}

export default App;
