## 반복문 에서의 console.log

어떤 결과를 출력할 때 출력을 여러번 해야하는 상황이다.

이 때 반복문 안에서 console.log를 여러 번 사용하는 것보다, 하나의 변수데이터를 생성한 후 반복문 종료 후 마지막에 출력하는게 효율적이다.

## 예시문제 (백준 2742번)

    let answer = "";

    for (let i = input; i >= 1; i--) {
        answer += i + "\n";
    }

    console.log(answer);
