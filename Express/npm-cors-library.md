## CORS 문제

자바스크립트는 다른 도메인에서 리소스를 가져오는 걸 제한한다.

보안상 상당히 위험하기 때문이다.

CORS 에러는 다른 도메인을 가지고있는 주소로 API 요청을 하면 해당 요청을 제한한다.

[npm cors 공식문서](https://www.npmjs.com/package/cors)

#### 설치

    npm install cors

#### 불러오기

    const cors = require("cors");

#### 사용하기

    app.use(cors()); // 모든 리소스에 대한 요청 허가

경험상 cors 사용은 api를 불러오는 use를 사용하기 전에 먼저 적는게 

에러가 덜 나는 것 같다.

#### 특정 도메인만 허가하기

    const express = require('express');
    const cors = require('cors');

    const app = express();

    const adminList = ['www.111.com', 'www.222.com'];

    const corsOption = {
      origin: (origin, callback) => {
        if(adminList.length !== -1){
          callback(null, true);
        } else{
          callback(new Error('not admin by CORS'));
        }
      }
    }