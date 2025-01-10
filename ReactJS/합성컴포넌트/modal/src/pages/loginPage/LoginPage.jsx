import React, { useState } from 'react'
import Modal from '../../modal/Modal';
import LoginForm from './LoginForm';
const LoginPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({email: "", password: ""})
  
  const handleOpenLogin = () => {
    setIsOpen(true);
  }

  const onClose = () => {
    setIsOpen(false);
  }

  const submitLogin = (e) => {
    e.preventDefault();
    console.log(user);
    setIsOpen(false);
  }

  const onChange = (e) => {
    const {name,value} = e.target;
    setUser((prev)=>(
      {
        ...prev,
        [name] : value,
      }
    ))
  }

  return (
    <div>
      <h1>로그인페이지입니다.</h1>
      <button onClick={handleOpenLogin}>로그인 모달 열기</button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <LoginForm submitLogin={submitLogin} user={user} onChange={onChange}/>
      </Modal>
    </div>
  )
}

export default LoginPage;