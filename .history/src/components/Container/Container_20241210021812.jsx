import React from 'react'
import { Helmet } from 'react-helmet'

const Container = ({ arrayContent }) => {
  console.log(arrayContent)
  const { body, donation } = arrayContent

  return (
    <div>
      {body?.helmet && (
        <Helmet>
        <title>{body.helmet.title || 'Default Title'}</title>
          <meta name={body.helmet.name} content={body.helmet.content} />
        </Helmet>
      )}
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
