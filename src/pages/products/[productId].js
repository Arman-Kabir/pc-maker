import { useRouter } from 'next/router'
import React from 'react'

const ProductDetailPage = () => {
    const router = useRouter();
  return (
    <h1>ProductDetailPage: {router.query.productId} </h1>
  )
};

export default ProductDetailPage