## property shorthand

객체를 정의할 때 key와 value의 값이 같다면 한번만 표기하는 문법

#### 코드 예시

    const [a,b,c] = [1,2,3];
    const obj = {
      a:1,
      b:2,
      c:3,
    };


위 코드를 아래와 같이 바꿀 수 있다.

    const [a,b,c] = [1,2,3];
    const obj = {a,b,c};

    console.log(obj) // {a: 1, b: 2, c: 3}