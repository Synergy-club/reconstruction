import './Header.css'
import Nav from '../Nav/Nav'

const Header = () => {
  return (
    <div className='header__container'>
    <div className='header__hero'></div>
    <div className='header__nav'>
      <Nav />

    </div>
    </div>
  )
}

export default Header