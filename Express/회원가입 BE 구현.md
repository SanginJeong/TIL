## 회원가입 BE 기능 구현

### User Story

- 유저는 이메일, 패스워드, 닉네임을 입력한다.
- 입력받은 정보를 데이터베이스에 저장한다.
- 패스워드는 암호화해서 저장한다.


### 기능 구현 계획

항상 기억하자. 요청을 보내고 받을 라우터, 데이터를 저장할 모델만들기, 데이터 동작 수행하는 컨트롤러 만들기

1. 라우터
2. 모델
3. 패스워드 암호화(bcrypt 라이브러리 이용), 이미 가입된 유저 판단 등 검사 후 데이터 저장
4. 응답 보내기


#### 라우터 정의

회원가입 요청은 POST 메서드로 회원을 추가해달라고 요청한다.

라우터 주소 정의

    /api/user

#### 데이터 저장할 모델 만들기

    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;

    const userSchema = Schema({
      name:{
        type:String,
        required:true,
      },
      email:{
        type:String,
        required:true,
      },
      password:{
        type:String,
        required:true,
      },
    },{timestamps:true});

    const User = mongoose.model("User",userSchema);
    module.exports = User;

### 패스워드 암호화 및 데이터 저장 컨트롤러

    const User = require("../model/User");
    const bcrypt = require('bcrypt');
    const saltRounds = 10;

    const userController = {};

    userController.createUser = async (req,res) => {
      try {
        const {email, name, password} = req.body;
        const user = await User.findOne({email}) // email : email
        if(user) {
          throw new Error("이미 가입된 유저입니다.");
        }

        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        
        const newUser = new User({email,name,password:hash}) // email:email , name:name, password:hash
        await newUser.save();

        res.status(200).json({status: 'OK'})

      } catch (error) {
        res.status(400).json({status:"fail",error});
      }
    }

    module.exports = userController;