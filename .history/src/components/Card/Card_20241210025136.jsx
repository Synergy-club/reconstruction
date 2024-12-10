import React from 'react'
import './Card.css' // Asegúrate de importar los estilos

const Card = ({ array }) => {
  return (
    <div className='card-container'>
      {array &&
        Object.keys(array).length > 0 &&
        Object.values(array).map((element, index) => (
          <div key={index} className='card-item'>
            <div>
              <img src={element.image} alt={element.title} />
            </div>
            <div className='card-content'>
              <h2>{element.title}</h2>
              <article>
                <p>{element.description}</p>
                <p>{element.description_}</p>
              </article>
            </div>
            <div>
              <a href={element.link}>{element.button_text}</a>
              <span>{element.span}</span>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Card
