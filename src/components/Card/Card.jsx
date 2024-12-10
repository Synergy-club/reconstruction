import React from 'react'
import './Card.css'

const Card = ({ array }) => {
  return (
    <div className='card__container'>
      {array &&
        Object.keys(array).length > 0 &&
        Object.values(array).map((element, index) => (
          <div key={index} className='card__item'>
            <div className='card__content-img'>
              <img src={element.image} alt={element.title} />
            </div>
            <div className='card__content'>
              <div>
                <h2>{element.title}</h2>
                <article>
                  <p>{element.description}</p>
                  <p>{element.description_}</p>
                </article>
              </div>
            </div>
            <div className='card__content'>
              <button className='button'>
                <a
                  href={element.link}
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  {element.button_text}
                </a>
              </button>
              {element.span && <span>*{element.span}</span>}
            </div>
          </div>
        ))}
    </div>
  )
}

export default Card
