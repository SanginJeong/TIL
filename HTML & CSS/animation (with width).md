## 애니메이션 이용하기

### 내가 겪은 문제상황

onClick으로 toggle을 줘서 width를 조절해서 애니메이션을 준다.

input태그에 입력을하려고 클릭을 하니 input에 애니메이션 발생

### 해결

onFocus와 onBlur로 해결했다.

onFocus는 focus가 됐을때 애니메이션을 주고,
onBlur는 focus가 빠졌을때 애니메이션을 준다.

### 코드

    <form action="">
      <input type="text" className={`search ${isActive ? 'active' : ''}`} onFocus={toggle} onBlur={isActive ? toggle : ''} /> 
    </form>

