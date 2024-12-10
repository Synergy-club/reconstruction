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
        {donation &&
          Object.keys(donation).length > 0 &&
          Object.values(donation).map((element, index) => (
            <div key={index}>
              <h2>{element.title}</h2>
            </div>
          ))}
      </div>
    </>
  )
}

export default Container
