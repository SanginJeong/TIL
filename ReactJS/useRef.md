## 특정 태그에 focus 두기

### 자바스크립트에서 특정 포커스 두는 방법

    <!-- html -->
    <input type = 'number'>
    
    <!-- script -->
    document.querySelector(input).focus();

### 리액트에서의 useRef

    import { useRef } from 'react';
    import React from 'react';
    
    <input ref = {inputRef} type = 'number'>

    const inputRef = useRef(null);

세팅 완료

어떤 동작 후에 focus가 가게 하고 싶다면

    inputRef.current.focus()

를 넣어주면 된다.


## 실전 예시

### 페이지가 로딩될 때 focus 주고 싶으면?

    inputRef.current.focus()

를 useEffect에 넣어주면 된다.

