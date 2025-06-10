# React.Children

용도 : 나는 개인적으로 컴파운드 패턴으로 구성할 때 주로 쓰는 것 같음. 예로 들어 dropdown에서 state들을 dropdown마다 따로 관리해야 할 때 store나 props로 받으면 하나의 isOpen이 공유되기 때문에 dropdown에서 만들어줘야함

## 개념

React.Children은 React에서 제공하는 유틸리티 객체로, 자식 컴포넌트들을 다루는 데 유용한 다양한 메서드를 제공. 

주로 자식 요소를 자동으로 처리하거나 특정 방식으로 자식을 순회하거나 변경할 때 사용됩니다.

- React.Children.map(children, function): 자식들을 순회하면서 주어진 함수를 호출하고, 그 반환값을 새로운 배열로 반환합니다.
- React.Children.forEach(children, function): 자식들을 순회하며 주어진 함수를 실행합니다. 반환값은 없으며, 단순히 부수 효과를 발생시킬 때 사용됩니다.
- React.Children.count(children): 자식의 개수를 반환합니다.
- React.Children.only(children): 자식이 하나만 있을 때, 그 자식을 반환합니다. 자식이 하나가 아니면 에러가 발생합니다.
- React.Children.toArray(children): 자식들을 배열로 변환하여 반환합니다. 자식들이 하나의 컴포넌트일 수도, 여러 개일 수도 있기 때문에, 이를 배열로 바꾸면 더 쉽게 다룰 수 있습니다.


## 사용예시

    import React from 'react';

    const List = ({ children }) => {
      return (
        <ul>
          {React.Children.map(children, (child, index) => (
            <li key={index}>{child}</li>
          ))}
        </ul>
      );
    };

    const App = () => {
      return (
        <List>
          <span>Item 1</span>
          <span>Item 2</span>
          <span>Item 3</span>
        </List>
      );
    };

    export default App;



## 내가 개발하면서 맞이한 상황

Dropdown (최상위 컴포넌트) -> Dropdown.header (자식컴포넌트) -> Dropdown.content (손자 컴포넌트)

### React.cloneElement

    React.cloneElement(element, [props], [...children])

- element: 복제하려는 React 요소입니다.
- props: 복제된 요소에 추가할 또는 변경할 props입니다.
- children: 자식 요소를 덧붙일 수 있습니다. (선택적)

여기서 아래 코드는 Dropdown에서 자식컴포넌트들에게 isOpen 과 액션함수들을 넘겨준다. 

그렇지만 손자 컴포넌트에서는 넘겨 받을 수 없어서 각자 isOpen을 console.log 해보면 header에서는 false가 뜨고, content에서는 undefined가 뜸

그래서 header에서 부모 컴포넌트로 받은 것들을 다시 넘겨주는 코드를 짰음

    import React, {useState} from 'react'

    const Dropdown = ({children}) => {
      const [isOpen, setIsOpen] = useState(false);
      const handleMouseOver = () => {
        setIsOpen(true)
      };
      const handleMouseLeave = () => setIsOpen(false);
      return (
        <div>
          {React.Children.map(children, (child)=>
            React.cloneElement(child, {isOpen, handleMouseLeave, handleMouseOver})
          )}
        </div>
      )
    }

    Dropdown.header = ({children, isOpen, handleMouseLeave, handleMouseOver}) => {
      return (
        <ul 
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          className='relative'>
            {React.Children.map(children, (child)=>
              React.cloneElement(child, {isOpen})
            )}
        </ul>
      )
    }

    Dropdown.item = ({children, isOpen}) => {
      
      return (
        <ul 
          className={
            ` transition absolute left-[0.8rem] z-10 
              ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          {children}
        </ul>
      )
    }


    export default Dropdown