import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <nav className='nav__container'>
      <div className='nav__content-link'>
        <Link to='/' />
        Empresa y Voluntariado
      </div>
      <div className='nav__content-link'>
        <Link to='familias' />
        Familias
      </div>
    </nav>
  )
}

export default Header
