import { Helmet, HelmetProvider } from 'react-helmet-async'
import Card from '../Card/Card'
import './Container.css'

const Container = ({ arrayContent }) => {  
  const { body, donationBoxes } = arrayContent
  return (
    <>
      <HelmetProvider>
        {body?.helmet && (
          <Helmet>
            <title>{body.helmet.title}</title>
            <meta name={body.helmet.description.name} content={body.helmet.description.content} />
            <meta name={body.helmet.keywords.name} content={body.helmet.keywords.content} />
          </Helmet>
        )}
        <div className='container__view fadeIn'>
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
