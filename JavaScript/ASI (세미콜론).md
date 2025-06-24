# ASI 규칙

자바스크립트는 ASI (Automatic Semicolon Insertion) 규칙에 의해서 세미콜론을 작성하지 않아도 자동으로 세미콜론을 작성해준다.

하지만 항상 자동으로 정확히 삽입되는 것은 아니며, 의도와 다르게 에러가 해석될 수도 있다.

## 세미콜론을 넣어줘야 하는 경우

### 리턴문에서 줄바꿈 할 때

return 다음에 줄바꿈이 있으면 자바스크립트는 세미콜론을 삽입해버린다.

따라서 return 다음에 줄바꿈을 하지 않거나 ()로 감싸줘서 아래 줄바꿈이 내가 원하는 내용이라는 걸 알려줘야한다.

    function test() {
      return
      {
        message: "hello"
      };
    }

    console.log(test()); // undefined


해결

    function test() {
      return (
        {
          message: "hello"
        };
      )
    }

    console.log(test()); // undefined

### 접두 연산자 쓸 때

    let x = 5
    let y = x
    ++x // 여기서 y = x++ 처럼 해석될 수 있음

### throw

    throw
    new Error("error!") // SyntaxError 발생

    throw; new Error() // 이렇게 해석됨


### 배열, 함수호출, 괄호로 시작할 때

    let a = 1;
    [1, 2, 3].forEach(console.log);

    let b = 2;
    (function() {
      console.log("hi");
    })();
