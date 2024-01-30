import React, { useEffect } from 'react'
import { useRef } from 'react'

const Participate = () => {
  const inputRef = React.useRef(null);
  useEffect(()=>{
    inputRef.current.focus();
  },[])
  return (
    <>
      <h3>몇 명이 플레이합니까?</h3>
      <form>
        <input ref={inputRef} type="number" placeholder='참가 인원...'/>
        <button>완료</button>
      </form>
    </>
  )
}

export default Participate