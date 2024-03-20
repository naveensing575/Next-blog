import React from 'react'

function page({params}: {params: {productID: string}}) {
  return (
    <div>
      Welcome to product {params.productID}
    </div>
  )
}

export default page