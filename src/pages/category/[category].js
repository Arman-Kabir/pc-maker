import { useRouter } from 'next/router'
import React from 'react'

const Category = () => {
  const router = useRouter();
  return (
    <div>Category: {router.query.category}</div>
  )
}

export default Category