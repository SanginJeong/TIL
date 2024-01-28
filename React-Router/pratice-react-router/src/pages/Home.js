import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  
  const goProductPage = () => {
    navigate('/products?q=shirts');
  }
  return (
    <>
      <h1>홈입니다.</h1>
      <Link to= '/about'>about으로 가자</Link>
      <button onClick={ goProductPage }>go to product page</button>
    </>
  )
}

export default Home