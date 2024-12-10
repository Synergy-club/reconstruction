import React from 'react'
import { Helmet } from 'react-helmet'

const Container = ({ arrayContent }) => {
  console.log(arrayContent)
  const { body, donation } = arrayContent

  return (
    <>
      {body?.helmet && (
        <Helmet>
          <title>{body.helmet.title}</title>
          <meta name={body.helmet.name} content={body.helmet.content} />
        </Helmet>
      )}
      <div>
        <div>
          <h1>{body.title}</h1>
        </div>
        <article>
          <p>{body.description}</p>
          <p>{body.description_}</p>
        </article>
      </div>
      {/**CARD */}
      <div>
        <div></div>
      </div>
    </>
  )
}

export default Container