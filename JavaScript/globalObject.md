## 전역 객체(global-object)

### [참고 링크](https://ko.javascript.info/global-object)

전역객체 : 브라우저에서는 window, Node.js에서는 global 이라고 불림
브라우저 환경에서 구동될 때는 window, 다른 환경이면 globalThis 를 쓰면 됨
### 전역객체 사용하는 방법
var 을 이용하면 모든 곳에서 사용할 수 있다. (비추천)

    var gVar = 5;

    alert(window.gVar); // 5 (var로 선언한 변수는 전역 객체 window의 프로퍼티가 됩니다)

(위 코드를 let으로 선언하면 undefined)


전역 객체에 직접 프로퍼티를 추가하는 방법 (추천)

    // 모든 스크립트에서 현재 사용자(current user)에 접근할 수 있게 이를 전역 객체에 추가함
    window.currentUser = {
      name: "John"
    };

    // 아래와 같은 방법으로 모든 스크립트에서 currentUser에 접근할 수 있음
    alert(currentUser.name);  // John

    // 지역 변수 'currentUser'가 있다면
    // 지역 변수와 충돌 없이 전역 객체 window에서 이를 명시적으로 가져올 수 있음
    alert(window.currentUser.name); // John

  ### 하지만 에러도 많고 테스트도 어렵기 때문에 전역변수 자체를 사용하지 않는 것이 좋다.

