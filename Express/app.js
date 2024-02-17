const express = require('express');
const app = express();

// url, 함수(요청, 응답) 두가지를 받는다.
// app.get('/',(req,res)=>{
//   res.send("브라우저 포트번호로 접속하면 바로 화면에 띄운다.");
// })
// app.get('/about',(req,res)=>{
//   res.send("about으로 접속하면 이걸 띄운다.");
// })

// 미들웨어
const checkAuth = (req,res,next) => {
  console.log('1.권한이 있음');
  next(); // next의 역할은 다음함수로 넘어가도록 요청, next가 없으면 다음 함수인 getUser로 넘어가질 못함
}

let token = null;
const checkToken = (req,res,next) => {
  if(token){
    next();
  }
  res.send('너 토큰 없어 안돼');
}

const getUser = (req,res) => {
  console.log('3.유저정보');
  res.send('유저정보');
}

// getUser로 get하기 전에 checkAuth 해줘
// checkAuth 뿐만 아니라 여러 개 들어갈 수 있다.
app.get('/users',checkAuth,checkToken,getUser)
// 포트를 연다.
app.listen(5000, ()=>{
  console.log('server: 5000');
})