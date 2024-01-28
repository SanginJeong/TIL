## 클릭한 버튼을 표시하고 싶을 때

### 문제상황
JS 에서는 event.target 이 ~와 같다면 색깔을 바꿔준다~ 라고 했었는데 리액트에서는 조금 복잡해서 해결하는데 시간이 오래걸렸다.

### 코드

city가 바뀔 때마다 getWeahterByCity가 실행됨

    useEffect(()=>{ 
        if(city===null){
          getCurrentLocation();
        }
        else getWweatherByCity();
      },[city])

getWeatherByCity 함수 : 데이터를 불러와서 weather 등을 바꿔줌

    const getWweatherByCity = async() => {
      setLoading(true);
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=matric`
      const response = await fetch(url);
      const data = await response.json();
      console.log('data',data);
      setWeather(data);
      setLoading(false);
    }

### city 바꾸기

여기서 매개변수의 city는 버튼 컴포넌트에서 넘겨줄 꺼임.

    const handleCityChange = (city) => {
        if( city === 'current'){
          setCity(null); // city가 null이 됨으로써 useEffect에서 getCurrentLocation 발동
        }
        else setCity(city);
      }

### 코드 흐름을 잘 파악을 하지 못했다.

1. city를 바꾼다.
2. getWeatherByCity 실행된다.

### props로 보낼 것들

    <BtnComponent cities = {cities} handleCityChange = {handleCityChange} selectedCity = {city}></BtnComponent>

### BtnComponent

import React from 'react'

    const BtnComponent = ( {cities,handleCityChange,selectedCity} ) => {
      return (
        <div>
          <button className = {selectedCity === null ? 'selected' : ''} onClick={()=>{handleCityChange('current')}}>Current Location</button>
          {cities.map((clickCity)=>{
            return <button className = {selectedCity === clickCity ? 'selected' : ''} onClick={()=>{handleCityChange(clickCity)}}>{clickCity}</button>
          })}
        </div>
      )
    }

    export default BtnComponent

코드 흐름대로 가보자.

1. 현재 위치 버튼을 클릭하면 handleCityChange의 매개변수로 'current'를 넘겨준다.

2. 다른 버튼들은 clickCity로 넘겨준다(ex : paris, new york)

3. handleCityChange가 실행되면서 setCity로 인해서 city가 바뀐다.

4. 바뀐 city를 다시 selectedCity로 props를 보내준다.

5. 버튼컴포넌트에서 받은 selectedCity와 클릭할 때의 clickCity를 비교한다.


## 내가 헷갈렸던 것 -> 고쳐야 할 점

1. clickCity를 자꾸 버튼태그 자체라고 생각했다. clickCity는 그냥 도시 이름이다. -> 변수명을 잘 짓자.

2. 코드 흐름에서 4,5번을 놓쳤다. 정확히는 3번으로 인해서 city가 바뀜으로 반복되는 구조임을 놓쳤다. -> 코드를 계획적으로 짜자.
