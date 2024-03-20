import React from 'react'

function ReviewDetails({params}: {params: {productID: string, reviewID: number}}) {
  if(params.reviewID > 1000){
    return (
      <h3>
        Sorry, review not found
      </h3>
    )
  }
  else
  return (
    <div>
      Welcome to review {params.reviewID} product {params.productID}
    </div>
  )
}

export default ReviewDetails