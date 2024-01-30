## DOM을 직접 조작하지 말자.

아래 코드와 같이 DOM 을 직접 조작하는 것은 React 원칙에 어긋나는 것이다.

아직 react가 익숙하지 않아서 가끔 자바스크립트처럼 하곤한다.

    const submitWord = (event) => {
        event.preventDefault();
        if(renderWord.split('').pop() !== word.split('')[0]){
          document.querySelector('.result').textContent = `${list[currentPlayer]}님이 패배하셨습니다.`;
          return
        }
        
        setRenderWord(word);
        setWord('');
        setCurrentPlayer((currentPlayer+1)%list.length);
    }

    <h2 className='result'>{list[currentPlayer]}님 차례입니다.</h2>

### 내가 겪은 문제

내가 하고 싶었던 것은 결과가 나오면 문구를 바꾸고 싶었다.

그런데 이렇게 하고나니 다시 바꿀 때는 문제가 있다.

(현재 상황에서는 문제가 없지만 다른 코드를 짤 때 문제)

게다가 위에서 말한 React의 원칙에 어긋난다.

### 해결

그냥 욕심부리지 않고 useState 변수를 한 개 더 만들어준다.

그러고 조건부 렌더링으로 코드를 수정했다.

    const submitWord = (event) => {
        event.preventDefault();
        if(renderWord.split('').pop() !== word.split('')[0]){
          setResultMessage(`${list[currentPlayer]}님이 패배하셨습니다.`)
          return
        }
        
        setRenderWord(word);
        setWord('');
        setCurrentPlayer((currentPlayer+1)%list.length);
    }

    <h2>{resultMessage || `${list[currentPlayer]}님 차례입니다.`}</h2>