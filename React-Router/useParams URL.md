### id를 읽는방법 useParams:URL

useParams 는 객체를 반환한다.

### 사용법

    import { useParams } from 'react-router-dom'

### 백문이 불여일견 예시

app.js에서 파라미터 id를 정해줬음.


    <Route path='/products/:id' element={<ProductsDetail/>}></Route>

    import { useParams } from 'react-router-dom'

    const ProductsDetail = () => {
      const params = useParams();
      console.log('params:', params);
      return (
        <div>하나의 상품정보를 보여주는 페이지 입니다.</div>
      )
    }

    export default ProductsDetail

ProductsDetail.js 에서 useParams를 불러온 후, 출력해보면 객체를 반환한다. Route에서 파라미터로 적어준 id가 객체로 반환됨

    {id: '100'}

100이 나온 이유는 내가 임의로 products/ 뒤에 100을 넣어서 이동했기 때문

### 파라미터를 여러개 주면 여러개의 객체

    <Route path='/products/:id/:num' element={<ProductsDetail/>}></Route>

주소창에 

    products/하하/100 

를 입력하면

    {id: '하하', num: '100'}


### 객체니까 props 처럼 구조분해로 선언 가능

    const ProductsDetail = () => {
      const {id, num} = useParams();
      console.log(id,num);
      return (
        <div>하나의 상품정보를 보여주는 페이지 입니다.</div>
      )
    }