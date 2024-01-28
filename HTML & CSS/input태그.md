## input 태그 잘 안 쓰는 것들 정리

### type : color

    <input type = "color" id="selectColor"/>

### JS로 가져오기

    const selectColor = document.querySelector('#selectColor');
    selectColor.value

### type : radio

### 라디오와 체크박스 에서 한 개만 선택하는 방법

디폴트 값은 여러 항목들을 선택할 수 있다.

name을 같게 해주면 된다.

예시

    <input type="radio" name="radio" value="월"/>월
    <input type="radio" name="radio" value="화"/>화
    <input type="radio" name="radio" value="수"/>수
    <input type="radio" name="radio" value="목"/>목
    <input type="radio" name="radio" value="금"/>금

이러면 한 개만 선택할 수 있다.

### JS로 가져오기

선택한 값을 가져오려면 checked === true 임을 확인해야한다.

예시

    document.getElementsByName('radio').forEach((radio)=>{
      if(radio.checked === true){
        day = radio.value;
      }
    })

