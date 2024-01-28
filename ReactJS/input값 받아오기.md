## 리액트에서 input 값 받아오는 방법

### JS에서의 원리

input태그를 가져오고 그의 value

### 리액트에서는 useState 사용

    <input type="text" value={email} onChange={(e)=>{seㅉtEmail(e.target.value)}} placeholder='Email'/>
    
    const [email, setEmail] = useState('');

1. onChange를 이용한다.
2. event.target.value를 useState의 state로 저장.
3. 저장된 state값이 다시 input태그의 value로 저장.

