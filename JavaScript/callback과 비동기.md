# 콜백 (callback)
어떤 함수에 argument로 전달되는 함수

# 비동기 함수
함수의 내용을 끝까지 실행하지 않고 중간에 다른 작업을 처리하다가 다시 돌아와서 마무리하는 함수 (대표적으로 setTimeout )

무언가를 비동기적으로 수행하는 함수는 함수 내 동작이 모두 처리된 후 실행되어야 하는 함수가 들어갈 콜백을 인수로 반드시 제공해야함.

## 특징
- 비동기 함수의 콜백은, 아무리 빨리 실행돼도 비동기 함수 이후에 있는 코드가 모두 실행된 후에 실행됩.
- 실행한 콜백이 여러개 일 때는 그 부분은 동기적으로 실행된다.



setTimeout 의 argument (3번째부터)

# EventLoop

자바스크립트가 싱글 스레드이기에 내부엔진 으로는 비동기 처리를 할 수 없다. 그럼에도 비동기 처리를 할 수 있는 이유는 브라우저의 WebAPis 가 도와주기 때문이다. (ajax, fetch, setTimeout, eventHandler)


CallStack : 자바스크립트 엔진 실행을 위한 메모리 구조
Heap : 동적으로 생성된 자바스크립트 객체가 저장되는 공간

Web APIs : 브라우저에서 제공하는 API 모음, 비동기적 실행들을 담당한다. -> Callback queue 로 보낸다.
Callback queue : 비동기적 작업이 완료되면 대기하는 공간
Event Loop : 적절한 시점에 비동기함수들을 실행시키는 역할. 자바스크립트 엔진과 브라우저의 연결고리