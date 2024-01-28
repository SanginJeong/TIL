## 리덕스가 나온 이유

App.js에서 모든 방향에 props 보내주는게 너무 불편함
리액트의 최대단점 : 일방적인 구조
Redux에 state를 저장해서 어떤 컴포넌트던지
 언제든지 갖다쓸수 있도록 한다.
하지만 바로 가져다 쓸수가 없음.

## 리덕스 구조

    Component -> action -> reducer -> store

두 가지 리액트 훅을 이용한다.

Component에서 useDispatch를 사용해서 reducer(함수)에게 action을 넘겨준다.

reducer함수는 리턴값이 반드시 있어야하고, 그 값은 store에 저장된다.

Component에서 state값을 불러오기 위해서는 

store에서 useSelector를 이용해서 가져온다.

## 리덕스 설치
리덕스는 js, nodejs 에서도 사용하기 때문에 리액트만을 위한 redux도 같이 설치해줘야 한다.

    npm install redux
    npm install react-redux

    npm install redux react-redux // 이렇게 합칠 수 있음

## 적용

index.js 파일로 이동한다.

아래 코드를 넣어준다.

    import { Provider } from 'react-redux';

    <Provider store = {store}>
      <App />
    </Provider>

## redux-practice 폴더에서 연습해보자.