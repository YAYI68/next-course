import React from 'react'
import { useRouter } from "next/router"

function ProductDetail() {
    const router = useRouter();
    const path = router.pathname
    const query =  router.query
  return (
    <div>
        <h2>Product Detail path {path}</h2>
        <h3>Product Detail detail {query.productId}</h3>
    </div>
  )
}

export default ProductDetail