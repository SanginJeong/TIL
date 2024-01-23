## 애니메이션 이용하기

### 내가 겪은 문제

방금 배운 width를 이용해서 animation을 처리하려고 하니 width 0이 될 때 안에 텍스트가 있으면 텍스트는 안없어진다..

이럴 때는 transform일 이용한다.

### 코드

    <aside className={`sideBar ${isActiveSideBar ? 'active' : ''}`}>

    .sideBar{
      width: 50%;
      transform: translateX(-110%);
      transition: transform 0.4s ease-in-out;
    }
    .sideBar.active{
      transform: translateX(0);
    }

