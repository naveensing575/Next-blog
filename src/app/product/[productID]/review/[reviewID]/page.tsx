import React from 'react'

function ReviewDetails({params}: {params: {productID: string, reviewID: string}}) {
  return (
    <div>
      Welcome to review {params.reviewID} product {params.productID}
    </div>
  )
}

export default ReviewDetails