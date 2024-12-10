import React from 'react'

const Container = ({arrayContent}) => {
  console.log(arrayContent);
  const {body, donation} = arrayContent
  
  return (
    <div>
      <h1>{body.title}</h1>

    </div>
  )
}

export default Container