import './Header.css'
import Nav from '../Nav/Nav'
import header from '/images/hero.webp'

const Header = () => {
  return (
    <div className='header__container'>
      <div className='header__hero'>
        <div className='header__background-black'></div>
        <h1 className='header__text-hero'>RECONSTRUCCIÓN</h1>
        <img src={header} alt='dana valencia' />
      </div>
      <div className='header__nav'>
        <Nav />
      </div>
    </div>
  )
}

export default Header
