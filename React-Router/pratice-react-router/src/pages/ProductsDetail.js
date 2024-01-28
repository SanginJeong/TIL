import React from 'react'
import { useParams } from 'react-router-dom'

const ProductsDetail = () => {
  const {id, num} = useParams();
  console.log(id,num);
  return (
    <div>하나의 상품정보를 보여주는 페이지 입니다.</div>
  )
}

export default ProductsDetail