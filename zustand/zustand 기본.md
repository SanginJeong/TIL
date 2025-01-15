# Zustand 상태관리

지금까지는 소규모 프로젝트에서 react-query + redux 느낌으로 사용했었는데, redux가 워낙 불편하기도 하고 데이터들은 react-query로 관리하고, zustand로 UI 상태관리를 하는 느낌

#### 예시
react-query로 서버에서 todoList 를 받아옴.
zustand로는 todoList를 추가,수정,삭제 할 수 있는 UI 상태를 관리


[참고링크](https://www.heropy.dev/p/n74Tgc)


## 설치

    npm i zustand

## 기본사용

스토어 만들기
create 함수로 스토어를 만드는데 set, get 매개변수를 가진다. -> 이를 통해 상태변경, 조회 가능
craete 함수의 콜백은 객체를 반환하고, 상태, action이라고 부른다.
create 함수는 use + 이름 + Stroe로 짓는다.

    import { create } from 'zustand'
    
    export const use이름Store = create((set, get) => {
      return {
        상태: 초깃값,
        액션: 함수
      }
    })

    import {create} from 'zustand';
    export const useCountStore = create((set,get) => { 
      return {
        count: 0,
        improve: () => set((state)=> ({count: state.count+1}))
      }
    })


상태는 반응형이기 때문에, 상태가 변경되면 컴포넌트가 다시 렌더링

## 다른 컴포넌트에서 불러오기

    function App() {
      const improve = useCountStore((state)=>state.improve);
      const count = useCountStore((state)=>state.count);
      return (
        <>
          <p>{count}</p>
          <button onClick={improve}>증가</button>
        </>
      )
    }

위에서는 콜백을 이용해서 각각 불러오고 아래에서는 한번에 다불러온다.

콜백 없이 스토어 훅을 호출하면 개별 상태나 액션이 아닌 스토어 객체를 얻을 수 있지만, 이는 사용하지 않는 상태가 변경돼도 컴포넌트가 다시 렌더링 되기 때문에 대부분은 권장하지 않는 방법이라고 한다.

    function App() {
      const {improve, count} = useCountStore();
      return (
        <>
          <p>{count}</p>
          <button onClick={improve}>증가</button>
        </>
      )
    }


get은 this의 느낌이다. 현재 객체의 state를 가져와서 액션함수에 쓰기위한?

그래서 get은 거의 안쓰고 아래처럼 콜백함수로 많이 사용하는듯

    import {create} from 'zustand';
    export const useCountStore = create((set,get) => { 
      return {
        count: 0,
        improve: () => set((state)=> ({count: state.count+1}))
      }
    })

