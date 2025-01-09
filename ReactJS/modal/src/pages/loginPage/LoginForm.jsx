import React from 'react'

const LoginForm = ({submitLogin, onChange, user}) => {

  return (
    <div>
        <h2>로그인 모달</h2>
        <form onSubmit={submitLogin} style={{display: 'flex', flexDirection: 'column'}}>
          <input name='email' value={user.email} onChange={onChange} type="text" placeholder='Email' />
          <input name='password' value={user.password} onChange={onChange} type="password" placeholder='password'/>
          <button type='submit'>완료</button>
        </form>
      </div>
  )
}

export default LoginForm
