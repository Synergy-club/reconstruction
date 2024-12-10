import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Card from '../Card/Card'

const Container = ({ arrayContent }) => {
  const { body, donationBoxes } = arrayContent
  return (
    <>
      <HelmetProvider>
        {body?.helmet && (
          <Helmet>
            <title>{body.helmet.title}</title>
            <meta name={body.helmet.name} content={body.helmet.content} />
          </Helmet>
        )}
        <div className='container__view'>
          <div>
            <h1>{body.title}</h1>
          </div>
          <article>
            <p>{body.description}</p>
            <p>{body.description_}</p>
          </article>
        </div>
        <Card array={donationBoxes} />
      </HelmetProvider>
    </>
  )
}

export default Container
