import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCountStore } from './store/useCountStore'

function App() {
  const {increase, decrease , count} = useCountStore();

  useEffect(()=>{
    console.log(count);
  },[count]);

  return (
    <>
      <p>{count}</p>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
    </>
  )
}

export default App
