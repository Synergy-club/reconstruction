import React from 'react'

const Card = ({donationBoxes}) => {
  return (
    <div>
          {donationBoxes &&
            Object.keys(donationBoxes).length > 0 &&
            Object.values(donationBoxes).map((element, index) => (
              <div key={index}>
                <div>
                  <img src={element.image} alt={element.title} />
                </div>
                <div>
                  <h2>{element.title}</h2>
                  <article>
                    <p>{element.description}</p>
                    <p>{element.description_}</p>
                  </article>
                </div>
                <div>
                  <button>
                    <a href={element.link}>{element.button_text}</a>
                  </button>
                  <span>{element.span}</span>
                </div>
              </div>
            ))}
        </div>
  )
}

export default Card