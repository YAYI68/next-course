import Link from 'next/link'
import React from 'react'

function Product() {
    const products = [
        {id: 1, name: "Product 1"},
        {id: 2, name: "Product 2"}
    ]
  return (
    <div>
        <h2>Product</h2>
        <ul>
            {products.map((product,index) =>(
                <li key={index}>
                    <Link href={`/product/${product.id}`}>
                        {product.name}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Product