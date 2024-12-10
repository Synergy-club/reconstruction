import React from 'react'
import { Helmet } from 'react-helmet'

const Container = ({ arrayContent }) => {
  const { body, donationBoxes } = arrayContent
  console.log(donationBoxes)

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
        {donationBoxes &&
          Object.keys(donationBoxes).length > 0 &&
          Object.values(donationBoxes).map((element, index) => (
            <div key={index}>
            <div>
              <h2>{element.title}</h2>
              <article>
                <p>{element.description}</p>
                <p>{element.additional_}</p>
              </article>
            </div>
            <div>
              <button>{element.button_text}</button>
            </div>
            </div>
          ))}
      </div>
    </>
  )
}

export default Container
