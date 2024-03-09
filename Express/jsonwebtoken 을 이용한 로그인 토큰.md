## 로그인 토큰 라이브러리 jsonwebtoken

### 설치

    npm install jsonwebtoken

### 사용방법

    var jwt = require('jsonwebtoken');
    var token = jwt.sign({ foo: 'bar' }, 'shhhhh', {expiresIn: '1d'});

객체 안은 유저를 식별할 수 있는 거 정해줘서 넣어주고 (아이디나 이메일 같은거)

두번 째는 secret key임 환경변수 env로 숨겨놓자.

세번 째 expiresIn은 몇일동안 토큰을 유지할건지