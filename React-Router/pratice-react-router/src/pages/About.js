import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  }
  return (
    <>
      <h3>About 입니다.</h3>
      <button onClick={ goHome }>홈으로!!</button>
    </>
  )
}

export default About