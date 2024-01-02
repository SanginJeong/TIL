## 자바스크립트에서 현재 위치 정보 얻는 법

[참고링크](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)

    navigator.geolocation.getCurrentPosition((position)=>{
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          console.log(lat, lon);
        })
    }
