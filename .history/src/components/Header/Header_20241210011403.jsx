import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <nav className='nav__container'>
      <div>
        <Link to='/' />
        Empresa y Voluntariado
      </div>
      <div>
        <Link to='familias' />
        Familias
      </div>
    </nav>
  )
}

export default Header
