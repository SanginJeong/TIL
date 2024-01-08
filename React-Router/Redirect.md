## 페이지를 보호하는 방법 리다이렉트

### redirect가 필요한 이유

가장 대표적인 예로 로그인을 안했는데 유저정보를 보여주면 안됨..

### Navigate를 이용한다.

useNavigate와는 다르다.

useNavigate는 함수를 이용할 때 링크를 이동해주는 리액트-훅

### 구조

    import {Navigate} from 'react-router-dom';
    <Navigate to = '주소'>

### 코드 예시

    function App() {
      const [isLogin, setisLogin] = useState(false);
      const PrivatePage = () =>{
        return isLogin === true ? <User/> : <Navigate to = '/login'/>;
    }
      return (
        <>
          <Routes>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/user' element={<PrivatePage/>}></Route>
          </Routes>
        </>
      );
    }

- /login 주소는 Login 페이지가 뜬다.
- /user 주소는 User 페이지가 떠야하지만, 로그인 했는지 먼저 체크를 해야함
- 그래서 PrivatePage로 먼저 가고, 만약 로그인했다면 User를 띄움
- false(비로그인)이면 Navigate를 여기서 이용한다.
- Navigate를 통해 다시 login으로 가는 것을 redirect라고 한다.