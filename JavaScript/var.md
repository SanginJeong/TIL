# var 에 대해서
참고링크 : [모던 JS 튜토리얼 자습서](https://ko.javascript.info/var#ref-698)
## var이 let과 다른 점
1. 블록 스코프
2. 중복 선언 가능
3. 선언하기 전 사용 가능

## var은 블록 스코프가 없다.
var로 선언한 변수 : 전역 스코프 or 함수 스코프

let으로 변수 선언

    if(true){
        let test = true;
    }
    console.log(test);

var로 변수 선언

    if (true) {
      var test = true; // 'let' 대신 'var'를 사용했습니다.
    }

    console.log(test); // true

if문 안에서 test를 선언했지만 test에 접근할 수 있다.

var이 함수 안에 있다면 함수 스코프

    function sayHi() {
      if (true) {
        var phrase = "Hello";
      }

      console.log(phrase); // 제대로 출력됩니다.
    }

    sayHi();
    console.log(phrase); // Error: phrase is not defined

## var은 중복 선언 가능

let 에서의 중복 선언(에러)

    let user;
    let user; // SyntaxError: 'user' has already been declared

var 에서의 중복 선언

    var user = "Pete";

    var user = "John"; 

    console.log(user); // John

## 선언하기 전 사용할 수 있는 var
var 선언 미리 선언된다.

전역 스코프 : 스크립트가 시작할 때 가장 먼저 선언됨

함수 스코프 : 함수가 시작할 때 가장 먼저 선언됨

    function sayHi() {
      phrase = "Hello";

      console.log(phrase);

      var phrase;
    }
    sayHi();

### 호이스팅

위 코드는 아래처럼 var이 위로 끌어 올려진다. 이를 호이스팅 이라고 한다.

    function sayHi() {
      var phrase;

      phrase = "Hello";

      alert(phrase);
    }
    sayHi();

### 호이스팅 주의할 것
선언 자체는 호이스팅 되지만 할당은 호이스팅 안됨

예시

아래 코드의 결과값은 뭘까?

    function sayHi() {
      alert(phrase);

      var phrase = "Hello";
    }

    sayHi();

undefined가 나올 것이다.
할당('Hello')는 호이스팅 되지 않는다고 했기 때문에 위 코드는
아래 코드로 변한다.

    function sayHi() {
      var phrase; // 선언은 함수 시작 시 처리됩니다.

      alert(phrase); // undefined

      phrase = "Hello"; // 할당은 실행 흐름이 해당 코드에 도달했을 때 처리됩니다.
    }

    sayHi();