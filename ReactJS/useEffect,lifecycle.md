## useEffeect 의 라이프 사이클


### 오늘 내가 겪었던 오류

    useEffect(()=>{getCurrentLocation()},[])
    useEffect(()=>{getWeatherByCity()},[city])

현재 위치 정보를 불러주는 함수를 렌더링이 되고 나면 바로 useEffect를 토애서 불러 왔다.

문제는 useEffect를 한 개 더 사용했는데, 이는 city가 변할 때마다 getWeahterByCity함수가 실행 되는 것이다.

### 에러 난 이유

useEffect는 최초 렌더링이 된 후 무조건 실행이 되기 때문에 처음 city의 값이 null 이었는데 현재위치함수가 실행되고, 다음으로 city에 대한 함수가 실행될 때 null이어서 에러가 난 것이다.

### 어떻게 해결했나

아래와 같이 조건문을 통해서 city가 null이라면 현재위치, 아니라면 city함수를 실행하도록 바꿔줬다.

    useEffect(()=>{ 
      if(city===null){
        getCurrentLocation();
      }
      else getWweatherByCity();
    },[city])

