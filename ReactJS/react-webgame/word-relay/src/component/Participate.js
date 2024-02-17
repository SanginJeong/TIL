import React, { useRef,useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Participate = ( {setList} ) => {
  const inputRef = React.useRef(null);
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const submitParticipate = (event) => {
    event.preventDefault();
    if (value<=0) {
      return
    }
    setList( () =>{
      const newList = [];
      for(let i=0; i<value; i++){
        newList.push(`유저${i+1}`);
      }
      return newList;
    })
    navigate('/main');
  }
  
  useEffect(()=>{
    inputRef.current.focus();
  },[])
  return (
    <>
      <h3>몇 명이 플레이합니까?</h3>
      <form onSubmit={submitParticipate}>
        <input value={value} onChange={(event)=>{setValue(event.target.value)}} ref={inputRef} type="number" placeholder='참가 인원...'/>
        <button>완료</button>
      </form>
    </>
  )
}

export default Participate