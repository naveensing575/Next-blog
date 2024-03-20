import React from 'react'

function ProductDetails({params}: {params: {productID: string}}) {
  return (
    <div>
      Welcome to product {params.productID}
    </div>
  )
}

export default ProductDetails