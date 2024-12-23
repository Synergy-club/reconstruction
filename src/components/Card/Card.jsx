import React from 'react'
import './Card.css'

const Card = ({ array }) => {
  return (
    <div className='card__container fadeIn'>
      {array &&
        Object.keys(array).length > 0 &&
        Object.values(array).map((element, index) => (
          <div key={index} className='card__item'>
            <div className='card__overflow-hidden'>
              <div className='card__content-img'>
                <img src={element.image} alt={element.title} />
              </div>
              <div className='card__content show'>
                <div>
                  <h2>{element.title}</h2>
                  <article>
                    <p>{element.description}</p>
                    <p>{element.description_}</p>
                  </article>
                </div>
              </div>
            </div>
            <div className='card__content'>
              {element.span && <span className='show'>{element.span}</span>}
              <button className='button card__content-links show'>
                <a
                  href={element.link}
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  {element.button_text}
                </a>
              </button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Card
