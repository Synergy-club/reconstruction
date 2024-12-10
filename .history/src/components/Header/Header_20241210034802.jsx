import './Header.css'
import Nav from '../Nav/Nav'

const Header = () => {
  return (
    <div className='header__container'>
      <div className='header__hero'><img src='https://album.mediaset.es/eimg/2024/11/07/efectos-de-la-dana-en-valencia-tras-mas-de-una-semana_7eae.jpg?w=1200' alt='dana valencia' /></div>
      <div className='header__nav'>
        <Nav />
      </div>
    </div>
  )
}

export default Header
