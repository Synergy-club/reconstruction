import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <nav className='nav__container'>
      <button className='nav__content-link'>
        <Link to='/' />
        Empresa y Voluntariado
      </button>
      <button className='nav__content-link'>
        <Link to='familias' />
        Familias
      </button>
    </nav>
  )
}

export default Header
