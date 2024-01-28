[참고링크](https://ko.javascript.info/settimeout-setinterval)

## 호출 스케줄링

일정 시간이 지난 후 원하는 함수를 예약 실행 하는 것을 호출 스케줄링 이라고 한다.

### setTimeout : 일정 시간이 지난 후에 함수를 실행

### setInterval : 일정 시간 간격을 두고 함수를 실행



## setTimeout

### 문법

    let timerID = setTimeout(함수, 딜레이시간(밀리세컨드))

### 예시

    setTimeout(()=>{console.log('안녕')}, 1000)

## clearTimeout으로 스케줄링 취소하기

setTimeout 은 타이머 ID 가 반환된다. 즉 setTimeout을 한 번 사용할 때마다 ID에 저장되는 것이다.

### 스케줄링 취소하기

    let timerID = setTimeout(함수, 딜레이시간(밀리세컨드))
    clearTimeout(timerID);

## setInterval

### 문법

    let timerID = setInterval(함수, 실행할 시간의 간격(밀리세컨드))

### 예시

    // 2초 간격으로 메시지를 보여줌
    let timerId = setInterval(() => alert('째깍'), 2000);

    // 5초 후에 정지
    setTimeout(() => { clearInterval(timerId); alert('정지'); }, 5000);

5초 후에 정지하고 싶어서 setTimeout 안에 clearInterval을 사용한 모습

## setInterval 는 중첩 setTimeout 으로 바꿀 수 있다.

    let delay = 5000;

    let timerId = setTimeout(function request() {
      ...요청 보내기...

      if (서버 과부하로 인한 요청 실패) {
        // 요청 간격을 늘립니다.
        delay *= 2;
      }

      timerId = setTimeout(request, delay);

    }, delay);

중첩 setTimeout은 위와같이 다음 작업을 유동적으로 계획할 수 있기 때문에 setTimout 을 재귀로 사용하는 습관을 들이자.

setTimeout, setInterval 예제 코드를 js파일로 올려놓았다.
