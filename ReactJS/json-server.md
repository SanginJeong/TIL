## json-server란

json-server는 RESTful 규칙에 따른 작은 서버로, 빠른 시간 내에 간단하게 REST api 서버를 만들어서 사용하는 것이라고 생각하면 된다.

## 설치 및 세팅

1. db.json 이라는 파일을 만든다.
2. 데이터를 직접 넣어준다. 형식에 맞게 (배열 안 객체)

설치

    npx json-server --watch db.json --port 5000

## 시작하는 방법

port넘버 5000으로 해주는 이유는 npm start로 사용하고있는 react app 과 겹치지 않기위해 5000으로 시작하게 해준다.

또, 겹치지 않기위해서는 새로운 터미널을 만들어서 시작해줘야 한다.

