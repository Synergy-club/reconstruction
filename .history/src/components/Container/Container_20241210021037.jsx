import React from 'react'

const Container = ({arrayContent}) => {
  console.log(arrayContent);
  const {body, donation} = arrayContent
  
  return (
    <div>
    <div>
      <h1>{body.title}</h1>
    </div>
    <article>
      <p>{body.description}</p>
      <p>{body.description_}</p>
    </article>

    </div>
  )
}

export default Container