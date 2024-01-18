## 리액트에서 햄버거 메뉴 클릭이벤트

### JS에서의 원리

JS에서는 다음 원리를 따른다.

1. 햄버거메뉴를 선택하여 가져온다.
2. css 설정 (active, 또는 hidden)
3. 클릭할때마다 설정한 css를 추가 또는 삭제

### 리액트에서는 useState를 사용

1. css active를 만들어 놓는다.
2. onClick 시 함수 실행
3. 함수에서 useState를 true로 바꿈.
4. UI설정

### 코드예시

    const Navbar = () => {
      const [isClikedHamburger, setIsClikedHamburger] = useState(false);
      const onClickHamburger = () => {
        if(isClikedHamburger) setIsClikedHamburger(false);
        else setIsClikedHamburger(true);
      }
      return (
        <>
        <button className="hamburger" onClick={onClickHamburger}></button>
          <nav>            
            <ul className={`nav_item ${isClikedHamburger ? 'active' : ''}`}>
            </ul>

            <div className={`nav_user ${isClikedHamburger ? 'active' : ''}`}>
            </div>
          </nav>
        </>

false 상태

    const [isClikedHamburger, setIsClikedHamburger] = useState(false);

클릭 시 true 상태

    const onClickHamburger = () => {
      if(isClikedHamburger) setIsClikedHamburger(false);
      else setIsClikedHamburger(true);
    }
   
    <button className="hamburger" onClick={onClickHamburger}
    
조건식 활용하여 true이면 나타냄

    <ul className={`nav_item ${isClikedHamburger ? 'active' : ''}`}></ul>

