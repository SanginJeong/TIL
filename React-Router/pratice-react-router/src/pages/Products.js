import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Products = () => {
  const [query, setQuery] = useSearchParams();
  console.log('query:',query.get('q'));
  return (
    <div>전체 상품을 보여주는 페이지입니다.</div>
  )
}

export default Products