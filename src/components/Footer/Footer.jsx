import './Footer.css'
import { footer } from './utils/footer'

const Footer = () => {
  return (
    <footer className='footer__container'>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#c9e6f0'
          fillOpacity='1'
          d='M0,192L120,202.7C240,213,480,235,720,208C960,181,1200,107,1320,69.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z'
        ></path>
      </svg>
      <div className='footer__items'>
        <div className='footer_content'>
          {footer?.map((element, index) => (
            <div key={index}>
              <h4>{element.title}</h4>
              <ul>
                {element.items.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className='footer__link'
                      target='_blank'
                    >
                      {item.icon && (
                        <img
                          src={item.icon}
                          alt={item.name}
                          className='footer__icon'
                        />
                      )}
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
