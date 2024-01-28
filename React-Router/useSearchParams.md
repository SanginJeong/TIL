## 쿼리 읽어오는 방법

### 쿼리와 파라미터의 차이

쿼리는 ? 이후에 단지 식별해주는 장치 일 뿐 링크에 영향은 안미친다.

### useSearchParams 구조

    import { useSearchParams } from 'react-router-dom'

    const Products = () => {
      const [query, setQuery] = useSearchParams();
      console.log('query:',query.get('q'));
      return (
        <div>전체 상품을 보여주는 페이지입니다.</div>
      )
    }

query.get() 을 통해서 q라는 쿼리의 값을 불러 올 것이다.

Home.js에서 Product.js로 이동할 때 q=shirts를 넣어보자.

    const Home = () => {
      const navigate = useNavigate();
      
      const goProductPage = () => {
        navigate('/products?q=shirts');
      }
      return (
        <>
          <h1>홈입니다.</h1>
          <Link to= '/about'>about으로 가자</Link>
          <button onClick={ goProductPage }>go to product page</button>
        </>
      )
    }

Product.js 에서 console에 의하여 나온 결과값은

    query: shirts


# 정리

- useParams : 파라미터 값을 객체로 가져와서 읽을 수 있음 + 구조분해로 선언
- useSearchParams : 쿼리 값을 useState와 같은 방식으로 가져옴.

