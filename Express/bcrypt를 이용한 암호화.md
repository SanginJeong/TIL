## bcrypt 라이브러리 이용한 패스워드 암호화 하기

### 설치

    npm install bcrypt

### 사용방법

bcrypt를 불러온 후 몇번 암호화를 진행할 건지 선언해준다. (10번이 정배)

    const bcrypt = require('bcrypt');
    const saltRounds = 10;

암호화 진행

    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    
    const newUser = new User({email,name,password:hash}) // email:email , name:name, password:hash
    await newUser.save();

### 나중에 비교할 때는??

프론트에서 입력한 패스워드 정보는 암호화가 진행되지 않은 상태.

데이터베이스에 저장된 패스워드 정보는 암호화가 진행된 상태.

로그인 할 때 비교하는 함수가 따로 있다.

        bcrypt.compareSync(입력한 패스워드, 데이터베이스의 패스워드);


결과값은 true / false 로 반환되기 때문에 결과값을 저장해 놓는게 좋음