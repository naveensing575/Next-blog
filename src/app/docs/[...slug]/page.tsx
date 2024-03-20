import React from 'react'

export default function slug({params}: {params: {slug: string[]}}) {
  if(params.slug.length===2) {
    return <h1>Welcome to docs for {params.slug[0]} and {params.slug[1]}</h1>
  } else if(params.slug[0] === 'review') {
    return <h1>Welcome to docs for {params.slug[0]}</h1>
  }
  else
  {
    return <h1>Welcome to docs</h1>
  }
}
