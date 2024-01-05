## react router 설치 및 적용하기

### 설치 및 적용

설치하기

    npm install react-router-dom@6

index.js 파일로 가서 다음 코드 입력

    import {BrowserRouter} from 'react-router-dom';

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

- BrowserRouter 를 불러온다.
- App 컴포넌트를 BrowserRouter로 감싸준다.


App.js로 돌아와서 사용해보기

    import { Routes, Route } from 'react-router-dom';

Routes와 Route 를 불러온다. Link도 불러올 수 있다.

### 코드 예제

    function App() {
      return (
        <>
        <Routes>
          <Route path='/' element={ <Home></Home> }></Route>
          <Route path='/about' element={ <About></About> }></Route>
        </Routes>
        </>
      );
    }

Route 는 path(경로) 와 element(넣을 컴포넌트) 를 가진다.

