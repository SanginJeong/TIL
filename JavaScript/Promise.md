# Promise

- 비동기 작업이 완료되면 값을 알려주는 객체
- 일단 Promise를 돌려주고 나중에 작업이 완료되면 결과값을 Promise에 채워 넣어주는 방식

## Promise 객체의 3가지 상태
- pending : 비동기 작업을 기다리고 있는 상태 (미결정)
- fulfilled : 비동기 작업이 성공한 상태
- rejected : 비동기 작업이 실패한 상태

# fetch 
fetch 함수는 Promise 객체를 리턴한다. 

결과값을 보고싶다면 await 를 이용한다.

# async와 await

사실 비동기작업은 동기작업이 모두 끝나고 난 후에 동작하는 것을 목적으로 하는데 아래 코드의 결과는

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    console.log(1);
    console.log(2);

    // data
    // 1
    // 2 

비동기작업이 모두 끝난 이후에 동기작업이 일어난다.

이럴 때 async를 사용하는 것이다. 사실 await 은 async 함수 안에서만 사용할 수 있기 때문에 (module 속성이 아니면) 이럴 경우는 거의 없다.
 
## 동작원리
- async함수 안에서 await을 사용하면 Promise객체의 상태가 결정될 때 까지 기다린다.
- 이 기다리는 과정에서 "async 함수 밖으로 나가서" 다른 작업을 처리한다.
- 결정이 되면 다시 돌아와서 작업을 처리한다.

### 얘시
    async function printEmployees() {
      console.log('2');
      const response = await fetch('https://learn.codeit.kr/api/employees');
      console.log('3');
      const data = await response.json();
      console.log('4');
    }
    console.log('1');

    printEmployees();

    console.log('5');

    console.log('6');

출력 순서는 1, 2, (함수밖으로 나감), 5, 6, (response의 상태가 결정되어 다시 돌아와 3을 출력), (data가 결정될때까지 다시 async 밖으로 나감) , (결정되면 돌아와서 4 출력)