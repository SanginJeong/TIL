### Link

## 구조

a태그와 비슷하게 이동

    import {Link} from 'react-router-dom'

    <Link to = '/주소'>주소로 go</Link>

### navigate

Link가 아닌 버튼을 클릭해서 함수를 실행할 때

## 구조

useNavigate() 의 리턴값은 함수 -> navigate는 함수

    import { useNavigate } from 'react-router-dom';

    const navigate = useNavigate()

    const goTolink = () => {
      navigate('/주소');
    }

