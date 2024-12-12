import './Footer.css'
import { footer } from './utils/footer'

const Footer = () => {
  return (
    <footer className='footer__container'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="rgb(208, 201, 190)" fillOpacity="1" d="M0,128L120,138.7C240,149,480,171,720,186.7C960,203,1200,213,1320,218.7L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
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
