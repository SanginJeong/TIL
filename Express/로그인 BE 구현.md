## 로그인 BE 기능 구현

### User Story

- 유저는 이메일, 패스워드를 입력해서 보낸다.
- 데이터베이스에 해당 이메일과 패스워드를 가진 유저가 있는지 확인
- 있다 -> 유저정보 + 토큰(일정 기간 로그인 유지, localStorage나 sessionStorage에 (프론트에) 저장)
- 없다 -> 로그인 실패 알림


### 기능 구현 계획

1. 라우터 정의
2. 입력한 이메일 패스워드 정보 읽어오기
3. 이메일을 가지고 해당 이메일의 유저정보를 가져오고, 가져온 유저의 패스워드 비교 (이메일을 먼저 체크하고 있다면 비밀번호를 체크하는 방식)
4. 이메일 패스워드 다 맞다면 토큰 발행 (jsonWebToken 라이브러리 사용)
5. 틀리면 에러메시지


### 라우터 정의

GET메서드를 사용해서 읽어와야 한다고 헷갈릴 수 있겠다.

GET은 유저가 보는 것이지 데이터베이스에서 정보를 가져와서 검사해야 하므로 POST가 맞음

그렇다고 post로 받아온 데이터를 추가하거나 하지않으면 되니까 그냥 정보 받기용으로 쓴다고 생각


    /api/user/login

### 입력한 이메일 패스워드 읽어오기

    userController.loginWithEmail = async(req,res)=>{
      try {
        const {email, password} = req.body;

      } catch (error) {
        
      }
    }

### 검사

    userController.loginWithEmail = async(req,res)=>{
      try {
        const {email, password} = req.body;
        const user = await User.findOne({email},'-createdAt -updatedAt -__v');

        if(user){
          const isMath = bcrypt.compareSync(password, user.password); // password 와 user.password 비교
          if(isMath){
            
          }
        }
        throw new Error("아이디 또는 비밀번호가 일치하지 않습니다.")
      } catch (error) {
        res.status(400).json({status:"Fail", error});
      }
    }

### 토큰 발행

    userController.loginWithEmail = async(req,res)=>{
      try {
        const {email, password} = req.body;
        const user = await User.findOne({email},'-createdAt -updatedAt -__v');

        if(user){
          const isMath = bcrypt.compareSync(password, user.password); // password 와 user.password 비교
          if(isMath){
            const token = user.generateToken();
            return res.status(200).json({status:"OK",user,token})
          }
        }
        throw new Error("아이디 또는 비밀번호가 일치하지 않습니다.")
      } catch (error) {
        res.status(400).json({status:"Fail", error});
      }
    }

generateTOken 메서드는 따로 userSchema에서 메서드로 정의해줌

    const jwt = require('jsonwebtoken');
    require('dotenv').config();
    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

    userSchema.methods.generateToken = function () {
      const token = jwt.sign({ _id: this._id }, JWT_SECRET_KEY, {expiresIn: '1d'});
      return token
    }